import { LucideMenu } from "lucide-react"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { useState } from "react"


export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false); 

    return <div className="mx-auto border-gray-900 border-b-1 flex items-center justify-between p-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        <div className="text-2xl font-bold" >RoadGen</div>


        <LucideMenu className="md:hidden w-8 h-8" onClick={()=>setShowMenu(!showMenu)}/>
               {showMenu && (
                <div className="absolute top-16 right-4 bg-[hsl(var(--background))] p-4 rounded-xl shadow-md md:hidden flex flex-col justify-center items-center gap-4 z-50">
                    <div >How It Works?</div>
                    <div >Benefits</div>
                    <div >Sign Up</div>
                    <div >Login</div>
            <ThemeSwitcher />

                </div>
            )}


        <div className=" hidden md:flex  md:flex-row  justify-center items-center gap-8">
            <div>How It Works?</div>
            <div>Benefits</div>
            <div className="  flex  justify-center items-center gap-4">
                <div className="card font-bold">Sign Up</div>
                <p className="card !bg-[hsl(var(--background))] rounded-xl border-2 font-bold">Login</p>

            </div>

            <ThemeSwitcher />



        </div>
    </div>

}   