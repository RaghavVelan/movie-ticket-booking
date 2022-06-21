import React from 'react';
import {Outlet, Link} from "react-router-dom";
import './Home.css';
import Side from './Side';
import App_logo from '../icon/Icon@2x.png';
import dr_strange from '../image/doctor-strange.png'



function Home(){
  return (
    <div className="Home">
      <h1 className='heading-upcoming'>UPCOMING MOVIES</h1>
      <div className="upcoming-movies">
        <button className="btnnav previous">&#8249;</button>
        <ul id='upcoming-movies-list'>
          <Link to="#" id='ancher'>
            <li><img src={dr_strange} alt="doctor Strange" /></li>
          </Link>
          <Link to="#" id='ancher'>
            <li><img src={dr_strange} alt="doctor Strange" /></li>
          </Link>
          <Link to="#" id='ancher'>
            <li><img src={dr_strange} alt="doctor Strange" /></li>
          </Link>
          <Link to="#" id='ancher'>
            <li><img src={dr_strange} alt="doctor Strange" /></li>
          </Link>
        </ul>
        <button className="btnnav next">&#8250;</button>
      </div>
      <div className="app-logo">
        <img src={App_logo} alt="Logo" />
      </div>
      <div className="in-theaters">
        <h1>IN THEATERS</h1>
        <div className="main_home">
          <div className="movies">
          <ul id='in-theaters-movies-list'>
            <Link to="/Movie" id='ancher'>
              <li><img src={dr_strange} alt="doctor Strange" /><p>Batman</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={dr_strange} alt="doctor Strange" /><p>Batman</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={dr_strange} alt="doctor Strange" /><p>Batman</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={dr_strange} alt="doctor Strange" /><p>Batman</p></li>
            </Link>
          </ul>
          </div>
          <div className="side_section">
            <Side />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;