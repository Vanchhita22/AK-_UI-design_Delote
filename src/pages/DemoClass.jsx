import React from 'react';
import ReactPlayer from 'react-player';
import '../Asserts/style/democlass.css'; // Import your CSS file

const VideoGrid = () => {
  return (
    <div className="video-grid-container">
      <div className="video-grid-item">
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=OSR5I-0fz9g' // Video link
          controls
          width='100%'
          height='100%'
        />
        <button 
          className="download-button"
          onClick={() => window.open('https://yourdomain.com/path/to/local/OSR5I-0fz9g.mp4', '_blank')}
          style={{ backgroundColor: 'red' }} // Add a temporary red background to check visibility
        >
          Download Video
        </button>
      </div>

      <div className="video-grid-item">
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' // Another video link
          controls
          width='100%'
          height='100%'
        />
        <button 
          className="download-button"
          onClick={() => window.open('https://yourdomain.com/path/to/local/dQw4w9WgXcQ.mp4', '_blank')}
          style={{ backgroundColor: 'red' }} // Add a temporary red background to check visibility
        >
          Download Video
        </button>
      </div>

      <div className="video-grid-item">
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=OSR5I-0fz9g' // Another video link
          controls
          width='100%'
          height='100%'
        />
        <button 
          className="download-button"
          onClick={() => window.open('https://yourdomain.com/path/to/local/3JZ_D3ELwOQ.mp4', '_blank')}
          style={{ backgroundColor: 'red' }} // Add a temporary red background to check visibility
        >
          Download Video
        </button>
      </div>

      {/* Add more video grid items as needed */}
    </div>
  );
};

export default VideoGrid;
