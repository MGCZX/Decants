// Esperamos a que todo el documento cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos todos los botones que tienen la clase 'btn-comprar'
    const botonesComprar = document.querySelectorAll('.btn-comprar');

    // Coloca aquí el enlace a tu Instagram (perfil o DM directo)
    const enlaceInstagram = 'https://www.instagram.com/kuma.decants';

    // Le agregamos la acción de clic a cada botón
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', () => {
            // Abre tu Instagram en una pestaña nueva
            window.open(enlaceInstagram, '_blank');
        });
    });

});
