import React from 'react'
import './Booking.css'
// import './myscript'
export default function Booking() {
  return (
    <div> 
        <div className="book-card middle">                         
    <div className="selecter">
        <div className="movie-container">
            <label>Pick a movie:</label>
            <select id="movie">
            <option value="250">Avengers: Endgame (Rs.250)</option>
            <option value="200">Joker (Rs.200)</option>
            <option value="300">Toy Story 4 (Rs.300)</option>
            <option value="250">The Lion King (Rs.250)</option>
        </select>
        </div>

            <ul className="showcase">
            <li>
                <div className="seat"></div>
                <small>N/A</small>
            </li>
            <li>
                <div className="seat selected"></div>
                <small>Selected</small>
            </li>
            <li>
                <div className="seat occupied"></div>
                <small>Occupied</small>
            </li>
            </ul>

<div className="container">
<div className="screen"></div>

<div className="row">
<div className="seat occupied"></div>
<div className="seat"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat"></div>
</div>

<div className="row">
<div className="seat"></div>
<div className="seat"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
<div className="seat"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
</div>
<div className="row">
<div className="seat"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
<div className="seat "></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
</div>
<div className="row">
<div className="seat "></div>
<div className="seat occupied"></div>
<div className="seat "></div>
<div className="seat occupied"></div>
<div className="seat"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
<div className="seat"></div>
</div>
<div className="row">
<div className="seat"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat "></div>
<div className="seat occupied"></div>
<div className="seat"></div>
<div className="seat "></div>
<div className="seat occupied"></div>
<div className="seat occupied"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat"></div>
</div>
<div className="row">
<div className="seat occupied"></div>
<div className="seat "></div>
<div className="seat "></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat"></div>
<div className="seat occupied"></div>
<div className="seat "></div>
<div className="seat "></div>
<div className="seat occupied"></div>
</div>
</div>


<p className="text">
You have selected <span id="count">0</span> seats for a price of Rs. <span id="total">0</span>
</p>
</div>
</div>
{/* <Helmet>
        <script src="./myscript"></script>
      </Helmet> */}
</div>
  )
}
