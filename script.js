// Script para el cambio de tema (claro/oscuro)
const botonTema = document.getElementById('cambiar-tema');
const body = document.body;

botonTema.addEventListener('click', () => {
    body.classList.toggle('oscuro');
    
    // Cambiar el icono del botón según el tema
    if (body.classList.contains('oscuro')) {
        botonTema.textContent = '☀️'; // Sol para tema oscuro (cambiar a claro)
    } else {
        botonTema.textContent = '🌙'; // Luna para tema claro (cambiar a oscuro)
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
