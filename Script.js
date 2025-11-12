
    /* ---------- HAMBURGER MENU TOGGLE (Mobile) ---------- */
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    // Reset animation on close to allow re-trigger
    if (!navLinks.classList.contains('active')) {
    setTimeout(() => {
    document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.animation = 'none';
    a.offsetHeight; // Trigger reflow
    a.style.animation = null;
});
}, 400);
}
});

    /* Close mobile menu when a link is clicked */
    document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

    /* ---------- SMOOTH SCROLLING FOR NAV LINKS ---------- */
    document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

    /* ---------- FORM SUBMISSION (Demo Alert) ---------- */
    document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    e.target.reset();
});

    /* ---------- SECTION REVEAL ON SCROLL ---------- */
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.1});
    document.querySelectorAll('section').forEach(s => observer.observe(s));

    /* ---------- ACTIVE NAV LINK HIGHLIGHT ON SCROLL ---------- */
    window.addEventListener('scroll', () => {
    let cur = '';
    document.querySelectorAll('section').forEach(s => {
    if (scrollY >= s.offsetTop - 200) cur = s.id;
});
    document.querySelectorAll('nav a').forEach(a => {
    a.style.color = a.getAttribute('href') === `#${cur}` ? '#ff6b35' : '#fff';
});
});

    /* ---------- GLITCH EFFECT ON PAGE LOAD ---------- */
    document.body.classList.add('glitch');
    setTimeout(() => document.body.classList.remove('glitch'), 1000);
