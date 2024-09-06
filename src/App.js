// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthContainer from './components/AuthContainer';
import Dashboard from './components/Dashboard';

import './Asserts/style/FormStyles.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthContainer />} />
                <Route path="/dashboard/*" element={<Dashboard />} /> {/* Use wildcard here */}
            </Routes>
        </Router>
    );
};

export default App;
