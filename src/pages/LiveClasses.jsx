import React from 'react';
import '../Asserts/style/liveclass.css'; // Import your CSS file

const RecordedClasses = () => {
  const classes = [
    {
      title: 'Introduction to UPSC',
      videoId: '7QR80WZi1Hk',
      pdfLink: 'pdfs/schedules.pdf',
    },
    {
      title: 'History - Ancient India',
      videoId: '7QR80WZi1Hk',
      pdfLink: 'pdfs/schedules.pdf',
    },
    {
      title: 'Geography - Physical Features of India',
      videoId: '7QR80WZi1Hk',
      pdfLink: 'pdfs/schedules.pdf',
    },
    // Add more class objects as needed
  ];

  return (
    <div>
      <h1>Recorded Classes</h1>
      <div className="container">
        {classes.map((classItem, index) => (
          <div className="card" key={index}>
            <h3>{`Recorded Class ${index + 1}: ${classItem.title}`}</h3>
            <iframe
              src={`https://www.youtube.com/embed/${classItem.videoId}`}
              title={`YouTube video player - ${classItem.title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <a
              className="download-link"
              href={`https://in-y2mate.com/youtube/${classItem.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Video
            </a>
            <a href={classItem.pdfLink} download>
              Download Class PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecordedClasses;
