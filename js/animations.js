/**
 * Animation Module
 * Single Responsibility: Handles scroll-based animations using IntersectionObserver
 */

(function () {
    'use strict';

    const ONCE = true;
    const DEFAULT_SELECTOR = '.animate-on-scroll';
    const DEFAULT_OPTIONS = {
        threshold: 0.1,
        rootMargin: '0px 0px -5% 0px'
    };

    /**
     * Initialize IntersectionObserver for scroll animations
     * @param {string} selector - CSS selector for elements to observe
     */
    function initInViewAnimations(selector = DEFAULT_SELECTOR) {
        if (!window.__inViewIO) {
            window.__inViewIO = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        if (ONCE) {
                            window.__inViewIO.unobserve(entry.target);
                        }
                    }
                });
            }, DEFAULT_OPTIONS);
        }

        document.querySelectorAll(selector).forEach((el) => {
            window.__inViewIO.observe(el);
        });
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => initInViewAnimations());
    } else {
        initInViewAnimations();
    }

    // Export for external use
    window.initInViewAnimations = initInViewAnimations;
})();





