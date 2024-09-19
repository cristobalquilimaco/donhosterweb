import "../Pages/styles/about.css";
import "../assets/img/banner-about.jpg";
import images from "../Utils/images";
import "../Pages/styles/TermOfServices.css";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

const TermOfServices = () => {
  return (
    <HelmetProvider>
      <div className="about__box">
        <Helmet>
          <title>Terms of Service - DonHoster</title>
          <meta name="description" content="Read the Terms of Service for DonHoster. Learn about the rules, policies, and conditions for using our products and services. Ensure you understand the terms before making a purchase." />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://www.donhoster.com/terms-of-service" />
          <meta property="og:title" content="Terms of Service - DonHoster" />
          <meta property="og:description" content="Read the Terms of Service for DonHoster. Learn about the rules, policies, and conditions for using our products and services. Ensure you understand the terms before making a purchase." />
          <meta property="og:url" content="https://donhoster.com/terms-of-service" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://donhoster.com/images/terms-of-service-thumbnail.jpg" />
          <meta property="og:image:alt" content="Terms of Service Thumbnail" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Terms of Service - DonHoster" />
          <meta name="twitter:description" content="Read the Terms of Service for DonHoster. Learn about the rules, policies, and conditions for using our products and services. Ensure you understand the terms before making a purchase." />
          <meta name="twitter:image" content="https://donhoster.com/images/terms-of-service-thumbnail.jpg" />
          <meta name="google-site-verification" content="google94b194ab78fb2b51.html" />
          <meta name="ahrefs-site-verification" content="b1b407b17742f4b1f2511abaa6ef60a204af93779773732963c4500166c3efaa" />
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Terms of Service - DonHoster",
                "url": "https://donhoster.com/terms-of-service",
                "description": "Read the Terms of Service for DonHoster. Learn about the rules, policies, and conditions for using our products and services.",
                "publisher": {
                  "@type": "Organization",
                  "name": "DonHoster",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://donhoster.com/images/donhoster-logo.png",
                    "width": 600,
                    "height": 60
                  }
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
        <h1 className="about__title">THE COMPANY</h1>
        <h3 className="about__subtitle">Values stem from our focus on customer well-being</h3>
        <div className="about__p">
          <i className="bx bx-check"></i> Ethics &nbsp;
          <i className="bx bx-check"></i> Responsibility &nbsp;
          <i className="bx bx-check"></i> Respect
        </div>
        <div className="about__banner">
          <img src={images.bannerabout} alt="Banner About DonHoster" />
        </div>
        <div className="term__of__services">
          <strong>Terms of Service DonHoster</strong>
        </div>
        <div className="term__of">
          <p>This document expresses the terms of service to which all customers who purchase a product from our company <strong>DonHoster</strong> agree to fully accept, and under which it is governed to provide its service. Therefore, all present or future products or services are regulated under this regulation, which in turn can be modified at any time with prior notice or not, and the user accepts said changes.</p>
          <p><strong>RESPONSIBILITIES OF THE COMPANY</strong></p>
          <p><strong>1. Notices</strong></p>
          <p>The company agrees to send notifications, promotions, payment reminders and/or promotions, through tickets or email. It should be noted that in the case of payment reminders, despite the fact that the company undertakes to notify them, it is the customers duty to be aware of their expiration dates and/or renewal of services.
          For this reason, it is of the utmost importance that the client commits to supplying their contact data, current and updated, so that in this way they can effectively receive our notices, in turn notify us if they change for whatever reason, remaining exempts the company from responsibility, if an email does not reach its destination, for the reasons mentioned above.</p>
          <p><strong>2. Technical support</strong></p>
          <p>The company undertakes to provide technical support exclusively by ticket or email, only for problems related to hardware and server connectivity, but not support linked to the Software, understanding that the client is the only administrator of his product, its security, operability and the presence of backup of its content. We do not provide technical support via telephone, nor through SOCIAL NETWORKS.</p>
          <p><strong>3. Warranty</strong></p>
          <p>We cannot provide a guarantee that the service offered may not be interrupted or free of errors, that the information available from our products is free of viruses, it being understood that the client knows in advance all the dangers inherent in the use of the technologies, and the vulnerabilities they have. The client accepts and is aware that all information placed on our servers could be available to any internet user, and that they have no responsibility with us, that is, we are not responsible for the loss of your information.</p>
          <p><strong>4. Prices</strong></p>
          <p>The company is fully free to modify the price of its products at any time it wishes, whether it is the value to acquire a new service or, for its renewal; with or without prior notice to its customers.</p>
          <p>CUSTOMER RESPONSIBILITIES</p>
          <p><strong>1. Use of our products</strong></p>
          <p>The client agrees to use our products, only for legal purposes, that is, any illicit conduct or that the company considers improper, in accordance with the provisions of international standards is strictly prohibited, and the company is in all your right to analyze and make decisions or sanctions depending on the situation, even reaching the temporary or total termination of the service contract.
          The client accepts that he is fully responsible, and excludes our company, for any content in the products purchased by him, the use that is made of it, and the international legal sanctions that these may incur.</p>
          <p><strong>2. Infractions</strong></p>
          <p>The client agrees to have a respectful conduct towards our company and its employees; Considering that any action in favor of deteriorating our image, mistreating, threatening or offending, will be sufficient reason for the immediate completion of all the services provided by our company.
          Likewise, the client agrees not to execute any voluntary or involuntary action that harms any of our servers, affecting the free operation of it for other clients.</p>
          <p><strong>3. Product Suspension</strong></p>
          <p>The client understands that the non-cancellation of the value of the product before the expiration date is sufficient reason for its suspension, leaving our company a period of 72 hours for the client to communicate with our company, before it is deleted all your information in the product. If the client wishes to cancel his product, or not to continue renewing it, he must notify it through a cancellation request, with his respective justification.</p>
          <p><strong>4. Domain Acquisition</strong></p>
          <p>The client understands that the availability of a domain name is not controlled by our company, so it is the clients responsibility to wait until a registration confirmation is made. Likewise, this may not be modified until the contract is completed, so any error in your transcription or change of opinion by the client will be your responsibility; so if you want to change the name of your domain, you must register and acquire a new one, which is available.</p>
          <p><strong>5. Renewals</strong></p>
          <p>It is the clients knowledge that expired domains, which were renewed late, will have a limit of up to 10 days, which will take between 24 and 48 hours to reactivate due to the required propagation, and that they may not be available, understanding that said period of time is not controlled by us.</p>
          <p><strong>6. Domain service limitations</strong></p>
          <p>It is known to the client that the registration as well as the use of a domain can be canceled, suspended, limited or transferred, if our company, the domain provider or even if ICANN, the government or any other relevant entity, so consider, whether for reasons of dispute resolution, protection of your security, claims for infringement of intellectual property, among others.</p>
          <p><strong>7. User Identification</strong></p>
          <p>The client claims to be a legally responsible person, to be over 18 years of age or to have the authorization of their representative, the latter being legally responsible for the use given to this product and the information uploaded there. On the other hand, it also ensures that the information you provide us, email, name, telephone number or other data that is necessary, is true and that you will keep it updated.
          Finally, the client through this document also accepts the policies of treatment of their data, as well as the publication of information in the WHOIS database and its use by the company, service providers or government entities that require, <Link to="/privacy-policy/">Privacy Policies</Link>.</p>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default TermOfServices;
