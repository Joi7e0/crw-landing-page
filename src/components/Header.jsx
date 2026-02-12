import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-wrapper">
                    <img src="/logo.jpg" alt="Sumy State University Logo" className="logo" />
                    <div className="logo-text">
                        <span className="uni-name">СумДУ</span>
                        <span className="dept-name">Факультет ЕлІТ</span>
                    </div>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>

                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <a href="#hero" onClick={() => setIsMenuOpen(false)}>Головна</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>Про проєкт</a>
                    <a href="#tasks" onClick={() => setIsMenuOpen(false)}>Завдання</a>
                    <a href="#methodology" onClick={() => setIsMenuOpen(false)}>Архітектура</a>
                    <a href="#results" onClick={() => setIsMenuOpen(false)}>Результати</a>
                    <a href="#contact" onClick={() => setIsMenuOpen(false)}>Контакти</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
