
import {Route,Routes}from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import App from "./App.jsx";
import Job from './job/Job.jsx';
import Signup from './SingUpPage/Signup'
import Login from './LoginPage/Login.jsx';
const roter = () => {
  return (
   <>
    
  <Routes>
   <Route path="/home" element={<App/>} />
   <Route path="/job/:id" element={<Job/>} />
   <Route path="/Signup" element={<Signup/>} />
   <Route path="/" element={<Login/>} />
  </Routes>

    </>
  )
}

export default roter
