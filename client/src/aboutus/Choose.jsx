import React from 'react';
import './choose.css'

const Choose = () => {
    return (
        <>
            <div className="choose container-fluid mt-5 bg-light">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <img
                            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
                            src='https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?cs=srgb&dl=pexels-picjumbocom-196652.jpg&fm=jpg'
                            alt="An example"
                        />
                    </div>

                    <div className="col-lg-6">
                        <div className="ch row col-lg-10">
                            <h5>Why Choose Us</h5>
                            <h2 className='fw-bold mt-3'>We Provide The Best Services For Your Special Event</h2>
                            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="band"></div>
                                    <h3 className='mt-3'>Best Event Planner</h3>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt</p>
                                </div>
                                <div className="col-lg-6">
                                    <div className="band"></div>
                                    <h3 className='mt-3'>Best Event Planner</h3>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt</p>
                                </div>
                            </div>
                            <div className="btn fw-bold">Our Services</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Choose;
