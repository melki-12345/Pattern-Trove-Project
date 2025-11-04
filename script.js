// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add parallax effect to background
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.body.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
});

document.addEventListener('DOMContentLoaded', () => {

    // Mobile menu functionality
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if(mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Update cart count on page load
    updateCartCount();

    // Parallax effect for background on scroll
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const bg = document.querySelector('.background-image');
        if (bg) {
            bg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Stagger animation for side-images container
                if (entry.target.classList.contains('side-images')) {
                    const images = entry.target.querySelectorAll('.side-image');
                    images.forEach((img, index) => {
                        setTimeout(() => {
                            img.style.opacity = '1';
                            img.style.transform = 'translateY(0)';
                        }, index * 200);
                    });
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe elements
    document.querySelectorAll('.side-images, .side-image, .content-box').forEach(el => {
        observer.observe(el);
    });

    // Side image hover and mouse move effects
    const sideImages = document.querySelectorAll('.side-image');

    sideImages.forEach(image => {
        const img = image.querySelector('img');

        // Initial state
        image.style.opacity = '0';
        image.style.transform = 'scale(0.95) translateY(30px)';

        // Mouse enter effect
        image.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
            img.style.filter = 'brightness(1.1)';

            image.style.transform = 'scale(1.02) translateY(-10px)';
            image.style.boxShadow = `
                0 20px 40px rgba(0, 0, 0, 0.4),
                0 0 20px rgba(255, 106, 0, 0.2)
            `;
        });

        // Mouse leave effect
        image.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.filter = 'brightness(0.9)';

            image.style.transform = 'scale(1) translateY(0)';
            image.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });

        // Mouse move effect for 3D tilt
        image.addEventListener('mousemove', (e) => {
            const rect = image.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            image.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                scale(1.02)
            `;
        });
    });

    // Staggered animation delays
    const leftImages = document.querySelectorAll('.side-images.left .side-image');
    const rightImages = document.querySelectorAll('.side-images.right .side-image');

    leftImages.forEach((image, index) => {
        image.style.transitionDelay = `${index * 0.2}s`;
    });

    rightImages.forEach((image, index) => {
        image.style.transitionDelay = `${index * 0.2}s`;
    });
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}
