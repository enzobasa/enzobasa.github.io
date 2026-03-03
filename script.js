// ===== MENÚ HAMBURGUESA =====
const hamburguesa = document.getElementById('hamburguesa');
const menuDesplegable = document.getElementById('menu-desplegable');

hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('activo');
    menuDesplegable.classList.toggle('visible');
});

// Cerrar menú al hacer clic en un enlace
const enlacesMenu = document.querySelectorAll('.menu-links a');
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        hamburguesa.classList.remove('activo');
        menuDesplegable.classList.remove('visible');
    });
});

// ===== CAMBIO DE TEMA (claro/oscuro) =====
const body = document.body;
const botonTemaMovil = document.getElementById('cambiar-tema-movil');
const iconoTemaMovil = botonTemaMovil.querySelector('i');

// Función para actualizar el icono del tema
function actualizarIconoTema() {
    if (body.classList.contains('oscuro')) {
        iconoTemaMovil.className = 'fas fa-sun';
        if (botonTemaOriginal) botonTemaOriginal.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        iconoTemaMovil.className = 'fas fa-moon';
        if (botonTemaOriginal) botonTemaOriginal.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Evento para cambiar tema desde el menú móvil
botonTemaMovil.addEventListener('click', () => {
    body.classList.toggle('oscuro');
    actualizarIconoTema();
});

// También mantenemos el botón original si existe (para escritorio)
const botonTemaOriginal = document.getElementById('cambiar-tema');
if (botonTemaOriginal) {
    botonTemaOriginal.addEventListener('click', () => {
        body.classList.toggle('oscuro');
        actualizarIconoTema();
    });
}

// Inicializar icono del tema
actualizarIconoTema();

// ===== SCROLL SUAVE =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        document.getElementById('proyecto-destacado').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
}

// ===== CERRAR MENÚ AL HACER CLIC FUERA =====
document.addEventListener('click', (event) => {
    const esHamburguesa = hamburguesa.contains(event.target);
    const esMenu = menuDesplegable.contains(event.target);
    
    if (!esHamburguesa && !esMenu && menuDesplegable.classList.contains('visible')) {
        hamburguesa.classList.remove('activo');
        menuDesplegable.classList.remove('visible');
    }
});
