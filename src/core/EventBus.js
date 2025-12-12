/**
 * EventBus
 * 
 * SOLID Principles:
 * - Single Responsibility: Only handles event pub/sub
 * - Open/Closed: Events can be added without modification
 * - Interface Segregation: Minimal subscribe/publish interface
 * 
 * Purpose:
 * Enables loose coupling between components via pub/sub pattern
 */
class EventBus {
    constructor() {
        /** @type {Map<string, Set<Function>>} */
        this.listeners = new Map();
    }

    /**
     * Subscribe to an event
     * @param {string} event - Event name
     * @param {Function} callback - Handler function
     * @returns {Function} Unsubscribe function
     */
    subscribe(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, new Set());
        }
        this.listeners.get(event).add(callback);
        
        // Return unsubscribe function
        return () => this.unsubscribe(event, callback);
    }

    /**
     * Unsubscribe from an event
     * @param {string} event - Event name
     * @param {Function} callback - Handler function to remove
     */
    unsubscribe(event, callback) {
        const eventListeners = this.listeners.get(event);
        if (eventListeners) {
            eventListeners.delete(callback);
            if (eventListeners.size === 0) {
                this.listeners.delete(event);
            }
        }
    }

    /**
     * Publish an event
     * @param {string} event - Event name
     * @param {*} [data] - Event data
     */
    publish(event, data) {
        const eventListeners = this.listeners.get(event);
        if (eventListeners) {
            eventListeners.forEach(callback => {
                try {
                    callback(data);
                } catch (error) {
                    console.error(`Error in event handler for "${event}":`, error);
                }
            });
        }
    }

    /**
     * Subscribe to an event once
     * @param {string} event - Event name
     * @param {Function} callback - Handler function
     */
    once(event, callback) {
        const wrapper = (data) => {
            this.unsubscribe(event, wrapper);
            callback(data);
        };
        this.subscribe(event, wrapper);
    }

    /**
     * Check if event has listeners
     * @param {string} event - Event name
     * @returns {boolean}
     */
    hasListeners(event) {
        return this.listeners.has(event) && this.listeners.get(event).size > 0;
    }

    /**
     * Clear all listeners
     */
    clear() {
        this.listeners.clear();
    }
}

// Create singleton instance
const eventBus = new EventBus();

// Export for ES modules and browser globals
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EventBus, eventBus };
} else {
    window.EventBus = EventBus;
    window.eventBus = eventBus;
}

