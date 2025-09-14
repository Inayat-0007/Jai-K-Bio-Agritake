function ProductHighlights({ language }) {
  try {
    const t = getTranslation(language);

    const featuredProducts = [
      {
        id: 'jai-k-asardhara',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/b3387cd9-9822-4d0a-b902-3caec7235c7f.jpeg',
        title: 'Jai K Asardhara',
        description: 'Revolutionary fertilizer that enhances soil health and crop productivity naturally',
        category: 'Bio Fertilizer',
        price: '₹1300/50kg',
        rating: 4.8
      },

      {
        id: 'super-grow',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/661ca2d4-1e16-4945-9fa8-22c68265be94.png',
        title: 'Super Grow',
        description: 'Advanced Organic fertilizer with superior nutrient delivery system for maximum crop productivity',
        category: 'Bio Fertilizer',
        price: '₹750/40kg',
        rating: 4.9
      },

      {
        id: 'crop-gold',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/07cebe0e-dc54-43fd-b707-fee41da81484.png',
        title: 'Crop Gold',
        description: 'Premium phosphate solubilizer for enhanced root development and flowering',
        category: 'Bio Fertilizer',
        price: '₹999/kg',
        rating: 4.6
      },
      {
        id: 'teak',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/e9a4782a-533b-496c-8865-2bd811cfd27f.jpeg',
        title: 'TEAK',
        description: 'Premium teak plant variety known for its superior wood quality and commercial value',
        category: 'Plant Varieties',
        price: '₹120/plant',
        rating: 4.7
      }
    ];

    return (
      <section className="py-20 bg-[var(--bg-secondary)]" data-name="products" data-file="components/ProductHighlights.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Featured Bio Fertilizer Products
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Discover our premium range of 100% organic bio fertilizers and sustainable agricultural solutions manufactured in India
            </p>
          </div>



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="card group cursor-pointer fade-in hover:shadow-2xl" style={{ animationDelay: `${index * 0.1}s` }} title={product.title}>
                <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-contain transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1">
                    <div className="flex items-center space-x-1">
                      <div className="icon-star text-yellow-400 text-xs"></div>
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors">
                    {product.title}
                  </h3>
                  <span className="text-lg font-bold text-[var(--primary-color)]">{product.price}</span>
                </div>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm">
                  {product.description}
                </p>
                <button 
                  onClick={() => window.location.href = `product-detail.html?id=${product.id}`}
                  className="w-full btn-primary text-sm py-2 transform group-hover:scale-105 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">View Details</span>
                  <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <a href="products.html" className="btn-secondary text-lg px-8 py-4">
              {t.products.viewAll}
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductHighlights component error:', error);
    return null;
  }
}