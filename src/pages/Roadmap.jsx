import { useLocation, useParams } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { getRoadmapById, updateSubstepStatus, downloadRoadmap } from "../apis/roadmapApis";
import { useEffect, useState, useRef } from "react";
import { LucideChevronDown, LucideChevronUp, LucideFileText } from "lucide-react";
import ProgressBar from "../Components/ProgressBar";
import { Loader } from "../Components/Loader";
import { toast } from "react-hot-toast";

export const Roadmap = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const [item, setItem] = useState(state?.item);
  const [substepsCount, setSubstepsCount] = useState(0);
  const [substepsCompleted, setSubstepsCompleted] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  const contentRefs = useRef({});
  const [openSteps, setOpenSteps] = useState([]);

  const toggleStep = (id) => {
    setOpenSteps(prev =>
      prev.includes(id)
        ? prev.filter(sid => sid !== id)
        : [...prev, id]
    );
  };

  const isStepCompleted = (step) => {
    return step.substeps?.every(s => s.completed);
  };

  const getCompletedCount = (step) => {
    return step.substeps?.filter(s => s.completed).length || 0;
  };



  // Load roadmap
  // Load roadmap
  useEffect(() => {
    setLoading(true);
    getRoadmapById(id).then((res) => {
      let total = 0;
      let completed = 0;

      res?.steps?.forEach(step => {
        total += step?.substeps?.length || 0;
        completed += step?.substeps?.filter(s => s?.completed)?.length || 0;
      });

      setSubstepsCount(total);
      setSubstepsCompleted(completed);
      setItem(res);
      setLoading(false);
    }).catch((err) => {
      console.error(err);
      toast.error("Failed to load roadmap details.");
      setLoading(false);
    });
  }, [id]);

  // Handle toggle
  const handleSubstepToggle = async (stepId, substepId) => {
    const updatedItem = { ...item };

    updatedItem.steps = updatedItem.steps.map(step => {
      if (step.id !== stepId) return step;

      return {
        ...step,
        substeps: step.substeps.map(sub =>
          sub.id === substepId ? { ...sub, completed: !sub.completed } : sub
        )
      };
    });

    setItem(updatedItem);

    // Recalculate progress
    let completed = 0;
    updatedItem.steps.forEach(step => {
      completed += step.substeps.filter(s => s.completed).length;
    });
    setSubstepsCompleted(completed);

    // API call
    const sub = updatedItem.steps
      .find(s => s.id === stepId)
      .substeps.find(s => s.id === substepId);

    await updateSubstepStatus(substepId, sub.completed);
  };

  return (
    <div className="w-3/4 min-h-screen  mx-auto pb-10">
      <Navbar />
      <div className="flex flex-col items-center justify-between md:flex-row gap-4">

        <h1 className="text-2xl font-bold my-5">
          {item?.title?.toUpperCase()}
        </h1>

        <button
          className="card flex gap-2 font-semibold items-center"
          disabled={isDownloading}
          onClick={async () => {
            console.log("presses downlaod");
            setIsDownloading(true);
            try {
              await downloadRoadmap(item.id);
              toast.success("Download started!");
            } catch (error) {
              console.error("Download failed", error);
              toast.error("Failed to download PDF.");
            } finally {
              setIsDownloading(false);
            }
          }}
        >
          {isDownloading ? <Loader size={18} /> : <>Download PDF<LucideFileText/></>}
        </button>

      </div>


      {/* STATS */}
      <div className="flex-col md:flex-row flex justify-between items-center gap-3">

        <div className="w-full md:w-1/3 flex flex-col border px-5 py-2 rounded-lg">
          <div>Total Tasks</div>
          <div className="text-xl font-bold">{substepsCount}</div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col border px-5 py-2 rounded-lg">
          <div>Tasks Completed</div>
          <div className="text-xl font-bold">{substepsCompleted}</div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col border px-5 py-2 rounded-lg">
          <div>Progress</div>
          <div className="text-xl font-bold flex items-center gap-2">
            {substepsCount !== 0 ? (substepsCompleted * 100 / substepsCount).toFixed(0) : 0}%
            <ProgressBar
              totalVal={substepsCount}
              currentVal={substepsCompleted}
              isCompleted={substepsCount !== 0 && substepsCompleted === substepsCount}
            />
          </div>
        </div>

      </div>

      {/* STEPS LIST */}
      <div>
        {item?.steps?.map((step) => (
          <div className="border-2 rounded-xl px-4 py-2 my-3" key={step.id}>

            {/* STEP HEADER */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(step.id)}
            >
              <span className={isStepCompleted(step) ? "line-through text-gray-400" : ""}>
                {step.aim}
              </span>

              <div className="flex items-center gap-3">
                {/* Progress: X / Y */}


                {/* <ProgressBar
                  totalVal={step.substeps?.length}
                  currentVal={getCompletedCount(step)}
                  isCompleted={getCompletedCount(step) === step.substeps?.length}
                /> */}
                <span className="text-sm text-gray-600">
                  {getCompletedCount(step)} / {step.substeps?.length}
                </span>

                {/* Chevron */}
                <span>
                  {openSteps.includes(step.id) ? <LucideChevronDown /> : <LucideChevronUp />}
                </span>
              </div>
            </div>


            {/* SUBSTEPS */}
            <div
              ref={(el) => (contentRefs.current[step.id] = el)}
              className="transition-all duration-300 overflow-hidden"
              style={{
                maxHeight: openSteps.includes(step.id)
                  ? contentRefs.current[step.id]?.scrollHeight + "px"
                  : "0px",
              }}
            >
              <div className="flex flex-col gap-2 border-2 rounded-lg px-4 py-2 my-1">

                {step.substeps?.map((substep) => (
                  <div
                    key={substep.id}
                    className="flex items-center gap-3"
                  >
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      checked={substep.completed}
                      onChange={() => handleSubstepToggle(step.id, substep.id)}
                      className="cursor-pointer"
                    />

                    {/* Text */}
                    <span className={substep.completed ? "line-through text-gray-400" : ""}>
                      {substep.aim}
                    </span>
                  </div>
                ))}

              </div>
            </div>

          </div>
        ))}
      </div>

      {loading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Loader size={48} className="text-white" />
        </div>
      )}

    </div>
  );
};
