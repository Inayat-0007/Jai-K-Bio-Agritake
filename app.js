class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Something went wrong</h1>
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

    return this.props.children;
  }
}

function App() {
  const [language, setLanguage] = React.useState(() => localStorage.getItem('language') || 'en');
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    // Set theme on load
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  React.useEffect(() => {
    // Handle hash navigation on page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    // Initialize animations
    if (typeof initScrollAnimations === 'function') {
      initScrollAnimations();
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
        <main>
          <HeroSection language={language} />
          <WelcomeSection language={language} />
          <ProductHighlights language={language} />
          <ServicesOverview language={language} />
          <QuickLinks language={language} />
        </main>
        <Footer language={language} />
      </div>
    </ErrorBoundary>
  );
}

// Render the app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);