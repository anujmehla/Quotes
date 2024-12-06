// newtab.js

// Function to display a random quote
function displayRandomQuote() {
  const quoteElement = document.getElementById("quote");
  if (window.quotes && Array.isArray(window.quotes)) {
    const randomIndex = Math.floor(Math.random() * window.quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  } else {
    quoteElement.textContent = "No quotes found.";
  }
}

// Function to toggle dark mode and update localStorage
function toggleDarkMode() {
  const body = document.body;
  const isDarkModeEnabled = body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkModeEnabled ? "enabled" : "disabled");
}

// Set up the event listener for the toggle button
document.addEventListener("DOMContentLoaded", () => {
  displayRandomQuote();

  const toggleButton = document.getElementById("toggleDarkMode");
  toggleButton.addEventListener("click", toggleDarkMode);
});
