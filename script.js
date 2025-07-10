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