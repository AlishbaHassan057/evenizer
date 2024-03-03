import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import reviewData from './testimonialsData';
import './testimonials.css';

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setCurrentIndex(next),
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Slider {...settings}>
            {reviewData.map((review, index) => (
                <div key={index} className={`review ${index === currentIndex ? 'active' : ''}`}>
                    <h2 className='mt-5 fw-bold'>{review.name}</h2>
                    <p>{review.person}</p>
                    <p style={{ fontStyle: 'italic' }}>{review.description}</p>

                </div>
            ))}
        </Slider>
    );
};

export default Reviews;
