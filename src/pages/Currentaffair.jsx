import React from 'react';
import ReactPlayer from 'react-player';
import '../Asserts/style/current.css'; // Import your CSS file

const VideoGrid = () => {
  return (
    <div className="video-grid-container">
      <div className="video-grid-item">
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=ttfetTZ_Yp8' // Replace with your video link
          controls
          width='100%'
          height='100%'
        />
      </div>
      <div className="video-grid-item">
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=_jXMQcz61bI' // Replace with your video link
          controls
          width='100%'
          height='100%'
        />
      </div>
      <div className="video-grid-item">
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=0beRsBpi3ww' // Replace with your video link
          controls
          width='100%'
          height='100%'
        />
      </div>
      
    </div>
  );
};

export default VideoGrid;
