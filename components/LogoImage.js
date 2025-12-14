/**
 * LogoImage Component
 * Single Responsibility: Renders a logo image with proper attributes
 * Open/Closed: Open for extension (can add more image properties), closed for modification
 */

class LogoImage {
    /**
     * @param {string} src - Image source path
     * @param {string} alt - Alternative text for accessibility
     * @param {string} className - CSS classes for styling
     */
    constructor(src, alt, className = 'h-10 w-20 md:h-[72px] md:w-36 object-contain') {
        this.src = src;
        this.alt = alt;
        this.className = className;
    }

    /**
     * Renders the image element
     * @returns {string} HTML string for the image
     */
    render() {
        return `<img src="${this.src}" alt="${this.alt}" class="${this.className}">`;
    }
}

