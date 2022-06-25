import React, {useState} from 'react';
import {Outlet, Link} from "react-router-dom";
import './style.css'
import Icon from '../icon/Icon.png';



function Layout(){
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="pg">
      <div className='navbar'>
        <div className="logo"><img src={Icon} alt="Logo" id='logo' /></div>
        <input type="text" name="search" id="search" className='search' placeholder='search'/>
        <div className="menubtn">
        <input type="checkbox" id="menu_checkbox" name='checkbox' onClick={handleToggle}/>
        <label htmlFor="menu_checkbox">
          <div></div>
          <div></div>
          <div></div>
        </label>
        </div>
        <nav className={isActive ? "app" : "list_item"} id='list_item'>
        <ul id='listnav'>
          <li id='itemlist'>
            <Link id='ancher' to="/Home">Home</Link>
          </li>
          <li>
            <Link id='ancher' to="/Explore">Explore</Link>
          </li>
          <li>
            <Link id='ancher' to="/Cinema">Cinema</Link>
          </li>
          <li>
            <Link id='ancher' to="/Contact">Contact</Link>
          </li>
          <li>
            <Link id='ancher' to="/Login">LogIn</Link>
          </li>
        </ul>
      </nav>
      </div>
      <div className="frame">  
      <Outlet />
      </div>
    </div>
  );
};

export default Layout;