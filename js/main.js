import { initVideoOptimizer } from "./modules/videoOptimizer.js";
import { initScrollReveal } from "./modules/scrollEffects.js";

document.addEventListener('DOMContentLoaded', () => {
    initVideoOptimizer();
    initScrollReveal();

    console.log('KAYS Engine: Active');
})