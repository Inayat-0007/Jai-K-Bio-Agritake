function ServicesList({ language }) {
  try {
    const t = getTranslation(language);

    const services = [
      {
        id: 'farmers',
        title: 'Services to Farmers',
        icon: 'users',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/736283b0-f16d-4231-a1fb-f46e9eb824c1.png',
        description: 'Comprehensive support for modern agricultural practices',
        services: [
          { name: 'Soil Testing & Analysis', description: 'Complete soil health assessment with laboratory testing' },
          { name: 'Crop Advisory Services', description: 'Expert guidance on crop selection and seasonal planning' },
          { name: 'Field Demonstrations', description: 'On-site technical guidance and practical training' },
          { name: 'Telephonic Support', description: '24/7 agricultural advisory helpline service' }
        ]
      },
      {
        id: 'training',
        title: 'Training Programs',
        icon: 'graduation-cap',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/2461123a-f488-4975-831c-4d9fbf6ef4af.png',
        description: 'Educational programs for agricultural skill development',
        services: [
          { name: 'Bio-Fertilizer Farming', description: 'Comprehensive training on organic fertilizer usage' },
          { name: 'Organic Farming System', description: 'Complete organic certification process guidance' },
          { name: 'Livestock Husbandry', description: 'Animal care and dairy management training' },
          { name: 'Modern Agricultural Techniques', description: 'Latest farming methods and technology adoption' }
        ]
      }
    ];

    return (
      <section className="py-16 bg-[var(--bg-secondary)]" data-name="services-list" data-file="components/services/ServicesList.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 lg:h-80 object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                          <div className={`icon-${service.icon} text-2xl text-white`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                    <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">{service.title}</h2>
                    <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-4">
                      {service.services.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-[var(--primary-color)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="icon-check text-white text-sm"></div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{item.name}</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <button className="btn-primary px-8 py-3">
                        Learn More About {service.title}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ServicesList component error:', error);
    return null;
  }
}