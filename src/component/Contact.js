import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import blank from '../image/blank.jpg'

const  Contact = () => {
  return (<div>


<h1 className='contact'>Contact The Team.</h1>

<div class="proof">
  <img src={blank}/>
  <div class="overlay">
    Raghav
  </div>
</div>


<div class="proof">
  <img src={blank}/>
  <div class="overlay">
    Amritpal Singh
  </div>
</div>


<div class="proof">
  <img src={blank}/>
  <div class="overlay">
    Shivansh
  </div>
</div>


<div class="proof">
  <img src={blank}/>
  <div class="overlay">
    Shalini
  </div>
</div>


<div class="proof">
  <img src={blank}/>
  <div class="overlay">
    Navya
  </div>
</div>


  </div>
);
};

export default Contact;