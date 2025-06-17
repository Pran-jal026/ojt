import React from 'react';
import './Contact.css';
import Header from '../components/header/Header';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-header-wrapper">
        <Header />
      </div>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have questions about admissions, programs,
          or campus life, our team is here to help.
        </p>

        <h2>General Enquiries</h2>
        <p>
          <strong>Vivekanand College Main Campus</strong><br />
          Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071<br />
          Phone: +91 12345 67890<br />
          Email: info@vivekanandcollege.edu<br />
          Office Hours: Monday – Friday, 9:00 AM – 5:00 PM IST
        </p>

        <h2>Admissions Office</h2>
        <p>
          Phone: +91 98765 43210<br />
          Email: admissions@vivekanandcollege.edu
        </p>

        <h2>Student Support Services</h2>
        <p>
          Phone: +91 87654 32109<br />
          Email: studentsupport@vivekanandcollege.edu
        </p>

        <h2>Find Us on the Map</h2>
        <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
        <p><a href="#">View on Google Maps</a></p>

        <h2>Send Us a Message</h2>
        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
      </div>
    </div>
  );
};

export default ContactPage;