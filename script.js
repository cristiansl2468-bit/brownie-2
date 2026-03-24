// --- 1. MOTOR DE WHATSAPP (Para la página ordenar.html) ---
document.addEventListener('submit', function(e) {
    // Verificamos si el formulario que se envió es el de la orden
    if (e.target && e.target.id === 'orderForm') {
        e.preventDefault(); // Evita que la página se recargue

        // Capturamos los datos de los cuadritos
        const nombre = document.getElementById('nombre').value;
        const cantidad = document.getElementById('cantidad').value;
        const direccion = document.getElementById('direccion').value;
        
        // --- AQUÍ PONES TU NÚMERO ---
        // Ponlo con el 52 (México) y sin espacios. Ej: "524411234567"
        const miTelefono = "524412123434"; 
        
        // Armamos el mensaje decorado
        const mensaje = `*NUEVO PEDIDO KUKULCAO* 🟤%0A%0A` +
                        `*Nombre:* ${nombre}%0A` +
                        `*Pedido:* ${cantidad}%0A` +
                        `*Dirección:* ${direccion}%0A%0A` +
                        `_Enviado desde el sitio web_`;
        
        // Creamos el link de WhatsApp
        const url = `https://wa.me/${miTelefono}?text=${mensaje}`;
        
        // Abrimos WhatsApp en una pestaña nueva
        window.open(url, '_blank');
    }
});

// --- 2. VISOR DE IMÁGENES (Para la página index.html) ---
function changeImage(newSrc, clickedThumb) {
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
}

// --- 3. EFECTO DE MOVIMIENTO DEL BROWNIE (Para el Hero) ---
document.addEventListener("mousemove", (e) => {
    const img = document.querySelector(".hero-img");
    const circle = document.querySelector(".circle-bg");
    
    if(img && circle) {
        let x = (window.innerWidth / 2 - e.pageX) / 40;
        let y = (window.innerHeight / 2 - e.pageY) / 40;
        img.style.transform = `translateX(${x}px) translateY(${y}px)`;
        circle.style.transform = `translateX(${-x/2}px) translateY(${-y/2}px)`;
    }
});