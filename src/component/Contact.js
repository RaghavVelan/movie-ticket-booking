import React from 'react';
import './style.css';
import blank from '../image/blank.jpg'

const  Contact = () => {
  return (<div>

<div className='topics'>
  <h1>Recommended Topics</h1>
  <ul>
    <li>
      <a href=''>How do I redeem my Gift Card?</a>
    </li>
    <li>
      <a href=''>My tickets have not been delivered yet</a>
    </li>
    <li>
      <a href=''>How can I earn BookMyShow Cash?</a>
    </li>
    <li>
      <a href=''>BookMyShow Gift Card Validity</a>
    </li>
    <li>
      <a href=''>Feedback for Cinema</a>
    </li>
    <li>
      <a href=''>Can I cancel/modify my ticket for an Online event?</a>
    </li>
  </ul>
</div>
<h1 className='contact'>Contact The Team.</h1>

<div class="proof">
  <img src={blank} alt="admin"/>
  <a href='' target={blank}><div class="overlay">
    Raghav V
  </div></a>
</div>
<div class="proof">
  <img src={blank} alt="admin"/>
  <a href='' target={blank}><div class="overlay">
    Amritpal S
  </div></a>
</div>
<div class="proof">
  <img src={blank} alt="admin"/>
  <a href='' target={blank}><div class="overlay">
    Shivansh S
  </div></a>
</div>
<div class="proof">
  <img src={blank} alt="admin"/>
  <a href='' target={blank}><div class="overlay">
    Shalini T
  </div></a>
</div>
<div class="proof">
  <img src={blank} alt="admin"/>
  <a href='' target={blank}><div class="overlay">
    Navya S
  </div></a>
</div>


  </div>
);
};

export default Contact;