import React, { useState } from 'react';
import {Outlet, Link} from "react-router-dom";
import axios from 'axios';
import './style.css';



function Signup(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [users, setusers] = useState([]);

    const url  = "https://localhost:44383/";

    const handleSubmit = (e) => {
        //alert(username+" " + email + " " + password);
        const data = {
            username : username,
            email : email,
            password : password,
            Type : "Add"
        }
       axios
       .post('https://localhost:44383/api/User/GetUser', data)
       .then((json) => {
            alert(JSON.stringify(json));
       })
       .catch((error) => {
            console.log(error);
       })
    }

  return (<>
  <div className='form-sign'>
        <div className="card middle">
            <div className="front">
                <div className="content">
                    <div className="boxb">
                        <div id="btn"></div>
                        <button className="rl button2" onClick="register()">Register</button>
                    </div>
                    <form id="register" className="ig">
                        <input type="text" className="if" placeholder='User Name' value={username}   onChange={(e) => setUsername(e.target.value)} required/>
                        <input type="email" className="if" placeholder='Email ID' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <input type="password" className="if" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <button type="button" className="submit" onClick={(e) => handleSubmit(e)}>Register</button>
                        <br />
                        <h4>OR</h4>
                        <br />
                        <Link to='/Login' id='ancher' className='user-login-signin'>Already have an Account? Click Here</Link>   
                    </form>
                </div>
            </div>
        </div>
    </div>
  </>)
}

export default Signup;