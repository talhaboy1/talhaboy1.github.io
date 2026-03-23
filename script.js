// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('.navbar')?.offsetHeight || 70;
            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
            document.querySelector('.nav-links')?.classList.remove('active');
        }
    });
});

// Mobile menu toggle
document.querySelector('.menu-toggle')?.addEventListener('click', function() {
    document.querySelector('.nav-links')?.classList.toggle('active');
});

// Contact form
document.getElementById('messageForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (Demo)');
    this.reset();
});

// Scroll animations with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    // Elements are visible by default, animate them when they enter viewport
    const animTargets = document.querySelectorAll('.timeline-item, .skill-category, .highlight-card, .education-item');

    if ('IntersectionObserver' in window) {
        // Add initial hidden state via CSS class
        animTargets.forEach(el => el.classList.add('animate-on-scroll'));

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

        animTargets.forEach(el => observer.observe(el));
    }

    // Navbar shadow on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.boxShadow = window.scrollY > 50
                ? '0 4px 20px rgba(0,0,0,0.15)'
                : '0 2px 10px rgba(0,0,0,0.1)';
        }
    });
});
