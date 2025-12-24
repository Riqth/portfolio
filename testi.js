const testimonials = document.querySelectorAll('.testimonial');
let index = 1;

function updateCarousel() {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[index].classList.add('active');
}

document.querySelector('.next').onclick = () => {
  index = (index + 1) % testimonials.length;
  updateCarousel();
};

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateCarousel();
};

// auto slide
setInterval(() => {
  index = (index + 1) % testimonials.length;
  updateCarousel();
}, 4000);