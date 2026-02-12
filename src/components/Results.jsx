import Section from './Section';

const Results = () => {
    const modules = [
        { title: "Базова IP-конфігурація", desc: "Налаштування основних мережевих параметрів інтерфейсів." },
        { title: "Прорoколи Маршрутизації", desc: "Налаштування OSPF, RIP, EIGRP, BGP або IS-IS." },
        { title: "IP Multicast", desc: "Підтримка групового трафіку для відео та конференцій." },
        { title: "Telephony Service", desc: "Інтеграція VoIP-телефонії в мережеву інфраструктуру." },
        { title: "Безпека", desc: "Захист доступу, паролі, SSH підключення." },
        { title: "DHCP & NAT", desc: "Автоматичний розподіл адрес та трансляція мережевих адрес." },
        { title: "SNMP Моніторинг", desc: "Відстежування стану маршрутизатора та логування." },
        { title: "Експорт Конфігурації", desc: "Генерація та збереження файлу налаштувань." }
    ];

    return (
        <Section id="results" title="Функціональні Модулі" className="bg-alt">
            <div className="results-grid">
                {modules.map((mod, index) => (
                    <div key={index} className="result-card">
                        <h4>{mod.title}</h4>
                        <p>{mod.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Results;
