document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    });
  });

  // Close the menu when a navigation link is clicked
  document.querySelectorAll('.navbar-menu .navbar-item').forEach(link => {
    link.addEventListener('click', () => {
      $navbarBurgers.forEach(el => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        
        // Remove the "is-active" class from both the "navbar-burger" and the "navbar-menu"
        el.classList.remove('is-active');
        if ($target) {
          $target.classList.remove('is-active');
        }
      });
    });
  });
});
