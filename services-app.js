class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Something went wrong</h1>
            <p className="text-[var(--text-secondary)] mb-4">We're sorry, but something unexpected happened.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Page</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function ServicesApp() {
  try {
    const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');
    const [language, setLanguage] = React.useState(() => localStorage.getItem('language') || 'en');

    React.useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]);

    React.useEffect(() => {
      localStorage.setItem('language', language);
    }, [language]);

    React.useEffect(() => {
      initScrollAnimations();
    }, []);

    return (
      <div className="min-h-screen bg-[var(--bg-primary)]" data-name="services-app" data-file="services-app.js">
        <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
        
        <main>
          <div className="py-16 lg:py-20 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 lg:mb-16 fade-in">
                <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4 lg:mb-6">{getTranslation(language).services.title}</h1>
                <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                  {getTranslation(language).services.subtitle}
                </p>
              </div>
            </div>
          </div>
          
          <ServicesList language={language} />
        </main>
        
        <Footer language={language} />
      </div>
    );
  } catch (error) {
    console.error('ServicesApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ServicesApp /></ErrorBoundary>);