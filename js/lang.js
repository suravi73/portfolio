(function () {
  function getStoredLang() {
    try {
      return localStorage.getItem('site-lang') === 'de' ? 'de' : 'en';
    } catch (e) {
      return 'en';
    }
  }

  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    try {
      localStorage.setItem('site-lang', lang);
    } catch (e) {}
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLang(getStoredLang());
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang-btn'));
      });
    });
  });
})();
