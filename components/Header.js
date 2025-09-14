function Header({ language, setLanguage, theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  // Get translations
  const t = getTranslation(language);

  const navigateToSection = (sectionId, targetPage = null) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Section exists on current page - scroll to it
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveDropdown(null);
    } else if (targetPage) {
      // Section doesn't exist - navigate to target page with hash
      window.location.href = `${targetPage}#${sectionId}`;
    } else {
      // Try current page first, then fallback to target page
      window.location.href = `corporate.html#${sectionId}`;
    }
  };

  const handleNavigation = (href) => {
    // Close mobile menu and dropdowns
    setIsMenuOpen(false);
    setActiveDropdown(null);
    
    if (href.includes('#')) {
      const [page, section] = href.split('#');
      if (page && section) {
        navigateToSection(section, page);
      } else if (section) {
        navigateToSection(section);
      }
    } else {
      // Direct navigation to page
      window.location.href = href;
    }
  };

  const navigation = [
    { label: t.nav.home || 'Home', href: 'index.html' },
    {
      label: t.nav.corporate || 'Corporate',
      href: 'corporate.html',
      submenu: [
        { label: t.nav.managementTeam || 'Management Team', href: 'corporate.html#management' },
        { label: t.nav.ourTeam || 'Our Team', href: 'corporate.html#management' },
        { label: t.nav.awards || 'Awards', href: 'corporate.html#awards' },
        { label: t.nav.csr || 'CSR', href: 'corporate.html#csr' }
      ]
    },
    { label: t.nav.products || 'Products', href: 'products.html' },
    { label: t.nav.services || 'Services', href: 'services.html' },
    { label: t.nav.infrastructure || 'Infrastructure', href: 'infrastructure.html' },
    { label: t.nav.branches || 'Branches', href: 'branches.html' },
    { label: t.nav.careers || 'Careers', href: 'careers.html' }
  ];

  return (
    <header className="bg-[var(--bg-primary)] shadow-lg sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="index.html" className="flex items-center">
              <img 
                src="https://app.trickle.so/storage/public/images/usr_148b367c88000001/68ed5d7e-5f1c-4059-8b37-7d31ad56f1c3.jpeg" 
                alt="Jai K Bio Agritake Logo" 
                className="w-16 h-16 object-contain hover:scale-105 transition-transform duration-200"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Language Toggle */}
            <button
              onClick={() => {
                const newLang = language === 'en' ? 'hi' : 'en';
                setLanguage(newLang);
                localStorage.setItem('language', newLang);
              }}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition-all duration-200"
              title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            >
              <div className="icon-globe text-lg text-[var(--primary-color)]"></div>
              <span className="text-sm font-medium text-[var(--text-primary)]">
                {language === 'en' ? 'हिं' : 'EN'}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => {
                const newTheme = theme === 'light' ? 'dark' : 'light';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
              }}
              className="p-2 rounded-lg border border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition-all duration-200"
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              <div className={`icon-${theme === 'light' ? 'moon' : 'sun'} text-lg text-[var(--primary-color)]`}></div>
            </button>

            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {item.submenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      className="nav-link flex items-center space-x-1 py-2 hover:scale-105 transition-transform duration-200 cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <div className="icon-chevron-down text-sm"></div>
                    </a>
                    
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--bg-primary)] rounded-lg shadow-xl border border-[var(--border-color)] py-2 z-50">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavigation(subItem.href);
                              setActiveDropdown(null);
                            }}
                            className="block px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-200 cursor-pointer"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }}
                    className="nav-link py-2 cursor-pointer hover:scale-105 transition-transform duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Language Toggle */}
            <button
              onClick={() => {
                const newLang = language === 'en' ? 'hi' : 'en';
                setLanguage(newLang);
                localStorage.setItem('language', newLang);
              }}
              className="p-2 text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors"
            >
              <div className="icon-globe text-lg"></div>
            </button>

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => {
                const newTheme = theme === 'light' ? 'dark' : 'light';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
              }}
              className="p-2 text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors"
            >
              <div className={`icon-${theme === 'light' ? 'moon' : 'sun'} text-lg`}></div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors"
            >
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 transform transition-all duration-300 ease-out">
            {navigation.map((item) => (
              <div key={item.label} className="py-2">
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block text-[var(--text-primary)] hover:text-[var(--primary-color)] font-medium py-2 cursor-pointer hover:translate-x-2 transition-all duration-200"
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(subItem.href);
                          setIsMenuOpen(false);
                        }}
                        className="block py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-200 cursor-pointer hover:translate-x-2"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}