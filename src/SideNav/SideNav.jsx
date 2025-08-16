import React from 'react'
import "../SideNav/sidenav.css"
import { useAuth } from '../utils/useAuth'

function SideNav() {

  const { user, isLoggedIn } = useAuth();

  return (
     <>
     {isLoggedIn && (
     <div>
      <p>Inloggad som: {user.usename} </p>
      <img src="{user.avatar}" alt="avatar"/>
     </div>
     )}

     </>

  )
}

export default SideNav