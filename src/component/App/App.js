import React from 'react';

import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar'
import { StyledBg} from './App.styled'
import Home from '../Home/Home'
import Exp from '../Exp/Exp'
import Projects from '../Projects/Projects'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'
import AppNavbar from '../Test'




function App() {
  
  return (
    <React.Fragment>
      <StyledBg>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exp' element={<Exp />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/test' element={<AppNavbar />} />
        </Routes>
        <Footer />
      </StyledBg>
      
    </React.Fragment>
  );
}

export default App;
