import React, { useEffect } from 'react'
import './testimonials.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Reviews from './Reviews';

const Testimonials = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <div className="container testimonials mt-5 mb-5">
                <div className="row mx-auto mt-5 mb-5">
                    <div className="col-lg-6">
                        <h5 className='mt-5 testimonials-h'>Testimonials</h5>
                        <h1 className='fw-bolder'>What Client Says
                        </h1>
                        <p className='col-lg-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className='btn  rounded-2'> SEE MORE</button>
                    </div>
                    <div className="reviews-container col-lg-6 bg-light rounded-2">
                        <Reviews />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Testimonials