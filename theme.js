// theme.js

// Immediately check the dark mode preference from localStorage and apply it
document.addEventListener("DOMContentLoaded", () => {
  const isDarkModeEnabled = localStorage.getItem("darkMode") === "enabled";
  if (isDarkModeEnabled) {
    document.body.classList.add("dark-mode");
  }
});
