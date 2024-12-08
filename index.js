const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  // Navbar color change effect
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
