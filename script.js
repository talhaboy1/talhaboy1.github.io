// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all "Read More" buttons in blog cards
    const readMoreButtons = document.querySelectorAll('.blog-card .btn-secondary');
    
    // Create mapping: button index -> modal id
    const modalIds = ['modal-blog-1', 'modal-blog-2'];
    
    // Add click event to each Read More button
    readMoreButtons.forEach((button, index) => {
        if (index < modalIds.length) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const modalId = modalIds[index];
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
                }
            });
            
            // Change href to # to prevent default link behavior
            button.setAttribute('href', '#');
        }
    });
    
    // Close modal when clicking on close button (×)
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    });
    
    // Close modal when clicking outside the modal content
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = ''; // Restore scrolling
                }
            });
        }
    });
});