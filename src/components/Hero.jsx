const Hero = () => {
    return (
        <section id="hero" className="hero-section" aria-labelledby="hero-title">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge" aria-hidden="true">Bachelor Thesis 2026</span>
                    <h1 id="hero-title" className="hero-title">
                        Графічний інтерфейс налаштування динамічної маршрутизації Cisco
                    </h1>
                    <p className="hero-subtitle">
                        Бакалаврська кваліфікаційна робота зі спеціальності "Комп'ютерні науки"
                    </p>
                    <div className="hero-meta">
                        <p><strong>Виконав:</strong> Гаврилов Максим Анатолійович</p>
                        <p><strong>Керівник:</strong> Власенко Олександр Володимирович</p>
                    </div>
                    <a href="#about" className="cta-button">Дізнатися більше про проєкт</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
