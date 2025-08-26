// Open the modal
function openOrder(productName) {
  const modal = document.getElementById("orderModal");
  modal.style.display = "flex";   // show modal
  document.getElementById("product").value = productName;
}

// Close the modal
function closeOrder() {
  document.getElementById("orderModal").style.display = "none";
}

// Open Payment Section
function openPayment(details) {
  const modal = document.getElementById("paymentModal");
  modal.style.display = "flex";

  // Fill payment details
  document.getElementById("paymentDetails").innerHTML = `
    <p><strong>Product:</strong> ${details.product}</p>
    <p><strong>Quantity:</strong> ${details.quantity}</p>
    <p><strong>Price:</strong> ₹${details.price} each</p>
    <p><strong>Total:</strong> ₹${details.total}</p>
  `;
}

// Close Payment Section
function closePayment() {
  document.getElementById("paymentModal").style.display = "none";
}

// Confirm Payment
function confirmPayment() {
  const method = document.getElementById("paymentMethod").value;
  if (!method) {
    alert("⚠️ Please select a payment method!");
    return;
  }
  alert("✅ Payment successful using " + method + ". Your order is confirmed!");
  closePayment();
}

// Handle form submit
document.addEventListener("DOMContentLoaded", () => {
  const orderForm = document.getElementById("orderForm");

  orderForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const product = document.getElementById("product").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    // Price mapping
    let price = 0;
    if (product === "Silkworms (Live)") price = 500;
    else if (product === "Silkworm Cocoons") price = 800;
    else if (product === "Silkworm Eggs") price = 300;

    const total = price * quantity;

    closeOrder();
    openPayment({ product, quantity, price, total });

    this.reset();
  });
});
function openPayment(details) {
  const modal = document.getElementById("paymentModal");
  modal.style.display = "flex";

  document.getElementById("paymentDetails").innerHTML = `
    <p><strong>Product:</strong> ${details.product}</p>
    <p><strong>Quantity:</strong> ${details.quantity}</p>
    <p><strong>Price per unit:</strong> ₹${details.price}</p>
    <hr>
    <p><strong>Total Amount:</strong> <span style="color:#e74c3c; font-size:18px;">₹${details.total}</span></p>
  `;
}
