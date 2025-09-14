function RelatedProducts({ language = 'en' }) {
  try {
    const relatedProducts = [
    {
      id: 'jai-k-power-l',
      name: 'JAI K POWER L',
      image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/5d99cbb3-ada8-4581-b07f-15ac4285c666.jpeg',
      price: '₹1099/1L',
      rating: 4.7
    },
    {
      id: 'super-grow',
      name: 'Super Grow',
      image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/661ca2d4-1e16-4945-9fa8-22c68265be94.png',
      price: '₹750/40kg',
      rating: 4.9
    },
    {
      id: 'crop-gold',
      name: 'Crop Gold',
      image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/07cebe0e-dc54-43fd-b707-fee41da81484.png',
      price: '₹999/kg',
      rating: 4.6
    },
    {
      id: 'jai-k-power-g',
      name: 'JAI K POWER G',
      image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/b652fe88-8cb8-4fb7-acf1-219466341375.png',
      price: '₹1099/15kg',
      rating: 4.8
    },
    {
      id: 'jai-k-ayurvedic',
      name: 'JAI K AYURVEDIC',
      image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/8ef0235b-445d-4ecf-90e6-6bcd89af037b.jpeg',
      price: '₹1299/pack',
      rating: 4.9
    },
    {
      id: 'jai-k-sanjeevni',
      name: 'JAI K SANJEEVNI',
      image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/9b02f2cd-a47a-4f99-9b5c-8ad57e4208b1.png',
      price: '₹1299/bottle',
      rating: 4.8
    }
  ];

    return (
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text-primary)]">
            Related Products
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((product, index) => (
              <div key={product.id} className="card group fade-in" style={{ animationDelay: `${index * 0.1}s` }} title={product.name}>
                <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1">
                    <div className="flex items-center space-x-1">
                      <div className="icon-star text-yellow-400 text-xs"></div>
                      <span className="text-xs font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-[var(--text-primary)]">{product.name}</h3>
                    <span className="font-bold text-[var(--primary-color)]">{product.price}</span>
                  </div>
                  
                  <button 
                    onClick={() => window.location.href = `product-detail.html?id=${product.id}`}
                    className="w-full btn-primary text-sm py-2 hover:scale-105 transition-transform"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('RelatedProducts component error:', error);
    return null;
  }
}