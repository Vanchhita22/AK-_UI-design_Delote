import React from 'react';
import '../Asserts/style/Guidance.css';

function Guidance() {
  return (
    <div className="guidance-container">
      <h1>UPSC Guidance</h1>
      <div className="guidance-content">
        <section className="guidance-section">
          <h2>Preparation Strategy</h2>
          <p>Focus on building a strong foundation in basic concepts and then move to advanced topics.</p>
        </section>

        <section className="guidance-section">
          <h2>Important Resources</h2>
          <ul>
            <li>NCERT Books</li>
            <li>Standard Reference Books</li>
            <li>Daily Newspapers</li>
            <li>Mock Tests and Previous Year Papers</li>
          </ul>
        </section>

        <section className="guidance-section">
          <h2>Time Management Tips</h2>
          <p>Allocate specific time slots for each subject and ensure a balanced approach to revision.</p>
        </section>

        <section className="guidance-section">
          <h2>Interview Preparation</h2>
          <p>Work on communication skills, current affairs, and develop a strong understanding of your DAF (Detailed Application Form).</p>
        </section>
      </div>
    </div>
  );
}

export default Guidance;
