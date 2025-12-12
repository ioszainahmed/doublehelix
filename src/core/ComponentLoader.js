/**
 * ComponentLoader
 * 
 * SOLID Principles:
 * - Single Responsibility: Only handles loading and registering components
 * - Open/Closed: New components can be added without modifying this class
 * - Dependency Inversion: Depends on Component abstraction
 * 
 * Purpose:
 * Manages component registration, loading order, and initialization
 */
class ComponentLoader {
    constructor() {
        /** @type {Map<string, Component>} */
        this.components = new Map();
        
        /** @type {string[]} */
        this.loadOrder = [];
        
        /** @type {boolean} */
        this._initialized = false;
    }

    /**
     * Register a component
     * @param {string} name - Unique component name
     * @param {Component} component - Component instance
     * @returns {ComponentLoader} this (for chaining)
     */
    register(name, component) {
        if (this.components.has(name)) {
            console.warn(`Component "${name}" already registered. Overwriting.`);
        }
        this.components.set(name, component);
        this.loadOrder.push(name);
        return this;
    }

    /**
     * Get a registered component
     * @param {string} name - Component name
     * @returns {Component|undefined}
     */
    get(name) {
        return this.components.get(name);
    }

    /**
     * Mount all registered components in order
     * @returns {ComponentLoader} this (for chaining)
     */
    mountAll() {
        this.loadOrder.forEach(name => {
            const component = this.components.get(name);
            if (component) {
                try {
                    component.mount();
                } catch (error) {
                    console.error(`Failed to mount component "${name}":`, error);
                }
            }
        });
        this._initialized = true;
        return this;
    }

    /**
     * Unmount all registered components
     * @returns {ComponentLoader} this (for chaining)
     */
    unmountAll() {
        this.components.forEach((component, name) => {
            try {
                component.unmount();
            } catch (error) {
                console.error(`Failed to unmount component "${name}":`, error);
            }
        });
        this._initialized = false;
        return this;
    }

    /**
     * Check if loader is initialized
     * @returns {boolean}
     */
    isInitialized() {
        return this._initialized;
    }

    /**
     * Get all registered component names
     * @returns {string[]}
     */
    getComponentNames() {
        return Array.from(this.components.keys());
    }

    /**
     * Clear all registered components
     * @returns {ComponentLoader} this (for chaining)
     */
    clear() {
        this.unmountAll();
        this.components.clear();
        this.loadOrder = [];
        return this;
    }
}

// Export for ES modules and browser globals
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ComponentLoader;
} else {
    window.ComponentLoader = ComponentLoader;
}

