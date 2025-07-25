// Leer preferencia de tema al cargar
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggleTheme');
  // Lee la preferencia guardada, si existe
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (savedTheme === 'light') {
    document.body.classList.remove('dark-mode');
  } else {
    // Por defecto, modo oscuro
    document.body.classList.add('dark-mode');
  }

  if (toggleBtn) {
    toggleBtn.textContent = document.body.classList.contains('dark-mode')
      ? '☀️ Modo claro'
      : '🌙 Modo oscuro';
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      // Guarda la preferencia
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️ Modo claro';
      } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙 Modo oscuro';
      }
    });
  }

  // Traducción
  const toggleLang = document.getElementById('toggleLang');
  let lang = localStorage.getItem('lang') || 'es';

  function setLang(newLang) {
    document.querySelectorAll('.es').forEach(el => el.style.display = newLang === 'es' ? '' : 'none');
    document.querySelectorAll('.en').forEach(el => el.style.display = newLang === 'en' ? '' : 'none');
    if (toggleLang) {
      toggleLang.textContent = newLang === 'es' ? '🇬🇧 English' : '🇪🇸 Español';
    }
    localStorage.setItem('lang', newLang);
  }

  setLang(lang);

  if (toggleLang) {
    toggleLang.addEventListener('click', () => {
      lang = lang === 'es' ? 'en' : 'es';
      setLang(lang);
    });
  }
}); 