import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import CarPage from './CarPage'
import Login from './components/Login'
import Register from './components/Register'
import DiagnosticsPage from './DiagnosticsPage'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="car" element={<CarPage />} />
          <Route path="car/diagnostics/:variable" element={<DiagnosticsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
