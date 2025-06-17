import React from 'react';
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import './Courses.css';

const CoursesPage = () => {
  return (
    <div className="courses-wrapper">
      <Header />

      <div className="courses-container">
        <h1 className="title">Our Academic Programs</h1>
        <p className="subtitle">
          Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs
          designed to equip students with the knowledge and skills demanded by today's dynamic global landscape.
          Our curriculum is regularly updated to reflect industry trends and academic advancements.
        </p>

        <h2 className="section-title">Discover Campus Life</h2>
        <div className="video-section">
          <video controls muted loop className="video">
            <source src="/videos/clg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="video-caption">Get a glimpse of the vibrant academic and social life at Vivekanand College.</p>
        </div>

        <h2 className="section-title">Undergraduate Programs (UG)</h2>
        <ul className="list">
          <li>
            <strong>B.Sc.</strong>
            <ul>
              <li>Computer Science</li>
              <li>Information Technology</li>
              <li>Biotechnology</li>
            </ul>
          </li>
          <li>
            <strong>B.Com</strong>
            <ul>
              <li>Accounting & Finance</li>
              <li>Banking & Insurance</li>
            </ul>
          </li>
          <li>
            <strong>B.A.</strong>
            <ul>
              <li>English Literature</li>
              <li>Psychology</li>
            </ul>
          </li>
        </ul>

        <h2 className="section-title">Postgraduate Programs (PG)</h2>
        <ul className="list">
          <li>
            <strong>M.Sc.</strong>
            <ul>
              <li>Computer Science</li>
              <li>Information Technology</li>
            </ul>
          </li>
          <li><strong>M.Com</strong></li>
          <li><strong>M.A.</strong></li>
        </ul>

        <h2 className="section-title">Program Details & Fee Structure</h2>
        <table className="fee-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>Course</th>
              <th>Duration</th>
              <th>Fee (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UG</td>
              <td>B.Sc. CS</td>
              <td>3 Years</td>
              <td>85,000</td>
            </tr>
            <tr>
              <td>UG</td>
              <td>B.Com A&F</td>
              <td>3 Years</td>
              <td>70,000</td>
            </tr>
            <tr>
              <td>PG</td>
              <td>M.Sc. IT</td>
              <td>2 Years</td>
              <td>95,000</td>
            </tr>
          </tbody>
        </table>

        <h2 className="section-title">Specialized & Vocational Courses</h2>
        <p className="paragraph">
          In addition to traditional degree programs, we offer various certificate and 
          diploma courses in areas like Digital Marketing, Web Development, 
          Data Analytics, and Soft Skills Development, providing specialized training 
          for career enhancement.
        </p>

        <p className="paragraph">Have questions about a course?</p>

        <Link to="/contact" className="inquire-btn-link">
          <button className="inquire-btn">
            Inquire About Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoursesPage;