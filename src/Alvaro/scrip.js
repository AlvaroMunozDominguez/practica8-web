document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los botones con la clase "toggle-btn"
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        const section = button.closest(".section");
        const content = section.querySelector(".section-content");

        // Aseguramos que el contenido está visible al inicio
        content.style.display = "block";

        button.addEventListener("click", function () {
            if (content.style.display === "none") {
                content.style.display = "block";
                this.textContent = "Ocultar";
            } else {
                content.style.display = "none";
                this.textContent = "Mostrar";
            }
        });
    });
});
