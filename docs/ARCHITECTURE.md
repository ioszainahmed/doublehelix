# DoubleHelix Architecture Documentation

> A professional, SOLID-principled component architecture for the DoubleHelix website.

---

## 📁 Project Structure

```
doublehelix/
├── index.html                 # Main entry point (uses component containers)
├── index-new.html             # Clean component-based version
│
├── src/                       # Source code (component-based architecture)
│   ├── core/                  # Core utilities
│   │   ├── Component.js       # Base component class (abstract)
│   │   ├── ComponentLoader.js # Component registration & lifecycle
│   │   └── EventBus.js        # Pub/sub for component communication
│   │
│   ├── components/            # UI Components
│   │   ├── Background/        # Background effects
│   │   │   └── Background.js
│   │   │
│   │   ├── Header/            # Navigation header
│   │   │   └── Header.js
│   │   │
│   │   ├── Hero/              # Hero section
│   │   │   └── Hero.js
│   │   │
│   │   ├── Features/          # Features section
│   │   │   ├── Features.js
│   │   │   ├── FeatureCard.js
│   │   │   └── APIStatusCard.js
│   │   │
│   │   ├── MobileSuite/       # Mobile showcase
│   │   │   └── MobileSuite.js
│   │   │
│   │   ├── Testimonials/      # Testimonials carousel
│   │   │   └── Testimonials.js
│   │   │
│   │   ├── Contact/           # Contact form
│   │   │   └── ContactForm.js
│   │   │
│   │   └── Footer/            # Footer
│   │       └── Footer.js
│   │
│   ├── App.js                 # Main orchestrator
│   └── index.js               # Entry point / load order reference
│
├── components/                # Logo carousel (existing)
│   ├── InfiniteLogoCarousel.js
│   ├── LogoItem.js
│   ├── LogoImage.js
│   ├── LogoLabel.js
│   └── LogoData.js
│
├── css/                       # Stylesheets
│   ├── main.css               # Base styles
│   ├── animations.css         # Keyframe animations
│   ├── components.css         # Component-specific styles
│   └── utilities.css          # Utility classes
│
├── js/                        # Legacy JavaScript
│   ├── main.js                # Main initialization
│   ├── animations.js          # Scroll animations
│   └── tailwind-config.js     # Tailwind configuration
│
├── assets/                    # Static assets
│   └── logos/                 # Company logos
│
└── docs/                      # Documentation
    └── ARCHITECTURE.md        # This file
```

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              index.html                                      │
│                         (Component Mount Points)                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│   │ #background  │  │   #header    │  │    #hero     │  │  #features   │   │
│   │  -container  │  │  -container  │  │  -container  │  │  -container  │   │
│   └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                              │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│   │ #mobile-     │  │#testimonials │  │  #contact-   │  │   #footer    │   │
│   │suite-contain.│  │  -container  │  │  container   │  │  -container  │   │
│   └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │
│                                                                              │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                                App.js                                        │
│                          (Orchestrator/Controller)                           │
│                                                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                        ComponentLoader                               │   │
│   │                                                                      │   │
│   │   .register('background', new Background())                          │   │
│   │   .register('header', new Header())                                  │   │
│   │   .register('hero', new Hero())                                      │   │
│   │   .register('features', new Features())                              │   │
│   │   .register('mobileSuite', new MobileSuite())                        │   │
│   │   .register('testimonials', new Testimonials())                      │   │
│   │   .register('contact', new ContactForm())                            │   │
│   │   .register('footer', new Footer())                                  │   │
│   │                                                                      │   │
│   │   .mountAll() → renders all components to their containers           │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 🧱 Component Hierarchy

