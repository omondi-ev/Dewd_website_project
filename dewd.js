
// navigation bar//
document.addEventListener('DOMContentLoaded', () => {
    const navList = document.querySelector('.nav-list');
    const navItems = Array.from(document.querySelectorAll('.nav-item'));
    const navListContainer = document.querySelector('.nav-list-container');

    navListContainer.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('nav-item')) {
            const index = navItems.indexOf(e.target);
            const itemWidth = e.target.offsetWidth;
            const visibleWidth = navListContainer.clientWidth;
            const scrollPosition = index * itemWidth - (visibleWidth / 2) + (itemWidth / 2);
            navList.style.transform = `translateX(-${scrollPosition}px)`;
        }
    });

    navListContainer.addEventListener('mouseleave', () => {
        navList.style.transform = 'translateX(0)';
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'active' class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add 'active' class to the clicked item
            this.classList.add('active');
        });
    });
});

const carouselImages = document.querySelectorAll('.poster-carousel img');
let currentImageIndex = 0;

function showNextImage() {
    carouselImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselImages[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Change image every 3 seconds


    document.getElementById("tshirt-link").addEventListener("click", function() {
        window.location.href = "tshirts.html";
    });

