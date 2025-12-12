# Logo Carousel Components

This directory contains modular, SOLID-principle-compliant components for the infinite scrolling logo carousel.

## Component Architecture

### 1. **LogoImage.js** - Single Responsibility Principle
- **Responsibility**: Renders logo images with proper attributes
- **Purpose**: Encapsulates all image-related logic and properties
- **Usage**: 
  ```javascript
  const logoImage = new LogoImage('path/to/image.png', 'Alt Text', 'custom-class');
  logoImage.render(); // Returns HTML string
  ```

### 2. **LogoLabel.js** - Single Responsibility Principle
- **Responsibility**: Renders text labels for logos
- **Purpose**: Encapsulates all text/label-related logic
- **Usage**: 
  ```javascript
  const logoLabel = new LogoLabel('Company Name', 'custom-class');
  logoLabel.render(); // Returns HTML string
  ```

### 3. **LogoItem.js** - Dependency Inversion & Interface Segregation
- **Responsibility**: Combines logo image and label into a single item
- **Purpose**: Composes image and label components together
- **Principles**: 
  - Depends on abstractions (LogoImage, LogoLabel interfaces)
  - Only uses the `render()` method from dependencies
- **Usage**: 
  ```javascript
  const logoImage = new LogoImage('path.png', 'Alt');
  const logoLabel = new LogoLabel('Label');
  const logoItem = new LogoItem(logoImage, logoLabel);
  logoItem.render(); // Returns complete item HTML
  ```

### 4. **LogoData.js** - Single Responsibility & Liskov Substitution
- **Responsibility**: Stores logo configuration data
- **Purpose**: Centralizes data management, separates data from presentation
- **Principles**: All logo objects follow the same structure/interface

### 5. **InfiniteLogoCarousel.js** - Open/Closed & Dependency Inversion
- **Responsibility**: Manages the infinite scrolling carousel
- **Purpose**: Orchestrates logo items and handles infinite scroll logic
- **Principles**: 
  - Open for extension, closed for modification
  - Depends on LogoItem abstraction, not concrete implementations
- **Usage**: 
  ```javascript
  const carousel = new InfiniteLogoCarousel('container-id', LOGO_DATA);
  carousel.init(); // Renders and mounts to DOM
  ```

## SOLID Principles Applied

### Single Responsibility Principle (SRP)
- Each component has one clear purpose
- **LogoImage**: Only handles image rendering
- **LogoLabel**: Only handles text rendering
- **LogoItem**: Only handles item composition
- **LogoData**: Only handles data storage
- **InfiniteLogoCarousel**: Only handles carousel logic

### Open/Closed Principle (OCP)
- Components are open for extension but closed for modification
- New logo types can be added without changing existing code
- Carousel features can be extended without modifying core logic

### Liskov Substitution Principle (LSP)
- All logo objects follow the same data structure
- Components can be substituted with extended versions

### Interface Segregation Principle (ISP)
- Components only depend on methods they use (render())
- No component is forced to depend on unused interfaces

### Dependency Inversion Principle (DIP)
- High-level modules (LogoItem, Carousel) depend on abstractions
- Not dependent on concrete implementations
- Easy to mock and test

## Benefits of This Architecture

1. **Maintainability**: Each component is easy to understand and modify
2. **Testability**: Components can be tested in isolation
3. **Reusability**: Components can be reused in different contexts
4. **Scalability**: Easy to add new features or logo types
5. **Separation of Concerns**: Data, presentation, and logic are separated

## File Structure

```
components/
├── README.md                    # This documentation
├── LogoImage.js                 # Image rendering component
├── LogoLabel.js                 # Label rendering component
├── LogoItem.js                  # Item composition component
├── LogoData.js                  # Data storage module
└── InfiniteLogoCarousel.js      # Carousel orchestration component
```

## Adding New Logos

To add new logos, simply update `LogoData.js`:

```javascript
const LOGO_DATA = [
    // ... existing logos
    {
        src: 'assets/logos/new-logo.png',
        alt: 'New Company Name',
        label: 'New Company'
    }
];
```

## Modifying Styles

Each component accepts custom CSS classes as parameters:
- `LogoImage`: Pass custom classes to constructor
- `LogoLabel`: Pass custom classes to constructor
- `LogoItem`: Pass custom container classes to constructor

## Integration

Components are loaded in `index.html` in dependency order:
1. LogoImage.js (no dependencies)
2. LogoLabel.js (no dependencies)
3. LogoItem.js (depends on LogoImage, LogoLabel)
4. LogoData.js (no dependencies)
5. InfiniteLogoCarousel.js (depends on all above)

Then initialized with:
```javascript
const carousel = new InfiniteLogoCarousel('logo-carousel-container', LOGO_DATA);
carousel.init();
```



