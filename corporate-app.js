class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Corporate page error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Something went wrong</h1>
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function CorporateApp() {
  const [language, setLanguage] = React.useState(() => localStorage.getItem('language') || 'en');
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    // Set theme on load
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  React.useEffect(() => {
    // Initialize animations
    if (typeof initScrollAnimations === 'function') {
      initScrollAnimations();
    }
    
    // Handle hash navigation
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // Increased timeout to ensure components are loaded
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
      
      <main>
        <div className="py-16 lg:py-20 bg-[var(--bg-primary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16 fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 lg:mb-6">
                {getTranslation(language).corporate.title}
              </h1>
              <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                {getTranslation(language).corporate.subtitle}
              </p>
            </div>
          </div>
        </div>
        
        <ManagementTeam language={language} />
        <Awards language={language} />
        <CSR language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<ErrorBoundary><CorporateApp /></ErrorBoundary>);
