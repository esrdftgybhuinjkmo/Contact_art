import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Services, Team, Contact, Blog, Home, Projects } from './Pages';
import './App.css';
import React from 'react';
import Reactio from './img/header/A.png'
import photointerno from './img/header/A.png'

import facebook from './img/header/facebook.png'
import twitter from './img/header/twitter.png'
import insta from './img/header/insta.png'
import instagram from './img/header/instagram.png'




function App() {
  return (
    <Router>
      
      <div className='header-conteiner'>
        <img id='logo' src={Reactio} alt="" />
        
       

      <div className="header">
        <Link to={'/'}>Home</Link>
        <Link to={'/blog'}>blog</Link>
        <Link to={'/contact'}>contact</Link>
        <Link to={'/team'}>team</Link>
        <Link to={'/services'}>services</Link>
        <Link to={'/projects'}>projects</Link>

      </div>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>

      
      </Routes>
      <div>
        <footer className='footer'>
          <div className='popi'>
            <div className='internoplus'>
              <div className='interno_interno'>
                <img src={photointerno} alt="" />
                <h1>interno </h1>
              </div>
                <p className='it'>It is a long established fact that a reader</p>
                <p className='its'>will be distracted lookings</p>
              <div >
                <img className='facebook_image'src={facebook} alt="" />
                <img className='twitter_image' src={twitter} alt="" />
                <img className='insta_image'src={insta} alt="" />
                <img className='intagram_image'src={instagram} alt="" />

                
              </div>

            </div>
            <div className='Pages textnumber1'>
              <h5>Pages</h5>
              <h5>About Us</h5>
              <h5>Our Projects</h5>
              <h5>Our Team</h5>
              <h5>Contact Us</h5>
              <h5>Services</h5>

            </div>
            <div className='Services textnumber1'>
              <h5>Services</h5>
              <h5>About Us</h5>
              <h5>Our Projects</h5>
              <h5>Our Team</h5>
              <h5>Contact Us</h5>
              <h5>Services</h5>
            </div>
            <div className='Contact textnumber1'>
              <h5>55 East Birchwood Ave.</h5>
              <h5>Brooklyn, New York 1120</h5>
              <h5>contact@interno.com</h5>

            </div>
          </div>
          
        </footer>
      </div>

      
    </Router>
  );
}

export default App;
