import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import routes from '../../config/routes';
import axios from 'axios';

function Register() {
    const [username,setUsername]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await axios.post('http://localhost:3001/auth/register',
        {username,name,password,email}
        );
        if(response.data.status===1||response.data.status===2){
            alert(response.data.message);
            // navigate(routes.REGISTER);
            location.reload();
        }
        else if(response.data.status===0){
            alert(response.data.message);
            navigate(routes.LOGIN);
        }
    }
  return (
    <div>
        <form>
            <input placeholder='username' required type='text' onChange={(e)=>{setUsername(e.target.value)}} />
            <input placeholder='name' required type='text' onChange={(e) => setName(e.target.value)} />
            <input placeholder='password' required type='password' onChange={(e) => setPassword(e.target.value)} />
            <input placeholder='email' required type='email' onChange={(e) => setEmail(e.target.value)} />
            <input type='submit' onClick={(e)=>handleSubmit(e)}/>
        </form>
    </div>
  )
}

export default Register