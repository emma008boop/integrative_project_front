export const initVideoOptimizer = () => {
    const observerOptions = { 
        threshold: 0.2 // Se activa cuando el 20% de la card es visible
    };
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            
            if (entry.isIntersecting) {
                // 1. Asegurar silencio para que el navegador no bloquee
                video.muted = true;
                
                // 2. OPCIONAL: Reiniciar el video desde el principio al volver a verlo
                // video.currentTime = 0; 

                // 3. Reproducir
                video.play().catch(err => {
                    // Manejo silencioso de políticas de autoplay
                });

                // 4. Efecto visual (Opcional): Que aparezca suavemente
                video.style.opacity = "1";
            } else {
                // 5. Pausar inmediatamente al salir de vista
                video.pause();
                
                // 6. Efecto visual (Opcional): Que se desvanezca al irse
                video.style.opacity = "0";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bento-card video').forEach(video => {
        // Estilo inicial para el efecto de fade (opcional)
        video.style.transition = "opacity 0.5s ease";
        videoObserver.observe(video);
    });
};