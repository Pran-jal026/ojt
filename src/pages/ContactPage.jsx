import React from 'react';
import './Contact.css'; // Assuming CSS file for styling
import Header from '../components/header/Header';

const ContactPage = () =>  {
  return (
    <div className="contact-container">
      <Header/>
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtext">
        We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
      </p>

      <section className="contact-section">
        <h2>General Enquiries</h2>
        <p><strong>Vivekanand College Main Campus</strong><br />
          [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br />
          India
        </p>
        <p>Phone: <strong>**+91 12345 67890**</strong><br />
          Email: <strong>**info@vivekanandcollege.edu**</strong><br />
          Office Hours: Monday – Friday, 9:00 AM – 5:00 PM IST
        </p>
      </section>

      <section className="contact-section">
        <h2>Admissions Office</h2>
        <p>
          For all admission-related queries regarding undergraduate or postgraduate programs:<br />
          Phone: +91 98765 43210<br />
          Email: admissions@vivekanandcollege.edu
        </p>
      </section>

      <section className="contact-section">
        <h2>Student Support Services</h2>
        <p>
          For current student support, academic advising, or general assistance:<br />
          Phone: +91 87654 32109<br />
          Email: studentsupport@vivekanandcollege.edu
        </p>
      </section>

      <section className="contact-section">
        <h2>Find Us on the Map</h2>
        <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
        <a href="#" className="map-link">View on Google Maps</a>
      </section>

      <section className="contact-section">
        <h2>Send Us a Message</h2>
        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
      </section>
    </div>
  );
}

export default ContactPage;