import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  // Header mein active link highlight ke liye
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActivePage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="App">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main>
        {activePage === 'home' && <Home />}
        {activePage === 'about' && <About />}
        {activePage === 'services' && <Services />}
        {activePage === 'projects' && <Projects />}
        {activePage === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;