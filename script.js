// ==========================================================
// KUKULCAO - SCRIPT UNIFICADO (WhatsApp + Visor de Fotos)
// ==========================================================

// 1. MOTOR DE WHATSAPP (Solo en ordenar.html)
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'orderForm') {
        e.preventDefault(); 
        const nombre = document.getElementById('nombre').value;
        const cantidad = document.getElementById('cantidad').value;
        const direccion = document.getElementById('direccion').value;
        const miTelefono = "52 56 6918 8409"; 
        const mensaje = `*NUEVO PEDIDO KUKULCAO* 🟤%0A%0A` +
                        `*Nombre:* ${nombre}%0A` +
                        `*Pedido:* ${cantidad}%0A` +
                        `*Dirección:* ${direccion}%0A%0A` +
                        `_Enviado desde el sitio web_`;
        const url = `https://wa.me/${miTelefono}?text=${mensaje}`;
        window.open(url, '_blank');
    }
});

// 2. VISOR DE IMÁGENES (Solo en index.html)
window.changeImage = function(newSrc, clickedThumb) {
    const mainWindowImg = document.getElementById('active-image');
    const allThumbs = document.querySelectorAll('.thumb');
    if(mainWindowImg) {
        mainWindowImg.style.opacity = '0';
        setTimeout(() => {
            mainWindowImg.src = newSrc;
            mainWindowImg.style.opacity = '1';
        }, 150);
    }
    allThumbs.forEach(thumb => thumb.classList.remove('active'));
    clickedThumb.classList.add('active');
};
