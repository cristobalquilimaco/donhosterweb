import { useState } from 'react';
import "../dedicatedservers/faqsection.css";

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className="faq-section">
      <div className="containerfaq">
        <h2 className="section-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div 
            className={`faq-item ${openIndex === index ? 'active' : ''}`} 
            key={index}
          >
            <div className="question_and_sig" onClick={() => toggleFAQ(index)}>
              <div className='question_principal'>
              <h3 className='question'>{faq.question}</h3>
              <div className="toggle-sign">{openIndex === index ? '-' : '+'}</div>
              </div>
            </div>
            <p className='faq_answer'>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;