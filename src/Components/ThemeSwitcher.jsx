import { LucideMoon, LucideSun } from "lucide-react";
import { ThemeContext } from "../Providers/ThemeProvider";

import { useContext } from "react";

export const  ThemeSwitcher =()=> {


// const [theme, setTheme] = setTheme();

    const { darkTheme, toggleDarkTheme } = useContext(ThemeContext);


    return <button onClick={toggleDarkTheme}
                className="p-2 rounded-full  hover:bg-gray-200 transition">
                    {darkTheme ? <LucideSun/>:<LucideMoon/>}

            </button>


   
}