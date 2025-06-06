import React from 'react'
import "../Landing/landing.css"
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="wrapper">
      <h1>
        Välkommen till <span className="chat">Chat</span>ify!
      </h1>
      <p>Chatta snabbt och säkert online</p>
      <div className="button-group">
        <Link to="/register">
          <button className="btn-register">Registrera</button>
        </Link>
        <Link to="/login">
          <button className="btn-login">Logga in</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing
