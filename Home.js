window.onload = function() {
    const welcomeSection = document.getElementById('welcomeSection');
    const animatedTexts = document.querySelectorAll('.animated-text');

    // Trigger bounce animation for the h1 and h3
    setTimeout(() => {
        animatedTexts.forEach((text) => {
            text.style.opacity = '1'; // Make text visible
        });
    }, 1000); // Start animation 1 second after page loads

    // Slide out welcome message after 30 seconds
    setTimeout(() => {
        welcomeSection.style.transition = 'transform 2s ease-out';
        welcomeSection.style.transform = 'translateY(-100%)'; // Slide out smoothly

        setTimeout(() => {
            welcomeSection.style.display = 'none'; // Hide completely after slide out
            document.getElementById('slideshowContainer').style.display = 'block'; // Show slideshow
            startSlideshow();
        }, 2000); // Wait for slide-out animation to complete
    }, 10000); // 10 seconds

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function startSlideshow() {
        slides[currentSlide].style.left = '0%'; // Start with the first image

        setInterval(() => {
            slides[currentSlide].style.left = '-100%'; // Slide out to the left
            currentSlide = (currentSlide + 1) % totalSlides; // Move to next image
            slides[currentSlide].style.left = '0%'; // Slide in from right
        }, 7000); // 7 seconds per slide
    }

    // Arrow navigation
    window.nextSlide = function() {
        slides[currentSlide].style.left = '-100%'; // Slide out current slide
        currentSlide = (currentSlide + 1) % totalSlides; // Move to next image
        slides[currentSlide].style.left = '0%'; // Slide in next slide
    };

    window.prevSlide = function() {
        slides[currentSlide].style.left = '100%'; // Slide out current slide to the right
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Move to previous image
        slides[currentSlide].style.left = '0%'; // Slide in previous slide
    };
};

// home2 section

// Wait 10 seconds before transitioning from the hero section to the carousel
setTimeout(() => {
    // Fade out the hero section
    const heroSection = document.getElementById('hero-section');
    heroSection.style.opacity = '0';
    heroSection.style.transition = 'opacity 2s ease-in-out';

    // After the fade-out animation, slide in the carousel
    setTimeout(() => {
        heroSection.style.display = 'none'; // Hide the hero section after fading out

        // Slide in the carousel section
        const carouselSection = document.getElementById('carousel');
        carouselSection.style.left = '0'; // Slide in carousel
    }, 3000); // Match the duration of the opacity transition
}, 10000); // Wait 10 seconds before starting the transition




