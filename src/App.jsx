import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Providers/ThemeProvider'
import { ThemeSwitcher } from './Components/ThemeSwitcher'
import { Navbar } from './Components/Navbar'
import { Home } from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
            <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
        
          <Home/>
          
          </div>
     </ThemeProvider>
  )
}

export default App

