document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

  // Close the mobile menu when a link inside the navbar-menu is clicked
  const $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-menu .navbar-item'), 0);

  $navbarItems.forEach(item => {
    item.addEventListener('click', () => {

      // Find the active elements and remove the "is-active" class
      const $navbarBurger = document.querySelector('.navbar-burger.is-active');
      const $navbarMenu = document.querySelector('.navbar-menu.is-active');

      if ($navbarBurger && $navbarMenu) {
        $navbarBurger.classList.remove('is-active');
        $navbarMenu.classList.remove('is-active');
      }

    });
  });

});
