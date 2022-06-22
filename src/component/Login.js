import React, { useState } from 'react';
import {Outlet, Link} from "react-router-dom";
import './style.css';
import glogo from '../image/g.png';
import alogo from '../image/apple.png';
// import script from './myscript.js';



function Login(){
  return (<>
    <div className='form-sign'>
        <div className="card middle">
            <div className="front">
                <div className="content">
                    <div className="boxb">
                        <div id="btn"></div>
                        <button className="rl button2" onClick="login()">Login</button>
                        <button className="rl button2" onClick="register()">Register</button>
                    </div>
                    <form className="ig" id="Login">
                        <input type="text" className="if" placeholder='User ID' required/>
                        <input type="password" className="if" placeholder='Enter Password' required/>
                        <label for="remember" className="remember"><input type="checkbox" name="remember" id="remember" className='check-box' />Remember Password</label>
                        <button type="button" className="submit">Login</button>
                        <h4 id='h4'>OR</h4>
                        <div className="link-btn">
                            <a href="#" className="b2">
                                <img src={glogo} width="22px" /> Google</a>
                            <a href="#" className="b3">
                                <img src={alogo} width="22px" /> iCloud</a>
                        </div> 
                    </form>
                    <form id="register" className="ig1">
                        <input type="text" className="if" placeholder='User ID' required/>
                        <input type="email" className="if" placeholder='Email ID' required/>
                        <input type="password" className="if" placeholder='Enter Password' required/>
                        <button type="button" className="submit">Register</button>
                        <h4>OR</h4>
                        <div className="link-btn">
                            <a href="#" className="b2">
                                <img src={glogo} width="22px" /> Google</a>
                            <a href="#" className="b3">
                                <img src={alogo} width="22px" /> iCloud</a>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default Login;