import { useState } from 'react';
import "../dedicatedservers/faqsection.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a dedicated server?",
      answer: "A dedicated server is a physical server that is entirely dedicated to one customer. This means you have full control over the server resources and configurations."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time to accommodate your growing needs."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support via chat, phone, and email to help you with any issues or questions."
    },
    {
      question: "Is my data secure on a dedicated server?",
      answer: "Yes, our dedicated servers come with robust security features to protect your data, including firewalls and DDoS protection."
    },
    {
      question: "How long does it take to set up a dedicated server?",
      answer: "Typically, a dedicated server can be set up within a few hours after your order is confirmed."
    },
    {
      question: "What operating systems can I install on my dedicated server?",
      answer: "You can install various operating systems, including Windows and Linux distributions, depending on your preference."
    },
    {
      question: "Do you offer backups for dedicated servers?",
      answer: "Yes, we recommend and offer backup solutions to ensure your data is always safe and recoverable."
    }
  ];

  return (
    <section className="faq-section">
      <div className="containerfaq">
        <h2 className="section-title">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div 
            className={`faq-item ${openIndex === index ? 'active' : ''}`} 
            key={index}
          >
            <h4 onClick={() => toggleFAQ(index)}>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
