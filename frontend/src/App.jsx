import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import FirstComponent from './component/FirstComponent';
import routes from './config/routes';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<FirstComponent />}/>
        <Route path={routes.DASHBOARD} element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
