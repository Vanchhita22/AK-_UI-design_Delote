// src/components/DigitalLibrary.js
import React from 'react';
import '../Asserts/style/digital.css'; // Add your styles here

const resources = [
  { id: 1, title: 'Indian Polity', type: 'PDF', link: 'https://www.india.gov.in/my-government/documents/policy' },
  { id: 2, title: 'Economic Survey', type: 'E-book', link: 'https://www.indiabudget.gov.in/economicsurvey/' },
  { id: 3, title: 'Geography Notes', type: 'PDF', link: 'https://byjus.com/free-ias-prep/ncert-geography-notes/' },
  
];

function DigitalLibrary() {
  return (
    <div className='digital-library'>
      <h2>Digital Library</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource.id}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.title} ({resource.type})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DigitalLibrary;
