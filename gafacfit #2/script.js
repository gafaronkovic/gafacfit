// Hamburger Meni
const hamburgerToggle = document.getElementById('hamburger-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIcon = document.querySelector('.hamburger i');

hamburgerToggle.addEventListener('change', () => {
    if (hamburgerToggle.checked) {
        mobileMenu.classList.add('active');
    } else {
        mobileMenu.classList.remove('active');
    }
});

// Smooth Scroll za CTA Button
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = ctaButton.getAttribute('href');
});
