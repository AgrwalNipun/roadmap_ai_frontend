import { ThemeSwitcher } from "./ThemeSwitcher"


export const Navbar = ()=>{

    return <div 
    className="
    mx-auto
    w-3/4
    border-gray-900
    border-b-1
    flex items-center justify-between p-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >

        <div className = "text-2xl font-bold" >Logo Here</div>
       <div className="  flex  justify-center items-center gap-4">

    <div className="card font-bold">Sign Up</div>
<p className="card !bg-[hsl(var(--background))] rounded-xl border-2 font-bold">Login</p>


                <ThemeSwitcher/>

    </div> 
    </div>

}