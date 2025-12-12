# Component Development Guide

This guide provides quick reference for working with the DoubleHelix component system.

---

## Quick Start

### Creating a New Component

```javascript
/**
 * MyComponent
 * 
 * Purpose: Brief description of what this component does
 */
class MyComponent extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            // Default props with documentation
            title: 'Default Title',
            items: [],
            ...props
        });
    }

    render() {
        const { title, items } = this.props;
        
        return `
            <section class="my-component">
                <h2>${title}</h2>
                ${this._renderItems(items)}
            </section>
        `;
    }

    // Private helper methods prefixed with _
    _renderItems(items) {
        return items.map(item => `
            <div class="item">${item.name}</div>
        `).join('');
    }

    onMount() {
        // Add event listeners, initialize third-party libs
    }

    onUnmount() {
        // Clean up event listeners
    }
}

window.MyComponent = MyComponent;
```

---

## Component Template

Copy this template for new components:

```javascript
/**
 * ComponentName
 * 
 * SOLID: [Which principles it follows]
 * Purpose: [What this component does]
 */
class ComponentName extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            // Props with defaults
            ...props
        });
    }

    render() {
        return `
            <!-- Component HTML -->
        `;
    }

    onMount() {}
    onUnmount() {}
}

window.ComponentName = ComponentName;
```

---

## Common Patterns

### Rendering Lists

```javascript
_renderList(items) {
    return items.map(item => `
        <div class="item">${item}</div>
    `).join('');
}
```

### Conditional Rendering

```javascript
render() {
    const { showExtra } = this.props;
    
    return `
        <div>
            ${showExtra ? '<span>Extra content</span>' : ''}
        </div>
    `;
}
```

### Event Handling

```javascript
onMount() {
    this._handleClick = (e) => {
        console.log('Clicked!');
    };
    
    const button = document.getElementById('my-button');
    if (button) {
        button.addEventListener('click', this._handleClick);
    }
}

onUnmount() {
    const button = document.getElementById('my-button');
    if (button) {
        button.removeEventListener('click', this._handleClick);
    }
}
```

### Using EventBus

```javascript
// Publishing
eventBus.publish('myComponent:action', { data: 'value' });

// Subscribing
onMount() {
    this._unsubscribe = eventBus.subscribe('otherComponent:event', (data) => {
        this.update({ newProp: data });
    });
}

onUnmount() {
    if (this._unsubscribe) {
        this._unsubscribe();
    }
}
```

---

## Styling Guidelines

### Using Tailwind Classes

```javascript
render() {
    return `
        <div class="flex items-center gap-4 p-6 bg-zinc-900 rounded-2xl">
            <!-- Content -->
        </div>
    `;
}
```

### Border Gradient Effect

```javascript
render() {
    return `
        <div style="
            position: relative;
            --border-gradient: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0));
            --border-radius-before: 24px;
        ">
            <!-- Content -->
        </div>
    `;
}
```

---

## File Checklist

When creating a new component:

- [ ] Create folder: `src/components/ComponentName/`
- [ ] Create file: `ComponentName.js`
- [ ] Extend `Component` base class
- [ ] Add props with defaults in constructor
- [ ] Implement `render()` method
- [ ] Add to `index.html` script tags
- [ ] Add container div to HTML
- [ ] Register in `App.js`
- [ ] Test in browser

---

## Debugging Tips

```javascript
// Access app in console
window.app

// Get specific component
window.app.getComponent('header')

// Check all registered components
window.app.loader.getComponentNames()

// Monitor events
window.eventBus.subscribe('*', console.log)
```

