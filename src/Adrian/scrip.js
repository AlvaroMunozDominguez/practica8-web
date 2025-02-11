// scripts.js

// Método para alternar la visibilidad del texto.
function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);

    // Alternar entre visible e invisible.
    if (element.style.display === 'none') {
        element.style.display = 'block'; // Hacer visible
    } else {
        element.style.display = 'none'; // Hacer invisible
    }
}

// Agregar un event listener a la primera opción del dropdown para que al hacer clic alterne la visibilidad.
const firstOption = document.getElementById('toggleOption');
firstOption.addEventListener('click', function(event) {
    // Llamar a la función para alternar la visibilidad del texto debajo del dropdown.
    toggleVisibility('toggleText');
});

// Activar dropdown automáticamente cuando se hace hover sobre él.
const dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('mouseenter', function() {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    dropdownMenu.classList.add('show');
});
dropdown.addEventListener('mouseleave', function() {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    dropdownMenu.classList.remove('show');
});

// Validación del formulario (requerir que se marque "Recordarme" antes de enviar)
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const rememberMeCheckbox = document.getElementById('exampleCheck1');
    if (!rememberMeCheckbox.checked) {
        alert("¡Por favor, marca la casilla 'Recordarme' para continuar!");
        event.preventDefault();
    }
});