import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import routes from '../../config/routes';

function Logout() {
    const navigate=useNavigate();
    useEffect(()=>{
        localStorage.clear();
        navigate(routes.LOGIN);
    },[]);
  return (
    <div>Logging Out...</div>
  )
}

export default Logout