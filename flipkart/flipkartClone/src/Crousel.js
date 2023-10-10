import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div>
        <h2>Carousel Example</h2>
        <Slider {...settings}>
          <div>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8bf2beb6903ca674.jpg?q=20" alt="Image 1" />
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0ded2a768b23a1a3.jpg?q=20" alt="Image 2" />
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/273a32b6937fd9ba.jpeg?q=20ge3.jpg" alt="Image 3" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    );
  };
  
  export default Carousel;
  