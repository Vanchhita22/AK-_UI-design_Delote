// src/components/MainContent.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DemoClass from '../pages/DemoClass';
import LiveClasses from '../pages/LiveClasses';
import  MockTests from '../pages/MockTests';
import Lectures from '../pages/Lectures';
import Courses from '../pages/Courses';
import Guidance from '../pages/Guidance';
import Digitallibrary from '../pages/Digitallibrary';
import About from '../pages/About';
import Currentaffair from '../pages/Currentaffair';
import UpcomingClass from '../pages/Upcomingclass';


const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
      <Route path="/about" element={<About />} />
        <Route path="/demo-class" element={<DemoClass />} />
        <Route path="/live-classes" element={<LiveClasses />} />
        <Route path="/mock-tests" element={<MockTests/>} />
        <Route path="/lectures" element={<Lectures/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/guidance" element={<Guidance/>} />
        <Route path="/digital-library" element={<Digitallibrary/>} />
        <Route path="/currentAffair" element={<Currentaffair/>} />
        <Route path="/upcoming-class" element={<UpcomingClass/>} />
       
   
       
      </Routes>
    </div>
  );
};

export default MainContent;
