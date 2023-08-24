/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faBriefcase,faIndianRupeeSign,faThumbtack,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import './Job.css'
import { useState } from 'react';
import Data from './JobData';
import { useParams } from 'react-router-dom';
const Job = () => {
  const params = useParams()
  const item=Data.find((item)=>item.id=== parseInt(params.id))

  const [valueapply, setvalueapply] = useState(true)
  const apply=()=>{
    setvalueapply(!true)
  }

  return (
    <>
    <div className="headclass">
     <section className="jd-header1">
      <div className="top">
      <div className="jd-top-head">
      <h2 className="title">{item.title}</h2>
      <div className="subtitle">
      <span className="sub1">{item.subtitle }</span> 
      <span className="start"><FontAwesomeIcon icon={faStar} style={{color: "#ffd84d",}} />
      </span>
      <span className="sub1">{item.rate}
      <div className="workhead">
        <span className="work"><FontAwesomeIcon icon={faBriefcase} size="sm" style={{color: "#474d6a",}} /></span>
        <span className="workvalue">{item.exp}year</span>
        <span className="work1"><FontAwesomeIcon icon={faIndianRupeeSign} size="sm" style={{"--fa-primary-color": "#474d6a", "--fa-secondary-color": "#474d6a",}} /></span>
        <span className="workvalue">Not Disclosed</span>
      </div>
      <div className="rl">
        <span className="work"> <FontAwesomeIcon icon={faThumbtack} size="sm" style={{"--fa-primary-color": "#6092be", "--fa-secondary-color": "#197ed7",}} /> </span>
        <span className="workvalue">{item.jobtype}</span>
        <div className="lc">
        <span className="work"><FontAwesomeIcon icon={faLocationDot} size="sm" style={{color: "#4b6881",}} /></span>
        <span className="workvalue">{item.Loction}</span>
        </div>
      </div>
      </span>
      </div> <hr/>
      <div className="butt"> {valueapply?<button className="but" onClick={apply} >Apply</button>:<span className="app-but"> Applied Success</span>  }</div>
         </div>
         </div>
         </section> 
         <div className="job-des">
            <h2 className="jod-descrition">Job description</h2>
            <span className="des">{item.joddes}  </span>
            <p className="pe">Role:<span className="role">{item.Role}</span></p>
            <p className="pe">Industry Type:<span className="role">{item. IndustryType}</span></p>
            <p className="pe">Department: <span className="role"> {item.Department}</span></p>
            <p className="pe">Employment Type: <span className="role">{item.EmploymentType} </span></p>
            <p className="pe">Role Category: <span className="role">{item.RoleCategory} </span></p>
            <p className="Education">Education:
            <div className="ug"> UG:<span>Any Graduate </span></div>
            <div className="pg"> PG:<span>Any Postgraduate </span></div>
            </p>
            <p  className="pe">KeySkills:<span> {item.KeySkills}</span></p>
         </div>
         <div className="about">
          About:<span className="about-span"> {item.About}</span>
         </div>
         </div>
    </>
  )
}

export default Job
