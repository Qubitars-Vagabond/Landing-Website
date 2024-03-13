import React from 'react'
import Feature from '../Images/featuremobile.png'
import "../Style/Features.css";


const Features = () => {
  return (
    <div>
         <div className="container mt-5">
        <div className="start_head">
            <h1>App Overview</h1>
        </div>
        <div className="start_para">
            <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Ut enim ad minim
            </p>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="search_engine left_1">
                    <p>Make Pins</p>
                </div>
                <div className="search_engine left_2">
                    <p>Color Picker</p>
                </div>
                <div className="search_engine left_3">
                    <p>Statistics</p>
                </div>
                <div className="search_engine left_4">
                    <p>Tracker Path</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="start_img">
                <img
                      src={Feature}
                      className="img-fluid"
                      alt="switch"
                      loading="lazy"
                    />
                </div>
            </div>
            <div className="col-md-4  ">
                <div className="search_engine right_1">
                    <p>Select Date Pin</p>
  
                </div>
                <div className="search_engine right_2">
                    <p>Pins Sorted </p>
                </div>
                <div className="search_engine right_3">
                    <p>Visited Location</p>
                </div>
                <div className="search_engine right_4">
                    <p>Add Location</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Features;
