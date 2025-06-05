import React from 'react'
import "../Login/login.css"
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className="wrapper">
      <h1>Logga in</h1>
      <div className="button group">
        <Link to={"/chat"}>
        <button>Logga in</button>
        </Link>
      </div>
    </div>
  )
}

export default Login