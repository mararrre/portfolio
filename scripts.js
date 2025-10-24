document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 2) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Проверяем сохранённую тему
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-theme");
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  if (body.classList.contains("light-theme")) {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});


const burgerBtn = document.getElementById('burgerBtn');
const nav = document.querySelector('nav');

document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});