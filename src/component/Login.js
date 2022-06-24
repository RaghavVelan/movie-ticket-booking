import React, { useState } from 'react';
import {Outlet, Link} from "react-router-dom";
import './style.css';
import glogo from '../image/g.png';
import alogo from '../image/apple.png';



function Login(){
  return (<>
    <div className='form-sign'>
        <div className="card middle">
            <div className="front">
                <div className="content">
                    <div className="boxb">
                        <div id="btn"></div>
                        <button className="rl button2" onClick="login()">Login</button>
                    </div>
                    <form className="ig" id="Login">
                        <input type="text" className="if" placeholder='User ID' required/>
                        <input type="password" className="if" placeholder='Enter Password' required/>
                        <br />
                        {/* <label for="remember" className="remember"><input type="checkbox" name="remember" id="remember" className='check-box' />Remember Password</label> */}
                        <button type="button" className="submit">Login</button>
                        <br />
                        <h4 id='h4'>OR</h4>
                        <Link to='/Signup' id='ancher' className='user-login-signin'>New User Click Here</Link>   
                     
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default Login;