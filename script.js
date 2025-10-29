// ===== Slider Function =====
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
	slides[currentSlide].classList.remove("active");
	currentSlide = (currentSlide + 1) % slides.length;
	slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 4000);
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
	menuToggle.classList.toggle("active");
	navMenu.classList.toggle("active");
});

// Open popup when 'View Details' is clicked
const modal = document.getElementById("package-modal");
const modalTitle = document.getElementById("modal-title");
const modalDetails = document.getElementById("modal-details");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".btn-secondary").forEach((button) => {
  button.addEventListener("click", (e) => {
    const card = e.target.closest(".package-card");
    const title = card.querySelector("h3").textContent;
    const duration = card.querySelector(".package-info li:nth-child(1)").innerHTML;
    const price = card.querySelector(".package-info li:nth-child(2)").innerHTML;
    const includes = card.querySelector(".package-info li:nth-child(3)").innerHTML;

    modalTitle.textContent = title;
    modalDetails.innerHTML = `
      <li>${duration}</li>
      <li>${price}</li>
      <li>${includes}</li>
    `;
    modalDescription.textContent = `Explore ${title} with Falcon Travel. Enjoy scenic views, local experiences, and comfort stays.`;
    modal.style.display = "block";
  });
});

// Close popup
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close popup on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
