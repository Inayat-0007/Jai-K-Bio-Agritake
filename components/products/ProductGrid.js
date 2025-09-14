function ProductGrid({ language }) {
  try {
    const t = getTranslation(language);

    const bioFertilizers = [
      {
        id: 'jai-k-asardhara',
        name: 'Jai K Asardhara',
        category: 'Bio Fertilizer',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/b3387cd9-9822-4d0a-b902-3caec7235c7f.jpeg',
        description: 'Revolutionary fertilizer that enhances soil health and crop productivity naturally.',
        features: ['Nitrogen Fixation', '100% Organic', 'Soil Health Improver', 'Eco-Friendly'],
        price: '₹1300/50kg',
        rating: 4.8
      },
      {
        id: 'nitrogen-fixer',
        name: 'Jai K Killer',
        category: 'Bio Fertilizer',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/2a4f0fe2-74c2-413e-b07d-9636322554ca.jpeg',
        description: 'Advanced microbial bio-fertilizer containing Azotobacter and Rhizobium bacteria for natural nitrogen fixation.',
        features: ['Nitrogen Fixing Bacteria', 'Reduces Synthetic Need', 'Soil Fertility', 'Plant Vigor'],
        price: '₹1350/500ml',
        rating: 4.7
      },


      {
        id: 'crop-gold',
        name: 'Crop Gold',
        category: 'Bio Fertilizer',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/07cebe0e-dc54-43fd-b707-fee41da81484.png',
        description: 'Premium phosphate solubilizing bio-fertilizer that converts insoluble soil phosphates into plant-absorbable form.',
        features: ['Phosphorus Release', 'Root Development', 'Natural Process', 'Cost Effective'],
        price: '₹999/kg',
        rating: 4.6
      },
      {
        id: 'super-grow',
        name: 'Super Grow',
        category: 'Bio Fertilizer',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/661ca2d4-1e16-4945-9fa8-22c68265be94.png',
        description: 'Advanced Organic fertilizer with superior nutrient delivery system for maximum crop productivity.',
        features: ['Superior Nutrients', 'Maximum Productivity', 'Soil Health Enhancement', 'Advanced Formula'],
        price: '₹750/40kg',
        rating: 4.9
      },
      {
        id: 'jai-k-power-g',
        name: 'JAI K POWER G',
        category: 'Bio Fertilizer',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/b652fe88-8cb8-4fb7-acf1-219466341375.png',
        description: 'Advanced Organic-Soil conditioner with powerful growth promoting compounds for enhanced crop vigor and maximum yield.',
        features: ['Growth Promotion', 'Enhanced Vigor', 'Yield Maximization', 'Nutrient Efficiency'],
        price: '₹1099/15kg',
        rating: 4.8
      },
      {
        id: 'jai-k-power-l',
        name: 'JAI K POWER L',
        category: 'Bio Fertilizer',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/5d99cbb3-ada8-4581-b07f-15ac4285c666.jpeg',
        description: 'Advanced liquid Organic-Soil conditioner with specialized formulation for enhanced nutrient absorption.',
        features: ['Liquid Formula', 'Quick Absorption', 'Enhanced Growth', 'Easy Application'],
        price: '₹1099/1L',
        rating: 4.7
      }
    ];

    const plantProducts = [
      {
        id: 'mahogany',
        name: 'MAHOGANY',
        category: 'Plant Varieties',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/d8d94d3d-26a5-4ab7-8ad0-c22806e09eb0.jpeg',
        description: 'Premium quality mahogany plant variety for forestry and timber production with excellent growth characteristics this is African high quality plant.',
        features: ['Fast Growing', 'High Quality Timber', 'Disease Resistant', 'Long Lifespan'],
        price: '₹120/plant',
        rating: 4.8
      },
      {
        id: 'teak',
        name: 'TEAK',
        category: 'Plant Varieties',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/e9a4782a-533b-496c-8865-2bd811cfd27f.jpeg',
        description: 'Premium teak plant variety known for its superior wood quality and excellent commercial value this is Tissue Culture Plant.',
        features: ['Premium Wood Quality', 'High Commercial Value', 'Weather Resistant', 'Long Term Investment'],
        price: '₹120/plant',
        rating: 4.7
      },
      {
        id: 'mango-dasheri',
        name: 'MANGO - DASHERI',
        category: 'Fruit Plants',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/a4fb1798-c3e1-48e7-8969-5b7d49c84011.jpeg',
        description: 'Premium Dasheri mango variety known for its sweet taste and excellent fruit quality value this is the Tissue Culture & grafted Plant.',
        features: ['Sweet Taste', 'High Yield', 'Disease Resistant', 'Premium Quality'],
        price: '₹270/plant',
        rating: 4.9
      },
      {
        id: 'kagzi-lemon',
        name: 'KAGZI LEMON',
        category: 'Citrus Plants',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/c7520cd2-ac94-4db1-9a7f-48702816cfca.jpeg',
        description: 'High-quality Kagzi lemon variety with excellent citric acid content and commercial viability this is the Tissue Culture plant.',
        features: ['High Citric Acid', 'Commercial Value', 'Year Round Production', 'Juicy Fruits'],
        price: '₹220/plant',
        rating: 4.6
      },
      {
        id: 'pink-taiwani-amrud',
        name: 'PINK TAIWANI AMRUD',
        category: 'Fruit Plants',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/fbc535d0-e7cf-4ab3-aeb0-ad6927e8a354.jpeg',
        description: 'Premium Pink Taiwani guava variety with excellent taste, color, and nutritional value this is the Tissue Culture plants.',
        features: ['Pink Color', 'Sweet Taste', 'High Nutrition', 'Good Shelf Life'],
        price: '₹200/plant',
        rating: 4.8
      },
      {
        id: 'banana-g9',
        name: 'BANANA G-9',
        category: 'Fruit Plants',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/bb38f09a-ff5c-4c78-88c3-4b361af81fb0.jpeg',
        description: 'High-yielding Banana G-9 variety with excellent bunch weight and disease resistance this is the Tissue Culture plants.',
        features: ['High Yield', 'Large Bunch Weight', 'Disease Resistant', 'Quick Maturity'],
        price: '₹120/plant',
        rating: 4.7
      },
      {
        id: 'ganesh-anar',
        name: 'GANESH ANAR',
        category: 'Fruit Plants',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/f9a5bd8b-88e0-4a9c-97df-bf61719912f9.jpeg',
        description: 'Premium Ganesh pomegranate variety known for its large size, sweet taste, and health benefits this is the Tissue Culture plants.',
        features: ['Large Size', 'Sweet Taste', 'Rich in Antioxidants', 'High Market Value'],
        price: '₹200/plant',
        rating: 4.9
      },

    ];

    const ayurvedicProducts = [
      {
        id: 'jai-k-ayurvedic',
        name: 'JAI K AYURVEDIC',
        category: 'Ayurvedic Products',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/8ef0235b-445d-4ecf-90e6-6bcd89af037b.jpeg',
        description: 'Premium Ayurvedic herbal formulation based on ancient principles using medicinal 40 types of Ayurvedic Medicine plants for natural wellness and health benefits this is the natural Ayurvedic products without any side effects.',
        features: ['Natural Wellness', 'Ancient Formula', 'Herbal Ingredients', 'Traditional Medicine'],
        price: '₹1299/pack',
        rating: 4.9
      },
      {
        id: 'jai-k-sanjeevni',
        name: 'JAI K SANJEEVNI',
        category: 'Ayurvedic Products', 
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/9b02f2cd-a47a-4f99-9b5c-8ad57e4208b1.png',
        description: 'Premium Ayurvedic herbal formulation based on ancient principles using medicinal 40 types of Ayurvedic Medicine plants for natural wellness and health benefits this is the natural Ayurvedic products without any side effects.',
        features: ['Immunity Booster', 'Therapeutic Properties', 'Vitality Enhancement', 'Health Benefits'],
        price: '₹1299/bottle',
        rating: 4.8
      }
    ];

    const ProductCard = ({ product, index }) => (
      <div className="card group cursor-pointer fade-in hover:shadow-2xl relative" style={{ animationDelay: `${index * 0.1}s` }} title={product.name}>
        <div className="relative overflow-hidden rounded-xl mb-6 bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-contain transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
              {product.category}
            </span>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-2 shadow-lg">
            <div className="flex items-center space-x-1">
              <div className="icon-star text-yellow-500 text-sm"></div>
              <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--primary-color)] transition-colors leading-tight">
              {product.name}
            </h3>
            <span className="text-xl font-bold text-[var(--primary-color)] ml-3 flex-shrink-0">{product.price}</span>
          </div>
          
          <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-6 min-h-[3rem]">{product.description}</p>
          
          <div className="space-y-3 mb-6">
            {product.features.slice(0, 4).map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center text-sm text-[var(--text-secondary)]">
                <div className="icon-check text-[var(--primary-color)] mr-3 text-sm flex-shrink-0"></div>
                <span className="leading-tight">{feature}</span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => window.location.href = `product-detail.html?id=${product.id}`}
            className="w-full btn-primary text-sm py-3 font-semibold transform group-hover:scale-105 transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    );

    return (
      <section className="py-20 lg:py-24 bg-[var(--bg-secondary)]" data-name="product-grid" data-file="components/products/ProductGrid.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          
          {/* Category Overview Section */}
          <div className="fade-in">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-[var(--text-primary)] mb-8">Our Product Categories</h1>
              <p className="text-xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed mb-12">
                Discover our comprehensive range of agricultural and wellness products across three specialized categories
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[var(--primary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                  <div className="icon-leaf text-2xl text-[var(--primary-color)]"></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Bio Fertilizers</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>What are Bio Fertilizers?</strong> Living microorganisms that enhance soil fertility by fixing atmospheric nitrogen, solubilizing phosphorus, and mobilizing nutrients naturally. They reduce dependency on chemical fertilizers while improving soil health and crop yield sustainably.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[var(--secondary-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                  <div className="icon-seedling text-2xl text-[var(--secondary-color)]"></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Organic Products</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>What are Organic Products?</strong> Certified organic agricultural inputs made from natural sources without synthetic chemicals. These include compost activators, plant extracts, and bio-stimulants that promote sustainable farming practices and produce chemical-free crops.
                </p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[var(--accent-color)] bg-opacity-10 rounded-full flex items-center justify-center">
                  <div className="icon-flower text-2xl text-[var(--accent-color)]"></div>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">Ayurvedic & Plants</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  <strong>What are Ayurvedic Products?</strong> Traditional herbal formulations based on ancient Ayurvedic principles using medicinal plants and herbs. These natural wellness products support health, immunity, and vitality through time-tested botanical ingredients and traditional preparation methods.
                </p>
              </div>
            </div>
          </div>

          {/* Bio Fertilizers & Soil Amendments Section */}
          <div id="bio-fertilizer" className="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">Organic and Bio fertilizers</h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                Advanced microbial fertilizers that enhance soil fertility, fix nutrients naturally, and promote sustainable crop growth through beneficial microorganisms
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {bioFertilizers.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>

          {/* Plant Varieties & Agricultural Products Section */}
          <div id="plant-products" className="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">Premium Plants & Fruits Plants</h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                High-quality plant varieties including fruit plants, timber trees, and medicinal plants with superior genetics and excellent commercial viability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {plantProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>

          {/* Ayurvedic Products Section */}
          <div id="ayurvedic-products" className="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">Ayurvedic Products</h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
                Traditional herbal formulations based on ancient Ayurvedic principles using medicinal plants and herbs for natural wellness and health benefits
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {ayurvedicProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ProductGrid component error:', error);
    return null;
  }
}