const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navigationPill = document.getElementById("navigationPill");
const navItems = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

function updateHeader() {
    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

function closeMobileMenu() {
    navigationPill.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
}

window.addEventListener("scroll", updateHeader);
updateHeader();

menuToggle.addEventListener("click", () => {
    const isOpen = navigationPill.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

navItems.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 170;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});
