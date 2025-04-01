document.addEventListener("DOMContentLoaded", function() {
    const archivos = [
        "archivo1.html", "archivo2.html", "archivo3.html", // Añade aquí los 100 archivos
        "archivo4.html", "archivo5.html"
    ];

    const tabsContainer = document.getElementById("tabs");
    const contentContainer = document.getElementById("content");

    archivos.forEach((archivo, index) => {
        let button = document.createElement("button");
        button.classList.add("tab-button");
        button.innerText = "Sección " + (index + 1);
        button.onclick = () => cargarContenido(archivo, button);
        tabsContainer.appendChild(button);
    });

    function cargarContenido(archivo, boton) {
        fetch("html/" + archivo)
            .then(response => response.text())
            .then(html => {
                contentContainer.innerHTML = html;
                document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
                boton.classList.add("active");
            })
            .catch(error => console.error("Error al cargar el archivo:", error));
    }

    // Cargar la primera pestaña automáticamente
    if (archivos.length > 0) cargarContenido(archivos[0], tabsContainer.firstChild);
});
