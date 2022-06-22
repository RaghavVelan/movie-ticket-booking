import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.css';
import App_logo from '../icon/Icon@2x.png';
import thor_trailer from '../Videos/thor_trailer.mp4';

class Cinema extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
  <Carousel.Item>
  <video autoPlay >
      <source src={thor_trailer} type="video/mp4"/>
</video>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <video width="100%" height="80%" controls >
      <source src={thor_trailer} type="video/mp4"/>
</video>

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <video width="100%" height="80%" controls >
      <source src={thor_trailer} type="video/mp4"/>
</video>

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

               
            </div>
        )
    };
}


export default Cinema;