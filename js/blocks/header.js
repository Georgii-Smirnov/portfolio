function initHeader() {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const navLinks = document.querySelectorAll('.header__nav-link');

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
  });

  if (burger && nav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('header__burger--open');
      nav.classList.toggle('header__nav--open');
      document.body.style.overflow = nav.classList.contains('header__nav--open') ? 'hidden' : '';
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      burger?.classList.remove('header__burger--open');
      nav?.classList.remove('header__nav--open');
      document.body.style.overflow = '';
    });
  });

  const langSelect = document.querySelector('.header__lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', () => {
      setLang(langSelect.value);
    });
  }

  const themeInput = document.querySelector('.header__theme-input');
  if (themeInput) {
    themeInput.addEventListener('change', toggleTheme);
  }
}
