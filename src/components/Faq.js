import React, { useState } from 'react';
import "../styles/aboutpage.css";
import embeddedImage from '../assets/stats-2.jpg';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="section-container-about faq__container" id="faq">
        <div className="faq__image">
          <img src={embeddedImage} alt="faq" />
        </div>
        <div className="faq__content">
          <h3 className="section-subheader-about">Ask By Client</h3>
          <h2 className="section-header-about">Frequently Asked Questions</h2>
          <p className="section-description-about">
            A comprehensive resource designed to answer your most common queries
            and provide valuable insights into our products, services, and the
            industrial landscape.
          </p>
          <div className="faq__grid">
            {[
              {
                question: "What types of industrial products do you offer?",
                answer: "We specialize in providing a diverse range of industrial products, including machinery, equipment, and supplies tailored to meet the unique needs of various sectors."
              },
              {
                question: "How can I place an order for your products?",
                answer: "Placing an order is simple and convenient. Navigate to the product page, select the desired quantity, and click 'Add to Cart.' Follow the intuitive checkout process, providing necessary details."
              },
              {
                question: "Are there any warranties on your products?",
                answer: "Our commitment to customer satisfaction means that if you encounter any issues, our support team is ready to assist and find a swift resolution."
              }
            ].map((item, index) => (
              <div className="faq__card" key={index}>
                <div className="faq__header" onClick={() => toggleDescription(index)}>
                  <h4>{item.question}</h4>
                  <span><i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i></span>
                </div>
                {activeIndex === index && <div className="faq__description">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
