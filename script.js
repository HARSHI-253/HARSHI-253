// Show popup message
function showPopup(message) {
    document.getElementById('popup-message').innerHTML = message;
    document.getElementById('popup').style.display = 'block';
}

// Close popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Show the menu section when clicking "Order Delicious Food"
function showMenu() {
    document.getElementById('menu').style.display = 'block';
}

// Handle ordering food with transaction details
function askTransactionDetails(itemName, price, image) {
    const popupContent = `
        <div style="text-align:center;">
            <img src="${image}" alt="${itemName}" style="width:100px; height:100px; border-radius:10px;">
            <p>You ordered <strong>${itemName}</strong> for <strong>$${price.toFixed(2)}</strong>. Please enter your details to proceed.</p>
        </div>
        <label for="customer-name">Name:</label>
        <input type="text" id="customer-name" required>
        <label for="customer-address">Address:</label>
        <input type="text" id="customer-address" required>
        <label for="payment-method">Payment Method:</label>
        <select id="payment-method" required>
            <option value="">Select Payment Method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
        </select>
        <div style="display:flex; gap:10px; margin-top:10px;">
            <button class="confirm-btn" onclick="confirmOrder()">Confirm Order</button>
            <button class="cancel-btn" onclick="closePopup()">Cancel</button>
        </div>
    `;
    document.getElementById('popup-message').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';
}

// Validate and confirm order
function confirmOrder() {
    const name = document.getElementById('customer-name').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;

    if (!name) {
        alert('❌ Please enter your name.');
        return;
    }
    if (!address) {
        alert('❌ Please enter your address.');
        return;
    }
    if (!paymentMethod) {
        alert('❌ Please select a payment method.');
        return;
    }

    alert(`✅ Order confirmed! Thank you, ${name}, for ordering.`);
    closePopup();
}

// Validate login form
function validateLogin(event) {
    event.preventDefault();
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    
    if (username === "admin" && password === "1234") {
        showPopup('✅ Login Successful!');
    } else {
        document.getElementById('login-error').innerText = '❌ Invalid username or password';
    }
}

// Validate registration form
function validateRegister(event) {
    event.preventDefault();
    let fullname = document.getElementById('fullname').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('reg-password').value.trim();

    if (!fullname || !email.includes('@') || password.length < 6) {
        document.getElementById('register-error').innerText = '❌ Invalid details. Ensure email is correct and password is at least 6 characters';
        return;
    }

    showPopup('✅ Registration Successful!');
}

// Smooth scroll for internal links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const sectionId = this.getAttribute("href").replace(".html", ""); 
        const section = document.getElementById(sectionId);
        if (section) {
            e.preventDefault();
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

