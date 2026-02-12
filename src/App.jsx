import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Goals from './components/Goals';
import Methodology from './components/Methodology';
import Results from './components/Results';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-wrapper">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <About />
        <Goals />
        <Methodology />
        <Results />
      </main>
      <Footer />
    </div>
  );
}

export default App;
