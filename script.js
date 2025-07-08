// Scroll suave ao clicar no menu
const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Efeito de digitação no título principal
const typedTitle = document.getElementById('typed-title');
if (typedTitle) {
  const original = 'Quem sou eu?';
  typedTitle.innerHTML = '';
  let i = 0;
  function type() {
    if (i < original.length) {
      typedTitle.innerHTML += original[i];
      i++;
      setTimeout(type, 28); // mais rápido
    }
  }
  setTimeout(type, 200);
}

// Fade-in nas seções ao aparecer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('main section').forEach(sec => {
  sec.classList.add('hidden');
  observer.observe(sec);
});

// Destaque animado no menu conforme rolagem
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      const id = sec.getAttribute('id');
      const activeLink = document.querySelector('nav a[href="#' + id + '"]');
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Fade-in CSS classes (adicione ao style.css):
// .hidden { opacity: 0; transform: translateY(40px); transition: all 0.7s cubic-bezier(.4,0,.2,1); }
// .show { opacity: 1; transform: none; } 