// Navbar mobile toggle
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger?.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fade-in das imagens ao rolar
const images = document.querySelectorAll('.grid img');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold:0.1 });

images.forEach(img => observer.observe(img));
