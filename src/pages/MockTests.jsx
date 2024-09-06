// src/components/Mock.js
import React, { useState } from 'react';
import '../Asserts/style/Mock.css';
import Modal from '../components/Modal';

const mockTests = [
  { 
    id: 1, 
    title: 'Mock Test 1', 
    date: '2024-09-10', 
    duration: '1 hour',
    questions: [
      'Question 1: What is the capital of India?',
      'Question 2: What is the largest river in India?',
      'Question 3: What is the role of the Supreme Court in India?',
      'Question 4: How does the Constitution of India safeguard Fundamental Rights?',
      

    ]
  },
  { 
    id: 2, 
    title: 'Mock Test 2', 
    date: '2024-09-15', 
    duration: '1 hour 30 mins',
    questions: [
      'Question 1: What is the primary function of the judiciary?',
      'Question 2: Explain the significance of the Preamble in the Constitution.',
      'Question 3: Discuss the powers of the Lok Sabha and Rajya Sabha.',
      'Question 4: What is the process for amending the Constitution of India?',
    ]
  },
  { 
    id: 3, 
    title: 'Mock Test 3', 
    date: '2024-09-20', 
    duration: '2 hours',
    questions: [
      'Question 1: Describe the main features of the Indian Parliament.',
      'Question 2: What are the functions of the President of India?',
      'Question 3: What is the role of the Supreme Court in India?',
      'Question 4: How does the Constitution of India safeguard Fundamental Rights?',
    ]
  },
  // Add more mock tests as needed
];

function Mock() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTestClick = (test) => {
    setSelectedTest(test);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTest(null);
  };

  return (
    <div className='Mock'>
      <h2>Mock Tests</h2>
      <ul className='mock-test-list'>
        {mockTests.map(test => (
          <li key={test.id} className='mock-test-item' onClick={() => handleTestClick(test)}>
            <h3>{test.title}</h3>
            <p>Date: {test.date}</p>
            <p>Duration: {test.duration}</p>
            <button className='start-test-button'>Start Test</button>
          </li>
        ))}
      </ul>
      {selectedTest && (
        <Modal isOpen={isModalOpen} onClose={closeModal} test={selectedTest} />
      )}
    </div>
  );
}

export default Mock;
