import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/images/target1.jpg';
import img2 from '../assets/images/target2.jpg';
import img3 from '../assets/images/target3.jpg';


import img6 from '../assets/images/target4.jpg';
import img10 from '../assets/images/target5.jpg';
// import img11 from '../assets/images/target11.jpg';

function Sliding() {
    return (
        <div >
            <Carousel >
                <Carousel.Item>
                    <img className="front" src={img1} fluid alt=""/>
                    <Carousel.Caption>
                        <h3>Welcome</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="front" src={img2} fluid alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="front" src={img3} fluid alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="front" src={img6} fluid alt=""/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="front" src={img10} fluid alt=""/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Sliding;
