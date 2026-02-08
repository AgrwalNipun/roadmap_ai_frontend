import { LucideMenu } from "lucide-react"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { useContext, useState } from "react"
import { Modal } from "./Modal";
import { UserContext } from "../Providers/UserProvider";


export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [isLogin,setLogin] = useState(false);

    const {user, setUser} = useContext(UserContext);
    
    const handleLogout = () => {
        setUser(null);
    };


    return <div className="mx-auto border-gray-900 border-b flex items-center justify-between p-4 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        {showModal &&<Modal onClose={()=>{setShowModal(!showModal)}} isLogin={isLogin}/>}
        <div className="text-2xl font-bold" >RoadGen</div>


        <LucideMenu className="md:hidden w-8 h-8" onClick={()=>setShowMenu(!showMenu)}/>
               {showMenu && (
                <div className="absolute top-16 right-4 bg-[hsl(var(--background))] p-4 rounded-xl shadow-md md:hidden flex flex-col justify-center items-center gap-4 z-50">
                    
                    
                  { user ? (
                    <div className="flex flex-col gap-4 items-center">
                        <div>Welcome {user.fullName}</div>
                        <button onClick={handleLogout} className="text-red-500 font-semibold">Logout</button>
                    </div>
                  ) : <div className="flex-col justify-center items-center gap-4 flex">
                    <div >How It Works?</div>
                    <div >Benefits</div>
                    <div onClick={()=>{setLogin(false);setShowModal(!showModal);}}  >Sign Up</div>
                    <div onClick={()=>{setLogin(true);setShowModal(!showModal)}}>Login</div>

                </div>}
            <ThemeSwitcher />

                </div>
            )}


        <div className=" hidden md:flex  md:flex-row  justify-center items-center gap-8">
           {user? (
               <div className="flex items-center gap-4">
                   <div>Welcome {user.fullName}</div>
                   <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition">Logout</button>
               </div>
           )  :  <div className="flex jhustify-center items-center gap-4">
            
            <div>How It Works?</div>
            <div>Benefits</div>
            <div className="  flex  justify-center items-center gap-4">
                <button className="card font-bold " onClick={()=>{
                    setLogin(false);
                    setShowModal(!showModal);}}  >Sign Up</button>
                <button className="card bg-[hsl(var(--background))]! rounded-xl border-2 font-bold" onClick={()=>{
                    setLogin(true);
                    setShowModal(!showModal);}}>Login</button>

            </div>
            
            </div> }

            <ThemeSwitcher />



        </div>
    </div>

}   