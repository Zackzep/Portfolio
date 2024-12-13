function toggleMenu() {
    const hamburgerContainer = document.querySelector('.hamburger-container');
    hamburgerContainer.classList.toggle('active');
}

window.addEventListener('load', () => {
    const hamburgerContainer = document.querySelector('.hamburger-container');
    hamburgerContainer.addEventListener('click', toggleMenu);
});

document.addEventListener('click', (event) => {
    const hamburgerContainer = document.querySelector('.hamburger-container');
    const isClickInside = hamburgerContainer.contains(event.target);

    if (!isClickInside) {
        hamburgerContainer.classList.remove('active');
    }
});