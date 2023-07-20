import React from 'react'
import { useNavigate } from 'react-router-dom'
import routes from '../config/routes';

function FirstComponent() {
 const navigate= useNavigate();

 const handleLogin= ()=>{
    navigate(routes.DASHBOARD)
 }
  return (
    <div>
        <div>Login</div>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default FirstComponent