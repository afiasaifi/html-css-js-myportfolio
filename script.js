

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let currentSlide = 0;

function moveCarousel(direction) {
    const slides = document.querySelectorAll('.project-slide');
    
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Calculate new slide index
    currentSlide += direction;
    
    // Loop around if at the end
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
}

// Light/Dark Mode Toggle
const themeIcon = document.getElementById("icon");
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    themeIcon.src = savedTheme === "dark"
        ? "./assets/sun.png"
        : "./assets/moon.png";
}

// Toggle theme on click
themeIcon.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "dark";

    root.setAttribute("data-theme", isDark ? "light" : "dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");

    themeIcon.src = isDark
        ? "./assets/moon.png"
        : "./assets/sun.png";
});