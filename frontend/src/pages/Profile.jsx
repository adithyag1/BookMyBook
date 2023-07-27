import React from 'react'
import { Link } from 'react-router-dom';
import routes from '../config/routes';

function Profile() {
    const user=JSON.parse(localStorage.getItem("currentuser"));
  return (
    <div>
        <div>{user.username}</div>
        <div>{user.name}</div>
        <div>🪙</div>
        <div>{user.points}</div>
        <div>Given {user.givenBooks.length} books</div>
        <div><Link to={routes.GIVENBOOKS}>GivenBooks</Link></div>
        <div>Received {user.receivedBooks.length} books</div>
    </div>
  )
}

export default Profile