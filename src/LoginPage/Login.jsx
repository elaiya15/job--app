/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import "./login.css";
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap-grid.min.css";
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import { FontAwesomeIcon } from '@fortawesome/fortawesome/fontawesome-svg-core'
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import{useNavigate} from "react-router-dom"; 
import Loder from '../loder'


export default function Login() {
  const navigate = useNavigate();
 
  const formvalue={
    email:"",
    password:"",
  };
   
  const [FormData, SetFormData] = useState(formvalue)
  


const [open, SetOpen] = useState(true)
const [load, SetLoad] = useState(!true)

const toggle=()=>(
  SetOpen(!open)
)
const handleSubmit = async(e)=>{
  e.preventDefault()
  
  SetLoad(true) 
 
   
    
    const response = await axios.post("https://job-search-web.onrender.com/register/signin",{
      ...FormData, 
    });
    
    if(response.data){
      // console.log(response.data);
      localStorage.setItem("token",response.data);
      SetLoad(!true) 
      navigate("/home");

}
}
  return (
      
    <Container fluid="md">
  
  {(load===true)?<Loder/> :
 <div className="main2">
      <div className="head">
      <h1 className="h1">Sign in</h1>
      <p className="start">To start using the app</p>
    
      <span className="id">ID: admin@gmail.com</span>

      <span className="pass">Password: welcome</span>
      
      
      <form onSubmit={handleSubmit}>
      <div className="contain">
     <div className="text"> <MailOutlineIcon/> 
     <TextField   sx={{ m:1, pb:0.5}}id="standard-basic" label="Email" type="email" variant="standard" required  value={FormData.email} onChange={(e)=>SetFormData({...FormData, email: e.target.value})} />
      </div> 
      <div className="text"> < HttpsIcon/> 
     <TextField sx={{ m:1}}id="standard" label="Password" type={(open===true)?"password":"text"} variant="standard" required value={FormData.password}   onChange={(e)=>SetFormData({...FormData, password: e.target.value})} />
     <span className="eye"> { (open === true)?<VisibilityOffIcon onClick={toggle}/> :<VisibilityIcon onClick={toggle}/> }   </span>
</div>
  
<div className="bt" >
  <Button  sx={{ m:2, pl:2}}variant="contained" disableElevation type="submit">
      Singin
    </Button> 
  <div className="singin">  Not a member? <a className="ac"href="/signup">Singup </a> </div>
   </div>
    </div> 
 
    </form>
      </div>
      </div>
      }
    </Container>
   
  );
}
