import React, { useState } from 'react';




const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);

    };

    return (
        <div className="container row col-lg-4 mx-auto mt-5 border rounded-2 shadow p-4 bg-white">
            <h1 className="display-6 fw-bold text-center mb-4">LOGIN</h1>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label fw-bold">Username</label>
                    <input
                        type="text"
                        className="form-control border-0"
                        id="username"
                        name="username"
                        placeholder="Enter your username or email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-bold">Password</label>
                    <input
                        type="password"
                        className="form-control border-0"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <h6 className='text-secondary'>Forgot Password?</h6>
                <button onSubmit={handleSubmit} type="submit" className="btn btn-primary d-block mx-auto w-100 rounded-3 mt-3 mb-4">Submit</button>
                <p className='text-center text-secondary'>Not a Member? <span className='text-info fw-bold'>SignUp</span></p>

            </form>


        </div>
    );
};

export default LoginForm;
