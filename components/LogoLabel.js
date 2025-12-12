/**
 * LogoLabel Component
 * Single Responsibility: Renders a text label for logos
 * Open/Closed: Open for extension (can add more text properties), closed for modification
 */

class LogoLabel {
    /**
     * @param {string} text - The label text to display
     * @param {string} className - CSS classes for styling
     */
    constructor(text, className = 'text-sm text-white/70 font-sans') {
        this.text = text;
        this.className = className;
    }

    /**
     * Renders the label element
     * @returns {string} HTML string for the label
     */
    render() {
        return `<span class="${this.className}">${this.text}</span>`;
    }
}

