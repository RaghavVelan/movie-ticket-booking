import React, { Component } from 'react'
import './style.css'
import dr_strange from '../image/doctor-strange.png'
import actress from '../image/Image_8@2x.png';

export class Movie extends Component {
  render() {
    return (
      <div className='movie'>
          <div className="movie-poster">
            <div className="movie-booking">
              <div className="movie-image">
                 <img src={dr_strange} alt="doctor Strange" />
              </div>
              <div className="movie-rating">
                  <h2>Doctor Strange in The Multiverse of Madness</h2>
                  <div className="input-section">
                      <input type="text" name="user review" id="review" placeholder='Add your Review'/>
                      <input type="button" value="Rate Now" id="rate-btn"/>
                  </div>
                  <div className="movie-type">
                      <input type="checkbox" name="2d" id="2d" />
                      <label htmlFor="2d" id='movie-type-label'> <span className="span-label">2D</span> </label>
                      <input type="checkbox" name="3d" id="3d" />
                      <label htmlFor="3d" id='movie-type-label'> <span className="span-label">3D</span> </label>
                      <input type="checkbox" name="imax" id="imax" />
                      <label htmlFor="imax" id='movie-type-label'> <span className="span-label">IMAX</span> </label>
                  </div>
                  <button className='book-ticket'>Book Ticket</button>
              </div>
            </div>
            <div className="cast">
                <h2>Cast</h2>
                <div className="cast-list">
                    <ul>
                        <li><img src={actress} alt="Gal Gadot" /><p>Gal Gadot</p></li>
                        <li><img src={actress} alt="Gal Gadot" /><p>Gal Gadot</p></li>
                        <li><img src={actress} alt="Gal Gadot" /><p>Gal Gadot</p></li>
                        <li><img src={actress} alt="Gal Gadot" /><p>Gal Gadot</p></li>
                        <li><img src={actress} alt="Gal Gadot" /><p>Gal Gadot</p></li>
                        <li><img src={actress} alt="Gal Gadot" /><p>Gal Gadot</p></li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="movie-description">
          <img src={dr_strange} alt="doctor Strange" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum explicabo, nulla nemo eaque autem repudiandae laudantium maiores mollitia assumenda reprehenderit accusantium vero quas iusto voluptate quibusdam quae ullam doloribus.</p>
          </div>
      </div>
    )
  }
}

export default Movie