function initFaq() {
  const items = document.querySelectorAll('.faq__item');

  items.forEach((item) => {
    const question = item.querySelector('.faq__question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq__item--open');

      items.forEach((other) => {
        other.classList.remove('faq__item--open');
      });

      if (!isOpen) {
        item.classList.add('faq__item--open');
      }
    });
  });
}
