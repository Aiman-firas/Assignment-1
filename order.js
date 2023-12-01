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

document.addEventListener("DOMContentLoaded", function () {
  const selectButtons = document.querySelectorAll(".select-options button");

  selectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button
        .closest(".select-block")
        .querySelectorAll("button");
      category.forEach((btn) => btn.classList.remove("selected"));

      button.classList.add("selected");

      updateCupcakePrice();
    });
  });

  const candlesInput = document.getElementById("candlesQuantity");
  candlesInput.addEventListener("change", function () {
    const quantity = parseInt(candlesInput.value);
    if (isNaN(quantity) || quantity < 0) {
      candlesInput.value = 0;
    }
  });
});

function updateCupcakePrice() {
  const sizeButtons = document.querySelectorAll(
    ".select-block:nth-child(1) button.selected"
  );
  const priceElement = document.querySelector(".cupcake-price");

  if (sizeButtons.length > 0) {
    const selectedSize = sizeButtons[0].innerText.trim();

    switch (selectedSize) {
      case "One":
        priceElement.innerText = "$3.75";
        break;
      case "Half-Dozen":
        priceElement.innerText = "$21.50";
        break;
      case "Dozen":
        priceElement.innerText = "$41.50";
        break;
      default:
        priceElement.innerText = "$3.75";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const sizeButtons = document.querySelectorAll(".select-size button");
  const frostingButtons = document.querySelectorAll(".select-frosting button");
  const topperButtons = document.querySelectorAll(".select-topper button");

  sizeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      handleButtonClick(button, ".select-size");
      updateCupcakePrice();
    });
  });

  frostingButtons.forEach((button) => {
    button.addEventListener("click", function () {
      handleButtonClick(button, ".select-frosting");
    });
  });

  topperButtons.forEach((button) => {
    button.addEventListener("click", function () {
      handleButtonClick(button, ".select-topper");
    });
  });

  const candlesInput = document.getElementById("candlesQuantity");
  candlesInput.addEventListener("change", function () {
    const quantity = parseInt(candlesInput.value);
    if (isNaN(quantity) || quantity < 0) {
      candlesInput.value = 0;
    }
  });

  const addToCartButton = document.getElementById("addToCartButton");
  addToCartButton.addEventListener("click", function () {
    addToCart();
  });
});

function handleButtonClick(clickedButton, categorySelector) {
  const categoryButtons = document.querySelectorAll(
    `${categorySelector} button`
  );
  categoryButtons.forEach((button) => button.classList.remove("selected"));
  clickedButton.classList.add("selected");
}

function addToCart() {
  const cupcakeName = document.querySelector(".cupcake-name").textContent;
  const cupcakePriceString =
    document.querySelector(".cupcake-price").textContent;
  const cupcakeSizeButton = document.querySelector(
    ".select-size button.selected"
  );
  const cupcakeFrostingTypeButton = document.querySelector(
    ".select-frosting button.selected"
  );
  const cupcakeTopperButton = document.querySelector(
    ".select-topper button.selected"
  );
  const numberOfCandles = document.getElementById("candlesQuantity").value;

  // Check if all required buttons are selected
  if (
    !cupcakeSizeButton ||
    !cupcakeFrostingTypeButton ||
    !cupcakeTopperButton
  ) {
    alert("Please select 1 option for each category.");
    return;
  }

  const cupcakeSize = cupcakeSizeButton.textContent;
  const cupcakeFrostingType = cupcakeFrostingTypeButton.textContent;
  const cupcakeTopper = cupcakeTopperButton.textContent;

  const cupcakePrice = parseFloat(cupcakePriceString.slice(1));

  const cartItem = {
    name: cupcakeName,
    price: cupcakePrice,
    size: cupcakeSize,
    frostingType: cupcakeFrostingType,
    topper: cupcakeTopper,
    candles: numberOfCandles,
  };

  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  existingCart.push(cartItem);

  console.log("Item added to cart", cartItem);

  localStorage.setItem("cart", JSON.stringify(existingCart));

  console.log("Redirecting to cart page");
  window.location.href = "cart.html";
  alert("Item added to cart!");
}
