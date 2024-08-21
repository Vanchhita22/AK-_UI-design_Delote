
import React, { useState } from 'react';
import '../Asserts/style/FormStyles.css'; 
import google from '../Asserts/images/google.png';

const SignupForm = ({ onSwitchToLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        const newErrors = {};
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        // Handle form submission
        console.log({ email, password });
    };

    return (
        <div className="form signup">
            <div className="form-content">
                <header>Signup</header>
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
                            placeholder="Create password"
                            className="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <div className="field input-field">
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                        <i className='bx bx-hide eye-icon'></i>
                    </div>

                    <div className="field button-field">
                        <button type="submit">Signup</button>
                    </div>
                </form>

                <div className="form-link">
                    <span>Already have an account? <button className="link login-link" onClick={onSwitchToLogin}>Login</button></span>
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

export default SignupForm;
