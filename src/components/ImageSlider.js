import React, { useState } from 'react';
import '../styles/ImageSlider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: 'person1.jpg',
      name: 'Manish Sharma',
      title: 'Vice-President and Global Head of Silicon Engineering',
      description: 'A silicon enthusiast, passionate about unlocking the power of chips in Intelligent Industry. Manish is obsessed with building sovereignty for all industries. He leads Genisup’s silicon engineering journey.',
      email: '#',
      linkedin: '#'
    },
    {
      id: 2,
      image: 'person2.jpg',
      name: 'Rohit Singh',
      title: 'Chief Technology Officer',
      description: 'Rohit is an experienced leader in technology, driving innovation in AI and cloud computing. She leads our global tech strategy with a focus on scalability and efficiency.',
      email: '#',
      linkedin: '#'
    },
    {
      id: 3,
      image: 'person3.jpg',
      name: 'Hemant Singh',
      title: 'Director of Engineering',
      description: 'With a background in software development and a passion for engineering excellence, Hemant oversees all engineering projects to ensure high standards and timely delivery.',
      email: '#',
      linkedin: '#'
    },
    {
      id: 4,
      image: 'person4.jpg',
      name: 'Himanshu Patel',
      title: 'Head of Product Design',
      description: 'Himanshu is responsible for the user experience and design of all our products. Her work ensures that our products are not only functional but also a pleasure to use.',
      email: '#',
      linkedin: '#'
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            key={slide.id}
          >
            <img src={slide.image} alt={slide.name} className="expert-image" />
            <div className="expert-details">
              <div className="social-icons">
                <a href={slide.email} className="email-icon">📧</a>
                <a href={slide.linkedin} className="linkedin-icon">in</a>
              </div>
              <h3>{slide.name}</h3>
              <p>{slide.title}</p>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-controls">
        <button className="prev-slide" onClick={prevSlide}>&#10094;</button>
        <div className="slider_pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === currentSlide ? 'dot active' : 'dot'}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        <button className="next-slide" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
