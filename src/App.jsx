import { useContext } from 'react'
import './App.css'
import { UserContext } from './Providers/UserProvider'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Roadmap } from './pages/Roadmap'

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <BrowserRouter>
        <Routes>

          {/* Landing Page (Home) 
              If user is logged in → redirect to /dashboard 
          */}
          <Route
            path="/"
            element={
              user ? <Navigate to="/dashboard" replace /> : <Home />
            }
          />

          {/* Dashboard (Protected) */}
          <Route
            path="/dashboard"
            element={
              user ? <Dashboard /> : <Navigate to="/" replace />
            }
          />

          {/* Details Page (Protected) */}
          <Route
            path="/roadmap/:id"
            element={
              user ? <Roadmap /> : <Navigate to="/" replace />
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
