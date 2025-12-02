import { useLocation, useParams } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { getRoadmapById } from "../apis/roadmapApis";
import { useEffect , useState } from "react";



export const Roadmap = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [item,setItem] =useState(state?.item)
  // console.log(item+"????????????????????")

    useEffect(() => {
      getRoadmapById(id).then((res) => {
        // console.log("Dashboard Data:", res);
  
        setItem(res);
        console.log("Roadmap Data:", res);
      });
    }, [id]);
  
  


  return (
    <div className="w-3/4 h-full mx-auto ">
      <Navbar/>
      <h1>Roadmap page for: {id}</h1>

      <div>{item.id}</div>
    </div>
  );
};
