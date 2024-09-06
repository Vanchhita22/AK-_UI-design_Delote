import React from 'react';
import '../Asserts/style/upcoming.css';

// Sample data for upcoming classes with YouTube links
const upcomingClasses = [
  {
    id: 1,
    title: 'Introduction to Indian Polity',
    date: '2024-09-10',
    time: '10:00 AM',
    duration: '2 hours',
    youtubeLink: 'https://www.youtube.com/watch?v=9lM79PRk_vA'
  },
  {
    id: 2,
    title: 'Indian Economy Overview',
    date: '2024-09-12',
    time: '2:00 PM',
    duration: '1.5 hours',
    youtubeLink: 'https://example.com/path-to-your-video.mp4'
  },
  {
    id: 3,
    title: 'Environmental Ecology',
    date: '2024-09-15',
    time: '11:00 AM',
    duration: '2 hours',
    youtubeLink: 'https://example.com/path-to-your-video.mp4'
    
  }
];

function Upcomingclass() {
  return (
    <div className='Upcoming'>
      <h2>Upcoming UPSC Classes</h2>
      <ul className='upcoming-list'>
        {upcomingClasses.map((cls) => (
          <li key={cls.id} className='upcoming-item'>
            <h3>{cls.title}</h3>
            <p><strong>Date:</strong> {cls.date}</p>
            <p><strong>Time:</strong> {cls.time}</p>
            <p><strong>Duration:</strong> {cls.duration}</p>
          
            <br />
            <a href={cls.youtubeLink} target="_blank" rel="noopener noreferrer" className='youtube-link'>
             Start
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Upcomingclass;
