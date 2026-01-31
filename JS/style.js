window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Mobile Dropdown Toggle
document.querySelectorAll(".toggle-dropdown").forEach(icon => {
    icon.addEventListener("click", (e) => {
        e.preventDefault();
        icon.closest("li").classList.toggle("active");
    });
});

