const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
const year = document.getElementById('year');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener('mousemove', (e) => {
  const glow = document.querySelector('.cursor-glow');
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

year.textContent = new Date().getFullYear();
