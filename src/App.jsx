/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import "./App.css"
import Job from './job/Job.jsx';
import Apply from './job/Apply.jsx';
import Button from '@mui/material/Button'
import{useNavigate} from "react-router-dom"; 
function App() {
  const navigate = useNavigate();
  
const logout=()=>{

  localStorage.removeItem("token")
  navigate("/")
}
  
  return (
    <><div className="icon" onClick={logout}> <FontAwesomeIcon icon={faRightFromBracket} size="lg"/> </div>
      <div className="qsb-header-container">
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
<a href="https://www.naukri.com/job-listings-excellent-openings-for-ar-calling-work-from-home-at-vellore-global-healthcare-billing-partners-vellore-tamil-nadu-1-to-3-years-280723005818" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Global Healthcare Billing Partners" src="https://img.naukimg.com/fc_images/v2/4055006.gif"/>
</a></li><li className="featured-companies-li-wrapper">
<a href="https://www.naukri.com/concentrix-catalyst-jobs-careers-196760?keyword=remote&amp;src=fcc&amp;companyId=196760" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Concentrix Catalyst" src="https://img.naukimg.com/fc_images/v2/196760.gif"/>
</a></li><li className="featured-companies-li-wrapper"><a href="https://www.naukri.com/gavs-technologies-jobs-careers-15001?keyword=remote&amp;src=fcc&amp;companyId=15001" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Gavs Technologies" src="https://img.naukimg.com/fc_images/v2/15001.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="https://www.naukri.com/sierra-cedar-jobs-careers-294009?keyword=remote&amp;src=fcc&amp;companyId=294009" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Sierra-cedar" src="https://img.naukimg.com/fc_images/v2/294009.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="https://www.naukri.com/tech-mahindra-jobs-careers-1066?keyword=remote&amp;src=fcc&amp;companyId=100007" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Tech Mahindra" src="https://img.naukimg.com/fc_images/v2/100007.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="https://www.naukri.com/alorica-jobs-careers-4870436?keyword=remote&amp;src=fcc&amp;companyId=5271592" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Alorica" src="https://img.naukimg.com/fc_images/v2/5271592.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="https://www.naukri.com/iqvia-jobs-careers-314023?keyword=remote&amp;src=fcc&amp;companyId=314023" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="IQVIA" src="https://img.naukimg.com/fc_images/v2/314023.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="https://www.naukri.com/affinityx-jobs-careers-770390?keyword=remote&amp;src=fcc&amp;companyId=3122282" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="AffinityX" src="https://img.naukimg.com/fc_images/v2/3122282.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="https://www.naukri.com/job-listings-program-specialist-voice-process-fortrea-bangalore-bengaluru-1-to-2-years-040823008355" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Fortrea Development India" src="https://img.naukimg.com/fc_images/v2/3895210.gif"/></a>
</li><li className="featured-companies-li-wrapper"><a href="https://www.naukri.com/job-listings-hiring-for-architect-react-mphasis-india-9-to-14-years-260723006108" target="_blank" rel="noreferrer"><img className="featuredCompanyImage" alt="Mphasis" src="https://img.naukimg.com/fc_images/v2/144993.gif"/></a>
</li></ul></div>
</section>

<div className="job"> <Apply/> </div>




</div>

      </>
  );
}

export default App;
