import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';
import NotFoundPage from './pages/NotFoundPage';


const App=() => {
  return (
    <>    
      <div>
        <BrowserRouter>  
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/AboutPage' element={<AboutPage/>}></Route>
                <Route path='/AdmissionPage' element={<AdmissionsPage/>}></Route>
                <Route path='/ContactPage' element={<ContactPage/>}></Route>
                <Route path='/CoursesPage' element={<CoursesPage/>}></Route>
                <Route path='/NotFoundPage' element={<NotFoundPage/>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
