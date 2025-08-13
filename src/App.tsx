import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import SolutionsAndServices from './components/SolutionsAndServices';
import Pricing from './components/Pricing';
import Resources from './components/Resources';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <SolutionsAndServices />
      <Pricing />
      <Resources />
      <About />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
