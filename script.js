// Script para el cambio de tema (claro/oscuro) con Font Awesome
const botonTema = document.getElementById('cambiar-tema');
const body = document.body;
const iconoTema = botonTema.querySelector('i'); // Selecciona el icono dentro del botón

botonTema.addEventListener('click', () => {
    body.classList.toggle('oscuro');
    
    // Cambiar el icono de Font Awesome según el tema
    if (body.classList.contains('oscuro')) {
        // Modo oscuro activado → mostramos SOL para cambiar a claro
        iconoTema.className = 'fas fa-sun';
    } else {
        // Modo claro activado → mostramos LUNA para cambiar a oscuro
        iconoTema.className = 'fas fa-moon';
    }
});

// Scroll suave al hacer clic en el indicador
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        document.getElementById('proyecto-destacado').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
}
