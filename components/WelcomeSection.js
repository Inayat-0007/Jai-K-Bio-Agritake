function WelcomeSection({ language }) {
  try {
    const t = getTranslation(language);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const ceoImages = [
      {
        url: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/e1af215b-5499-4f5c-aeda-113261a8aade.png',
        name: 'Mr J.K. PAHAT',
        title: 'Chairman & Managing Director (C.M.D)'
      },
      {
        url: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/8ee63439-4780-4266-944f-e5e83d7fae30.jpeg',
        name: 'S.K SOGAN',
        title: 'Managing Director'
      }
    ];

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % ceoImages.length);
      }, 4000); // Change image every 4 seconds

      return () => clearInterval(interval);
    }, []);

    const currentCEO = ceoImages[currentImageIndex];

    return (
      <section className="py-20 bg-[var(--bg-primary)]" data-name="welcome" data-file="components/WelcomeSection.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="fade-in">
              <div className="mb-6">
                <span className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Established April 2, 2015
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                {t.welcome.title}
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                Founded by visionary entrepreneur <strong>Mr. J.K. Pahat</strong>, who brings 22 years of direct marketing expertise from a farming family background. Under his dynamic leadership, Jai K Bio Agritake has grown from humble beginnings to a dominant presence with 500+ workforce.
              </p>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                We've established a strong presence across <strong>3 states (M.P, R.J, H.R, M.H, C.G)</strong> with focused operations in rural and semi-urban sectors. Our business spans <strong>Agro Crops, Plantation, Ayurvedic Health Care & E-commerce</strong>, promoting economic growth of the farming community and the nation.
              </p>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                Our mission: Leading the Green Revolution to restore our planet's natural greenness. We believe in stewardship over greed, empowering farmers globally through innovation, motivation, commitment and values.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary" onClick={() => window.location.href = 'corporate.html'}>
                  Learn More About Us
                </button>
                <button className="btn-secondary" onClick={() => window.location.href = 'branches.html'}>
                  Visit Our Branches
                </button>
              </div>
            </div>

            {/* CEO Images with Auto Rotation */}
            <div className="fade-in">
              <div className="relative">
                <img
                  key={currentImageIndex}
                  src={currentCEO.url}
                  alt={currentCEO.name}
                  className="w-full h-96 rounded-2xl shadow-2xl object-cover transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">{currentCEO.name}</h3>
                  <p className="text-lg opacity-90">{currentCEO.title}</p>
                </div>
                
                {/* Image Indicators */}
                <div className="absolute bottom-6 right-6 flex space-x-2">
                  {ceoImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('WelcomeSection component error:', error);
    return null;
  }
}
