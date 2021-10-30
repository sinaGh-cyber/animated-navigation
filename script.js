const button = document.getElementById('toggle');
const navBar = document.getElementById('nav');
button.addEventListener('click', () => {
  navBar.classList.toggle('active');
});
