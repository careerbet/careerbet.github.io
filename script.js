//Переключение темы
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    
    // Проверяем, сохранена ли тема в localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.classList.toggle('light-theme', currentTheme === 'light');
    }
  
    themeToggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      
      // Сохраняем выбранную тему в localStorage
      const newTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
    });
  });