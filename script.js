//Переключение темы
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const menuIcon = document.getElementById('menu-icon'); // Получаем элемент меню
    
    // Проверяем, сохранена ли тема в localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.classList.toggle('light-theme', currentTheme === 'light');
      // Устанавливаем цвет для иконки в зависимости от темы
      menuIcon.classList.toggle('light-theme', currentTheme === 'light');
    }
  
    themeToggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      
      // Сохраняем выбранную тему в localStorage
      const newTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);

      // Обновляем цвет для иконки в зависимости от темы
      menuIcon.classList.toggle('light-theme', newTheme === 'light');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const languageToggleButton = document.getElementById('language-toggle');

    // Определяем имя и фамилию отдельно
    const firstName = {
            en: "Daniil",
            ru: "Даниил"
    };
    const lastName = {
            en: "Shutkin",
            ru: "Шуткин"
    };

    const content = {
        en: {
            home: "Home",
            experience: "Experience",
            skills: "Skills",
            testimonials: "Testimonials",
            projects: "Projects",
            donate: "Donate"
        },
        ru: {
            home: "Главная",
            experience: "Опыт",
            skills: "Навыки",
            testimonials: "Отзывы",
            projects: "Проекты",
            donate: "Пожертвовать"
        }
    };

    // Получаем текущий язык из localStorage или устанавливаем по умолчанию
    let currentLanguage = localStorage.getItem('language') || 'en';
    updateContent(currentLanguage);

    languageToggleButton.addEventListener('click', () => {
        // Переключаем язык
        currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
        localStorage.setItem('language', currentLanguage);
        updateContent(currentLanguage);
    });

    function updateContent(language) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (content[language][key]) {
                element.textContent = content[language][key];
            }
        });

        // Обновляем имя и фамилию
        const firstNameElement = document.querySelector('.firstName');
        const lastNameElement = document.querySelector('.lastName');
        firstNameElement.textContent = firstName[language]; // Устанавливаем имя
        lastNameElement.textContent = lastName[language]; // Устанавливаем фамилию
    }

    // Устанавливаем имя и фамилию при загрузке страницы
    const firstNameElement = document.querySelector('.firstName');
    const lastNameElement = document.querySelector('.lastName');
    firstNameElement.textContent = firstName[currentLanguage]; // Устанавливаем имя в зависимости от языка
    lastNameElement.textContent = lastName[currentLanguage]; // Устанавливаем фамилию в зависимости от языка
});