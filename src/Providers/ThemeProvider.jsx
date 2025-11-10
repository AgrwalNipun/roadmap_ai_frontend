import { createContext, useEffect , useState} from "react";



export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

const[darkTheme, setDarkTheme] = useState(true);

useEffect(() => {

    localStorage.getItem("theme") === "dark" ? setDarkTheme(true) : setDarkTheme(false);



},[]);


useEffect(() => {
    if(darkTheme){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }

},[darkTheme]);


const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
}
    
    return <>
            <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
    </>;

}
