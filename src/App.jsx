import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './Landing/Landing'
import Register from './Register/Register'
import Login from './Login/Login'
import Chat from './Chat/Chat'
import './index.css'
import PrivateRoute from "./utils/PrivateRoute"

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute><Chat /></PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
