function Awards({ language }) {
  const [selectedImage, setSelectedImage] = React.useState(null);
  
  try {
    const t = getTranslation(language);

    const awards = [
      {
        title: 'FSSAI Food Safety License',
        year: '2024',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/fa259f8b-587a-43c2-a5ef-b5219143a42a.jpeg',
        description: 'Official FSSAI license ensuring food safety standards compliance for organic and bio-fertilizer products manufacturing and distribution.',
        isDocument: true,
        documentType: 'License'
      },
      {
        title: 'Import Export Certificate',
        year: '2024', 
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/85ef4e9f-74cf-4061-8182-4f151f4b7ef0.jpeg',
        description: 'Government issued import export certificate enabling international trade operations and global market access for agricultural products.',
        isDocument: true,
        documentType: 'Certificate'
      },
      {
        title: 'Order Cum Tax Registration',
        year: '2024',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/c3322eaf-8b82-4433-b0fa-72acff9c823e.jpeg',
        description: 'Official tax registration document with order processing authorization for business operations and compliance.',
        isDocument: true,
        documentType: 'Registration'
      },
      {
        title: 'PAN Card Business Registration', 
        year: '2023',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/3b8c212f-f943-4b4d-8650-cf1b70ba071a.jpeg',
        description: 'Permanent Account Number card for business entity with tax identification and financial transaction authorization.',
        isDocument: true,
        documentType: 'Identity Document'
      },
      {
        title: 'Pradhikar Patra Authorization',
        year: '2023',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/72d8df22-0a38-4392-873b-0ea66731aee6.jpeg',
        description: 'Government authority letter granting official permissions and operational authorization for agricultural business activities.',
        isDocument: true,
        documentType: 'Authorization'
      }
    ];

    return (
      <section id="awards" className="py-16 lg:py-20 bg-[var(--bg-primary)]" data-name="awards" data-file="components/corporate/Awards.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16 fade-in">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">Awards & Certifications</h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
                Our official certifications and legal documents building trust and ensuring compliance with all regulatory standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="card group fade-in hover:shadow-2xl" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-xl mb-6 bg-white p-4 shadow-inner">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-105 rounded-lg shadow-lg cursor-pointer"
                    />
                    <div className="absolute top-6 right-6">
                      <div className="bg-red-500 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                        <div className="icon-shield-check text-sm"></div>
                        <span>VERIFIED</span>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-[var(--primary-color)] text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                        {award.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                      <div className="icon-award text-[var(--primary-color)] text-xl"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="inline-block bg-[var(--secondary-color)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {award.documentType}
                      </span>
                      <h3 className="text-lg font-bold text-[var(--text-primary)] leading-tight">{award.title}</h3>
                    </div>
                    
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{award.description}</p>
                    
                    <button 
                      onClick={() => setSelectedImage({
                        url: award.image,
                        title: award.title,
                        description: award.description
                      })}
                      className="w-full btn-primary text-sm py-3 font-semibold transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <div className="icon-eye text-lg"></div>
                      <span>View Document</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Full Screen Image Modal */}
            {selectedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
                <div className="relative max-w-5xl w-full max-h-[90vh] bg-[var(--bg-primary)] rounded-xl overflow-hidden">
                  {/* Modal Header */}
                  <div className="flex justify-between items-center p-4 border-b border-[var(--border-color)]">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">{selectedImage.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">Official Document - Click and drag to zoom</p>
                    </div>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="p-2 rounded-full bg-[var(--bg-secondary)] hover:bg-red-100 text-[var(--text-secondary)] hover:text-red-600 transition-all duration-200"
                    >
                      <div className="icon-x text-2xl"></div>
                    </button>
                  </div>
                  
                  {/* Image Container */}
                  <div className="relative h-[70vh] overflow-auto bg-gray-100">
                    <img
                      src={selectedImage.url}
                      alt={selectedImage.title}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-110 cursor-zoom-in"
                    />
                  </div>
                  
                  {/* Modal Footer */}
                  <div className="p-4 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{selectedImage.description}</p>
                  </div>
                </div>
              </div>
            )}
        </div>
      </section>
    );
  } catch (error) {
    console.error('Awards component error:', error);
    return null;
  }
}