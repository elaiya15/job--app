/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useEffect,useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import "./App.css"
import Job from './job/Job.jsx';
import Apply from './job/Apply.jsx';
import Button from '@mui/material/Button'
import{useNavigate} from "react-router-dom"; 
// import jwt from 'jsonwebtoken'

function App() {
  const navigate = useNavigate();
  useEffect(() => {
   const auth=localStorage.getItem("token")
  if (!auth){
        return navigate("/")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
const logout=()=>{
  localStorage.removeItem("token")
  navigate("/")
}
  
  return (
    <div className="maindiv">
      <div className="qsb-header-container">
    <div className="icon" onClick={logout}> <FontAwesomeIcon icon={faRightFromBracket} size="lg"/> logout</div>
        <h1 className="qsb-title">Find your dream job now</h1>
        <div className="qsb-byLine">5 lakh+ jobs for you to explore</div>
      </div>
      <div className=" searchbar">
       <FontAwesomeIcon className="faMagnifyingGlass" icon={faMagnifyingGlass}/>
      <input className="search"  type="text" placeholder="Search"/>
      
      </div> 
      <div className="cardhead">
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/remoteonetheme.svg" alt="Remote-img"/> 
      <span className="remote"> Remote</span>
       </div>
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/mnconetheme.svg" alt="Remote-img"/> 
      <span className="remote"> MNC</span>
       </div>
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/fortune-500onetheme.svg" alt="Remote-img"/> 
      <span className="remote"> Fortune 500</span>
       </div>
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/supplychainonetheme.svg" alt="Remote-img"/> 
      <span className="remote"> Supply Chain</span>
       </div>
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/softwareonetheme.svg" alt="Remote-img"/> 
      <span className="remote">Software</span>
       </div>
     
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/salesonetheme.svg" alt="Remote-img"/> 
      <span className="remote">Sales</span>
       </div>
         <div></div>
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/freshersonetheme.svg" alt="Remote-img"/> 
      <span className="remote"> Fresher</span>
       </div>
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/engineeringonetheme.svg" alt="Remote-img"/> 
      <span className="remote">Engineering</span>
       </div>
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/project-managementonetheme.svg" alt="Remote-img"/> 
      <span className="remote"> project Management</span>
       </div>
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/hronetheme.svg" alt="Remote-img"/> 
      <span className="remote"> HR</span>
       </div>
       <div className="card">
  <img className="ntc__chip-logo" src="https://static.naukimg.com/s/0/0/i/trending-naukri/analyticsonetheme.svg" alt="Remote-img"/> 
      <span className="remote"> Analytics</span>
       </div>
       </div>



      <div className="h2">
      <h2 className="headline">Top companies hiring now</h2>
      <div className="top">
       
      <div className="card1">
      <a className="industry-name" href="">MNCs</a>
      <img className="arrow-icon" src="//static.naukimg.com/s/7/0/assets/images/src/widgets/naukri-homepage-industry-wdgt/v20/resources/arrow-one-theme.2dc3b797.svg" alt="arrow-icon"/>
      <span className="industry-company">1.4K+ are actively hiring</span>
      
       <div className="industry_widget_logos"><div className="chip-image">
       <img src="https://img.naukimg.com/logo_images/groups/v1/1288.gif" className="companyLogo" alt="" height="" width=""/>
       </div>

       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/709704.gif" className="companyLogo" alt="" height="" width=""/> </div>
       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/4638713.gif" className="companyLogo" alt="" height="" width=""/></div>
       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/7982.gif" className="companyLogo" alt="" height="" width=""/>
       </div>
       </div>
       </div>
      <div className="card1">
      <a className="industry-name" href="">Edtech</a>
      <img className="arrow-icon" src="//static.naukimg.com/s/7/0/assets/images/src/widgets/naukri-homepage-industry-wdgt/v20/resources/arrow-one-theme.2dc3b797.svg" alt="arrow-icon"/>
      <span className="industry-company">142 are actively hiring</span>
      
       <div className="industry_widget_logos"><div className="chip-image">
       <img src="https://img.naukimg.com/logo_images/groups/v1/4632663.gif" className="companyLogo" alt="" height="" width=""/>
       </div>

       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/3989906.gif" className="companyLogo" alt="" height="" width=""/> </div>
       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/3407630.gif" className="companyLogo" alt="" height="" width=""/></div>
       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/4767511.gif" className="companyLogo" alt="" height="" width=""/>
       </div>
       </div>
       </div>
      <div className="card1">
      <a className="industry-name" href="">Healthcare</a>
      <img className="arrow-icon" src="//static.naukimg.com/s/7/0/assets/images/src/widgets/naukri-homepage-industry-wdgt/v20/resources/arrow-one-theme.2dc3b797.svg" alt="arrow-icon"/>
      <span className="industry-company">128 are actively hiring</span>
      
       <div className="industry_widget_logos"><div className="chip-image">
       <img src="https://img.naukimg.com/logo_images/groups/v1/4596341.gif" className="companyLogo" alt="" height="" width=""/>
       </div>

       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/479214.gif" className="companyLogo" alt="" height="" width=""/> </div>
       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/350128.gif" className="companyLogo" alt="" height="" width=""/></div>
       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/3816434.gif" className="companyLogo" alt="" height="" width=""/>
       </div>
       </div>
       </div>
      <div className="card1">
      <a className="industry-name" href="">Unicorns</a>
      <img className="arrow-icon" src="//static.naukimg.com/s/7/0/assets/images/src/widgets/naukri-homepage-industry-wdgt/v20/resources/arrow-one-theme.2dc3b797.svg" alt="arrow-icon"/>
      <span className="industry-company">1.4K+ are actively hiring</span>
      
       <div className="industry_widget_logos"><div className="chip-image">
       <img src="https://img.naukimg.com/logo_images/groups/v1/1849510.gif" className="companyLogo" alt="" height="" width=""/>
       </div>

       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/4846071.gif" className="companyLogo" alt="" height="" width=""/> </div>
       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/3871256.gif" className="companyLogo" alt="" height="" width=""/></div>
       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/3191404.gif" className="companyLogo" alt="" height="" width=""/>
       </div>
       </div>
       </div>
      <div className="card1">
      <a className="industry-name" href="">Internet</a>
      <img className="arrow-icon" src="//static.naukimg.com/s/7/0/assets/images/src/widgets/naukri-homepage-industry-wdgt/v20/resources/arrow-one-theme.2dc3b797.svg" alt="arrow-icon"/>
      <span className="industry-company">1.4K+ are actively hiring</span>
      
       <div className="industry_widget_logos"><div className="chip-image">
       <img src="https://img.naukimg.com/logo_images/groups/v1/4957862.gif" className="companyLogo" alt="" height="" width=""/>
       </div>

       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/4847773.gif" className="companyLogo" alt="" height="" width=""/> </div>
       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/3314618.gif" className="companyLogo" alt="" height="" width=""/></div>
       <div className="chip-image"><img src="https://img.naukimg.com/logo_images/groups/v1/4046032.gif" className="companyLogo" alt="" height="" width=""/>
       </div>
       </div>
       </div>
      </div>
</div>
<div className="list">
<section className="featuredCompaniesContainer bgWhite " data-id="FeaturedCompanyCluster">
<div className="featuredCompaniesHeader">
<p> See 41 jobs in Featured Companies</p>
</div>
<div className="featuredCompaniesBody">
<ul className="featuredCompaniesList">
<li className="featured-companies-li-wrapper">
<a href="" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Global Healthcare Billing Partners" src="https://img.naukimg.com/fc_images/v2/4055006.gif"/>
</a></li><li className="featured-companies-li-wrapper">
<a href="" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Concentrix Catalyst" src="https://img.naukimg.com/fc_images/v2/196760.gif"/>
</a></li><li className="featured-companies-li-wrapper"><a href="" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Gavs Technologies" src="https://img.naukimg.com/fc_images/v2/15001.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Sierra-cedar" src="https://img.naukimg.com/fc_images/v2/294009.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Tech Mahindra" src="https://img.naukimg.com/fc_images/v2/100007.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Alorica" src="https://img.naukimg.com/fc_images/v2/5271592.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="IQVIA" src="https://img.naukimg.com/fc_images/v2/314023.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="AffinityX" src="https://img.naukimg.com/fc_images/v2/3122282.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Fortrea Development India" src="https://img.naukimg.com/fc_images/v2/3895210.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Mphasis" src="https://img.naukimg.com/fc_images/v2/144993.gif"/></a>
</li></ul></div>
</section>

<div className="job"> <Apply/> </div>




</div>


      </div>
  );
}

export default App;
