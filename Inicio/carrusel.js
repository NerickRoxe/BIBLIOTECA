document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const inner = carousel.querySelector('.carousel-inner');
  const items = carousel.querySelectorAll('.carousel-item');
  const controls = carousel.querySelectorAll('.carousel-control');

  let currentIndex = 0;

  controls.forEach(control => {
    control.addEventListener('click', function () {
      if (this.classList.contains('prev')) {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
      } else {
        currentIndex = (currentIndex + 1) % items.length;
      }
      inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
  });
});