```
                            ┌──────────────┐
                            │  Component   │ ◄── Abstract Base Class
                            │   (Base)     │
                            └──────┬───────┘
                                   │
           ┌───────────────────────┼───────────────────────┐
           │                       │                       │
           ▼                       ▼                       ▼
    ┌─────────────┐         ┌─────────────┐         ┌─────────────┐
    │ Background  │         │   Header    │         │    Hero     │
    └─────────────┘         └─────────────┘         └─────────────┘
           │
           │              ┌─────────────────────────────────────────┐
           │              │                                         │
           ▼              ▼                                         ▼
    ┌─────────────┐ ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
    │  Features   │ │ MobileSuite │  │Testimonials │  │ContactForm  │
    │             │ └─────────────┘  └─────────────┘  └─────────────┘
    │  ┌───────┐  │
    │  │Card   │  │                                   ┌─────────────┐
    │  │Card   │  │                                   │   Footer    │
    │  │Status │  │                                   └─────────────┘
    │  └───────┘  │
    └─────────────┘
```

---

## 🎯 SOLID Principles Implementation

### **S - Single Responsibility Principle**

Each component has ONE job:

| Component        | Single Responsibility                    |
|------------------|------------------------------------------|
| `Component.js`   | Component lifecycle management           |
| `ComponentLoader`| Registration and mounting coordination   |
| `EventBus`       | Inter-component communication            |
| `Header`         | Navigation UI                            |
| `Hero`           | Hero section content                     |
| `Features`       | Feature cards layout                     |
| `APIStatusCard`  | API status visualization                 |
| `MobileSuite`    | Mobile device showcase                   |
| `Testimonials`   | Customer testimonials                    |
| `ContactForm`    | Form handling                            |
| `Footer`         | Footer links and info                    |

### **O - Open/Closed Principle**

Components are:
- **Open** for extension via props and inheritance
- **Closed** for modification (no need to change source)

```javascript
// Extend behavior without modifying:
const header = new Header('container', {
    brandName: 'CustomBrand',
    navLinks: [{ label: 'Custom', href: '#' }],
    cta: { label: 'Custom CTA' }
});
```

### **L - Liskov Substitution Principle**

All components implement the same interface:

```javascript
// Any component can be used interchangeably
const components = [header, hero, features, footer];
components.forEach(c => c.mount());
components.forEach(c => c.unmount());
```

### **I - Interface Segregation Principle**

Minimal interface - components only expose what's needed:

```javascript
class Component {
    render()    // Required - returns HTML
    mount()     // Mount to DOM
    unmount()   // Remove from DOM
    update()    // Update with new props
    onMount()   // Lifecycle hook
    onUnmount() // Lifecycle hook
}
```

### **D - Dependency Inversion Principle**

High-level modules depend on abstractions:

```
App (high-level)
    │
    └──► ComponentLoader (abstraction)
              │
              └──► Component (abstraction)
                       │
                       └──► Concrete components
```

---

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Data Flow                                       │
└─────────────────────────────────────────────────────────────────────────────┘

1. INITIALIZATION
   
   DOM Ready ──► App.init() ──► ComponentLoader.mountAll() ──► Components render

2. COMPONENT COMMUNICATION (via EventBus)

   ┌──────────────┐        publish('event', data)        ┌──────────────┐
   │ ComponentA   │ ─────────────────────────────────────► │   EventBus   │
   └──────────────┘                                       └──────┬───────┘
                                                                 │
                                                      subscribe('event')
                                                                 │
                                                                 ▼
                                                        ┌──────────────┐
                                                        │ ComponentB   │
                                                        └──────────────┘

3. PROPS FLOW (Top-Down)

   App
    │
    └── props ──► Component ──► render(props) ──► HTML
```

---

## 📊 Component Lifecycle

```
┌───────────────────────────────────────────────────────────────┐
│                    Component Lifecycle                         │
└───────────────────────────────────────────────────────────────┘

    ┌─────────────┐
    │ Constructor │  Initialize props, container ID
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │   mount()   │  Find container, inject HTML
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │   render()  │  Generate HTML string
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  onMount()  │  Post-mount setup (listeners, etc.)
    └──────┬──────┘
           │
           │ ◄──── Component is now active
           │
           ▼
    ┌─────────────┐
    │  update()   │  Re-render with new props (optional)
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │  unmount()  │  Clear container
    └──────┬──────┘
           │
           ▼
    ┌─────────────┐
    │ onUnmount() │  Cleanup (remove listeners)
    └─────────────┘
