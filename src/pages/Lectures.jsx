import React from 'react';
import '../Asserts/style/lectures.css'; // Update with the correct path

const teachers = [
  {
    id: 1,
    name: 'Dr. A. Sharma',
    subject: 'General Studies',
    bio: 'Expert in Indian Polity and Governance with over 10 years of teaching experience.'
  },
  {
    id: 2,
    name: 'Ms. B. Kumar',
    subject: 'Geography',
    bio: 'Specialized in Physical Geography and Environmental Studies with a track record of successful students.'
  },
  {
    id: 3,
    name: 'Mr. C. Singh',
    subject: 'History',
    bio: 'Experienced in Modern Indian History and World History, known for detailed and engaging lectures.'
  }
];

function Teachers() {
  return (
    <div className='teachers'>
      <h2>Meet Our UPSC Teachers</h2>
      <ul className='teachers-list'>
        {teachers.map((teacher) => (
          <li key={teacher.id} className='teacher-item'>
            <h3>{teacher.name}</h3>
            <p><strong>Subject:</strong> {teacher.subject}</p>
            <p>{teacher.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teachers;
