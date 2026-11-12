
// MENÚ PARA DISPOSITIVOS MÓVILES
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CERRAR EL MENÚ AL SELECCIONAR UNA OPCIÓN
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// CAMBIAR ENTRE MODO OSCURO Y CLARO
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const lightMode = document.body.classList.contains("light-theme");

    themeToggle.textContent = lightMode ? "☾" : "☀";

    localStorage.setItem("theme", lightMode ? "light" : "dark");
});

// CONSERVAR EL TEMA SELECCIONADO
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☾";
}

// MOSTRAR EL AÑO AUTOMÁTICAMENTE
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// VALIDAR EL FORMULARIO
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formMessage.textContent = "Por favor, completa todos los campos.";
        return;
    }

    formMessage.textContent =
        `¡Gracias, ${name}! El formulario fue validado correctamente.`;

    contactForm.reset();
});
