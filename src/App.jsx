import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import NotFoundPage from './pages/NotFoundPage';
import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';

const App=() => {

  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return ( 
    <> 
     <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Pranjal Prashant Mali"
          studentPhotoUrl="/images/pranjal.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

 
      <div>
        <BrowserRouter>  
          
            <Routes>
                <Route path='/' element={<Home/>} /> 
                <Route path='/about' element={<AboutPage/>} />
                <Route path='/admissions' element={<AdmissionsPage/>} />
                <Route  path='/contact' element={<ContactPage/>} />
                <Route path='/courses' element={<CoursesPage/>} />
                <Route path="*" element={<NotFoundPage/>}/> 
              </Routes>
              <ChatbotComponent/>
        </BrowserRouter>  
      </div>
    </>
    
  );
}

export default App;
