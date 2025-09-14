function HeroSection({ language }) {
  try {
    const t = getTranslation(language);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" data-name="hero" data-file="components/HeroSection.js">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://app.trickle.so/storage/public/images/usr_148b367c88000001/ec80409c-36ab-4c18-b649-fe9812eada53.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed'
        }}
        role="img"
        aria-label="Main website cover image - Jai K Bio Agritake agricultural products"
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow leading-tight">
          Empowering Farmer Earnings & Health Care,<br />Cultivating a Greener Future
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow opacity-90 leading-relaxed">
          Leading the Green Revolution to restore our planet's natural greenness through innovation in Agro Crops, Plantation, Ayurvedic Health Care & E-commerce
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => window.location.href = 'products.html'}
            className="btn-primary text-lg px-8 py-4 transform hover:scale-110 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
            aria-label="Explore our bio fertilizer products"
          >
            <span className="relative z-10">Explore Products</span>
            <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
          <button 
            onClick={() => window.location.href = 'branches.html'}
            className="btn-secondary text-lg px-8 py-4 transform hover:scale-110 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
            aria-label="Contact our branches in Bhopal and Ratlam"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" aria-label="Scroll down">
        <div className="icon-chevron-down text-2xl" role="presentation"></div>
      </div>


    </section>
  );
  } catch (error) {
    console.error('HeroSection component error:', error);
    return null;
  }
}