document.addEventListener('DOMContentLoaded', () => {

    // Navbar Burger Logic
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    // Initialize Glide.js Carousel
    if (document.querySelector('.glide')) {
        new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            gap: 20,
            autoplay: 3000,
            hoverpause: true,
            breakpoints: {
                768: {
                    perView: 1
                },
                1024: {
                    perView: 2
                }
            }
        }).mount();
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close navbar on mobile if open
                const navMenu = document.querySelector('.navbar-menu');
                const navBurger = document.querySelector('.navbar-burger');
                if (navMenu.classList.contains('is-active')) {
                    navMenu.classList.remove('is-active');
                    navBurger.classList.remove('is-active');
                }
            }
        });
    });

    // Simple Form Validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('is-danger');
                } else {
                    input.classList.remove('is-danger');
                }
            });

            if (isValid) {
                alert('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

});
