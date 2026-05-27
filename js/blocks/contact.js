function initContact() {
  const form = document.querySelector('.contact__form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const button = form.querySelector('.contact__button');
    const originalText = button.textContent;
    button.textContent = currentLang === 'ru' ? 'Отправка...' : 'Sending...';
    button.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        button.textContent = currentLang === 'ru' ? 'Отправлено!' : 'Sent!';
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 3000);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch {
      button.textContent = currentLang === 'ru' ? 'Ошибка. Попробуйте ещё раз' : 'Error. Try again';
      button.disabled = false;
      setTimeout(() => {
        button.textContent = originalText;
      }, 3000);
    }
  });
}
