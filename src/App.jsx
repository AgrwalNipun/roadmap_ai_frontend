import { useContext, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Providers/ThemeProvider'
import { ThemeSwitcher } from './Components/ThemeSwitcher'
import { Navbar } from './Components/Navbar'
import { Home } from './pages/Home'
import { UserContext, UserProvider } from './Providers/UserProvider'
import { Dashboard } from './pages/Dashboard'

function App() {


  const {user} = useContext(UserContext);

  return (
        <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
          
        
          {user?<Dashboard/>:<Home />} 

        </div>  

    
  )
}

export default App

