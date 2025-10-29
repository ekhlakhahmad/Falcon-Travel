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
