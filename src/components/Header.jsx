import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faBell, 
  faBook, 
  faQuestionCircle 
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 
import '../Asserts/style/Header.css';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isRankersListVisible, setIsRankersListVisible] = useState(false);
  const [isDoubtsSessionFormVisible, setIsDoubtsSessionFormVisible] = useState(false);
  const navigate = useNavigate(); 

  const handleLogout = () => {
    console.log("User logged out");
    navigate('/'); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(prev => !prev);
  };

  const handleBookCallClick = () => {
    setIsFormVisible(prev => !prev);
  };

  const handleRankersClick = () => {
    setIsRankersListVisible(prev => !prev);
  };

  const handleDoubtsSessionClick = () => {
    setIsDoubtsSessionFormVisible(prev => !prev);
  };

  const handleSessionNotesClick = () => {
    navigate('/upsc-session-notes'); // Replace with the correct path
  };

  const openNCERTLink = () => {
    window.open('https://www.drishtiias.com/free-downloads/download-ncert-books', '_blank');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.header-icons') === null) {
        setIsDropdownOpen(false);
        setIsNotificationDropdownOpen(false);
        setIsFormVisible(false);
        setIsRankersListVisible(false);
        setIsDoubtsSessionFormVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="header">
      <h2>UPSC Aspirant</h2>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-buttons">
        <button className="ncert-button" onClick={openNCERTLink}>
          NCERT
        </button>
        <a
          href="https://www.drishtiias.com/free-downloads/download-ncert-books"
          target="_blank"
          rel="noopener noreferrer"
          
        >
        
        </a>
      </div>
      <div className="header-icons">
        <div className="notification-section">
          <button className="notification-button" onClick={toggleNotificationDropdown}>
            <FontAwesomeIcon icon={faBell} className="notification-icon" />
          </button>
          {isNotificationDropdownOpen && (
            <div className="notification-dropdown">
              {/* Notification dropdown content */}
            </div>
          )}
        </div>
        <div className="profile-section">
          <button className="profile-button" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <p>Username</p>
              <button className="doubts-session-button" onClick={handleDoubtsSessionClick}>
                <FontAwesomeIcon icon={faQuestionCircle} /> Doubts Session
              </button>
              {isDoubtsSessionFormVisible && (
                <div className="doubts-session-form-container">
                  <form className="doubts-session-form">
                    <h4>Doubts Session</h4>
                    <label>
                      Name:
                      <input type="text" name="name" />
                    </label>
                    <label>
                      Email:
                      <input type="email" name="email" />
                    </label>
                    <label>
                      Doubt Regarding:
                      <input type="text" name="doubt" />
                    </label>
                    <button type="submit">Submit</button>
                  </form>
                </div>
              )}
              <a 
                href="https://www.clearias.com/ias-study-materials/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="session-notes-button"
              >
                <FontAwesomeIcon icon={faBook} /> Session Notes
              </a>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
