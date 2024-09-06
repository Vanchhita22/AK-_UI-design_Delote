import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Asserts/style/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile View */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰ {/* Icon for the sidebar toggle */}
      </button>

      {/* Sidebar Container */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/dashboard/About" className="sidebar-link">About</NavLink></li>
          <li><NavLink to="/dashboard/demo-class" className="sidebar-link">Demo Class</NavLink></li>
          <li><NavLink to="/dashboard/upcoming-class" className="sidebar-link">Upcoming Class</NavLink></li>
          <li><NavLink to="/dashboard/live-classes" className="sidebar-link">Recorded Classes</NavLink></li>
          <li><NavLink to="/dashboard/lectures" className="sidebar-link">Teacher</NavLink></li>
          <li><NavLink to="/dashboard/mock-tests" className="sidebar-link">Mock Tests</NavLink></li>
          <li><NavLink to="/dashboard/digital-library" className="sidebar-link">Digital Library</NavLink></li>
          <li><NavLink to="/dashboard/courses" className="sidebar-link">Courses</NavLink></li>
          <li><NavLink to="/dashboard/currentAffair" className="sidebar-link">Current Affair</NavLink></li>
          <li><NavLink to="/dashboard/guidance" className="sidebar-link">Guidance 24/7</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
