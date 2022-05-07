//import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function Carousel() {
    return (
        <div className="App">
            <AliceCarousel autoPlay autoPlayInterval={3000}>
                <p className="sliderimg">Quote1</p>
                <p className="sliderimg">Quote2</p>
                <p className="sliderimg">Quote3</p>
                <p className="sliderimg">Quote4</p>
            </AliceCarousel>
        </div>
    );
}
