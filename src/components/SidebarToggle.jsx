// src/components/SidebarToggle.js
import React, { useState } from 'react';
import '../Asserts/style/SidebarToggle.css'; // CSS for the toggle button

const SidebarToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <button className={`sidebar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
      ☰
    </button>
  );
};

export default SidebarToggle;
