const cartItems = [];
const cartList = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const totalPurchaseElement = document.querySelector(".total-purchase h1"); // Corrected selector

// Event listeners for Add to Cart buttons
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    addToCart(name, price);
  });
});

// Add to Cart function
function addToCart(name, price) {
  const existingItem = cartItems.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ name, price, quantity: 1 });
  }

  updateCart();
}

// Update Cart function
function updateCart() {
  cartList.innerHTML = "";
  let total = 0;

  cartItems.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${item.name} ₱${item.price.toFixed(2)}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.addEventListener("click", () => removeFromCart(item.name));

    const quantitySpan = document.createElement("span");
    quantitySpan.textContent = ` Qty: ${item.quantity}`;

    cartItem.appendChild(removeButton);
    cartItem.appendChild(quantitySpan);
    cartList.appendChild(cartItem);

    total += item.price * item.quantity;
  });

  totalPriceElement.textContent = `Total: ₱${total.toFixed(2)}`;
}

// Remove from Cart function
function removeFromCart(name) {
  const itemIndex = cartItems.findIndex((item) => item.name === name);

  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity -= 1;

    if (cartItems[itemIndex].quantity === 0) {
      cartItems.splice(itemIndex, 1);
    }
  }

  updateCart();
}

// Checkout function
document.getElementById("checkout-btn").addEventListener("click", () => {
  let total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Display the total purchase amount in the Total Purchase section
  totalPurchaseElement.textContent = `Total Purchase: ₱${total.toFixed(2)}`;

  // Clear the cart
  cartItems.length = 0; // Empty the cart array
  updateCart(); // Update the cart display to reflect the cleared cart
});
