const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    } else {
    navbar.classList.remove('scrolled');
    }
});


document.querySelectorAll('.faq-item h5').forEach(item => {
    item.addEventListener('click', () => {
    item.parentElement.classList.toggle('active');
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
    });
});