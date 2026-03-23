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
            // Close mobile menu
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
    alert('Mesajınız gönderildi! (Demo)');
    this.reset();
});

// Scroll animations with Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item, .skill-category, .highlight-card, .education-item, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Navbar shadow on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.boxShadow = window.scrollY > 50
                ? '0 4px 20px rgba(0,0,0,0.15)'
                : '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // Modal functionality
    const readMoreButtons = document.querySelectorAll('.blog-read-more');
    const modalIds = ['modal-blog-1', 'modal-blog-2'];

    readMoreButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (index < modalIds.length) {
                const modal = document.getElementById(modalIds[index]);
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    });

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal')?.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
            document.body.style.overflow = '';
        }
    });
});
