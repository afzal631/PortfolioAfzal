import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/services/Projects';
import Qualification from './components/qualifications/Qualification';
import Contact from './components/contact/contact';

const App=()=>{
  return(
    <>
    <Header />
    
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
      <Projects/>
      <Contact/>
    </main>
    
    </>

  )
}

export default App;
