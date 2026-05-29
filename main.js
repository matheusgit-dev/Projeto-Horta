const dropdown = document.querySelector('.nav-dropdown');
const btn = dropdown.querySelector('.nav-dropdown__btn');

btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('nav-dropdown--open');
});

document.addEventListener('click', () => {
    dropdown.classList.remove('nav-dropdown--open');
});