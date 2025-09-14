// Theme management utilities
const ThemeManager = {
  // Get current theme from localStorage or default to light
  getCurrentTheme() {
    return localStorage.getItem('theme') || 'light';
  },

  // Set theme and update DOM
  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Dispatch custom event for theme change
    const event = new CustomEvent('themeChange', { detail: { theme } });
    document.dispatchEvent(event);
  },

  // Toggle between light and dark theme
  toggleTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    return newTheme;
  },

  // Initialize theme on page load
  init() {
    const theme = this.getCurrentTheme();
    this.setTheme(theme);
  }
};

// Auto-initialize theme when script loads
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
});

// Export for use in components
window.ThemeManager = ThemeManager;