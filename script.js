const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", function () {
  console.log("toggling");
  sidebar.classList.add("open");
  overlay.classList.add("visible");
});

overlay.addEventListener("click", function () {
  sidebar.classList.remove("open");
  overlay.classList.remove("visible");
});