```

---

## 🧩 Adding New Components

### Step 1: Create Component File

```javascript
// src/components/NewFeature/NewFeature.js

class NewFeature extends Component {
    constructor(containerId, props = {}) {
        super(containerId, {
            // Default props
            title: 'New Feature',
            ...props
        });
    }

    render() {
        return `
            <section>
                <h2>${this.props.title}</h2>
                <!-- Component HTML -->
            </section>
        `;
    }

    onMount() {
        // Setup event listeners, etc.
    }

    onUnmount() {
        // Cleanup
    }
}

window.NewFeature = NewFeature;
```

### Step 2: Add Mount Point to HTML

```html
<!-- In index.html -->
<div id="new-feature-container"></div>
```

### Step 3: Register in App.js

```javascript
// In App._registerComponents()
this.loader.register('newFeature', new NewFeature('new-feature-container'));
```

### Step 4: Include Script

```html
<!-- In index.html, before App.js -->
<script src="src/components/NewFeature/NewFeature.js"></script>
```

---

## 🎨 Styling Architecture

```
css/
├── main.css        # Base styles, fonts, resets
├── animations.css  # @keyframes definitions
├── components.css  # Component-specific styles
└── utilities.css   # Utility classes

Component-specific styles use:
- Tailwind CSS classes (inline in render())
- CSS custom properties for dynamic values
- Scoped class naming conventions
```

---

## 🚀 Performance Considerations

| Technique                | Implementation                           |
|--------------------------|------------------------------------------|
| Lazy Rendering           | Components render only when mounted      |
| Event Delegation         | Single listener per component            |
| CSS Animations           | Hardware-accelerated via `will-change`   |
| Scroll Optimizations     | `passive: true` on scroll listeners      |
| Minimal Re-renders       | `update()` only re-renders on prop change|

---

## 🔧 Development Workflow

```bash
# Start development
# 1. Open index-new.html in browser
# 2. Edit component files
# 3. Refresh to see changes

# File Organization
# - One component per file
# - Folder structure matches component hierarchy
# - Props documented in constructor

# Debugging
# - Open browser DevTools
# - Access components: window.app.getComponent('header')
# - Event monitoring: window.eventBus.listeners
```

---

## 📝 API Reference

### Component Base Class

```javascript
class Component {
    constructor(containerId, props = {})
    
    // Methods
    render() → string              // Return HTML (abstract)
    mount() → Component            // Mount to DOM
    unmount() → Component          // Remove from DOM
    update(newProps) → Component   // Update props & re-render
    getContainer() → HTMLElement   // Get container element
    isMounted() → boolean          // Check mount status
    
    // Lifecycle Hooks
    onMount()                      // Called after mount
    onUnmount()                    // Called after unmount
}
```

### ComponentLoader

```javascript
class ComponentLoader {
    register(name, component) → ComponentLoader
    get(name) → Component
    mountAll() → ComponentLoader
    unmountAll() → ComponentLoader
    getComponentNames() → string[]
    clear() → ComponentLoader
}
```

### EventBus

```javascript
class EventBus {
    subscribe(event, callback) → unsubscribe function
    unsubscribe(event, callback)
    publish(event, data)
    once(event, callback)
    hasListeners(event) → boolean
    clear()
}
```

---

## 🎯 Best Practices for AI Agents

1. **Always extend Component** - Don't create standalone render functions
2. **Use props for configuration** - Makes components reusable
3. **Single responsibility** - One component, one purpose
4. **Document props in constructor** - Makes intent clear
5. **Use EventBus for cross-component communication** - Keeps components decoupled
6. **Clean up in onUnmount** - Remove event listeners
7. **Follow naming conventions** - PascalCase for components
8. **Test in isolation** - Each component should work independently

---

## 📚 Related Documentation

- `components/ARCHITECTURE.md` - Logo carousel architecture
- `components/README.md` - Carousel usage guide
- `REFACTORING_SUMMARY.md` - Previous refactoring notes

---

*Last Updated: December 2024*
*Architecture Version: 2.0*


