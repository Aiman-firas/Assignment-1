document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const cupcake = urlParams.get("cupcake");

  if (cupcake === "caramel") {
    document.querySelector(".order-img img").src = "img/Caramel-Cupcake.jpeg";
  } else if (cupcake === "vanilla") {
    document.querySelector(".order-img img").src = "img/Vanilla-Cupcake.webp";
  } else if (cupcake === "red-velvet") {
    document.querySelector(".order-img img").src = "img/Velvet-Cupcake.jpg";
  } else if (cupcake === "cookies-cream") {
    document.querySelector(".order-img img").src = "img/Oreo-Cupcake.webp";
  } else if (cupcake === "s-mores") {
    document.querySelector(".order-img img").src = "img/S'Mores-Cupcake.jpg";
  } else if (cupcake === "chocolate-euphoria") {
    document.querySelector(".order-img img").src = "img/Chocolate-Cupcake.jpg";
  } else if (cupcake === "strawberry-bliss") {
    document.querySelector(".order-img img").src = "img/Strawberry-Cupcake.jpg";
  } else if (cupcake === "espresso-love") {
    document.querySelector(".order-img img").src = "img/Espresso-Cupcake.jpeg";
  } else if (cupcake === "salted-caramel") {
    document.querySelector(".order-img img").src =
      "img/SaltedCaramel-Cupcake.jpg";
  } else if (cupcake === "blueberry-burst") {
    document.querySelector(".order-img img").src = "img/Blueberry-Cupcake.jpg";
  } else if (cupcake === "coconut-paradise") {
    document.querySelector(".order-img img").src = "img/Coconut-Cupcake.webp";
  } else {
    document.querySelector(".order-img img").src = "img/Lemon-Cupcake.avif";
  }
});
