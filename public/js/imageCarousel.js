let slideIndex = {};

export function initCarousels() {
  const carousels = document.querySelectorAll('.image-carousel');
  carousels.forEach((carousel, index) => {
    slideIndex[index] = 1;
    showSlides(1, index);
  });
}

function plusSlides(n, carouselIndex) {
  showSlides(slideIndex[carouselIndex] += n, carouselIndex);
}

function showSlides(n, carouselIndex) {
  const carousel = document.querySelectorAll('.image-carousel')[carouselIndex];
  if (!carousel) return;

  const slides = carousel.querySelectorAll('img');
  if (n > slides.length) { slideIndex[carouselIndex] = 1; }
  if (n < 1) { slideIndex[carouselIndex] = slides.length; }
  
  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex[carouselIndex] - 1].style.display = "block";
}

window.initCarousels = initCarousels;
window.plusSlides = plusSlides;