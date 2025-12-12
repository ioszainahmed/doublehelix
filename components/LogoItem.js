/**
 * LogoItem Component
 * Single Responsibility: Renders logo image
 * Dependency Inversion: Depends on abstractions (LogoImage) not concrete implementations
 * Interface Segregation: Uses only the render method from dependencies
 */

class LogoItem {
    /**
     * @param {LogoImage} logoImage - Logo image component instance
     */
    constructor(logoImage) {
        this.logoImage = logoImage;
    }

    /**
     * Renders the logo image
     * @returns {string} HTML string for the logo image
     */
    render() {
        return this.logoImage.render();
    }
}

