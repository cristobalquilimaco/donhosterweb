// Asegúrate de importar los estilos necesarios para que se vea bien
import "../dedicatedservers/faqsection.css"

const FAQSection = () => {
  return (
    <section className="faq-section pt-120 pb-120">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>What is a dedicated server?</h4>
          <p>A dedicated server is a physical server that is entirely dedicated to one customer. This means you have full control over the server resources and configurations.</p>
        </div>
        <div className="faq-item">
          <h4>Can I upgrade my plan later?</h4>
          <p>Yes, you can upgrade your plan at any time to accommodate your growing needs.</p>
        </div>
        <div className="faq-item">
          <h4>What kind of support do you offer?</h4>
          <p>We provide 24/7 customer support via chat, phone, and email to help you with any issues or questions.</p>
        </div>
        <div className="faq-item">
          <h4>Is my data secure on a dedicated server?</h4>
          <p>Yes, our dedicated servers come with robust security features to protect your data, including firewalls and DDoS protection.</p>
        </div>
        <div className="faq-item">
          <h4>How long does it take to set up a dedicated server?</h4>
          <p>Typically, a dedicated server can be set up within a few hours after your order is confirmed.</p>
        </div>
        <div className="faq-item">
          <h4>What operating systems can I install on my dedicated server?</h4>
          <p>You can install various operating systems, including Windows and Linux distributions, depending on your preference.</p>
        </div>
        <div className="faq-item">
          <h4>Do you offer backups for dedicated servers?</h4>
          <p>Yes, we recommend and offer backup solutions to ensure your data is always safe and recoverable.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
