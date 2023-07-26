import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import routes from '../../config/routes';

function Login() {
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const navigate= useNavigate();

    const handleLogin= async()=>{
        const response= await axios.post('http://localhost:3001/auth/login', {username, password});

        if(response.data.status===0){
            alert('Wrong password!');
        }
        else if(response.data.status===1){
            localStorage.setItem("currentuser",JSON.stringify(response.data.user));
            console.log(response.data.user);
            navigate(routes.DASHBOARD);
        }
        else if(response.data.status===2){
            alert('Register!');
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <input type='text' placeholder='username' onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type='text' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login