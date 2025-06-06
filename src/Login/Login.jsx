import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCSRFToken, loginUser } from '../services/authService'
import "../Login/login.css"

function Login() {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const csrf = await getCSRFToken();
      await loginUser(credentials, csrf)
      setSuccess("Inloggningen lyckades! Du skickas vidare...")
      setTimeout(() => navigate("/chat"), 1500)
    } catch (error) {
      setError(error.message || "Något gick fel vid registrering.")
    }
  }


  return (
    <div className="login-wrapper">
      <h2>Logga in</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />

        <input type="password"
          name="password"
          placeholder="Lösenord"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Logga in</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  )
}

export default Login