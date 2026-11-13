
// Initialize the navigation icons
lucide.createIcons();

// Theme toggle
const themeButton = document.querySelector(".theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});
