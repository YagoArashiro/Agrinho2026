document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Menu mobile (hambúrguer) ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open');
  });

  // Fecha o menu ao clicar em um link (mobile)
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
    });
  });

  /* ---------- 2. Revelar elementos ao rolar a página ---------- */
  const revealTargets = document.querySelectorAll(
    '.about__inner, .menu-card, .hero__text, .hero__art'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach((el) => observer.observe(el));

  /* ---------- 3. Botão "voltar ao topo" ---------- */
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- 4. Formulário de newsletter (exemplo simples) ---------- */
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const msg = document.getElementById('newsletterMsg');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (emailInput.value.trim() === '') {
      msg.textContent = 'Digite um e-mail válido.';
      return;
    }

    // Aqui você pode futuramente enviar o e-mail para um servidor.
    msg.textContent = `Inscrito com sucesso: ${emailInput.value}`;
    form.reset();
  });

});
