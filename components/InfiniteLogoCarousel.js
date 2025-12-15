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
        this.animationId = null;
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
     * Renders all logo items with consistent spacing built into each item
     * @param {Array<LogoItem>} items - Array of logo items to render
     * @returns {string} HTML string of all items
     */
    renderItems(items) {
        // Wrap each item with padding to ensure consistent spacing
        // This prevents gap mismatch at the loop seam
        return items.map(item => `<div class="flex-shrink-0 px-4">${item.render()}</div>`).join('');
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
            <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
                <div class="carousel-track flex items-center justify-center md:justify-start">
                    <!-- Original Items -->
                    ${itemsHTML}
                    <!-- Duplicate Items for seamless loop -->
                    ${duplicatedItemsHTML}
                </div>
            </div>
        `;
    }

    /**
     * Calculates and sets the scroll width for seamless animation
     * @private
     */
    _calculateScrollWidth() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const track = container.querySelector('.carousel-track');
        if (!track) return;

        // Calculate the width of original items (first half)
        const items = track.children;
        const halfCount = items.length / 2;
        let originalWidth = 0;
        
        for (let i = 0; i < halfCount; i++) {
            originalWidth += items[i].offsetWidth;
        }

        // Set CSS custom property for the scroll distance
        track.style.setProperty('--scroll-width', `${originalWidth}px`);
    }

    /**
     * Sets up smooth JavaScript-based infinite scroll animation
     * This ensures pixel-perfect looping without CSS percentage calculation issues
     * @private
     */
    _setupAnimation() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const track = container.querySelector('.carousel-track');
        if (!track) return;

        // Wait for images to load to get accurate measurements
        const images = track.querySelectorAll('img');
        const imagePromises = Array.from(images).map(img => {
            if (img.complete) return Promise.resolve();
            return new Promise(resolve => {
                img.onload = resolve;
                img.onerror = resolve;
            });
        });

        Promise.all(imagePromises).then(() => {
            this._calculateScrollWidth();
            track.classList.add('animate-infinite-scroll-precise');
        });

        // Recalculate on resize to prevent jitter after viewport changes
        let resizeTimeout;
        this._resizeHandler = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this._calculateScrollWidth();
            }, 150);
        };
        window.addEventListener('resize', this._resizeHandler);
    }

    /**
     * Cleanup event listeners
     */
    destroy() {
        if (this._resizeHandler) {
            window.removeEventListener('resize', this._resizeHandler);
        }
    }

    /**
     * Initializes and mounts the carousel to the DOM
     */
    init() {
        const container = document.getElementById(this.containerId);
        if (container) {
            container.innerHTML = this.render();
            this._setupAnimation();
        } else {
            console.error(`Container with id "${this.containerId}" not found`);
        }
    }
}

