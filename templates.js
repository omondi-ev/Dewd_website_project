// Carousel Functionality
const images = document.querySelectorAll('.carousel-img');
let currentIndex = 0;
const interval = 3000;

function changeImage() {
    images.forEach((img, index) => {
        img.classList.remove('active');
        if (index === currentIndex) {
            img.classList.add('active');
        }
    });
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, interval);

// Services Animation
const services = [
    'Graphic Design',
    'Website Design',
    'Brand Identity',
    'Photography',
    'Videography'
];

let serviceIndex = 0;
let letterIndex = 0;
let currentService = '';
let isDeleting = false;
const servicesText = document.getElementById('services-text');

function typeService() {
    // Get the current service and display letter by letter
    const fullService = services[serviceIndex];
    
    if (!isDeleting) {
        currentService = fullService.slice(0, letterIndex + 1);
        letterIndex++;
        if (currentService === fullService) {
            setTimeout(() => isDeleting = true, 3000); // Hold for 3 seconds
        }
    } else {
        currentService = fullService.slice(0, letterIndex - 1);
        letterIndex--;
        if (currentService === '') {
            isDeleting = false;
            serviceIndex = (serviceIndex + 1) % services.length;
        }
    }
    
    servicesText.textContent = currentService;
    setTimeout(typeService, isDeleting ? 100 : 150); // Speed up deletion
}

typeService();
