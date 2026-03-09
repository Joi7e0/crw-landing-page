import { useState } from 'react';

const Header = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header" role="banner">
      <div className="container header-container">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Перемкнути тему"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <div className="logo-wrapper">
          <img src="/logo.jpg" alt="Логотип Сумського Державного Університету" className="logo" />
          <div className="logo-text">
            <span className="uni-name">СумДУ</span>
            <span className="dept-name">Факультет ЕлІТ</span>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Закрити меню' : 'Відкрити меню'}
            aria-expanded={isMenuOpen}
            aria-controls="main-nav"
          >
            <span className="menu-icon">{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        <nav
          id="main-nav"
          className={`nav ${isMenuOpen ? 'open' : ''}`}
          aria-label="Основна навігація"
        >
          <a href="#hero" onClick={closeMenu}>Головна</a>
          <a href="#about" onClick={closeMenu}>Про проєкт</a>
          <a href="#tasks" onClick={closeMenu}>Завдання</a>
          <a href="#methodology" onClick={closeMenu}>Архітектура</a>
          <a href="#results" onClick={closeMenu}>Модулі</a>
          <a href="#contact" onClick={closeMenu}>Контакти</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
