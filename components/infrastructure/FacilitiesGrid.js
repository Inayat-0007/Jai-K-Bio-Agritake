function FacilitiesGrid({ language = 'en' }) {
  const [selectedFacility, setSelectedFacility] = React.useState(null);
  
  const t = getTranslation(language);

  const facilities = [
    {
      id: 'fertilizer',
      title: 'Bio Fertilizer Manufacturing Unit',
      icon: 'factory',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'State-of-the-art manufacturing facility with advanced fermentation technology',
      features: ['10,000 MT Annual Capacity', 'ISO Certified Production', 'Quality Control Lab', 'Automated Packaging']
    },
    {
      id: 'rnd',
      title: 'Research & Development Center',
      icon: 'flask',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Advanced research facility for agricultural innovation and product development',
      features: ['Microbiology Lab', 'Soil Analysis Center', 'Product Testing', 'Innovation Hub']
    },
      {
        id: 'ecommerce',
        title: 'E-commerce Website Platform',
        icon: 'shopping-cart',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/143ce0c1-b5aa-4a70-af9b-2fa0185224eb.jpeg',
        description: 'Digital platform for online product sales and customer engagement',
        features: ['Online Product Catalog', 'Secure Payment Gateway', 'Order Management', 'Customer Support'],
        isEcommerce: true,
        websiteUrl: 'https://www.shopeezone.com/'
      }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Our Infrastructure</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
            Modern facilities and technology-driven solutions supporting sustainable agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={facility.id} className="card fade-in group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-48 object-contain transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-lg bg-white/90 flex items-center justify-center">
                    <div className={`icon-${facility.icon} text-xl text-[var(--primary-color)]`}></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                  {facility.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {facility.description}
                </p>

                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="icon-check text-[var(--primary-color)] text-sm"></div>
                      <span className="text-[var(--text-secondary)] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="btn-primary w-full transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    if (facility.isEcommerce && facility.websiteUrl) {
                      window.open(facility.websiteUrl, '_blank');
                    } else {
                      setSelectedFacility(facility);
                    }
                  }}
                >
                  {facility.isEcommerce ? 'Visit E-commerce Site' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}