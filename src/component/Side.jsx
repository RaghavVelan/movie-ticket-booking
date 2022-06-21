import React from 'react'
import {Outlet, Link} from "react-router-dom";
import actress from '../image/Image_8@2x.png';

export default function Side() {
  return (
    <div>  <div className="celebrities">
    <h3>SpotLight Celebrities</h3>
    <div className="celeb-list">
      <ul>
        <Link to="#" id='ancher'>
          <li><img src={actress} alt="Gal Gadot" /><p>Gal Gadot</p></li>
        </Link>
        <Link to="#" id='ancher'>
          <li><img src={actress} alt="Gal Gadot" /><p>Gal Gadot</p></li>
        </Link>
        <Link to="#" id='ancher'>
          <li><img src={actress} alt="Gal Gadot" /><p>Gal Gadot</p></li>
        </Link>
      </ul>
    </div>
  </div>
  <div className="links">
    <h3>Links</h3>
    <div className="link-list">
      <ul>
        <li>
          <Link to="#" id='ancher'>Book Tickets</Link>
        </li>
        <li>
          <Link to="#" id='ancher'>My Tickets</Link>
        </li>
        <li>
          <Link to="#" id='ancher'>Cancel Tickets</Link>
        </li>
      </ul>
    </div>
  </div></div>
  )
}
