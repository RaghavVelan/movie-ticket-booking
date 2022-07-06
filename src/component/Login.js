import React, { useState } from 'react';
import {Outlet, Link} from "react-router-dom";
import axios from 'axios';
import './style.css';
import glogo from '../image/g.png';
import alogo from '../image/apple.png';



function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setusers] = useState([]);
    const [check, setCheck] = useState("");
    const url  = "https://localhost:44381";   

    const handleLogin = (e) => {
        const data = {
            username : username,
            password : password
        }
       let values = axios.get(`${url}/api/User/GetUser`, data)
       for(let i=0 ;i<values.data.length ;i++)
       {
          if( values.data[i].username === users.username &&
             values.data[i].password === users.password)
          {
             setCheck(true);
             alert("Login Successful!");
             sessionStorage.setItem("user" , users.username);
            //eslint-disable-next-line no-restricted-globals
             history.push("/Home");
          }
       }
       if(check)
       alert(" Wrong User Email or password");
    }
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
                        <input type="text" className="if" placeholder='User Name' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                        <input type="password" className="if" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <br />
                        <button type="button" className="submit" onClick={(e) => handleLogin(e)}>Login</button>
                        <br />
                        <h4 id='h4'>OR</h4>
                        <Link to='/signup' id='ancher' className='user-login-signin'>New User Click Here</Link>   
                     
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default Login;