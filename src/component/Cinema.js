import React from 'react';
import './style.css';
import App_logo from '../icon/Icon@2x.png';
import thor_trailer from '../Videos/thor_trailer.mp4';
import dune from '../image/dune.png'
import dr_strange from '../image/doctor-strange.png'
import rainfall from '../image/rainfall.png'
import avenger from '../image/avenger.png'
import toy_story from '../image/toy-story-4.png'
import joker from '../image/joker.png'
import lion_king from '../image/the-lion-king.png'
import free_guy from '../image/free-guy.png'
import jurassic from '../image/jurassic-world-dominion.png'
import thor from '../image/thor.png'
import popeye from '../image/popeye.png'
import batman from '../image/batman.png'


class Cinema extends React.Component {
    render() {
        return (
            <div className='cinema-page'>
              <div className="video">
                <video width="100%" height="80%" controls >
                    <source src={thor_trailer} type="video/mp4"/>
                </video>
                <h3 id='movie-title'>Thor Love and Thunder</h3>
              </div>
                <h4 className='current-shows'>Show Timing</h4>
              <div className="movie-show">
                <div className="show-timing">
                  <img src={thor} alt="Thor Love and Thunder"/>
                  <div className="timing">
                    <buttom className="single-show-timing btn btn-danger">10AM-1PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">2PM-5PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">5PM-8PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">8PM-11PM</buttom>
                  </div>
                </div>  
                <div className="show-timing">
                  <img src={popeye} alt="popeye"/>
                  <div className="timing">
                    <buttom className="single-show-timing btn btn-danger">10AM-1PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">2PM-5PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">5PM-8PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">8PM-11PM</buttom>
                  </div>
                </div> 
                <div className="show-timing">
                  <img src={rainfall} alt="rainfall"/>
                  <div className="timing">
                    <buttom className="single-show-timing btn btn-danger">10AM-1PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">2PM-5PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">5PM-8PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">8PM-11PM</buttom>
                  </div>
                </div> 
                <div className="show-timing">
                  <img src={dune} alt="dune"/>
                  <div className="timing">
                    <buttom className="single-show-timing btn btn-danger">10AM-1PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">2PM-5PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">5PM-8PM</buttom>
                    <buttom className="single-show-timing btn btn-danger">8PM-11PM</buttom>
                  </div>
                </div> 
              </div>               
            </div>
        )
    };
}


export default Cinema;