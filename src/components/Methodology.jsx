import Section from './Section';

const Methodology = () => {
    return (
        <Section id="methodology" title="Архітектура Системи" aria-labelledby="methodology-title">
            <div className="methodology-content">
                <p>
                    Проєкт реалізується за шаблоном <strong>Desktop Web Application</strong>, який поєднує Python-бекенд
                    із веб-інтерфейсом. Архітектура розділяє систему на бекенд (бізнес-логіка, генерація команд)
                    та фронтенд (UI).
                </p>

                <h3>Технологічний Стек</h3>
                <table className="tech-table" aria-label="Технологічний стек проєкту">
                    <thead>
                        <tr>
                            <th scope="col">Компонент</th>
                            <th scope="col">Технологія</th>
                            <th scope="col">Призначення</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>UI Framework</td>
                            <td>Eel (Python + WebView)</td>
                            <td>Інтеграція Python-backend з веб-інтерфейсом</td>
                        </tr>
                        <tr>
                            <td>Frontend Engine</td>
                            <td>HTML5 + CSS3 + JavaScript</td>
                            <td>Візуальний інтерфейс користувача</td>
                        </tr>
                        <tr>
                            <td>Backend Language</td>
                            <td>Python 3.8+</td>
                            <td>Бізнес-логіка, генерація конфігурацій</td>
                        </tr>
                        <tr>
                            <td>Конфігураційний двигун</td>
                            <td>Власний шаблон</td>
                            <td>Генерація команд Cisco IOS</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Section>
    );
};

export default Methodology;
