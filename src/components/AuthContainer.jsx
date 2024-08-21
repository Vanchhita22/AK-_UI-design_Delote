// src/components/AuthContainer.js
import React, { useState } from 'react';
import LoginForm from '../components/Loginform';
import SignupForm from '../components/SignupForm';
import '../Asserts/style/FormStyles.css'; 

const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <section className="container forms">
            {isLogin ? (
                <LoginForm onSwitchToSignup={() => setIsLogin(false)} />
            ) : (
                <SignupForm onSwitchToLogin={() => setIsLogin(true)} />
            )}
        </section>
    );
};

export default AuthContainer;
