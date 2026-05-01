// --- 1. Hero Slider Logic ---
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let sliderInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlideIndex = index;
}

function nextSlide() {
    let next = (currentSlideIndex + 1) % slides.length;
    showSlide(next);
}

function currentSlide(index) {
    clearInterval(sliderInterval); // Reset timer saat diklik manual
    showSlide(index);
    startSlider();
}

function startSlider() {
    sliderInterval = setInterval(nextSlide, 5000); // Berubah tiap 5 detik
}

// Inisialisasi Slider
startSlider();

// --- 2. Sticky Navbar ---
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('sticky', window.scrollY > 50);
});

// --- 3. Scroll Reveal Animation (Intersection Observer) ---
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(section => {
    observer.observe(section);
});

// --- 4. Mobile Hamburger Menu ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu saat link diklik (untuk mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// --- 5. Theme Toggle (Dark/Light Mode) ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.replace('dark-mode', 'light-mode');
        themeToggle.innerText = '🌙';
    } else {
        body.classList.replace('light-mode', 'dark-mode');
        themeToggle.innerText = '☀️';
    }
});

// --- 6. Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

