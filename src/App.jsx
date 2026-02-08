import { useContext } from 'react'
import './App.css'
import { Toaster } from 'react-hot-toast';
import { UserContext } from './Providers/UserProvider'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Loader } from "./Components/Loader";

import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Roadmap } from './pages/Roadmap'
import { Generate } from './pages/Generate'

function App() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[hsl(var(--background))]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <Toaster position="bottom-right" />
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

          {/* Generate Page (Protected) */}
          <Route
            path="/generate"
            element={
              user ? <Generate /> : <Navigate to="/" replace />
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
