// Carregar particles.js dinamicamente
(function() {
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
  script.onload = function() {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: ['#ff6a00', '#ffd800', '#00ffd0', '#00aaff'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 4, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#fff',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  };
  document.body.appendChild(script);
})();

// Modal de contato
const btnContato = document.querySelector('.banner-btn');
const modal = document.getElementById('modal-contato');
const closeBtn = document.getElementById('modal-close-btn');
const overlay = document.querySelector('.modal-overlay');

if (btnContato && modal && closeBtn && overlay) {
  btnContato.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  });
  overlay.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}

// Efeito reveal na seção Quem sou eu
function revealQuemSouEu() {
  const texto = document.querySelector('.quem-sou-eu-texto');
  const foto = document.querySelector('.quem-sou-eu-foto');
  if (!texto || !foto) return;

  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(texto);
  observer.observe(foto);
}

document.addEventListener('DOMContentLoaded', revealQuemSouEu);

// Carrossel de cursos
function initCursosCarousel() {
  const carousel = document.querySelector('.cursos-carousel');
  const btnLeft = document.querySelector('.carousel-btn-left');
  const btnRight = document.querySelector('.carousel-btn-right');
  if (!carousel || !btnLeft || !btnRight) return;

  const itemWidth = carousel.querySelector('.curso-item')?.offsetWidth || 240;
  const gap = parseInt(getComputedStyle(carousel).gap) || 32;
  const scrollAmount = itemWidth + gap;

  function updateArrows() {
    // Esconde a seta da esquerda se estiver no início
    if (carousel.scrollLeft <= 0) {
      btnLeft.style.visibility = 'hidden';
    } else {
      btnLeft.style.visibility = 'visible';
    }
    // Esconde a seta da direita se estiver no final
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 2) {
      btnRight.style.visibility = 'hidden';
    } else {
      btnRight.style.visibility = 'visible';
    }
  }

  btnLeft.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    setTimeout(updateArrows, 400);
  });
  btnRight.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(updateArrows, 400);
  });
  carousel.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
}

document.addEventListener('DOMContentLoaded', initCursosCarousel);

// Efeito Matrix/Programação no fundo do body
function startProgBgCanvas() {
  const canvas = document.getElementById('prog-bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const symbols = ['{', '}', ';', '<', '>', '/', '=', '(', ')', '[', ']', '|', '&', '%', '$', '#'];
  const fontSize = 22;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(17,17,17,0.18)';
    ctx.fillRect(0, 0, width, height);
    ctx.font = fontSize + 'px monospace';
    ctx.textAlign = 'center';
    for (let i = 0; i < columns; i++) {
      const text = symbols[Math.floor(Math.random() * symbols.length)];
      ctx.fillStyle = '#ffd800';
      ctx.shadowColor = '#ff6a00';
      ctx.shadowBlur = 8;
      ctx.fillText(text, i * fontSize + fontSize/2, drops[i] * fontSize);
      ctx.shadowBlur = 0;
      if (Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
      if (drops[i] * fontSize > height) drops[i] = 0;
    }
  }

  let animId;
  function animate() {
    draw();
    animId = requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });
}

document.addEventListener('DOMContentLoaded', startProgBgCanvas); 