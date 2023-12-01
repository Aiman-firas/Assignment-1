document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const cupcakeType = urlParams.get("cupcake");

  const cupcakeDetails = {
    caramel: {
      image: "img/Caramel-Cupcake.jpeg",
      rating: "5.0",
      name: "Classic Caramel Perfection",
    },
    vanilla: {
      image: "img/Vanilla-Cupcake.webp",
      rating: "4.9",
      name: "Classic Vanilla Dream",
    },
    "red-velvet": {
      image: "img/Velvet-Cupcake.jpg",
      rating: "4.8",
      name: "Red Velvet Elegance",
    },
    "cookies-cream": {
      image: "img/Oreo-Cupcake.webp",
      rating: "4.8",
      name: "Cookies & Cream",
    },
    "s-mores": {
      image: "img/S'Mores-Cupcake.jpg",
      rating: "4.7",
      name: "S-Mores",
    },
    "chocolate-euphoria": {
      image: "img/Chocolate-Cupcake.jpg",
      rating: "4.7",
      name: "Chocolate Euphoria",
    },
    "strawberry-bliss": {
      image: "img/Strawberry-Cupcake.jpg",
      rating: "4.6",
      name: "Strawberry Bliss",
    },
    "espresso-love": {
      image: "img/Espresso-Cupcake.jpeg",
      rating: "4.8",
      name: "Espresso Love",
    },
    "salted-caramel": {
      image: "img/SaltedCaramel-Cupcake.jpg",
      rating: "4.7",
      name: "Salted Caramel Bliss",
    },
    "blueberry-burst": {
      image: "img/Blueberry-Cupcake.jpg",
      rating: "4.5",
      name: "Blueberry Burst",
    },
    "coconut-paradise": {
      image: "img/Coconut-Cupcake.webp",
      rating: "4.5",
      name: "Coconut Paradise",
    },
    "lemon-zest": {
      image: "img/Lemon-Cupcake.avif",
      rating: "4.6",
      name: "Luscious Lemon Zest",
    },
    wedding: {
      image: "img/Wedding.jpeg",
      rating: "5.0",
      name: "Wedding & Engagement",
    },
    birthday: {
      image: "img/Birthday.jpeg",
      rating: "5.0",
      name: "Birthday",
    },
    anniversary: {
      image: "img/Anniversary.jpeg",
      rating: "5.0",
      name: "Anniversary",
    },
  };

  setDetails(cupcakeDetails[cupcakeType]);

  function setDetails(detail) {
    if (!detail) {
      console.error("Invalid cupcake type or not provided.");
      return;
    }

    const orderImage = document.querySelector(".inside-image img");
    const cupcakeRating = document.querySelector(".rating-text");
    const cupcakeName = document.querySelector(".cupcake-name");

    orderImage.src = detail.image;

    cupcakeRating.textContent = detail.rating;

    cupcakeName.textContent = detail.name;
  }
});
