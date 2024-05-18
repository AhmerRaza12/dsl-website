import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dhllogo from '../assets/dhl-logo.jpg';
import FedExlogo from '../assets/fedex-logo.jpg';
import Upslogo from '../assets/ups-logo.jpg';
import Mplogo from '../assets/MP-logo.jpg';
import Leopardlogo from '../assets/leopards-logo.jpg';
import Fastlogo from '../assets/fast-logo.jpg';

const DeliveryPartners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const partnerLogos = [Dhllogo, FedExlogo, Upslogo, Mplogo, Leopardlogo, Fastlogo];

  return (
    <div className="text-center mt-20">
      <div className="mb-8">
        <h1 className="text-gray-400 text-4xl">Our </h1>
        <h1 className="text-black text-6xl font-bold inline">Delivery</h1>
        <h1 className="text-green-500 text-6xl font-bold inline"> Partners</h1>
      </div>
      <div className="mt-20 mb-20" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
        <Slider {...settings}>
          {partnerLogos.map((logo, index) => (
            <div key={index} className="mx-1 cursor-pointer">
              <img src={logo} alt={`Partner ${index + 1}`} className="mx-auto w-24 h-24" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DeliveryPartners;
