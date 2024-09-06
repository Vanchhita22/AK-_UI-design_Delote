// src/components/Modal.js
import React, { useState } from 'react';
import '../Asserts/style/Modal.css';

const Modal = ({ isOpen, onClose, test }) => {
  const [answers, setAnswers] = useState(
    test.questions.reduce((acc, _, index) => ({ ...acc, [`question${index + 1}`]: '' }), {})
  );

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Answers submitted:', answers);
    // Handle submission logic here (e.g., send answers to server)
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{test.title}</h2>
        <p>Date: {test.date}</p>
        <p>Duration: {test.duration}</p>
        <h3>Questions:</h3>
        <form onSubmit={handleSubmit}>
          <ul className="modal-questions-list">
            {test.questions.map((question, index) => (
              <li key={index}>
                <label>
                  {question}
                  <textarea
                    name={`question${index + 1}`}
                    value={answers[`question${index + 1}`]}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Your answer here..."
                  />
                </label>
              </li>
            ))}
          </ul>
          <button type="submit" className="submit-button">Submit Answers</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
