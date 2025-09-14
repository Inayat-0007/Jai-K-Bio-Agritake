function QuickLinks({ language }) {
  try {
    const t = getTranslation(language);

    const quickLinks = [
      {
        title: t.quickLinks.ourTeam,
        description: t.quickLinks.ourTeamDesc,
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        href: 'corporate.html#team'
      },
      {
        title: t.quickLinks.awards,
        description: t.quickLinks.awardsDesc,
        image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        href: 'corporate.html#awards'
      },
      {
        title: t.quickLinks.branches,
        description: t.quickLinks.branchesDesc,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        href: 'branches.html'
      }
    ];

    return (
      <section className="py-20 bg-[var(--bg-secondary)]" data-name="quick-links" data-file="components/QuickLinks.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              {t.quickLinks.title}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {t.quickLinks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="card group cursor-pointer fade-in block" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 bg-gray-100">
                  <img
                    src={link.image}
                    alt={link.title}
                    className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--primary-color)] transition-colors">
                  {link.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('QuickLinks component error:', error);
    return null;
  }
}
