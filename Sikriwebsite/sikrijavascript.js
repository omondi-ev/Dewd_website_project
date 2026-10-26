let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);

// Change slides every 10 seconds
setInterval(nextSlide, 10000);


//intro-section//




//Extra curricular activities//

document.addEventListener('DOMContentLoaded', () => {
    const iframes = document.querySelectorAll('.carousel iframe');
    let currentIndex = 0;

    function showNextVideo() {
        iframes[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % iframes.length;
        iframes[currentIndex].classList.add('active');
    }

    iframes[currentIndex].classList.add('active'); // Show the first video initially
    setInterval(showNextVideo, 10000); // Change video every 5 seconds
    
});


// script.js

document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach(iframe => {
        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        iframe.addEventListener('mouseenter', () => {
            iframe.setAttribute('src', iframe.getAttribute('src') + '?autoplay=1');
        });
        iframe.addEventListener('mouseleave', () => {
            iframe.setAttribute('src', iframe.getAttribute('src').replace('?autoplay=1', ''));
        });
    });
});





//co-curricular2//

// Initialize the carousel functionality (optional, you can enhance it further with JavaScript libraries like Swiper.js if needed)
const videos = document.querySelectorAll('.carousel video');
const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('scroll', () => {
    let scrollLeft = carouselContainer.scrollLeft;
    let containerWidth = carouselContainer.offsetWidth;
    let maxScrollLeft = carouselContainer.scrollWidth - containerWidth;

    // Looping effect: if scrolled to the end, reset to start
    if (scrollLeft >= maxScrollLeft) {
        carouselContainer.scrollLeft = 0;
    }
});


//Aplication section
const nextToParent = document.getElementById("nextToParent");
        const prevToStudent = document.getElementById("prevToStudent");
        const studentDetails = document.getElementById("studentDetails");
        const parentDetails = document.getElementById("parentDetails");

        nextToParent.addEventListener("click", () => {
            studentDetails.classList.remove("active");
            parentDetails.classList.add("active");
        });

        prevToStudent.addEventListener("click", () => {
            parentDetails.classList.remove("active");
            studentDetails.classList.add("active");
        });

        document.getElementById("applicationForm").addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Form submitted successfully!");
            // Add email sending logic here
        });

//Extracurricular cont//

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach(iframe => {
        iframe.setAttribute('allow', 'autoplay; encrypted-media');
        iframe.addEventListener('click', () => {
            iframe.setAttribute('src', iframe.getAttribute('src') + '?autoplay=1');
        });
    });
});


