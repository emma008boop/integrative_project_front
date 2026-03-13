export const initScrollReveal = () => {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.bento-card').forEach(card => {
        revealObserver.observe(card);
    });
};