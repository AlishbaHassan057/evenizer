import React, { useEffect } from 'react';
import './about.css';
import { FaCheckCircle } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';




const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <div className="container p-5 mt-5">
                <div className="row gap-4">
                    {/* MAIN- LEFT-SIDE */}
                    <div className="col-lg-6 image-container">
                        <img style={{ width: '100%', height: '110%', objectFit: 'cover' }}
                            src="https://www.southernliving.com/thmb/PIbRKlcjV37CRSO7jdaSqwHx1zs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-860634842-2000-d5a637db1148410da0ca5287bfc63949.jpg"
                            alt="Background Image"
                            className="background-image" data-aos="fade-up-right"
                        />
                        <img
                            src="https://sofar-sounds-live.imgix.net/homepage-visa-banner.png?ixlib=rails-4.2.0&auto=format&fit=crop&w=1500&h=500&w=600&w=1280"
                            className="overlay-image" data-aos="fade-left"
                        />
                    </div>


                    {/* MAIN-RIGHT-SIDE */}
                    <div className="col-lg-5 mt-4" >
                        <h6 className='b' data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500">About Evenizer</h6>
                        <h2 className='fw-bold' data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500">We Are The Best Event Planner & Organizer In Town</h2>
                        <p className='text-secondary' data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                        {/* again row for list and img */}
                        <div className="row ">
                            {/* again-left-side */}
                            <div className="box col-lg-5 rounded-2 py-1 px-0" data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                <div className="box d-flex flex-column align-items-center  justify-content-center text-center mx-auto gap-2 ">
                                    <div className="icon-medal mt-4">
                                        <FaMedal size={50} color='DA22FF' />
                                    </div>
                                    <div className="ten fw-bolder"><h1>10 <span><FaPlus size={12} color='DA22FF' />
                                    </span></h1></div>
                                    <div className="exp mb-4 mt-0"><h6>Years Of Experiences</h6></div>
                                </div>
                            </div>
                            {/* again-right-side */}
                            <div className="col-lg-7" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <ul className='listed mt-3'>
                                    <li>
                                        <FaCheckCircle color='#DA22FF' />
                                        <span className='list-item-text'>Best Quality Services</span>
                                    </li>
                                    <li>
                                        <FaCheckCircle color='#DA22FF' />
                                        <span className='list-item-text'>100% Satisfaction Guarantee</span>
                                    </li>
                                    <li>
                                        <FaCheckCircle color='#DA22FF' />
                                        <span className='list-item-text'>Quality Control System</span>
                                    </li>
                                    <li>
                                        <FaCheckCircle color='#DA22FF' />
                                        <span className='list-item-text'>Commitment to Customers</span>
                                    </li>
                                    <li>
                                        <FaCheckCircle color='#DA22FF' />
                                        <span className='list-item-text'>Highly Professional Team</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn fs-6 fw-bold py-2 mt-4 fs-6" data-aos="fade-up"
                            data-aos-duration="3000">ABOUT US</div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default About;