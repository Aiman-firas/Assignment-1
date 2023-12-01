document.addEventListener("DOMContentLoaded", function () {
  displayCartItems();

  const checkoutButton = document.getElementById("checkoutButton");

  checkoutButton.addEventListener("click", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Checkout Failed! Please add items.");
    } else {
      alert("Checkout Succeeded!");
      clearCart();
      window.location.reload();
    }
  });
});

function displayCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalElement = document.getElementById("cartTotal");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItemsContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    if (isNaN(item.quantity) || item.quantity < 1) {
      item.quantity = 1;
    }

    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");

    const itemPrice = parseFloat(item.price);

    if (isNaN(itemPrice)) {
      console.error(`Invalid price format for item ${index}: ${item.price}`);
      return;
    }

    itemElement.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        Size: ${item.size}<br>
        Frosting: ${item.frostingType}<br>
        Topper: ${item.topper}<br>
        No. of Candles: <input type="number" min="1" value="${
          item.candles
        }" onchange="updateCandlesQuantity(${index}, this)">
        Quantity: <input type="number" min="1" value="${
          item.quantity
        }" onchange="updateQuantity(${index}, this)">
      </div>
      <div>
        Price: $${(itemPrice * item.quantity).toFixed(2)}<br>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;

    total += itemPrice * item.quantity;

    cartItemsContainer.appendChild(itemElement);
  });

  cartTotalElement.textContent = total.toFixed(2);
}

function updateCandlesQuantity(index, candlesInput) {
  let newCandlesQuantity = parseInt(candlesInput.value);

  newCandlesQuantity = Math.min(newCandlesQuantity, 12);

  if (!isNaN(newCandlesQuantity) && newCandlesQuantity >= 1) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].candles = newCandlesQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  } else {
    alert("Invalid candles quantity. Please enter a number between 1 and 12.");
  }
}

function updateQuantity(index, quantityInput) {
  const newQuantity = parseInt(quantityInput.value);

  if (!isNaN(newQuantity) && newQuantity >= 1) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  }
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCartItems();
}

function clearCart() {
  localStorage.removeItem("cart");
}
