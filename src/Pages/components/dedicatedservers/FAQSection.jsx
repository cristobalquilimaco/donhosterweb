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
      answer: "A dedicated server is a physical server that is exclusively reserved for your use. Unlike shared hosting, where resources are divided among multiple users, a dedicated server provides you with full control over the hardware, allowing for enhanced performance, security, and customization."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time. We offer flexible options to accommodate your growing needs, whether it’s more resources, additional storage, or advanced features."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support through various channels, including live chat, email, and phone. Our knowledgeable support team is ready to assist you with any technical issues or questions you may have. "
    },
    {
      question: "Is my data secure on a dedicated server?",
      answer: "Absolutely. Dedicated servers offer higher levels of security compared to shared hosting. You can implement custom security measures, such as firewalls, encryption, and regular security updates, ensuring your data remains protected."
    },
    {
      question: "How long does it take to set up a dedicated server?",
      answer: "Typically, the setup process for a dedicated server takes between 24 to 48 hours. Our team works efficiently to configure your server and ensure it meets your specifications, allowing you to get started as soon as possible."
    },
    {
      question: "What operating systems can I install on my dedicated server?",
      answer: "You can install a variety of operating systems on your dedicated server, including popular options like Linux distributions (Ubuntu, CentOS, Debian) and Windows Server. You have the flexibility to choose the one that best suits your needs."
    },
    {
      question: "Do you offer backups for dedicated servers?",
      answer: "Yes, we offer backup solutions for dedicated servers. You can choose from various backup options, including scheduled backups, off-site storage, and full server snapshots, to ensure your data is always safe and easily recoverable."
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
            <div className="question_and_sig" onClick={() => toggleFAQ(index)}>
              <div className='question_principal'>
              <h4 className='question'>{faq.question}</h4>
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