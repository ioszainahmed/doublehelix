/**
 * Component Base Class
 * 
 * SOLID Principles:
 * - Single Responsibility: Only handles component lifecycle
 * - Open/Closed: Extended by specific components
 * - Liskov Substitution: All components can be used interchangeably
 * - Interface Segregation: Minimal interface (render, mount, unmount)
 * - Dependency Inversion: High-level modules depend on this abstraction
 * 
 * @abstract
 */
class Component {
    /**
     * @param {string} containerId - DOM element ID to mount into
     * @param {Object} [props={}] - Configuration properties
     */
    constructor(containerId, props = {}) {
        if (this.constructor === Component) {
            throw new Error('Component is abstract and cannot be instantiated directly');
        }
        
        this.containerId = containerId;
        this.props = props;
        this.container = null;
        this._mounted = false;
    }

    /**
     * Get the container element
     * @returns {HTMLElement|null}
     */
    getContainer() {
        if (!this.container) {
            this.container = document.getElementById(this.containerId);
        }
        return this.container;
    }

    /**
     * Render the component HTML
     * @abstract
     * @returns {string} HTML string
     */
    render() {
        throw new Error('render() must be implemented by subclass');
    }

    /**
     * Mount component to DOM
     * @returns {Component} this (for chaining)
     */
    mount() {
        const container = this.getContainer();
        if (!container) {
            console.warn(`Container #${this.containerId} not found`);
            return this;
        }
        
        container.innerHTML = this.render();
        this._mounted = true;
        this.onMount();
        return this;
    }

    /**
     * Unmount component from DOM
     * @returns {Component} this (for chaining)
     */
    unmount() {
        const container = this.getContainer();
        if (container) {
            container.innerHTML = '';
        }
        this._mounted = false;
        this.onUnmount();
        return this;
    }

    /**
     * Check if component is mounted
     * @returns {boolean}
     */
    isMounted() {
        return this._mounted;
    }

    /**
     * Lifecycle hook: called after mount
     * Override in subclass for setup logic
     */
    onMount() {}

    /**
     * Lifecycle hook: called after unmount
     * Override in subclass for cleanup logic
     */
    onUnmount() {}

    /**
     * Update component with new props
     * @param {Object} newProps - New properties to merge
     * @returns {Component} this (for chaining)
     */
    update(newProps) {
        this.props = { ...this.props, ...newProps };
        if (this._mounted) {
            this.mount();
        }
        return this;
    }
}

// Export for ES modules and browser globals
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Component;
} else {
    window.Component = Component;
}


