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

// question section//

document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const collapsible = question.parentElement;
        collapsible.classList.toggle('active');
    });
});