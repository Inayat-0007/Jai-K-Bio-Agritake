function ServicesOverview({ language }) {
  try {
    const t = getTranslation(language);

    const services = [
      {
        icon: 'users',
        title: t.services.farmerSupport,
        description: t.services.farmerSupportDesc,
        features: [
          t.services.soilTesting,
          t.services.cropAdvisory,
          t.services.technicalSupport
        ]
      },
      {
        icon: 'graduation-cap',
        title: t.services.training,
        description: t.services.trainingDesc,
        features: [
          t.services.modernTechniques,
          t.services.sustainableFarming,
          t.services.businessSkills
        ]
      },
      {
        icon: 'leaf',
        title: t.services.organic,
        description: t.services.organicDesc,
        features: [
          t.services.certification,
          t.services.qualityAssurance,
          t.services.marketAccess
        ]
      }
    ];

    return (
      <section className="py-20 bg-[var(--bg-primary)]" data-name="services" data-file="components/ServicesOverview.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              {t.services.title}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group text-center fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 mx-auto mb-6 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[var(--primary-color)] transition-all duration-300">
                  <div className={`icon-${service.icon} text-2xl text-[var(--primary-color)] group-hover:text-white transition-colors duration-300`}></div>
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center text-[var(--text-secondary)]">
                      <div className="icon-check text-[var(--primary-color)] mr-3 text-sm"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="btn-primary w-full">
                  {t.services.learnMore}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ServicesOverview component error:', error);
    return null;
  }
}