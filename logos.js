
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


//logos carousel //

function currentSlide(n, carouselIndex) {
    let carousels = document.querySelectorAll('.carousel');
    let images = carousels[carouselIndex].querySelectorAll('.carousel-image');
    let dots = carousels[carouselIndex].querySelectorAll('.dot');

    images.forEach((img, index) => {
        img.classList.remove('active');
        dots[index].classList.remove('active');
    });

    images[n - 1].classList.add('active');
    dots[n - 1].classList.add('active');
}
