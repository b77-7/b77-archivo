function toggleMenu() {
    const menu = document.getElementById("menu");
    const toggle = document.querySelector(".menu-toggle");
    const overlay = document.querySelector(".overlay-menu");

    menu.classList.toggle("active");
    toggle.classList.toggle("active");
    overlay.classList.toggle("active");
}

/* cerrar al clickear link */
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("active");
        document.querySelector(".menu-toggle").classList.remove("active");
        document.querySelector(".overlay-menu").classList.remove("active");
    });
});