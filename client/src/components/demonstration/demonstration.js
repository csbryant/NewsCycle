import React from "react";
import { Carousel } from 'react-bootstrap';
import { hover } from 'react-bootstrap';
import ipad from '../../img/newipadedit.png';
import mac from '../../img/newmac.png';
import iphone from '../../img/newiphone.png';
import './_demonstration.scss';

function Demo() {

    return (
        <>
            <Carousel className="specific" pause={false} controls={false} indicators={false}>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100"
                        src={mac}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100"
                        src={ipad}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100"
                        src={iphone}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>

    );
}

export default Demo;
