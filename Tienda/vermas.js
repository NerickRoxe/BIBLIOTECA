$(document).ready(function() {
    $('#load-more-btn').click(function() {
        // Aquí puedes hacer una llamada AJAX para cargar más productos
        // Por ahora, simplemente puedes clonar los elementos de producto existentes y agregarlos al contenedor
        $('.container-items').append($('.item').clone());
    });
});
