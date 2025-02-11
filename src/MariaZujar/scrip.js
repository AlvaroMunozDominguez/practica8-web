document.addEventListener('DOMContentLoaded', function() {
    console.log('La página ha cargado completamente');

    // Validación del formulario
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let mensaje = document.getElementById('mensaje').value;

        // Validación con JavaScript
        if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            alert('Por favor, completa todos los campos.');
            event.preventDefault(); // Evita que el formulario se envíe si hay campos vacíos
        } else if (!/^[A-Za-z ]+$/.test(nombre)) {
            alert('El nombre solo puede contener letras y espacios.');
            event.preventDefault();
        } else if (!email.includes('@')) {
            alert('Por favor, ingresa un correo electrónico válido.');
            event.preventDefault();
        } else {
            alert('Formulario enviado correctamente.');

            setTimeout(function() {
                // Limpiar el formulario después del "alert" (cuando se da clic en "Aceptar")
                document.getElementById('contactForm').reset();
            }, 100); // Usamos un timeout para asegurarnos de que el alert() haya terminado

        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    console.log('La página ha cargado completamente');

    // Botones para mostrar/ocultar texto y cambiar color
    const textoOculto = document.getElementById('textoOculto');
    const mostrarTextoBtn = document.getElementById('mostrarTexto');
    const ocultarTextoBtn = document.getElementById('ocultarTexto');
    const cambiarColorBtn = document.getElementById('cambiarColor');

    mostrarTextoBtn.addEventListener('click', function() {
        textoOculto.style.display = 'block';
    });

    ocultarTextoBtn.addEventListener('click', function() {
        textoOculto.style.display = 'none';
    });

   cambiarColorBtn.addEventListener('click', function() {
       cambiarColorBtn.style.backgroundColor = '#0E8CE6'; // Cambia el color del botón
       cambiarColorBtn.style.color = '#fff'; // Cambia el color del texto del botón (opcional)
   });

    // Galería de imágenes
    const imagenes = document.querySelectorAll('.imagen-galeria');
    const anteriorBtn = document.getElementById('anterior');
    const siguienteBtn = document.getElementById('siguiente');
    let indiceActual = 0;

    // Mostrar la primera imagen al cargar la página
    imagenes[indiceActual].classList.add('activa');

    anteriorBtn.addEventListener('click', function() {
        imagenes[indiceActual].classList.remove('activa');
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        imagenes[indiceActual].classList.add('activa');
    });

    siguienteBtn.addEventListener('click', function() {
        imagenes[indiceActual].classList.remove('activa');
        indiceActual = (indiceActual + 1) % imagenes.length;
        imagenes[indiceActual].classList.add('activa');
    });
});