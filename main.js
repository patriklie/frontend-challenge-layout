const links = document.querySelector(".links");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const backdrop = document.querySelector(".backdrop");

menuOpen.addEventListener('click', () => {
    links.classList.add("active");
    menuOpen.classList.add("active");
    menuClose.classList.add("active");
    backdrop.classList.add("active");
});

menuClose.addEventListener('click', () => {
    links.classList.remove("active");
    menuOpen.classList.remove("active");
    menuClose.classList.remove("active");
    backdrop.classList.remove("active");
});

backdrop.addEventListener('click', () => {
    links.classList.remove("active");
    menuOpen.classList.remove("active");
    menuClose.classList.remove("active");
    backdrop.classList.remove("active");
});