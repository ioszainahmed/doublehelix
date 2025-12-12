/**
 * InfiniteLogoCarousel Component
 * Single Responsibility: Manages the infinite scrolling logo carousel
 * Dependency Inversion: Depends on LogoItem abstraction, not concrete implementations
 * Open/Closed: Open for extension (can add more carousel features), closed for modification
 */

class InfiniteLogoCarousel {
    /**
     * @param {string} containerId - DOM element ID where carousel will be rendered
     * @param {Array} logoData - Array of logo data objects
     */
    constructor(containerId, logoData) {
        this.containerId = containerId;
        this.logoData = logoData;
    }

    /**
     * Creates logo items from data
     * @param {Array} logoData - Array of logo configuration objects
     * @returns {Array<LogoItem>} Array of LogoItem instances
     */
    createLogoItems(logoData) {
        return logoData.map(data => {
            const logoImage = new LogoImage(data.src, data.alt);
            return new LogoItem(logoImage);
        });
    }

    /**
     * Renders all logo items
     * @param {Array<LogoItem>} items - Array of logo items to render
     * @returns {string} HTML string of all items
     */
    renderItems(items) {
        return items.map(item => item.render()).join('');
    }

    /**
     * Renders the complete carousel with duplicated items for infinite scroll
     * @returns {string} Complete HTML for the carousel
     */
    render() {
        const logoItems = this.createLogoItems(this.logoData);
        const itemsHTML = this.renderItems(logoItems);
        
        // Duplicate items for seamless infinite scroll effect
        const duplicatedItemsHTML = this.renderItems(logoItems);

        return `
            <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] opacity-70 grayscale hover:grayscale-0 transition-all duration-700 group">
                <div class="flex items-center justify-center md:justify-start [&_img]:mx-8 w-max animate-infinite-scroll">
                    <!-- Original Items -->
                    ${itemsHTML}
                    
                    <!-- Duplicate Items for seamless loop -->
                    ${duplicatedItemsHTML}
                </div>
            </div>
        `;
    }

    /**
     * Initializes and mounts the carousel to the DOM
     */
    init() {
        const container = document.getElementById(this.containerId);
        if (container) {
            container.innerHTML = this.render();
        } else {
            console.error(`Container with id "${this.containerId}" not found`);
        }
    }
}

