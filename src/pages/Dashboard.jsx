import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { getAllRoadmap } from "../apis/dashboardApi";
import ProgressBar from "../Components/ProgressBar";
import { Link, useNavigate } from "react-router-dom";
import { LucidePlayCircle } from "lucide-react";
import { Loader } from "../Components/Loader";
import { toast } from "react-hot-toast";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllRoadmap().then((res) => {

      setData(res);
    }).catch((err) => {
      console.error(err);
      toast.error("Failed to load roadmaps.");
    });
  }, []);



  return (
    <div
      className="
        mx-auto
        w-full md:w-3/4
        items-center justify-between 
        p-4 
        bg-[hsl(var(--background))] 
        text-[hsl(var(--foreground))]
      "
    >
      <Navbar />
      {/* <h1 className="text-2xl p-4">Dashboard</h1> */}

      <div className="flex justify-between items-center p-4">

        <h1 className="text-2xl ">My Roadmaps</h1>
        <div>
          <button
            onClick={() => navigate("/generate")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Generate New Roadmap
          </button>
        </div>


      </div>

      {(!data) ? <div className="flex h-[50vh] w-full justify-center items-center"><Loader /></div> :
        (data.roadmaps && data.roadmaps.length === 0) ? (
          <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
            <h2 className="text-xl text-gray-500">No roadmaps found. Create one to get started!</h2>
             <button
            onClick={() => navigate("/generate")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Create First Roadmap
          </button>
          </div>
        ) :
        <div>
          {data.roadmaps.map((item, index) => (

            <Link key={index}
              to={`/roadmap/${item.id}`}
              state={{ item }}
            >
              <div
                style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}
              >
                <div className="flex justify-between items-center ">

                  <div>
                    <h3>{item.roadmapTitle.toUpperCase()}</h3>

                    <p>
                      Progress: {item.substepsCompleted} / {item.totalSubsteps}
                    </p>

                  </div>
                  <div>
                    <LucidePlayCircle />
                  </div>

                </div>
                <ProgressBar totalVal={item.totalSubsteps} currentVal={item.substepsCompleted} isCompleted={item.substepsCompleted / item.totalSubsteps == 1}></ProgressBar>
              </div>
            </Link>
          ))}
        </div>}
    </div>
  );
};
