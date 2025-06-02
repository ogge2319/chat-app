import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from './Landing/Landing'
import Register from './Register/Register'
import Login from './Login/Login'
import Chat from './Chat/Chat'
import SideNav from './SideNav/SideNav'
import './App.css'

function App() {


  return (
    <Router>
      <Routes>
       <Route path="/" element={<Landing />} /> 
        <Route path ="/register" element={<Register />} />
        <Route path ="/login" element ={<Login />}/>
        <Route path ="/chat" element ={<Chat />}/>
      </Routes>
    </Router>
  )
}

export default App
