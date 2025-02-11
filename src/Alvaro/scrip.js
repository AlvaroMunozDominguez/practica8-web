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

    // Modo oscuro/claro
    const modeToggle = document.getElementById("mode-toggle");

    modeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        modeToggle.textContent = document.body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";
    });

    // Animaciones al hacer scroll
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
    });
});

