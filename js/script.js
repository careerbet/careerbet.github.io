var checkbox = document.querySelector('.theme-switch__checkbox');

checkbox.addEventListener('change', function() {
    transition();
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})

function transition() {
    document.documentElement.classList.add('transition');
    setTimeout(function() {
        document.documentElement.classList.remove('transition');
    },
        250)
}
var en = {
    'name': '<h1>Daniil Shutkin 💻</h1><h2>Mobile developer</h2>',
    'theme': '<span>Mode</span>',
    'language': '<span>Language</span>',
    'description': '<b>About me:</b> I had another page with a bunch of projects, but unfortunately Github itself deleted my account without explanation. So I started from scratch.',
    'experience_work' : 'Experience 💼',
    'name_of_two_company' : 'Yekaterinburg Metro',
    'description_of_two_company' : '<b>Description: </b><br>- Support for systems working with biometrics, setting up monitoring (Zabbix, Grafana) of the metro system and analyzing logs.<br>- A small part of working with PostgreSQL, optimizing old code, using transactions, as well as creating reports using JOINs.<br>- Experience with Docker and Docker-Compose to containerize applications and manage their deployment.<br>- Continuous (CI/CD) integration to automate build and deployment processes.<br>- Setting up SSH connections via Xshell/Termius/MobaXterm. Uploading equipment logs via WinSCP.',
    'position_of_two_company' : '<b>Position: </b>System Engineer-Programmer',
    'technologies_of_two_company' : '<b>Technologies: </b>Zabbix, PostgreSQL, CI/CD',
    'name_of_first_company' : 'JSC "Vector"',
    'description_of_first_company' : '<b>Description: </b><br>- Administration of Windows/RedOS using PowerShell and Bash scripts (CLI Linux).<br>- Setting up Hyper-V and VMWare.<br>- Working with SQL Oracle (for reporting), using EXCEL dashboards in work, office work (report on the work done).<br>- Assisting staff with CRM.',
    'position_of_first_company' : '<b>Position: </b>Computer center technician',
    'technologies_of_first_company' : '<b>Technologies: </b>Oracle SQL, PowerShell, CLI Linux(Bash)',
    'ekb_place': 'Yekaterinburg, Russia',
    'education': '<h3>Education 🎓</h3>',
    'ekb_two': 'Ural State Mining University',
    'special_ekb_two': 'Informatics and Computer Science',
    'ekb_one': 'Ural Polytechnic College',
    'special_ekb_one': 'Programming in computer applications',
    'serov_place': 'Serov, Russia',
    'serov': 'Serov Metallurgical College',
    'special_serov': 'Computer networks',
    'skills': '<h3>Skills 🏆</h3>',
    'description_skills_languages' : '<b>Languages: </b>&nbsp;SQL, Swift, Kotlin',
    'description_skills_stack' : '<b>Stack: </b>&nbsp;UIKit, MVC, MVVM, SwiftUI, REST API, SQLite',
    'description_skills_tools' : '<b>Tools: </b>&nbsp;Git, Docker, Lottie, Atlassian Jira, Bitbucket, Gitlab, Dashboards, VS CODE, SOLID, Scrum, JSON, XML',
}; var ru = {
    'name': '<h1>Даниил Шуткин 💻</h1><h2>Мобильный разработчик</h2>',
    'theme': '<span>Режим</span>',
    'language': '<span>Язык</span>',
    'description': '<b>О себе:</b> У меня была еще одна страница с кучей проектов, но, к сожалению, сам Github удалил мою учетную запись без объяснения причин. Поэтому я начал с нуля.',
    'experience_work' : 'Опыт работы 💼',
    'name_of_two_company' : 'Екатеринбургский Метрополитен',
    'description_of_two_company' : '<b>Описание: </b><br>- Поддержка систем, работающих с биометрией, настройка мониторинга (Zabbix, Grafana) системы метро и анализ логов.<br>- Небольшая часть работы с PostgreSQL, оптимизации старого кода, использования транзакций, а также создания отчетов с помощью JOINs.<br>- Опыт работы с Docker и Docker-Compose для контейнеризации приложений и управления их развертыванием.<br>- Непрерывная (CI/CD) интеграция для автоматизации процессов сборки и развертывания.<br>- Настройка SSH-соединений через Xshell/Termius/MobaXterm. Выгрузка данных оборудования через WinSCP.',
    'position_of_two_company' : '<b>Позиция: </b>Системный инженер-программист',
    'technologies_of_two_company' : '<b>Технологии: </b>Zabbix, PostgreSQL, CI/CD',
    'name_of_first_company' : 'АО "Вектор"',
    'description_of_first_company' : '<b>Описание: </b><br>- Администрирование Windows/RedOS с использованием скриптов PowerShell и Bash (CLI Linux).<br>- Настройка Hyper-V и VMWare.<br>- Работа с SQL Oracle (для составления отчетов), использование dashboards EXCEL в работе, делопроизводство (отчет о проделанной работе).<br>- Помощь персоналу с CRM.',
    'position_of_first_company' : '<b>Позиция: </b>Техник вычислительного центра',
    'technologies_of_first_company' : '<b>Технологии: </b>Oracle SQL, PowerShell, CLI Linux(Bash)',
    'ekb_place': 'Екатеринбург, Россия',
    'education': '<h3>Образование 🎓</h3>',
    'ekb_two': 'Ural State Mining University',
    'special_ekb_two': 'Информатика и вычислительная техника',
    'ekb_one': 'Уральский Политехнический Колледж',
    'special_ekb_one': 'Программирование в компьютерных системах',
    'serov_place': 'Серов, Россия',
    'serov': 'Серовский Металлургический Колледж',
    'special_serov': 'Компьютерные сети',
    'skills': '<h3>Навыки 🏆</h3>',
    'description_skills_languages' : '<b>Языки: </b>&nbsp;SQL, Swift, Kotlin',
    'description_skills_stack' : '<b>Стек: </b>&nbsp;UIKit, MVC, MVVM, SwiftUI, REST API, SQLite',
    'description_skills_tools' : '<b>Инструменты: </b>&nbsp;Git, Docker, Lottie, Atlassian Jira, Bitbucket, Gitlab, Dashboards, VS CODE, SOLID, Scrum, JSON, XML',
}; 
changeLagnuage();
function changeLagnuage() {
    let language = lang.checked ? ru: en; document.querySelectorAll('[text], [data-text]').forEach(el => {
    var attr = el.hasAttribute('data-text') ? 'data-text' : 'text';
    el.innerHTML = language[el.getAttribute(attr)];
    })
}
