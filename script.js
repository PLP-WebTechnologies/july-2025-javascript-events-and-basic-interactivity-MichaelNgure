// Part 1: Event Handling

const messageBtn = document.getElementById('messageBtn');
const message = document.getElementById('message');

messageBtn.addEventListener('click', () => {
    message.textContent = 'Button Clicked!';
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle

const togglemodeBtn = document.getElementById('toggleMode');

togglemodeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Counter functionality

let count = 0;
document.getElementById("increase").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});
document.getElementById("decrease").addEventListener("click", function() {
  count--;
  document.getElementById("count").textContent = count;
});

// Collapsible FAQ
document.getElementById("faqQuestion").addEventListener("click", function() {
  document.getElementById("faqAnswer").classList.toggle("hidden");
});

// Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from refreshing the page

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let messages = [];

  // Validate Name
  if (name === "") {
    messages.push("Name is required.");
  }

  // Validate Email with Regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    messages.push("Please enter a valid email address.");
  }

  // Validate Password (at least 6 chars)
  if (password.length < 6) {
    messages.push("Password must be at least 6 characters long.");
  }

  // Show Messages
  let formMessages = document.getElementById("formMessages");
  if (messages.length > 0) {
    formMessages.style.color = "red";
    formMessages.innerHTML = messages.join("<br>");
  } else {
    formMessages.style.color = "green";
    formMessages.textContent = "✅ Form submitted successfully!";
  }
});