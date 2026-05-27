function initAnimations() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const heroElements = [
    '.hero__meta',
    '.hero__title',
    '.hero__subtitle',
    '.hero__marquee',
    '.hero__actions',
    '.hero__stats',
    '.hero__tech',
  ];

  heroElements.forEach((selector, i) => {
    const el = document.querySelector(selector);
    if (el) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.1 + i * 0.1,
        ease: 'power3.out',
      });
    }
  });

  gsap.fromTo('.hero__badge-dot',
    { scale: 0 },
    { scale: 1, duration: 0.4, delay: 0.9, ease: 'back.out(2)' }
  );

  const portfolioCards = document.querySelectorAll('.portfolio__card');
  portfolioCards.forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.portfolio__grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    );
  });


}
