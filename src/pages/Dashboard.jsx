import { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { getAllRoadmap } from "../apis/dashboardApi";
import ProgressBar from "../Components/ProgressBar";
import { Link } from "react-router-dom";
import { LucidePlayCircle } from "lucide-react";

export const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getAllRoadmap().then((res) => {

      setData(res);
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
      <h1 className="text-2xl p-4">Dashboard</h1>

      {(!data) ? <div>Loading...</div> :
        <div>
          {data.roadmaps.map((item, index) => (

            <Link key={index}
              to={`/roadmap/${item.roadmap.id}`}
              state={{ item }}
            >
              <div
                style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}
              >
                <div className="flex justify-between items-center ">

                  <div>
                    <h3>{item.roadmap.title.toUpperCase()}</h3>

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
