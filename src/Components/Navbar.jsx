import { ThemeSwitcher } from "./ThemeSwitcher"


export const Navbar = ()=>{

    return <div 
    className="
    mx-auto
    
    border-gray-900
    border-b-1
    flex items-center justify-between p-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >

        <div className = "text-2xl font-bold" >Logo Here</div>



       <div className="flex flex-col md:flex-row  justify-center items-center gap-8">
            <div>How It Works?</div>
            <div>Benefits</div>
            <div className="  flex  justify-center items-center gap-4">
                <div className="card font-bold">Sign Up</div>
            <p className="card !bg-[hsl(var(--background))] rounded-xl border-2 font-bold">Login</p>

            </div>

                <ThemeSwitcher/>
              


    </div> 
    </div>

}