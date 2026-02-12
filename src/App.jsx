import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Goals from './components/Goals';
import Methodology from './components/Methodology';
import Results from './components/Results';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
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
