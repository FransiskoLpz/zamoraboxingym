import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Coaches from './components/Coaches';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Comments from './components/Comments';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Hero />
        <About />
        <Schedule />
        <Coaches />
        <Services />
        <Gallery />
        <Comments />
        <Contact />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;