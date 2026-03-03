// Script para el cambio de tema (claro/oscuro)
const botonTema = document.getElementById('cambiar-tema');
const body = document.body;

botonTema.addEventListener('click', () => {
    body.classList.toggle('oscuro');
    if (body.classList.contains('oscuro')) {
        botonTema.textContent = '☀️';
    } else {
        botonTema.textContent = '🌙';
    }
});

// Aquí puedes añadir después el código para el cambio de idioma
// (eso lo haremos más adelante cuando tengamos más contenido)

// Script para el scroll suave al hacer clic en el indicador
document.querySelector('.scroll-indicator').addEventListener('click', function() {
    document.getElementById('proyecto-destacado').scrollIntoView({ behavior: 'smooth' });
});
