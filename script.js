document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menuMobile = document.querySelector(".menu-mobile");

    if (menuIcon && menuMobile) {
        menuIcon.addEventListener("click", function () {
            menuMobile.classList.toggle("active");
        });

        // Fecha o menu ao clicar fora dele
        document.addEventListener("click", function (event) {
            if (!menuIcon.contains(event.target) && !menuMobile.contains(event.target)) {
                menuMobile.classList.remove("active");
            }
        });
    }
});

// Efeito de fundo animado: Matrix code rain (código caindo)
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('bg-animated');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let fontSize = 18;
    let columns = Math.floor(width / fontSize);
    let drops = [];
    let codeChars = '01<>[]{}();=+-*/%$#@&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        columns = Math.floor(width / fontSize);
        drops = Array.from({length: columns}, () => Math.random() * -40);
    }
    window.addEventListener('resize', resize);
    resize();

    function draw() {
        ctx.fillStyle = 'rgba(24,25,36,0.18)';
        ctx.fillRect(0, 0, width, height);
        ctx.font = fontSize + "px 'Fira Mono', monospace";
        ctx.textAlign = 'center';
        for (let i = 0; i < columns; i++) {
            const char = codeChars[Math.floor(Math.random() * codeChars.length)];
            ctx.fillStyle = '#00ffd0';
            ctx.shadowColor = '#00ffd0';
            ctx.shadowBlur = 8;
            ctx.fillText(char, i * fontSize + fontSize/2, drops[i] * fontSize);
            ctx.shadowBlur = 0;
            if (Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += 1;
            if (drops[i] * fontSize > height) {
                drops[i] = Math.random() * -20;
            }
        }
    }
    setInterval(draw, 50);
});

// Efeito sonoro ao clicar na foto de perfil ou nos ícones sociais
const clickSound = new Audio('click.mp3'); // Adicione um arquivo click.mp3 na raiz ou ajuste o caminho

function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

document.addEventListener('DOMContentLoaded', () => {
    // Foto de perfil
    const profileImg = document.querySelector('.profile-img img');
    if (profileImg) {
        profileImg.addEventListener('click', playClickSound);
    }
    // Ícones sociais
    document.querySelectorAll('.footer-social a').forEach(a => {
        a.addEventListener('click', playClickSound);
    });
});
