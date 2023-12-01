/*Splash Screen*/
let intro = document.querySelector(".intro");
let logo = document.querySelector(".intro-logo-header");
let logoSpan = document.querySelectorAll(".intro-logo");
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var intervalTime = 3000;
  var slideIndex = 0;

  function showSlides() {
    var slides = document.getElementsByClassName("mySlides");

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, intervalTime);
  }

  showSlides();
});
