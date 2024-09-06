
// src/components/Dashboard.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';


const Dashboard = () => {
    return (
        <div className="dashboard">
           
            <div className="content">
                <Header />
                <Sidebar />
                <MainContent />
                {/* Your main content goes here */}
            </div>
        </div>
    );
};

export default Dashboard;
