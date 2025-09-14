# Technical Specifications - JAI K BIO AGRITAKE v121

## 🔧 System Architecture

### Frontend Technology Stack
```javascript
{
  "framework": "React 18 Production",
  "transpiler": "Babel Standalone",
  "styling": "TailwindCSS + Custom CSS",
  "icons": "Lucide Static Font Icons",
  "typography": "Google Fonts (Inter)",
  "build": "Zero-build Browser Native",
  "deployment": "Trickle Cloud Platform"
}
```

### File Structure Overview
```
jai-k-bio-agritake/
├── 📄 HTML Pages (8 files)
│   ├── index.html              # Homepage
│   ├── corporate.html          # Company info
│   ├── products.html           # Product catalog  
│   ├── product-detail.html     # Product details
│   ├── services.html           # Services
│   ├── infrastructure.html     # Facilities
│   ├── branches.html           # Locations
│   └── careers.html           # Careers
│
├── ⚙️ Applications (8 files)
│   ├── app.js                 # Main app
│   ├── corporate-app.js       # Corporate page
│   ├── products-app.js        # Products page
│   ├── product-detail-app.js  # Product detail
│   ├── services-app.js        # Services page
│   ├── infrastructure-app.js  # Infrastructure
│   ├── branches-app.js        # Branches page
│   └── careers-app.js         # Careers page
│
├── 🧩 Components (25 files)
│   ├── Header.js              # Navigation
│   ├── Footer.js              # Footer
│   ├── HeroSection.js         # Hero banner
│   ├── WelcomeSection.js      # Company intro
│   ├── ProductHighlights.js   # Featured products
│   ├── ServicesOverview.js    # Services summary
│   ├── QuickLinks.js          # Quick access
│   │
│   ├── 📁 corporate/          # Corporate components
│   │   ├── ManagementTeam.js  # Team profiles
│   │   ├── Awards.js          # Certifications
│   │   └── CSR.js             # Social responsibility
│   │
│   ├── 📁 products/           # Product components
│   │   ├── ProductGrid.js     # Product catalog
│   │   ├── ProductDetail.js   # Product info
│   │   └── RelatedProducts.js # Recommendations
│   │
│   ├── 📁 services/           # Service components
│   │   └── ServicesList.js    # Service details
│   │
│   ├── 📁 infrastructure/     # Infrastructure components
│   │   └── FacilitiesGrid.js  # Facility showcase
│   │
│   ├── 📁 branches/           # Branch components
│   │   └── BranchesMap.js     # Branch locations
│   │
│   └── 📁 careers/            # Career components
│       └── CareersContent.js  # Job listings
│
├── 🛠️ Utilities (3 files)
│   ├── animations.js          # Scroll animations
│   ├── translations.js        # i18n system
│   └── theme.js              # Theme management
│
└── 📁 trickle/ (Project resources)
    ├── 📁 assets/            # Media resources
    ├── 📁 notes/             # Documentation
    └── 📁 rules/             # Development rules
```

## 🎨 Design System Implementation

### CSS Custom Properties
```css
/* Light Theme Variables */
:root {
  --primary-color: #4CAF50;      /* Agriculture Green */
  --secondary-color: #8BC34A;    /* Growth Green */
  --accent-color: #2E7D32;       /* Trust Green */
  --text-primary: #333333;       /* Dark Text */
  --text-secondary: #666666;     /* Muted Text */
  --bg-primary: #FFFFFF;         /* White Background */
  --bg-secondary: #F8F9FA;       /* Light Gray */
  --border-color: #E0E0E0;       /* Subtle Borders */
}

/* Dark Theme Variables */
[data-theme="dark"] {
  --primary-color: #8BC34A;
  --secondary-color: #4CAF50;
  --accent-color: #A5D6A7;
  --text-primary: #FFFFFF;
  --text-secondary: #B0BEC5;
  --bg-primary: #1A1A1A;
  --bg-secondary: #2D2D2D;
  --border-color: #404040;
}
```

### Responsive Breakpoints
```css
/* Mobile First Approach */
/* Default: Mobile (< 768px) */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */

@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large Desktop */ }
```

### Component Classes
```css
.btn-primary {
  @apply bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg 
         font-medium transition-all duration-300 hover:shadow-lg 
         hover:-translate-y-0.5;
}

.card {
  @apply bg-[var(--bg-secondary)] border border-[var(--border-color)] 
         rounded-xl p-6 transition-all duration-300 hover:shadow-xl 
         hover:-translate-y-1;
}

.fade-in {
  @apply opacity-0 translate-y-8 transition-all duration-700 ease-out;
}

.fade-in.visible {
  @apply opacity-100 translate-y-0;
}
```

## 🌐 Internationalization System

### Language Support Implementation
```javascript
// Translation Structure
const translations = {
  en: {
    nav: {
      home: 'Home',
      corporate: 'Corporate',
      products: 'Products',
      services: 'Services',
      // ... more translations
    },
    // ... more sections
  },
  hi: {
    nav: {
      home: 'होम',
      corporate: 'कॉर्पोरेट', 
      products: 'उत्पाद',
      services: 'सेवाएं',
      // ... more translations
    },
    // ... more sections
  }
};

// Translation Function
function getTranslation(language) {
  return translations[language] || translations.en;
}
```

### Language Persistence
```javascript
// Store user preference
localStorage.setItem('language', newLanguage);

// Retrieve on page load
const language = localStorage.getItem('language') || 'en';
```

## 🎭 Theme Management System

### Theme Toggle Implementation
```javascript
const ThemeManager = {
  getCurrentTheme() {
    return localStorage.getItem('theme') || 'light';
  },
  
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  },
  
  toggleTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    return newTheme;
  }
};
```

## 📱 Responsive Design Strategy

### Mobile-First Components
```javascript
// Example: Responsive Navigation
function Header({ language, setLanguage, theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="bg-[var(--bg-primary)] shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation items */}
          </div>
          
          {/* Mobile Menu Button - Hidden on desktop */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {/* Hamburger icon */}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation - Conditional rendering */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {/* Mobile menu items */}
          </div>
        )}
      </nav>
    </header>
  );
}
```

### Image Optimization
```javascript
// Lazy Loading Implementation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
});

// Usage
<img 
  data-src="high-res-image.jpg" 
  className="w-full h-48 object-cover transition-opacity duration-300"
  loading="lazy"
  alt="Product image"
/>
```

## ⚡ Performance Optimizations

### Animation System
```javascript
// Scroll-triggered animations with Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100); // Staggered animation
          observer.unobserve(entry.target);
        });
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(element => observer.observe(element));
}
```

### Code Splitting Strategy
```javascript
// Page-specific applications
// Each page loads only required components
// No unnecessary JavaScript bundling

// Example: Products page only loads product-related components
// products-app.js
function ProductsApp() {
  return (
    <>
      <Header />
      <ProductGrid />  {/* Only product components */}
      <Footer />
    </>
  );
}
```

## 🔧 Component Architecture

### Error Boundary Implementation
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <button 
              onClick={() => window.location.reload()} 
              className="btn-primary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.