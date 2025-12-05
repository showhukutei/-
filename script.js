document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.hero-content, .hero-image, .news-item, .service-card, .service-item, .company-content, .contact-buttons');

    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });

    // Opening Animation
    const openingAnimation = document.querySelector('.opening-animation');
    if (openingAnimation) {
        setTimeout(() => {
            openingAnimation.classList.add('hidden');
        }, 2500); // Match animation duration
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

});
