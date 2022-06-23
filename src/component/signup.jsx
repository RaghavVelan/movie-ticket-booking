import React, { useState } from 'react';
import {Outlet, Link} from "react-router-dom";
import './style.css';
import glogo from '../image/g.png';
import alogo from '../image/apple.png';



function signup(){
  return (<>
    <div className='form-sign'>
        <div className="card middle">
            <div className="front">
                <div className="content">
                    <form id="register" className="ig1">
                        <input type="text" className="if" placeholder='User ID' required/>
                        <input type="email" className="if" placeholder='Email ID' required/>
                        <input type="password" className="if" placeholder='Enter Password' required/>
                        <button type="button" className="submit">Register</button>                     
                    </form>
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default signup;