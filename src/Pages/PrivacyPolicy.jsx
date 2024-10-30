import "../Pages/styles/about.css";
import "../assets/img/banner-about.webp";
import images from "../Utils/images";
import "../Pages/styles/TermOfServices.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <HelmetProvider>
      <div className="about__box">
        <Helmet>
          <title>Privacy Policy - DonHoster</title>
          <meta name="description" content="Read DonHoster's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our practices and procedures to ensure your data is handled responsibly." />
          <meta name="keywords" content="privacy policy, data protection, personal information, DonHoster privacy, data handling" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.donhoster.com/privacy-policy" />
          <meta property="og:title" content="Privacy Policy - DonHoster" />
          <meta property="og:description" content="Read DonHoster's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our practices and procedures to ensure your data is handled responsibly." />
          <meta property="og:url" content="https://donhoster.com/privacy-policy" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://donhoster.com/images/privacy-policy-thumbnail.jpg" />
          <meta property="og:image:alt" content="Privacy Policy" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Privacy Policy - DonHoster" />
          <meta name="twitter:description" content="Read DonHoster's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our practices and procedures to ensure your data is handled responsibly." />
          <meta name="twitter:image" content="https://donhoster.com/images/privacy-policy-thumbnail.jpg" />
          <meta name="google-site-verification" content="google94b194ab78fb2b51.html" />
          <meta name="ahrefs-site-verification" content="b1b407b17742f4b1f2511abaa6ef60a204af93779773732963c4500166c3efaa" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Privacy Policy",
                "description": "Read DonHoster's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our practices and procedures to ensure your data is handled responsibly.",
                "url": "https://donhoster.com/privacy-policy",
                "mainEntity": {
                  "@type": "LegalService",
                  "name": "DonHoster Privacy Policy",
                  "url": "https://donhoster.com/privacy-policy"
                }
              }
            `}
          </script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-E8HRCWRKGG"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E8HRCWRKGG');
            `}
          </script>
        </Helmet>
        <h1 className="about__title">Privacy Policy</h1>
        <h3 className="about__subtitle">Values stem from our focus on customer well-being</h3>
        <div className="about__p">
          <i className="bx bx-check"></i> Ethics &nbsp;
          <i className="bx bx-check"></i> Responsibility &nbsp;
          <i className="bx bx-check"></i> Respect
        </div>
        <div className="about__banner">
          <img src={images.bannerabout} alt="Banner showing Privacy Policy" />
        </div>
        <div className="term__of__services">
          <center><strong>PRIVACY AND DATA PROCESSING POLICIES</strong></center>
          <div className="term__of">
            <p>Privacy Policy describes <strong>DonHoster</strong> policies and procedures for handling Customer information and visits to our site. This Privacy Policy has been created with the understanding that Internet technologies are still evolving and Internet business methods continue to change to meet the needs and opportunities of changing technologies. As a result, this Privacy Policy is subject to change as we determine appropriate or necessary.</p>
            <p><strong>DonHoster</strong> understands the importance and responsibility that personal data protection entails. We are committed to complying with the data protection laws applicable to the company, including the General Data Protection Regulation <strong>(GDPR)</strong> of the European Union.</p>
            <p><strong>1. CUSTOMER INFORMATION</strong></p>
            <p><strong>DonHoster</strong> In the course of serving our Clients, we may acquire, store and transmit communications and information that Clients may consider private or confidential. Some of this information, such as the Clients name, address, credit card information, etc., is provided to us by Clients in order to obtain the Services. Other information, such as Customer account status, choice of Services, Customer records, etc., is created and maintained by us in the normal course of business.</p>
            <p><strong>DonHoster</strong> We may also use cookies, which are small pieces of information that a website may store in a designated file on a users computer for various reasons. In addition, we may store Customer email and other electronic communications as necessary for the transmission and delivery of such communications.</p>
            <p><strong>2. DATA SECURITY</strong></p>
            <p><strong>DonHoster</strong> has the responsibility that we will protect the confidentiality of Client information, account information and personal communications to the greatest extent possible in accordance with the law and the legitimate interests of <strong>DonHoster</strong>, its employees and other Clients who use our Services and/or the Company Network. To protect against the loss, misuse and alteration of the information collected, we have established appropriate physical, electronic and managerial procedures.</p>
            <p><strong>3. HOW CUSTOMER INFORMATION IS USED</strong></p>
            <p><strong>DonHoster</strong> We may use Customer information to provide our Customers with system information or information about new or updated products. We may also share Customer information with selected partners. For example, to provide Customers with information about products that may be of interest to them or to enable them to take advantage of special partner programs.</p>
            <p>In addition, <strong>DonHoster</strong> may share our website usage information about visitors to <strong>DonHoster</strong> website with third-party advertising companies for the purpose of targeting our Internet banner ads on <strong>DonHoster</strong> website through the use of pixel tags. The information collected by our selected partners through the use of these pixel tags is not personally identifiable.</p>
            <p><strong>4. EXCLUDE YOURSELF</strong></p>
            <p><strong>DonHoster</strong> customers may opt out of receiving new or updated product notices from us or our selected partners by sending an email to <strong>admin@donhoster.com</strong>. However, Clients may not opt out of receiving information from us that is essential to maintaining or updating Clients accounts or system information.</p>
            <p><strong>5. MODIFICATIONS</strong></p>
            <p><strong>DonHoster</strong> customers can access and modify their personal information by contacting our administration department by sending an email to <strong>admin@donhoster.com</strong>.</p>
            <p><strong>6. DISCLOSURE OF CUSTOMER INFORMATION</strong></p>
            <p><strong>DonHoster</strong> We will not disclose Customers personal and account information unless we have reason to believe that disclosing such information is necessary to identify, contact, or bring legal action against someone who may be causing harm or interfering with the rights or property of <strong>DonHoster</strong>, its Clients or others. We will disclose such Customers personal and account information if we believe in good faith that disclosure is required by law.</p>
            <p><strong>7. DISCLOSURE OF COMMUNICATIONS</strong></p>
            <p><strong>DonHoster</strong> We will not disclose to third parties (which does not include <strong>DonHoster</strong> affiliates or our officers and employees) the content of any email or other electronic communication that we store or transmit for our Clients, except when it is necessary or required to:</p>
            <p>Provide service to a customer</p>
            <p>Protect the legitimate interests of <strong>DonHoster</strong> and its Clients. Cooperate with interception orders, guarantees or other legal processes that we determine, in our sole discretion, are valid and enforceable or Provide to a law enforcement agency where the contents are inadvertently obtained by us and appear to pertain to the commission of a crime.</p>
            <p>We disclaim any intention to censor, edit, or engage in ongoing review or surveillance of communications stored on or transmitted through the Company Network by Clients and others. However, we will review, delete or block access to communications that may harm <strong>DonHoster</strong>, its Clients or third parties based on any Acceptable Use Policy applicable to the Client.</p>
            <p><strong>8. CONTACT WITH DONHOSTER</strong></p>
            <p>Any questions regarding this Privacy Policy should be submitted through our website or by contacting our administration department via email <strong>admin@donhoster.com</strong>.</p>
            <p><strong>9. MODIFICATIONS OR CHANGES</strong></p>
            <p><strong>DonHoster</strong> reserves the right to modify this Privacy Policy at any time. The effective date of this Privacy Policy is as indicated at the end of this document.</p>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default PrivacyPolicy;
