import React from "react";
import { Carousel } from 'react-bootstrap';
import ipad from '../../img/ipad.png'
import mac from '../../img/mac.png'
import './_demonstration.scss';

function Demo() {

    return (
        <>
            <Carousel controls={false} indicators={false}>
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
            </Carousel>
        </>

    );
}

export default Demo;
