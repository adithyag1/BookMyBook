import React from 'react'
import NavBar from '../components/NavBar';

function Dashboard() {
  const user= JSON.parse(localStorage.getItem("currentuser"));
  return (
    <>
      <NavBar />
      Hello {user?.name} !
    </>
  )
}

export default Dashboard