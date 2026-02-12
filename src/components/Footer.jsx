const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3>Контакти</h3>
                    <p>Гаврилов Максим Анатолійович</p>
                    <p>Email: student@sumdu.edu.ua</p>
                </div>
                <div className="footer-col">
                    <h3>Університет</h3>
                    <p>Сумський державний університет</p>
                    <p>Факультет електроніки та інформаційних технологій</p>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Bachelor Thesis Presentation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
