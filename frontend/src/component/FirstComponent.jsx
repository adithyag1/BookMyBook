import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import routes from '../config/routes';

function FirstComponent() {
 const navigate= useNavigate();
 const [newVal, setNewVal]= useState([1,2]);
 const [neww ,setNeww] =useState(0);

 const handleOnChange = (e)=>{
  const intnum= parseInt(e.target.value);
  setNeww(intnum);

 }

 const handleSubmit=()=>{
      const prevArray= newVal;
      setNewVal([...prevArray, neww]);
      console.log(newVal)
 }
  return (
    <div>
        <div>Login</div>
        <input type='number' onChange={(e)=>{handleOnChange(e)}}/>
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
export default FirstComponent;