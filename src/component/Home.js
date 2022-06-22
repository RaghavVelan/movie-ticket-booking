import React from 'react';
import {Outlet, Link} from "react-router-dom";
import './style.css';
import Side from './Side';
import App_logo from '../icon/Icon@2x.png';
import dune from '../image/dune.png'
import dr_strange from '../image/doctor-strange.png'
import rainfall from '../image/rainfall.png'
import avenger from '../image/avenger.png'
import toy_story from '../image/toy-story-4.png'
import joker from '../image/joker.png'
import lion_king from '../image/the-lion-king.png'
import free_guy from '../image/free-guy.png'
import jurassic from '../image/jurassic-world-dominion.png'
import thor from '../image/thor.png'
import popeye from '../image/popeye.png'
import batman from '../image/batman.png'



function Home(){
  return (
    <div className="Home">
      <h1 className='heading-upcoming'>UPCOMING MOVIES</h1>
      <div className="upcoming-movies">
        <button className="btnnav previous">&#8249;</button>
        <ul id='upcoming-movies-list'>
          <Link to="#" id='ancher'>
          <li><img src={lion_king} alt="The Lion King" /><p>The Lion King</p></li>
                    </Link>
                    <Link to="#" id='ancher'>
              <li><img src={dr_strange} alt="doctor Strange" /><p>Doctor Strange</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={rainfall} alt="Rainfall" /><p>Rainfall</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={thor} alt="Thor Love and Thunder" /><p>Thor Love and Thunder</p></li>
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
              <li><img src={dr_strange} alt="doctor Strange" /><p>Doctor Strange</p></li>
            </Link>
            <Link to="/Movie" id='ancher'>
              <li><img src={dune} alt="dune" /><p>Dune</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={toy_story} alt="Toy Story 4" /><p>Toy Story 4</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={free_guy} alt="Free Guy" /><p>Free Guy</p></li>
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