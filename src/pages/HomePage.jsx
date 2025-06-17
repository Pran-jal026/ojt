import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../components/header/Header';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Header />

      <div className="home-container">
        <div className="scroll-box">
          {/* Welcome Banner Section */}
          <div className="header-image-container">
            <br></br>
            <br></br>
            <img
              src="/images/header_top (1).jpg"
              alt="Welcome Banner"
              className="header-img"
            />
            <div className="header-overlay">
              <h1>Welcome to Vivekanand College!</h1>
              {/* { <a href="/admission" className="apply-button">Apply Now!</a> } */}
              { <Link to="/admissions">
                  <button className="apply-button">Apply Now</button>
              </Link> }
            </div>
          </div>

          {/* About Section */}
          <h1 className="page-title">About Vivekanand College</h1>
          <p>
            <strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic
            excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of
            students, empowering them to achieve their full potential.
          </p>
          <p>
            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our
            state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem
            where curiosity thrives and future leaders are shaped.
          </p>

          {/* Why Choose Us */}
          <h2>Why Choose Vivekanand College?</h2>
          <ul>
            <li>Legacy of Excellence: Decades of commitment to quality education.</li>
            <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
            <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
            <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
            <li>Strong Placements: Excellent career opportunities with leading companies.</li>
          </ul>

          
         {/* Campus Section */}
          <h2>Campus Life & Facilities</h2>
           <div className= "campus-images">
             <img src="/images/img2.jpg" alt="Campus View 1" className="campus-img" />
             <img src="/images/img3.jpg" alt="Campus View 2" className="campus-img"/>
           </div>
          <p className="caption">
                  Explore our vibrant campus and state-of-the-art facilities 
                  designed to enhance your learning experience and personal growth.
          </p>

          <p className="caption">
              Ready to explore our courses?     
          </p>
          {/* <button className="explore-courses-btn"> Explore Courses </button> */}
          <Link to= "/courses" className="explore-courses-btn">Explore Courses</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
