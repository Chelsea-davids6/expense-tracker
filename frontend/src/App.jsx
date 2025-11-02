import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Welcome to Expense Tracker</h1>
      <button className="b1" onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signup')}>Sign Up</button>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
