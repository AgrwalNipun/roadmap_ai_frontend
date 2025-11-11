// import { Navbar } from ./components/Navbar.jsx";

import { LucideClock, LucideLineChart } from "lucide-react";
import { ContainerWithTitleAndIcon } from "../Components/ContainerWithTitleAndIcon";
import { Navbar } from "../Components/Navbar"
import frontBanner from '../assets/frontBanner.png';



export const Home = () => {

return <div
  className="
    mx-auto
    w-3/4
     items-center justify-between p-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">

          <Navbar/>

{/* Below is the main text and side image of gradient ??????????? */}

                <div className="mt-10 gap-10 flex justify-between items-center">
                <div className="w-[50%] flex gap-5 flex-col">
                        <h1 className="text-7xl font-[1000]">Create Your AI <br></br>Roadmap in Seconds.</h1>
                        <p  className="text-2xl">Leverage the power of AI to generate a strategic roadmap tailored for your business.</p>
                        
                </div>

                <img src={frontBanner} className=" w-7/16 mt-10 rounded-2xl shadow-gray-900 shadow-l" />

                </div>



{/* Below advantages wala component */}
                <div className="flex justify-center items-center mt-20">
                    <h2 className=" text-4xl font-bold mb-10">Smarter Plans. Faster Results.</h2>
                    </div>

                    <div className="flex gap-8">  
                        <ContainerWithTitleAndIcon title= "Save Time" icon={<LucideClock  className="w-12 h-12"/>}   children={<p className="text-center text-lg text-gray-450">Generate a roadmap in a fraction of time it takes with traditional methods.</p>}/>
                        <ContainerWithTitleAndIcon title= "Smarter Decisions" icon={<LucideLineChart  className="w-12 h-12"/>} children={<p className="text-center text-lg text-gray-450">Leverage AI insights to guide every step of your business strategy.</p>}/>
                        <ContainerWithTitleAndIcon title= "Customized For You" icon={<LucideClock  className="w-12 h-12"/>} children={<p className="text-center text-lg text-gray-450">Get a Roadmap tailored for your specific goals, industry and resources.</p>}/>
                </div>


</div>

}