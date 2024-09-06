import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Loginform';
import SignupForm from '../components/SignupForm';
import '../Asserts/style/FormStyles.css'; 

const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        navigate('/dashboard');
    };

    const handleSignupSuccess = () => {
        navigate('/dashboard');
    };

    return (
        <section className="container forms">
            {isLogin ? (
                <LoginForm 
                    onSwitchToSignup={() => setIsLogin(false)} 
                    onLoginSuccess={handleLoginSuccess}
                />
            ) : (
                <SignupForm 
                    onSwitchToLogin={() => setIsLogin(true)} 
                    onSignupSuccess={handleSignupSuccess}
                />
            )}
        </section>
    );
};

export default AuthContainer;
