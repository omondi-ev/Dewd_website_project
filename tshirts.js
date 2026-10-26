document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const firstItem = carousel.firstElementChild.cloneNode(true);
    carousel.appendChild(firstItem);

    const animationDuration = 30; // Speed of the animation in seconds

    // Calculate the total width of the carousel
    const totalWidth = Array.from(carousel.children).reduce((total, item) => {
        return total + item.offsetWidth;
    }, 0);

    carousel.style.width = `${totalWidth}px`;

    // Hover effect to pause animation
    carousel.addEventListener('mouseenter', () => {
        carousel.style.animationPlayState = 'paused';
    });

    carousel.addEventListener('mouseleave', () => {
        carousel.style.animationPlayState = 'running';
    });

    // Start the animation
    carousel.style.animation = `slide ${animationDuration}s linear infinite`;
});


// script.js
document.querySelectorAll('.likes-container').forEach(container => {
    container.addEventListener('click', function() {
        const likeCountElement = this.querySelector('.like-count');
        let likeCount = parseInt(likeCountElement.textContent);
        likeCount++;
        likeCountElement.textContent = likeCount;
    });
});


document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const collapsible = question.parentElement;
        collapsible.classList.toggle('active');
    });
});
