 
// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Join button alert
const joinBtn = document.getElementById("join-btn");

joinBtn.addEventListener("click", () => {
  alert("Welcome to Swell-Time Surf School!");
});