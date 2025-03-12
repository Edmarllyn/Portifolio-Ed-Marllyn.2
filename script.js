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
