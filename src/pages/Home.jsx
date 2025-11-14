// import { Navbar } from ./components/Navbar.jsx";

import { LucideClock, LucideLineChart, LucideTarget,LucideSparkles,LucideDownload } from "lucide-react";
import { ContainerWithTitleAndIcon } from "../Components/ContainerWithTitleAndIcon";
import { Navbar } from "../Components/Navbar"
import frontBanner from '../assets/frontBanner.png';
import FrontBanner from "../assets/frontBanner.svg?react";
import FrontBannerDark from "../assets/frontBannerDark.svg?react";
import { ThemeContext } from "../Providers/ThemeProvider";
import { useContext } from "react";


export const Home = () => {
    const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);

return <div
  className="
    mx-auto
    w-full md:w-3/4
        items-center justify-between p-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">

          <Navbar/>
          
     

{/* Below is the main text and side image of gradient ??????????? */}

                <div className="flex flex-col md:flex-row mt-10 gap-10  justify-between items-center">
                <div className="w-full md:w-[50%] flex gap-5 flex-col">
                        <h1 className="text-center text-7xl font-[1000]">Create Your AI <br></br>Roadmap in Seconds.</h1>
                        <p  className="text-center text-2xl">Leverage the power of AI to generate a strategic roadmap tailored for your business.</p>
                        
                </div>
                
                {darkTheme?<FrontBannerDark className="fill-[hsl(var(--foreground))] w-full md:w-7/16 mt-10 rounded-2xl shadow-gray-900 shadow-l"/>:<FrontBanner  className="fill-[hsl(var(--foreground))] w-full md:w-7/16 mt-10 rounded-2xl shadow-gray-900 shadow-l"/>}
                {/* <img src={frontBanner} className=" w-full md:w-7/16 mt-10 rounded-2xl shadow-gray-900 shadow-l" /> */}



                </div>



{/* Below advantages wala component */}
                <div className="flex justify-center items-center mt-20">
                    <h2 className="text-center text-4xl font-bold mb-10">Smarter Plans. Faster Results.</h2>
                    </div>

                    <div className="flex flex-col md:flex-row  gap-8">  
                        <ContainerWithTitleAndIcon title= "Save Time" icon={<LucideClock  className="w-12 h-12"/>}   children={<p className="text-center text-lg text-gray-450">Generate a roadmap in a fraction of time it takes with traditional methods.</p>}/>
                        <ContainerWithTitleAndIcon title= "Smarter Decisions" icon={<LucideLineChart  className="w-12 h-12"/>} children={<p className="text-center text-lg text-gray-450">Leverage AI insights to guide every step of your business strategy.</p>}/>
                        <ContainerWithTitleAndIcon title= "Customized For You" icon={<LucideClock  className="w-12 h-12"/>} children={<p className="text-center text-lg text-gray-450">Get a Roadmap tailored for your specific goals, industry and resources.</p>}/>
                </div>



{/* HOW IT WORKS ??????????????? */}                
                                     
<div className="flex justify-center items-center mt-20">
                    <h2 className="text-center text-4xl font-bold mb-10">How It Works?</h2>
                    </div>


<div className="mb-20 flex flex-col md:flex-row items-stretch  items-start justify-center md:divide-x md:divide-gray-700 gap-8 md:gap-0 w-3/4 mx-auto">

  {/* Step 1 */}
  <div className="flex flex-col items-center justify-start px-6 text-center md:w-1/3">
    <div className="bg-indigo-600 p-5 rounded-full mb-4">
      <LucideTarget className="w-8 h-8" />
    </div>
    <p className="text-lg">1. Input Your Goals</p>
  </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center justify-start px-6 text-center md:w-1/3">
    <div className="bg-indigo-600 p-5 rounded-full mb-4">
      <LucideSparkles className="w-8 h-8" />
    </div>
    <p className="text-lg">2. AI Generates Your Roadmap</p>
  </div>

  {/* Step 3 */}
  <div className="flex flex-col items-center justify-start px-6 text-center md:w-1/3">
    <div className="bg-indigo-600 p-5 rounded-full mb-4">
      <LucideDownload className="w-8 h-8" />
    </div>
    <p className="text-lg">3. Download</p>
  </div>
</div>
      </div>


                    {/* <div className="flex flex-col md:flex-row items-center justify-between divide-x divide-gray-800 w-full">  
                                <div className="p-5 flex flex-col justify-center items-center">
                                    <LucideTarget className="w-12 h-12 mb-4 text-[hsl(var(--card))]"/>
                                    <h3 className="text-2xl font-semibold mb-4 text-center">1</h3>
                                    <h3 className="text-2xl font-semibold mb-4 text-center">Input Your Goals</h3>
                                    
                                </div>
                                
                                <div className="p-5 flex flex-col justify-center items-center">
                                    <LucideTarget className="w-12 h-12 mb-4 text-[hsl(var(--card))]"/>
                                    <h3 className="text-2xl font-semibold mb-4 text-center">2</h3>

                                    <h3 className="text-2xl font-semibold mb-4 text-center">AI generates your <br></br>roadmap</h3>
                                </div>

                                <div className="p-5 flex flex-col justify-center items-center">
                                    <LucideTarget className="w-12 h-12 mb-4 text-[hsl(var(--card))]"/>
                                    <h3 className="text-2xl font-semibold mb-4 text-center">3</h3>

                                    <h3 className="text-2xl font-semibold mb-4 text-center">Download</h3>
                    </div> */}
// </div>

}