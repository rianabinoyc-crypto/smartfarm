// Select buttons
const weatherBtn = document.getElementById("weatherBtn");
const cropBtn = document.getElementById("cropBtn");
const marketBtn = document.getElementById("marketBtn");
const diseaseBtn = document.getElementById("diseaseBtn");

// Select sections
const weatherSection = document.getElementById("weatherSection");
const cropSection = document.getElementById("cropSection");
const marketSection = document.getElementById("marketSection");
const diseaseSection = document.getElementById("diseaseSection");

// Utility: Hide all sections
function hideAllSections() {
    weatherSection.classList.add("hidden");
    cropSection.classList.add("hidden");
    marketSection.classList.add("hidden");
    diseaseSection.classList.add("hidden");
}

// Add click events
weatherBtn.addEventListener("click", () => {
    hideAllSections();
    weatherSection.classList.remove("hidden");
});

cropBtn.addEventListener("click", () => {
    hideAllSections();
    cropSection.classList.remove("hidden");
});

marketBtn.addEventListener("click", () => {
    hideAllSections();
    marketSection.classList.remove("hidden");
});

diseaseBtn.addEventListener("click", () => {
    hideAllSections();
    diseaseSection.classList.remove("hidden");
});