/**
 * App - Main Application Orchestrator
 * 
 * SOLID Principles:
 * - Single Responsibility: Coordinates component lifecycle
 * - Open/Closed: New components added via registration
 * - Dependency Inversion: Uses ComponentLoader abstraction
 * 
 * Purpose:
 * Central orchestrator that initializes and manages all page components
 */
class App {
    constructor() {
        this.loader = new ComponentLoader();
        this.isInitialized = false;
    }

    /**
     * Register all page components
     * @private
     */
    _registerComponents() {
        // Background must be first
        this.loader.register('background', new Background('background-container'));
        
        // Header
        this.loader.register('header', new Header('header-container'));
        
        // Main content sections
        this.loader.register('hero', new Hero('hero-container'));
        this.loader.register('features', new Features('features-container'));
        this.loader.register('mobileSuite', new MobileSuite('mobile-suite-container'));
        this.loader.register('testimonials', new Testimonials('testimonials-container'));
        this.loader.register('contact', new ContactForm('contact-container'));
        this.loader.register('footer', new Footer('footer-container'));
    }

    /**
     * Initialize external dependencies
     * @private
     */
    _initDependencies() {
        // Initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        // Initialize Iconify
        if (typeof Iconify !== 'undefined') {
            Iconify.scan();
        }
    }

    /**
     * Initialize scroll animations
     * @private
     */
    _initAnimations() {
        if (typeof initInViewAnimations === 'function') {
            initInViewAnimations();
        }
    }

    /**
     * Initialize the logo carousel
     * @private
     */
    _initLogoCarousel() {
        if (typeof InfiniteLogoCarousel !== 'undefined' && typeof LOGO_DATA !== 'undefined') {
            const carousel = new InfiniteLogoCarousel('logo-carousel-container', LOGO_DATA);
            carousel.init();
        }
    }

    /**
     * Initialize the application
     */
    init() {
        if (this.isInitialized) {
            console.warn('App already initialized');
            return;
        }

        try {
            // Register and mount components
            this._registerComponents();
            this.loader.mountAll();

            // Initialize dependencies
            this._initDependencies();
            this._initAnimations();
            this._initLogoCarousel();

            this.isInitialized = true;
            console.log('🚀 DoubleHelix App initialized');

            // Publish app ready event
            if (typeof eventBus !== 'undefined') {
                eventBus.publish('app:ready');
            }
        } catch (error) {
            console.error('Failed to initialize App:', error);
        }
    }

    /**
     * Get a registered component
     * @param {string} name - Component name
     * @returns {Component|undefined}
     */
    getComponent(name) {
        return this.loader.get(name);
    }

    /**
     * Cleanup and destroy the application
     */
    destroy() {
        this.loader.clear();
        this.isInitialized = false;
    }
}

// Create singleton instance
const app = new App();

// Auto-initialize on DOM ready
(function() {
    'use strict';

    function initApp() {
        app.init();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { App, app };
} else {
    window.App = App;
    window.app = app;
}


