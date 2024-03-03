
import React, { useEffect } from 'react';
import './join.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Join = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <div className="container-fluid mb-5 mt-5 join-container">
            <div className="join-img">
                <h1
                    className='col-lg-6 join-head fw-bold'
                    data-aos="fade-right"
                    data-aos-once="true"
                >
                    Don't Hesitate to Use Our Services, Your{' '}
                    <span
                        className='j-event fw-bold'
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="400"
                        data-aos-once="true"
                    >
                        {' '}  Event & Party
                    </span>
                    Will Be Special!
                </h1>

                <p className='col-lg-5 join-head fw-bold' data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="btn card-button fw-bold mt-0 rounded-2 fw-bold" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">GET IN TOUCH</div>
            </div>
        </div>
    );
}

export default Join;

