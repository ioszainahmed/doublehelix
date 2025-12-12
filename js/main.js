/**
 * Main Initialization Module
 * Single Responsibility: Initializes application-wide functionality
 */

(function () {
    'use strict';

    /**
     * Initialize Lucide icons
     */
    function initLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    /**
     * Initialize all application modules
     */
    function init() {
        initLucideIcons();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

