import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import routes from './config/routes';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import GiveBooks from './pages/GiveBooks';
import Profile from './pages/Profile';
import GivenBooks from './pages/GivenBooks';
import Logout from './pages/auth/Logout';
import Register from './pages/auth/Register';

function App() {
  const user= JSON.parse(localStorage.getItem("currentuser"));
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<Login/>}/>
        <Route path={routes.REGISTER} element={<Register/>}/>
        {user!==null && <>
          <Route path={routes.DASHBOARD} element={<Dashboard/>}/>
          <Route path={routes.GIVEBOOK} element={<GiveBooks/>}/>
          <Route path={routes.GIVENBOOKS} element={<GivenBooks/>}/>
          <Route path={routes.PROFILE} element={<Profile/>}/>
          <Route path={routes.LOGOUT} element={<Logout/>}/>
        </>}
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
