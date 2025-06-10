// STICKY NAVBAR + SCROLL-UP BUTTON
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const scrollUpBtn = document.querySelector(".scroll-up-btn");
  if (window.scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (window.scrollY > 500) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});
// SCROLL-UP BUTTON CLICK
document.querySelector(".scroll-up-btn").addEventListener("click", function () {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// MENU SMOOTH SCROLL BEHAVIOR
document.querySelectorAll(".navbar .menu li a").forEach(link => {
  link.addEventListener("click", function () {
    document.documentElement.style.scrollBehavior = "smooth";
  });
});

// TOGGLE MENU FOR SMALL SCREEN
document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("active");
  this.querySelector("i").classList.toggle("fa-times");
});

// TYPING EFFECT using Typed.js
document.addEventListener("DOMContentLoaded", function () {
  const typed1 = new Typed(".typing", {
    strings: ["Student", "Developer", "Data Analyst", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  const typed2 = new Typed(".typing-2", {
    strings: ["Student", "Developer", "Data Analyst", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  // OWL CAROUSEL INIT (requires jQuery and OwlCarousel to be loaded)
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
    
  });
});