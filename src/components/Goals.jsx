import Section from './Section';

const Goals = () => {
    return (
        <Section id="tasks" title="Мета та Завдання" className="bg-alt" aria-labelledby="tasks-title">
            <div className="goals-content">
                <div className="goal-block">
                    <h3>Мета роботи</h3>
                    <p>
                        Створення крос-платформного, веб-орієнтованого графічного інтерфейсу для зручного та безпечного
                        налаштування динамічних протоколів маршрутизації на обладнанні Cisco.
                    </p>
                </div>

                <div className="tasks-block">
                    <h3>Основні функціональні вимоги</h3>
                    <div className="requirements-grid" role="list">
                        <div className="req-card" role="listitem">
                            <h4>Налаштування Роутера</h4>
                            <p>Вибір роутера, зміна назви, налаштування паролів та SSH/Telnet.</p>
                        </div>
                        <div className="req-card" role="listitem">
                            <h4>Інтерфейси</h4>
                            <p>Додавання інтерфейсів, налаштування IP-адрес та масок підмережі.</p>
                        </div>
                        <div className="req-card" role="listitem">
                            <h4>Протоколи Маршрутизації</h4>
                            <p>Підтримка RIP, OSPF, EIGRP, BGP, IS-IS з валідацією параметрів.</p>
                        </div>
                        <div className="req-card" role="listitem">
                            <h4>Сервіси</h4>
                            <p>Налаштування DHCP, NAT, IP-телефонії та SNMP моніторингу.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Goals;
