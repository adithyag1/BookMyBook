import React from 'react'
import { Link } from 'react-router-dom';
import routes from '../config/routes';

function NavBar() {
  const user= JSON.parse(localStorage.getItem("currentuser"));
  return (
    <>
        <div><Link to={routes.DASHBOARD}>Dashboard</Link></div>
        <div><Link to={routes.GIVEBOOK}>GiveBook</Link></div>
        <div><Link to={routes.ALLBOOKS}>GetBook</Link></div>
        <div><Link to={routes.PROFILE}>Profile</Link></div>
        <div><Link to={routes.LOGOUT}>Logout</Link></div>
        {/* 
        <div>{user?.points}</div> */}
    </>
  )
}

export default NavBar