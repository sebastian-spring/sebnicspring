// Obtener los elementos
const showMessageBtn = document.getElementById('showMessageBtn');
const message = document.getElementById('message');

// Añadir evento al botón
showMessageBtn.addEventListener('click', function() {
    // Mostrar el mensaje
    message.style.display = 'block';
});
