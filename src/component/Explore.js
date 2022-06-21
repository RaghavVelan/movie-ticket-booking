import React from 'react';
import {Outlet, Link} from "react-router-dom";
import './Home.css';
import './Explore.css'
import Side from './Side';
import dr_strange from '../image/doctor-strange.png'

function About(){
  return <div className="explore">
    <div className="explore_movie">
      <ul id='explore-list'>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
            <Link to="#">
              <li><img src={dr_strange} alt="doctor Strange" /></li>
            </Link>
          </ul>
    </div>
      <div className="side_section">
          <Side />
      </div>
  </div>;
};

export default About;