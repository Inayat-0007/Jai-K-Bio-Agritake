function BranchesMap({ language }) {
  try {
    const t = getTranslation(language);

    const branches = [
      {
        id: 'bhopal',
        name: 'Bhopal Head Office',
        address: 'Plot no.45, Chanakyapuri, Near Minal Gate no.1, Bhopal 462023 (M.P.)',
        phone: '1800-270-6500 | Helpline: 07554007943',
        email: 'Jaikbio2015@gmail.com',
        manager: 'Mr. J.K. Pahat (Founder & CEO)',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        branchImages: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/95990748-ed1d-44e2-98b5-a00e98f6c663.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/56d954ad-ebfc-40d1-bdd8-c9d2c5d9ca47.jpeg'
        ],
        services: ['Manufacturing Unit', 'R&D Center', 'Quality Control Lab', 'Distribution Center'],
        hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
      },
      {
        id: 'ratlam',
        name: 'Ratlam Branch Office',
        address: 'Shop No. 45, Agriculture Market, Ratlam, Madhya Pradesh 457001',
        phone: '07412-234567',
        email: 'ratlam@jaikbio.com',
        manager: 'Ms. Priya Sharma',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        services: ['Sales & Distribution', 'Farmer Support', 'Training Programs', 'Technical Advisory'],
        hours: 'Mon-Sat: 10:00 AM - 5:00 PM'
      }
    ];

    return (
      <section className="py-16 bg-[var(--bg-secondary)]" data-name="branches-map" data-file="components/branches/BranchesMap.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div key={branch.id} id={branch.id} className="fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="card group">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{branch.name}</h3>
                    </div>
                  </div>

                  {branch.branchImages && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-4">Branch Gallery</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {branch.branchImages.map((imageUrl, imageIndex) => (
                          <div key={imageIndex} className="relative overflow-hidden rounded-lg group cursor-pointer">
                            <img
                              src={imageUrl}
                              alt={`${branch.name} Image ${imageIndex + 1}`}
                              className="w-full h-32 object-contain transition-all duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <div className="icon-map-pin text-[var(--primary-color)] mt-1 text-lg flex-shrink-0"></div>
                      <div>
                        <p className="text-[var(--text-secondary)] leading-relaxed">{branch.address}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="icon-phone text-[var(--primary-color)] text-lg flex-shrink-0"></div>
                      <a href={`tel:${branch.phone}`} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="icon-mail text-[var(--primary-color)] text-lg flex-shrink-0"></div>
                      <a href={`mailto:${branch.email}`} className="text-[var(--text-primary)] hover:text-[var(--primary-color)] transition-colors">
                        {branch.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="icon-user text-[var(--primary-color)] text-lg flex-shrink-0"></div>
                      <span className="text-[var(--text-secondary)]">Manager: {branch.manager}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="icon-clock text-[var(--primary-color)] text-lg flex-shrink-0"></div>
                      <span className="text-[var(--text-secondary)]">{branch.hours}</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-[var(--border-color)] mb-6">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-4">Services Available:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {branch.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center text-sm text-[var(--text-secondary)]">
                          <div className="icon-check text-[var(--primary-color)] mr-3 text-sm flex-shrink-0"></div>
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="btn-primary flex-1 text-sm py-3 transform transition-transform duration-200 hover:scale-105">
                      <div className="icon-navigation mr-2 text-sm"></div>
                      Get Directions
                    </button>
                    <button className="btn-secondary flex-1 text-sm py-3 transform transition-transform duration-200 hover:scale-105">
                      <div className="icon-phone mr-2 text-sm"></div>
                      Contact Branch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('BranchesMap component error:', error);
    return null;
  }
}