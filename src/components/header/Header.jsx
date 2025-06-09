
import { Link } from 'react-router-dom';
import './header.css'


const Header = () => {
  return (
 <div className="header">
      <div className="logo">Vivekanand College</div>

      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/AboutPage" className="nav-link">About</Link>
        <Link to="/CoursesPage" className="nav-link">Courses</Link>
        <Link to="/AdmissionPage" className="nav-link">Admission</Link>
        <Link to="/ContactPage" className="nav-link">Contact</Link>
        <Link to="/NotFoundPage" className="nav-link"><button>Apply Now</button></Link>
      </nav>
    </div>

  );
};

export default Header;
