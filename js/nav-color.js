document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");
  console.log(navLinks);

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      navLinks.forEach(function(link) {
        link.classList.remove("activo");
      });
      this.classList.add("activo");
    });
  });
});
