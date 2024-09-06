import React, { useState } from 'react';
import '../Asserts/style/About.css';
import Poster from '../Asserts/images/post.png';
import Top from '../Asserts/images/top.png';
import ak from "../Asserts/images/AK.png";

function About() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleButtonClick = () => {
    setIsFormVisible(prev => !prev);
  };
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      setTimeout(() => {
        setIsSubmitting(false);
        setSuccessMessage('Your Call has been book successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
    } catch (error) {
      setIsSubmitting(false);
      setErrorMessage('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className='About'>
      <div className='poster-container'>
        <img src={ak} alt="Poster" />
      </div>

   
      <div className='poster-container'>
        <img src={Poster} alt="Poster" />
      </div>
     
<div className='rankers-container'>
      <h2>Our Rankers</h2>
      <img src={Top} alt="Top Rankers" />
    </div>

    <div class="services-container">
  <h2 class="services-heading">Our Services</h2>
  <ul class="services-list">
    <li class="service-item">Provided Live Session</li>
    <li class="service-item">Affordable Price</li>
    <li class="service-item">Live Session</li>
    <li class="service-item">Mock Test</li>
    <li class="service-item">Recorded Session</li>
    <li class="service-item">Session Notes</li>
    <li class="service-item">Doubt Session</li>
  </ul>
</div>

<div className='contact-container'>
      <h2>Feel Free to Contact Us</h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            rows='4'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type='submit' className='submit-button' disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Book A Call'}
        </button>
      </form>
      {successMessage && <p className='success-message'>{successMessage}</p>}
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </div>

    </div>
  );
}

export default About;
