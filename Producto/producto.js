function searchBooks() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const books = document.querySelectorAll('.book');

    books.forEach(book => {
        const title = book.querySelector('h3').innerText.toLowerCase();
        const author = book.querySelector('p:nth-of-type(2)').innerText.toLowerCase();

        if (title.includes(searchTerm) || author.includes(searchTerm)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}

function toggleBookList() {
    var carousel = document.querySelector('.carousel');
    carousel.style.display = (carousel.style.display === "flex") ? "none" : "flex";
}

// Función para controlar el carrusel automáticamente
var currentIndex = 0;

function showNextBook() {
    var items = document.querySelectorAll('.carousel-item');
    items[currentIndex].style.transform = 'translateX(-100%)';

    currentIndex = (currentIndex + 1) % items.length;

    items[currentIndex].style.transform = 'translateX(0)';
}

// Establecer un intervalo para avanzar automáticamente en el carrusel
var carouselInterval = setInterval(showNextBook, 3000);

// Detener la animación automática al pasar el ratón sobre el carrusel
var carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseover', function() {
    clearInterval(carouselInterval);
});

carousel.addEventListener('mouseout', function() {
    carousel = setInterval(showNextBook, 3000);
});
