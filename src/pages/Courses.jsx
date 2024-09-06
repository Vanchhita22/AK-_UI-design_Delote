import React from 'react';
import '../Asserts/style/courses.css';


const courses = [
  {
    id: 1,
    title: 'UPSC Prelims Course',
    description: 'Comprehensive preparation for UPSC Prelims covering all subjects.',
    duration: '6 Months',
  },
  {
    id: 2,
    title: 'UPSC Mains Course',
    description: 'In-depth preparation for UPSC Mains with detailed study material.',
    duration: '8 Months',
  },
  {
    id: 3,
    title: 'UPSC Optional Subjects',
    description: 'Specialized coaching for optional subjects in the UPSC exam.',
    duration: '4 Months',
  },
  {
    id: 4,
    title: 'UPSC Essay Writing',
    description: 'Focused training on essay writing for UPSC Mains.',
    duration: '3 Months',
  },
  {
    id: 5,
    title: 'UPSC Interview Preparation',
    description: 'Mock interviews and personality development for the UPSC interview.',
    duration: '2 Months',
  },
  {
    id: 6,
    title: 'UPSC Current Affairs',
    description: 'Daily current affairs updates and analysis for UPSC preparation.',
    duration: '1 Year',
  },
  {
    id: 7,
    title: 'UPSC NCERT Course',
    description: 'Detailed coverage of NCERT books for foundational UPSC preparation.',
    duration: '6 Months',
  },
  {
    id: 8,
    title: 'UPSC Test Series',
    description: 'Regular mock tests and performance analysis for UPSC preparation.',
    duration: 'Ongoing',
  },
  {
    id: 9,
    title: 'UPSC Weekend Batch',
    description: 'Weekend-only classes for working professionals preparing for UPSC.',
    duration: '8 Months',
  },
];

function Courses() {
  return (
    <div className='courses'>
      <h2>UPSC Courses</h2>
      <ul className='courses-list'>
        {courses.map((course) => (
          <li key={course.id} className='course-item'>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
