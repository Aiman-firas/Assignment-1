let cupcakeNameInput;
let designDescriptionInput;

function setupAddToCartButtonListener() {
  const addToCartButton = document.getElementById("addToCartButton");
  addToCartButton.addEventListener("click", addToCart);
}

document.addEventListener("DOMContentLoaded", function () {
  setupButtonListeners();
  setupInputHandlers();
  setupFileInputHandler();
  setupAddToCartButtonListener();
});

function setupButtonListeners() {
  const selectButtons = document.querySelectorAll(".button-box button");

  selectButtons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
}

function handleButtonClick() {
  const category = this.closest(".button-box").querySelectorAll("button");
  category.forEach((btn) => btn.classList.remove("selected"));

  this.classList.add("selected");
}

function setupInputHandlers() {
  cupcakeNameInput = document.getElementById("cupcakeName");
  const cupcakeNameCounter = document.getElementById("cupcakeNameCounter");

  cupcakeNameInput.addEventListener("input", handleCupcakeNameInput);

  designDescriptionInput = document.getElementById("designDescription");
  const counter = document.getElementById("counter");

  designDescriptionInput.addEventListener(
    "input",
    handleDesignDescriptionInput
  );
}

function handleCupcakeNameInput() {
  const maxLength = parseInt(cupcakeNameInput.getAttribute("maxlength"));
  const remainingCharacters = maxLength - cupcakeNameInput.value.length;
  cupcakeNameCounter.textContent = `Characters left: ${remainingCharacters}`;
}

function handleDesignDescriptionInput() {
  const maxLength = 200;
  const remainingCharacters = maxLength - designDescriptionInput.value.length;
  counter.textContent = `Characters/words left: ${remainingCharacters}`;
}

function setupFileInputHandler() {
  const fileInput = document.getElementById("fileInput");
  fileInput.addEventListener("change", handleFileInputChange);

  const deleteFileButton = document.getElementById("deleteFileButton");
  deleteFileButton.addEventListener("click", handleDeleteFile);
}

function handleFileInputChange() {
  const allowedExtensions = /(\.png|\.jpg|\.jpeg)$/i;
  if (!allowedExtensions.exec(this.value)) {
    alert(
      "Please choose an image file with a valid extension: .png, .jpg, .jpeg"
    );
    this.value = "";
  }
}

function handleDeleteFile() {
  const fileInput = document.getElementById("fileInput");
  fileInput.value = "";
}

function addToCart() {
  console.log("Adding items to cart...");

  const cupcakeName = cupcakeNameInput.value;
  const selectedSizeButton = document.querySelector(
    ".button-row-size button.selected"
  );
  const selectedFrostingButton = document.querySelector(
    ".button-row-frosting button.selected"
  );
  const selectedTopperButton = document.querySelector(
    ".button-row-toppers button.selected"
  );

  if (
    !cupcakeName ||
    !selectedSizeButton ||
    !selectedFrostingButton ||
    !selectedTopperButton
  ) {
    alert("Please fill in all cupcake details.");
    return;
  }

  const cupcakeSize = selectedSizeButton.textContent;
  const cupcakeFrostingType = selectedFrostingButton.textContent;
  const cupcakeTopper = selectedTopperButton.textContent;

  let price;
  switch (cupcakeSize.toLowerCase()) {
    case "one":
      price = 3.75;
      break;
    case "half-dozen":
      price = 21.5;
      break;
    case "dozen":
      price = 41.5;
      break;
    default:
      price = 0;
  }

  const cartItem = {
    name: cupcakeName,
    size: cupcakeSize,
    frostingType: cupcakeFrostingType,
    topper: cupcakeTopper,
    price: price,
    candles: 1,
  };

  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  existingCart.push(cartItem);

  console.log("Item added to cart", cartItem);

  localStorage.setItem("cart", JSON.stringify(existingCart));

  console.log("Redirecting to cart page");
  window.location.href = "cart.html";
  alert("Item added to cart!");
}
