document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const inner = carousel.querySelector('.carousel-inner');
  const items = carousel.querySelectorAll('.carousel-item');

  let currentIndex = 0;
  const totalItems = items.length;
  const intervalTime = 3000; // Tiempo en milisegundos entre cada cambio de imagen
  let timer; // Variable para almacenar el temporizador

  // Función para cambiar la imagen del carrusel
  function changeSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Iniciar el carrusel automáticamente
  function startCarousel() {
    timer = setInterval(changeSlide, intervalTime);
  }

  // Detener el carrusel
  function stopCarousel() {
    clearInterval(timer);
  }

  // Iniciar el carrusel cuando la página se haya cargado
  startCarousel();

  // Detener el carrusel cuando el cursor esté sobre el carrusel
  carousel.addEventListener('mouseenter', stopCarousel);
  // Reanudar el carrusel cuando el cursor salga del carrusel
  carousel.addEventListener('mouseleave', startCarousel);
});
