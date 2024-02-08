import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Header from './components/Header';
import Menu from './components/Menu';
import Testimonial from './components/Testimonials';
import About from './components/About'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Menu />
      <Testimonial />
      <About />
      <Footer/>
    </>
  );
}

export default App;
