/**
 * Main Entry Point
 * 
 * This file serves as the entry point for the DoubleHelix application.
 * It imports all necessary modules in the correct dependency order.
 * 
 * Load Order (Critical):
 * 1. Core utilities (Component, ComponentLoader, EventBus)
 * 2. Base components
 * 3. Section components
 * 4. App orchestrator
 * 
 * Usage:
 * Include scripts in index.html in this order, or use a bundler.
 */

// The scripts should be loaded in this order:
const LOAD_ORDER = [
    // Core
    'src/core/EventBus.js',
    'src/core/Component.js',
    'src/core/ComponentLoader.js',
    
    // Components - Background
    'src/components/Background/Background.js',
    
    // Components - Header
    'src/components/Header/Header.js',
    
    // Components - Hero
    'src/components/Hero/Hero.js',
    
    // Components - Features
    'src/components/Features/FeatureCard.js',
    'src/components/Features/APIStatusCard.js',
    'src/components/Features/Features.js',
    
    // Components - Mobile Suite
    'src/components/MobileSuite/MobileSuite.js',
    
    // Components - Testimonials
    'src/components/Testimonials/Testimonials.js',
    
    // Components - Contact
    'src/components/Contact/ContactForm.js',
    
    // Components - Footer
    'src/components/Footer/Footer.js',
    
    // Logo Carousel (existing)
    'components/LogoImage.js',
    'components/LogoLabel.js',
    'components/LogoItem.js',
    'components/LogoData.js',
    'components/InfiniteLogoCarousel.js',
    
    // App Orchestrator
    'src/App.js'
];

// Export for reference
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LOAD_ORDER };
} else {
    window.LOAD_ORDER = LOAD_ORDER;
}

