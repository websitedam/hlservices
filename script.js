document.addEventListener("DOMContentLoaded", function() {
    // Detectar idioma del navegador y mostrar modal de traducción si no es español
    const userLang = navigator.language || navigator.userLanguage;
    if (!userLang.startsWith("es")) {
        document.getElementById("translation-modal").style.display = "block";
    }
});

// Función para activar Google Translate y cerrar el modal
function translatePage() {
    googleTranslateElementInit();
    document.getElementById("translation-modal").style.display = "none";
}

// Función para cerrar el modal sin traducir
function closeModal() {
    document.getElementById("translation-modal").style.display = "none";
}
