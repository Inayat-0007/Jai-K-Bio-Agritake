function CSR({ language }) {
  try {
    const t = getTranslation(language);

    const csrInitiatives = [
      {
        title: 'Farmer Education Programs',
        icon: 'graduation-cap',
        description: 'Free training workshops for small-scale farmers on sustainable agriculture practices and modern farming techniques.',
        impact: '5000+ farmers trained'
      },
      {
        title: 'Rural Development',
        icon: 'home',
        description: 'Supporting rural infrastructure development including water conservation and renewable energy projects.',
        impact: '50+ villages impacted'
      },
      {
        title: 'Environmental Conservation',
        icon: 'leaf',
        description: 'Tree plantation drives and soil health improvement programs to restore ecological balance.',
        impact: '100,000+ trees planted'
      }
    ];

    return (
      <section id="csr" className="py-16 lg:py-20 bg-[var(--bg-secondary)]" data-name="csr" data-file="components/corporate/CSR.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16 fade-in">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">{t.nav.csr}</h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                {t.corporate.csrTitle}
              </p>
            </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {csrInitiatives.map((initiative, index) => (
              <div key={index} className="card text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                  <div className={`icon-${initiative.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{initiative.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{initiative.description}</p>
                
                <div className="bg-[var(--primary-color)] bg-opacity-10 rounded-lg p-4">
                  <p className="text-[var(--primary-color)] font-semibold">{initiative.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in">
            <div className="bg-[var(--primary-color)] text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">{t.corporate.csrJoinMission}</h3>
              <p className="text-lg mb-6 opacity-90">
                {t.corporate.csrDescription}
              </p>
              <button className="bg-white text-[var(--primary-color)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t.corporate.csrPartner}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CSR component error:', error);
    return null;
  }
}
