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
