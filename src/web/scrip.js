document.addEventListener("DOMContentLoaded", () => {
    // Cambia el color de los enlaces al pasar el mouse
    const enlaces = document.querySelectorAll("nav ul li a");
    enlaces.forEach(enlace => {
        enlace.addEventListener("mouseover", () => enlace.style.color = "yellow");
        enlace.addEventListener("mouseout", () => enlace.style.color = "white");
    });

    // Botón "Haz clic para ver más"
    const botonMensaje = document.getElementById("mostrar-mensaje");
    const contenidoAdicional = document.getElementById("contenido-adicional");

    if (botonMensaje && contenidoAdicional) {
        botonMensaje.addEventListener("click", () => {
            if (contenidoAdicional.classList.contains("oculto")) {
                contenidoAdicional.classList.remove("oculto");
                botonMensaje.textContent = "Ver menos";
            } else {
                contenidoAdicional.classList.add("oculto");
                botonMensaje.textContent = "Haz clic para ver más";
            }
        });
    }

    //enlace tutorial
    const enlaceTutorial = document.getElementById("enlace-tutorial");

    if (enlaceTutorial) {
        enlaceTutorial.addEventListener("click", (event) => {
            event.preventDefault(); // Evita que el enlace se abra de inmediato

            const confirmacion = confirm("Vas a ser redirigido a otra página web. ¿Deseas continuar?");

            if (confirmacion) {
                window.location.href = "https://developer.chrome.com/docs/devtools/overview?hl=es-419";
            }
        });
    }

    // Botón de modo oscuro
    const botonModoOscuro = document.getElementById("modo-oscuro");

    // Verifica si el usuario tenía activado el modo oscuro anteriormente
    if (localStorage.getItem("modoOscuro") === "activado") {
        document.body.classList.add("oscuro");
    }

    botonModoOscuro.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");

        // Guarda la preferencia en el almacenamiento local
        if (document.body.classList.contains("oscuro")) {
            localStorage.setItem("modoOscuro", "activado");
        } else {
            localStorage.setItem("modoOscuro", "desactivado");
        }
    });
});
