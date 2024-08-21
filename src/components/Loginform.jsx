
import React, { useState } from 'react';
import '../Asserts/style/FormStyles.css'; 
import google from '../Asserts/images/google.png';

const LoginForm = ({ onSwitchToSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log({ email, password });
    };

    return (
        <div className="form login">
            <div className="form-content">
                <header>Login</header>
                <form onSubmit={handleSubmit}>
                    <div className="field input-field">
                        <input
                            type="email"
                            placeholder="Email"
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="field input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            className="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                        <i className='bx bx-hide eye-icon'></i>
                    </div>

                    <div className="form-link">
                        <a href="#" className="forgot-pass">Forgot password?</a>
                    </div>

                    <div className="field button-field">
                        <button type="submit">Login</button>
                    </div>
                </form>

                <div className="form-link">
                    <span>Don't have an account? <button className="link signup-link" onClick={onSwitchToSignup}>Signup</button></span>
                </div>
            </div>

            <div className="line"></div>

            <div className="media-options">
                <a href="#" className="field facebook">
                    <i className='bx bxl-facebook facebook-icon'></i>
                    <span>Login with Facebook</span>
                </a>
            </div>

            <div className="media-options">
                <a href="#" className="field google">
                    <img src={google} alt="" className="google-img" />
                    <span>Login with Google</span>
                </a>
            </div>
        </div>
    );
};

export default LoginForm;
