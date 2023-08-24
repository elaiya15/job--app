// eslint-disable-next-line no-unused-vars
import React from 'react'
// import { useState} from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

import "./loder.css";
const Loder = () => {
    // let [loading, setLoading] = useState(true);
  return (
    <>
   <div className="loading">
    <ClimbingBoxLoader color={"rgb(0, 36, 81)"}/>
    </div>
    </>
  )
}

export default Loder
