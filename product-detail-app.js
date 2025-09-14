class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Product detail error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <button 
              onClick={() => window.location.href = 'products.html'} 
              className="btn-primary"
            >
              Back to Products
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function ProductDetailApp() {
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
    if (typeof initScrollAnimations === 'function') {
      initScrollAnimations();
    }
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
        <ProductDetail language={language} />
        <RelatedProducts language={language} />
        <Footer language={language} />
      </div>
    </ErrorBoundary>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<ProductDetailApp />);