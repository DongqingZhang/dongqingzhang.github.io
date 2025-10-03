// Simple smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, .content h2');
    const navLinks = document.querySelectorAll('.nav-item');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.fontWeight = 'normal';
        if (link.getAttribute('href') === `#${current}` || 
            (link.getAttribute('href') === 'index.html' && !current)) {
            link.style.fontWeight = 'bold';
        }
    });
});