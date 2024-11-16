// Toggle Sign-in/Sign-up Mode
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Form Validation for Password Field
function validateForm() {
  const passwordInput = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (passwordInput === "") {
    errorMessage.textContent = "Password cannot be empty";
    return false; // Prevent form submission
  } else {
    errorMessage.textContent = ""; // Clear the error message
    return true; // Allow form submission
  }
}

// Save Form Data to Local Storage
function save() {
  const username = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email")?.value; // Only get email if it exists

  if (username && password && email) {
    // Store data in local storage
    localStorage.setItem("Username", username);
    localStorage.setItem("Password", password);
    localStorage.setItem("Email", email);

    // Show success message
    showAlert("Data Stored Successfully", "success");

    // Redirect to main page after 2 seconds
    setTimeout(() => {
      window.location.href = "main.html"; // Replace with actual main page URL
    }, 2000);
  } else {
    // Show error message if fields are missing
    showAlert("Please fill in all fields.", "danger");
  }
}

// Show Alerts for Success/Failure
function showAlert(message, type) {
  const alertBox = document.getElementById("alert-box");
  alertBox.innerHTML = `<div class="alert alert-${type}">${message}</div>`;

  // Clear the alert message after 3 seconds
  setTimeout(() => {
    alertBox.innerHTML = "";
  }, 3000);
}

// Smooth Scroll for Target Button
document.querySelector(".get-btn").addEventListener("click", function () {
  document.getElementById("target").scrollIntoView({ behavior: "smooth" });
});