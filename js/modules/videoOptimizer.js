export const initVideoOptimizer = () => {
    const observerOptions = {
        threshold: 0.2
    };

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            const isHoverCard = video.closest('.bento-goal-preview');

            if (entry.isIntersecting) {
                video.muted = true;

                // Si es hover card, no la reproduzcas por scroll — el hover la controla
                if (!isHoverCard) {
                    video.play().catch(() => {});
                    video.style.opacity = '1';
                }
            } else {
                video.pause();
                video.style.opacity = '0';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bento-card video').forEach(video => {
        video.style.transition = 'opacity 0.6s ease';
        video.style.opacity = '0'; // Todas inician ocultas
        videoObserver.observe(video);
    });

    // Hover solo para .bento-goal-preview
    document.querySelectorAll('.bento-goal-preview').forEach(card => {
        const video = card.querySelector('video');
        const overlay = card.querySelector('.video-overlay');

        if (!video) return;

        card.addEventListener('mouseenter', () => {
            video.muted = true;
            video.play().catch(() => {});
            video.style.opacity = '1';
            if (overlay) overlay.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            video.style.opacity = '0';
            if (overlay) overlay.style.opacity = '1'; // Vuelve a negro total

            setTimeout(() => {
                video.pause();
                video.currentTime = 0;
            }, 600);
        });
    });
};