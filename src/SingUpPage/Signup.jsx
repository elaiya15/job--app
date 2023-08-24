/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import TextField from '@mui/material/TextField';
import "./Signup.css"
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
// eslint-disable-next-line no-unused-vars
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import PhoneInput from 'react-phone-number-input'
import  'react-phone-number-input/style.css'
import axios from "axios";
import{useNavigate} from "react-router-dom"; 

export default function Signup() {
  const navigate = useNavigate();
  const formvalue={
    firstname:"",
    lastname:"",
    number:"",
    city:"",
    email:"",
    password:"",
  };
   
  const [FormData, SetFormData] = useState(formvalue)

  // eslint-disable-next-line no-unused-vars
  const [value,SetValue]=useState("")


const [open, SetOpen] = useState(true)

const toggle=()=>(
  SetOpen(!open)
)
const handleSubmit= async (e)=>{
  e.preventDefault()
 // eslint-disable-next-line no-unused-vars
 

console.log(FormData);
 // eslint-disable-next-line no-unused-vars
 const data = await axios.post("http://localhost:4001/register/signup",{
  ...FormData,number:value
   });
 SetValue("")
 SetFormData({
   firstname:"",
    lastname:"",
    city:"",
    email:"",
    password:"",
  })
  navigate("/");


}
 

  return (
    <>
    <Container fluid="md">
    <h1 className="h1" >Sign-up</h1>
  <Box   onSubmit={(e)=>handleSubmit(e)} component="form"  sx={{ }} validate="true"  autoComplete="off">
  <div className="main">
    <div className="user">
    
   <span> <PersonIcon className="i1"/>
<TextField sx={ {ml:4}}   id="standard-basic" label="FirstName" type="FirestName" variant="standard" required  value={FormData.firstname} onChange={(e)=>SetFormData({...FormData,firstname: e.target.value})} /> </span>
<span> <PersonIcon className="i2"/>
 <TextField sx={ {ml:4}} id="standard-basic"  label="LastName" type="LastName" variant="standard" required value={FormData.lastname} onChange={(e)=>SetFormData({...FormData,lastname: e.target.value})} />    </span>
 <span>
<PhoneInput
className="PhoneNumber"
defaultCountry="IN"
placeholder="Enter phone number"
// eslint-disable-next-line no-undef
value={value}
required
onChange={SetValue}/>
  </span> 
<span> <MailOutlineIcon className="i4"/>
 <TextField sx={ {ml:4}} id="standard-basic"  label="Email" type="email" variant="standard" required value={FormData.email} onChange={(e)=>SetFormData({...FormData, email: e.target.value})}/>  </span>       
 <span> <LocationCityIcon className="i5"/>
<TextField  sx={ {ml:4} }id="standard-basic"  label="City" type="city" variant="standard" required value={FormData.city} onChange={(e)=>SetFormData({...FormData, city: e.target.value})}/>   </span>         
<span> <HttpsIcon className="i6"/>

<TextField sx={{ ml:4}}id="standard"  label="Password" type={(open===true)?"password":"text"} variant="standard" value={FormData.password} required   onChange={(e)=>SetFormData({...FormData, password: e.target.value})}/>
   <span className="eye1"> { (open === true)?<VisibilityOffIcon onClick={toggle}/> :<VisibilityIcon onClick={toggle}/> }   </span> </span>  
  </div>
 
  <div className="button">
  
  <Button  sx={{ ml:5}}variant="contained" disableElevation type="submit" >
    Signup
  </Button> 
  <div className="sing">  Already a member? <a className="ab"href="/">Signin </a> </div>
  </div>
  </div>
  </Box>
  </Container>

    
  
</>
  )
}
