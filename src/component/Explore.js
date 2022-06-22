import React from 'react';
import Typekit from 'typekit';
import {Outlet, Link} from "react-router-dom";
import './style.css';
import Side from './Side';
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



function About(){
  return <div className="explore">
    <div className="explore_movie">
      <ul id='explore-list'>
      <Link to="#" id='ancher'>
              <li><img src={lion_king} alt="The Lion King"/><p>The Lion King</p></li>
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
            <Link to="#" id='ancher'>
              <li><img src={popeye} alt="Popeye" /><p>Popeye</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={batman} alt="Batman" /><p>Batman</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={jurassic} alt="Jurassic World Dominion" /><p>Jurassic World Dominion</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={joker} alt="Joker" /><p>Joker</p></li>
            </Link>
            <Link to="#" id='ancher'>
              <li><img src={avenger} alt="Avengers: End Game" /><p>Avengers: End Game</p></li>
            </Link>
            <Link to="#" id='ancher'>
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
  </div>;
};

export default About;