/* eslint-disable react/jsx-key */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faBriefcase,faIndianRupeeSign,faThumbtack,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import"./Apply.css"
import {useNavigate}from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import Data from './JobData';
const apply = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const navigate= useNavigate()
     
  return (
   
        <>
      
      {Data.map((v)=>(  <section className="jd-header"> 

      <div className="top">
       <div className="jd-top-head"key={v.id} >
      <h2 className="title">{v.title}</h2>
      <div className="subtitle">
      <span className="sub1">{v.subtitle}</span> 
      <span className="start"><FontAwesomeIcon icon={faStar} style={{color: "#ffd84d",}} />
      </span>
      <span className="sub1">{v.rate}
      <div className="workhead">
        <span className="work"><FontAwesomeIcon icon={faBriefcase} size="sm" style={{color: "#474d6a",}} /></span>
        <span className="workvalue">{v.exp}year</span>
        <span className="work1"><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{"--fa-primary-color": "#474d6a", "--fa-secondary-color": "#474d6a",}} /></span>
        <span className="workvalue">Not Disclosed</span>
      </div>
      <div className="rl">
        <span className="work"> <FontAwesomeIcon icon={faThumbtack} size="sm" style={{"--fa-primary-color": "#6092be", "--fa-secondary-color": "#197ed7",}} /> </span>
        <span className="workvalue">{v.jobtype}</span>
        <div className="lc">
        <span className="work"><FontAwesomeIcon icon={faLocationDot} size="sm" style={{color: "#4b6881",}} /></span>
        <span className="workvalue">{v.Loction}</span>
        </div>
      </div>
      </span>
      </div> <hr/>
      <div className="butt"> <button className="but" onClick={()=>navigate(`/job/${v.id}`)   }  >View</button> </div>
         </div>
         </div> 
         </section> ))}
    </>
   
  )
}

export default apply
