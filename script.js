// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Contact Form Handling (Frontend Only)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message (in a real app, this would send to a server)
            alert(`Thank you, ${name}! Your message has been sent successfully.\n\nNote: This is a frontend demonstration. For actual contact, please use the email provided on the site.`);
            
            // Reset form
            contactForm.reset();
            
            // Log to console for demo purposes
            console.log('Contact Form Submission:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Subject:', subject);
            console.log('Message:', message);
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                
                // Calculate header height for offset
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
    });
    
    // Animate elements on scroll using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // For timeline items, add specific animation class
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                
                // For skill cards
                if (entry.target.classList.contains('skill-category')) {
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const elementsToAnimate = document.querySelectorAll('.timeline-item, .skill-category, .education-card, .highlight-card');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
        
        // Set initial state for animation
        if (element.classList.contains('timeline-item')) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        
        if (element.classList.contains('skill-category') || element.classList.contains('education-card') || element.classList.contains('highlight-card')) {
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'transform 0.6s ease';
        }
    });
    
    // Current year in footer
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.footer-bottom p:first-child');
    yearElements.forEach(element => {
        element.innerHTML = element.innerHTML.replace('2025', currentYear);
    });
    
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Console greeting
    console.log('%c👋 Hello! Welcome to Talha BOYALIKLI\'s Personal Website', 'color: #3498db; font-size: 16px; font-weight: bold;');
    console.log('%cThis site was created based on CV information provided.', 'color: #7f8c8d;');
});

// Add some interactivity to the hero image
document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.image-placeholder');
    if (heroImage) {
        heroImage.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(5deg) scale(1.05)';
            this.style.transition = 'transform 0.5s ease';
        });
        
        heroImage.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg) scale(1)';
        });
    }
    
    // Animate skill icons on hover
    const skillIcons = document.querySelectorAll('.skill-category h3 i');
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Add click effect to education cards
    const eduCards = document.querySelectorAll('.education-card');
    eduCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 150);
        });
    });
});

// Page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});