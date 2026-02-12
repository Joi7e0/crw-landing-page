import { useState, useEffect } from 'react'
import './App.css'
import Slide from './components/Slide'

const slides = [
  {
    id: 1,
    title: "Presentation App",
    content: <p>Welcome to the future of web presentations.<br />Built with React & Vite.</p>
  },
  {
    id: 2,
    title: "Premium Design",
    content: <p>Experience dark mode elegance with smooth gradients and glassmorphism effects.</p>
  },
  {
    id: 3,
    title: "Interactive",
    content: <p>Fully responsive and keyboard accessible navigation.</p>
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(curr => curr + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(curr => curr - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="presentation-container">
      <Slide
        key={currentSlide} // Key forces re-render for animation
        title={slides[currentSlide].title}
        content={slides[currentSlide].content}
      />

      <div className="controls">
        <button
          className="nav-btn"
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <div style={{ alignSelf: 'center', color: '#666' }}>
          {currentSlide + 1} / {slides.length}
        </div>
        <button
          className="nav-btn"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
