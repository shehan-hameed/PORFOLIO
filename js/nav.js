var toggle = document.getElementById('navToggle');
var links = document.getElementById('navLinks');
var navbar = document.getElementById('navbar');

if (toggle && links) {
  toggle.addEventListener('click', function () { links.classList.toggle('open'); });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { links.classList.remove('open'); });
  });
}

window.addEventListener('scroll', function () {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
});
