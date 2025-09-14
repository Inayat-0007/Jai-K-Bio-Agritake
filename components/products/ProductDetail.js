function ProductDetail({ language = 'en' }) {
  const [product, setProduct] = React.useState(null);
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');
      
      if (!productId) {
        console.warn('No product ID provided, redirecting to products page');
        window.location.href = 'products.html';
        return;
      }
      
      const productData = getProductData(productId);
      if (productData) {
        setProduct(productData);
        
        // Update page title with SEO optimization
        document.title = `${productData.name} - Premium Bio Fertilizer | Jai K Bio Agritake`;
        
        // Update meta description for better SEO
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', 
            `${productData.description} Price: ${productData.price}. Premium organic bio fertilizer manufactured in India by Jai K Bio Agritake. Enhance crop yield with sustainable agricultural solutions.`
          );
        }
        
        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute('content', 
            `${productData.name}, bio fertilizer, organic fertilizer, ${productData.category}, agricultural products India, sustainable farming, crop yield enhancement, Jai K Bio Agritake`
          );
        }
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
          ogTitle.setAttribute('content', `${productData.name} - Premium Bio Fertilizer | Jai K Bio Agritake`);
        }
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
          ogDescription.setAttribute('content', productData.description);
        }
        
      } else {
        console.error('Product not found:', productId);
        window.location.href = 'products.html';
      }
    } catch (error) {
      console.error('Error loading product data:', error);
      window.location.href = 'products.html';
    }
  }, []);

  // Auto-slideshow effect for Jai K Asardhara
  React.useEffect(() => {
    if (product && product.images && product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => 
          (prevIndex + 1) % product.images.length
        );
      }, 7000); // Change image every 7 seconds

      return () => clearInterval(interval);
    }
  }, [product]);

  const getProductData = (id) => {
    const products = {
      'jai-k-asardhara': {
        id: 'jai-k-asardhara',
        name: 'Jai K Asardhara',
        category: 'Premium Bio Fertilizer',
        price: '₹1300 per 50kg',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/b3387cd9-9822-4d0a-b902-3caec7235c7f.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/b3387cd9-9822-4d0a-b902-3caec7235c7f.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/e11bff3b-cb24-460f-b945-8160a63ee4fc.png'
        ],
        description: 'Revolutionary fertilizer that enhances soil health and crop productivity naturally.',
        specifications: {
          'Package Size': '50kg',
          'Application Rate': '50kg - 100kg per acre',
          'Shelf Life': '36 months',
          'Storage': 'Cool, dry place'
        },
        usage: [
          'Mix with soil before sowing',
          'Apply during flowering stage',
          'Use with drip irrigation for best results'
        ],
        youtubeChannel: 'https://youtube.com/@jaikbioagritake'
      },
      'power-g': {
        id: 'power-g',
        name: 'Power G',
        category: 'Growth Promoter',
        price: '₹650 per 25kg',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        description: 'High-performance growth promoter for enhanced plant vigor and yield.',
        specifications: {
          'Package Size': '25kg',
          'Application Rate': '1-2 kg per acre',
          'Shelf Life': '18 months',
          'Storage': 'Dry storage'
        },
        usage: [
          'Apply at seedling stage',
          'Mix with irrigation water',
          'Reapply every 15 days'
        ],
        youtubeChannel: 'https://youtube.com/@jaikbioagritake'
      },
      'super-grow': {
        id: 'super-grow',
        name: 'Super Grow',
        category: 'Advanced Bio Fertilizer',
        price: '₹750 per 40kg',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/661ca2d4-1e16-4945-9fa8-22c68265be94.png',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/661ca2d4-1e16-4945-9fa8-22c68265be94.png',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/3e4380ac-c3d6-4235-a2ab-67c398e3efdd.png'
        ],
        description: 'Advanced Organic fertilizer with superior nutrient delivery system for maximum crop productivity and soil health enhancement.',
        specifications: {
          'Package Size': '40kg',
          'Application Rate': '40kg per acre',
          'Shelf Life': '36 months',
          'Storage': 'Cool, dry place'
        },
        usage: [
          'Apply during soil preparation',
          'Mix thoroughly with soil',
          'Can be used with drip irrigation',
          'Apply at planting and flowering stages'
        ],
        youtubeUrl: 'https://youtu.be/jNfP2BaGA9A?si=O40D1BBoRu3P9-m9'
      },
      'crop-gold': {
        id: 'crop-gold',
        name: 'Crop Gold',
        category: 'Premium Phosphate Solubilizer',
        price: '₹999 per kg',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/07cebe0e-dc54-43fd-b707-fee41da81484.png',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/07cebe0e-dc54-43fd-b707-fee41da81484.png',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/06fad0ce-6a9a-431c-b8fc-4f80b4b9c45f.png'
        ],
        description: 'Premium phosphate solubilizing bio-fertilizer that converts insoluble soil phosphates into plant-absorbable form for enhanced root development and flowering.',
        specifications: {
          'Package Size': '1kg',
          'Application Rate': '500 gram per acre',
          'Shelf Life': '36 months',
          'Storage': 'Cool, dry place away from direct sunlight'
        },
        usage: [
          'Apply during soil preparation before planting',
          'Mix with organic matter for better results',
          'Can be applied through drip irrigation',
          'Reapply during flowering stage for maximum benefit'
        ],
        youtubeUrl: 'https://youtu.be/hYZjlg8qBTM?si=mGkepnTVDUdLZEgY'
      },


      'nitrogen-fixer': {
        id: 'nitrogen-fixer',
        name: 'Jai K Killer',
        category: 'Microbial Bio Fertilizer',
        price: '₹1350 per 500ml',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/2a4f0fe2-74c2-413e-b07d-9636322554ca.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/2a4f0fe2-74c2-413e-b07d-9636322554ca.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/80e1a8fb-8725-4f9b-b322-139e94fcbc0d.png'
        ],
        description: 'Advanced microbial bio-fertilizer containing Azotobacter and Rhizobium bacteria for natural nitrogen fixation, reducing dependency on synthetic fertilizers while enhancing soil fertility and plant vigor.',
        specifications: {
          'Package Size': '500ml',
          'Application Rate': '250ml per acre',
          'Shelf Life': '36 months',
          'Storage': 'Cool, dry place away from moisture'
        },
        usage: [
          'Apply during soil preparation before sowing',
          'Mix with seeds or apply directly to soil',
          'Can be used with organic fertilizers',
          'Reapply during crop growth stages for maximum benefit'
        ],
        youtubeUrl: 'https://youtu.be/yoJ-05XFEzQ?si=FFuN0LcIS2BYod8V'
      },
      'neem-bio-pesticide': {
        id: 'neem-bio-pesticide',
        name: 'JK Power-G',
        category: 'Organic Bio Pesticide',
        price: '₹280 per liter',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/282d3b9c-d43e-46fe-a580-9ef76c8cadd8.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/282d3b9c-d43e-46fe-a580-9ef76c8cadd8.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/512291c5-098e-402e-8d81-024f57888448.png'
        ],
        description: 'Premium organic neem oil-based bio-pesticide that effectively controls a wide range of pests without harming beneficial insects or pollinators. Safe for environment and human health.',
        specifications: {
          'Package Size': '250ml, 500ml, 1L, 5L',
          'Application Rate': '2-3 ml per liter of water',
          'Shelf Life': '24 months',
          'Storage': 'Cool, dry place away from direct sunlight'
        },
        usage: [
          'Dilute with water as per recommended ratio',
          'Apply during early morning or evening hours',
          'Spray on both upper and lower leaf surfaces',
          'Repeat application every 7-10 days as needed'
        ],
        youtubeChannel: 'https://youtube.com/@jaikbioagritake'
      },
      'trichoderma-viride': {
        id: 'trichoderma-viride',
        name: 'Jai K Power-L',
        category: 'Bio Fungicide',
        price: '₹320 per kg',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/999e06d0-8877-4b0f-9b56-2ddc1ed42edd.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/999e06d0-8877-4b0f-9b56-2ddc1ed42edd.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/3f905b41-a399-42af-be6f-4eecc24af596.png'
        ],
        description: 'Advanced bio-fungicide containing beneficial Trichoderma viride microorganisms that effectively combat soil-borne fungal diseases including root rot, damping-off, and wilt diseases while improving soil health.',
        specifications: {
          'Package Size': '500g, 1kg, 5kg, 25kg',
          'Application Rate': '2-4 kg per acre',
          'Shelf Life': '18 months',
          'Storage': 'Cool, dry place away from direct sunlight'
        },
        usage: [
          'Mix with soil before planting or transplanting',
          'Apply as soil drench around plant roots',
          'Can be mixed with organic compost for enhanced effect',
          'Reapply every 30-45 days during growing season'
        ],
        youtubeChannel: 'https://youtube.com/@jaikbioagritake'
      },
      'mahogany': {
        id: 'mahogany',
        name: 'MAHOGANY',
        category: 'Plant Varieties',
        price: '₹120 per plant',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/d8d94d3d-26a5-4ab7-8ad0-c22806e09eb0.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/d8d94d3d-26a5-4ab7-8ad0-c22806e09eb0.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/cf6bb95c-ba4b-4e3a-891a-a20cb252be30.png'
        ],
        description: 'Premium quality mahogany plant variety for forestry and timber production with excellent growth characteristics this is African high quality plant.',
        specifications: {
          'Plant Type': 'Timber Tree',
          'Plant Height': '2-3 feet',
          'Application Rate': '500 plants per acre',
          'Maturity Period': '12 years'
        },
        usage: [
          'Plant in well-prepared soil',
          'Maintain proper spacing between plants',
          'Regular watering during initial growth',
          'Pruning for better growth'
        ],
        youtubeUrl: 'https://youtu.be/nMweU18qpaE?si=wd98lWt5DAMJu9T-'
      },
      'teak': {
        id: 'teak',
        name: 'TEAK',
        category: 'Plant Varieties',
        price: '₹120 per plant',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/e9a4782a-533b-496c-8865-2bd811cfd27f.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/e9a4782a-533b-496c-8865-2bd811cfd27f.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/60ed124d-9d91-4f5e-bd33-aeb111955604.png'
        ],
        description: 'Premium teak plant variety known for its superior wood quality and excellent commercial value this is Tissue Culture Plant.',
        specifications: {
          'Plant Type': 'Premium Timber Tree',
          'Plant Height': '2-3 feet',
          'Application Rate': '500 plants per acre',
          'Maturity Period': '12 years'
        },
        usage: [
          'Select well-drained fertile soil',
          'Plant during monsoon season',
          'Maintain 3x3 meter spacing',
          'Regular monitoring and care'
        ],
        youtubeUrl: 'https://youtu.be/kgZeRc1qf_A?si=7DXRWhGNBTXjf9mT'
      },
      'mango-dasheri': {
        id: 'mango-dasheri',
        name: 'MANGO - DASHERI',
        category: 'Fruit Plants',
        price: '₹270 per plant',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/a4fb1798-c3e1-48e7-8969-5b7d49c84011.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/a4fb1798-c3e1-48e7-8969-5b7d49c84011.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/599f8cb2-d20c-4673-8a94-7044924d6a24.png'
        ],
        description: 'Premium Dasheri mango variety known for its sweet taste and excellent fruit quality value this is the Tissue Culture & grafted Plant.',
        specifications: {
          'Variety': 'Dasheri Mango',
          'Plant Height': '2-3 feet',
          'Application Rate': '500 plants per acre',
          'Maturity Period': '2 year after give the Productions'
        },
        usage: [
          'Plant in well-drained sandy loam soil',
          'Maintain 8x8 meter spacing',
          'Regular watering and fertilization',
          'Pruning for better fruit production'
        ],
        youtubeUrl: 'https://youtu.be/R4YzfZYzMeQ?si=Ax6_FCtGVHikJ22c'
      },
      'kagzi-lemon': {
        id: 'kagzi-lemon',
        name: 'KAGZI LEMON',
        category: 'Citrus Plants',
        price: '₹220 per plant',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/c7520cd2-ac94-4db1-9a7f-48702816cfca.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/c7520cd2-ac94-4db1-9a7f-48702816cfca.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/65ae7009-32de-4d61-bdba-f7a1dd110626.png'
        ],
        description: 'High-quality Kagzi lemon variety with excellent citric acid content and commercial viability this is the Tissue Culture plant.',
        specifications: {
          'Variety': 'Kagzi Lemon',
          'Plant Height': '2-3 feet',
          'Application Rate': '500 plants per acre',
          'Maturity Period': '2 year after give the Productions'
        },
        usage: [
          'Plant in well-drained soil with good sunlight',
          'Maintain 4x4 meter spacing',
          'Regular pruning and fertilization',
          'Protect from strong winds'
        ],
        youtubeUrl: 'https://youtu.be/X-ffZTY4XYY?si=Icv_i8g2O0abEdcn'
      },
      'pink-taiwani-amrud': {
        id: 'pink-taiwani-amrud',
        name: 'PINK TAIWANI AMRUD',
        category: 'Fruit Plants',
        price: '₹200 per plant',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/fbc535d0-e7cf-4ab3-aeb0-ad6927e8a354.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/fbc535d0-e7cf-4ab3-aeb0-ad6927e8a354.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/f341c4d9-1abc-41a8-ad89-082ad8645e56.png'
        ],
        description: 'Premium Pink Taiwani guava variety with excellent taste, color, and nutritional value this is the Tissue Culture plants.',
        specifications: {
          'Variety': 'Pink Taiwani Guava',
          'Plant Height': '1.5-2 feet',
          'Application Rate': '500 plants per acre',
          'Maturity Period': '2 year after give the Productions'
        },
        usage: [
          'Plant in fertile, well-drained soil',
          'Maintain 5x5 meter spacing',
          'Regular watering during dry season',
          'Periodic pruning for better yield'
        ],
        youtubeUrl: 'https://youtu.be/6lvX-67uaA8?si=Ay-rEgqigJwWDSzd'
      },
      'banana-g9': {
        id: 'banana-g9',
        name: 'BANANA G-9',
        category: 'Fruit Plants',
        price: '₹120 per plant',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/bb38f09a-ff5c-4c78-88c3-4b361af81fb0.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/bb38f09a-ff5c-4c78-88c3-4b361af81fb0.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/9c8fa932-ad8c-41bc-a83d-2d03f06b3c10.png'
        ],
        description: 'High-yielding Banana G-9 variety with excellent bunch weight and disease resistance this is the Tissue Culture plants.',
        specifications: {
          'Variety': 'Banana G-9',
          'Plant Height': '1.5-2 feet',
          'Application Rate': '500 plants per acre',
          'Maturity Period': '2 year after give the Productions'
        },
        usage: [
          'Plant in fertile, well-drained soil',
          'Maintain 2x2 meter spacing',
          'Regular irrigation and nutrition',
          'Support with stakes if needed'
        ],
        youtubeUrl: 'https://youtu.be/Zb3ZTO0okQM?si=UJxQIygmsNrPP9up'
      },
      'ganesh-anar': {
        id: 'ganesh-anar',
        name: 'GANESH ANAR',
        category: 'Fruit Plants',
        price: '₹200 per plant',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/f9a5bd8b-88e0-4a9c-97df-bf61719912f9.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/f9a5bd8b-88e0-4a9c-97df-bf61719912f9.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/e4533438-f97f-4f20-8c7b-77fb36def6f6.png'
        ],
        description: 'Premium Ganesh pomegranate variety known for its large size, sweet taste, and health benefits this is the Tissue Culture plants.',
        specifications: {
          'Variety': 'Ganesh Pomegranate',
          'Plant Height': '1.5-2 feet',
          'Application Rate': '500 plants per acre',
          'Maturity Period': '2 year after give the Productions'
        },
        usage: [
          'Plant in well-drained alkaline soil',
          'Maintain 4x4 meter spacing',
          'Regular pruning and training',
          'Adequate irrigation during fruiting'
        ],
        youtubeUrl: 'https://youtu.be/LBRKB7BdGoo?si=_4bXUbI9T-huFq1P'
      },

      'jai-k-power-g': {
        id: 'jai-k-power-g',
        name: 'JAI K POWER G',
        category: 'Advanced Bio Fertilizer',
        price: '₹1099 per 15kg',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/b652fe88-8cb8-4fb7-acf1-219466341375.png',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/b652fe88-8cb8-4fb7-acf1-219466341375.png',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/34742474-b3de-4175-b1da-27f9c78dc70f.jpeg'
        ],
        description: 'Advanced Organic-Soil conditioner with powerful growth promoting compounds for enhanced crop vigor, stronger root development, and maximum yield potential.',
        specifications: {
          'Package Size': '15kg',
          'Application Rate': '15kg per acre',
          'Shelf Life': '36 months',
          'Storage': 'Cool, dry place away from direct sunlight'
        },
        usage: [
          'Apply during soil preparation for optimal nutrient availability',
          'Mix thoroughly with soil or apply through broadcasting',
          'Compatible with drip irrigation and fertigation systems',
          'Reapply during vegetative and flowering stages for enhanced results'
        ],
        youtubeUrl: 'https://youtu.be/PCDfb810bp8?si=UUYAtDiPkeWfT1gk'
      },
      'jai-k-power-l': {
        id: 'jai-k-power-l',
        name: 'JAI K POWER L',
        category: 'Liquid Bio Fertilizer',
        price: '₹1099 per 1 Liter',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/5d99cbb3-ada8-4581-b07f-15ac4285c666.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/5d99cbb3-ada8-4581-b07f-15ac4285c666.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/1a7483d1-73cf-491f-94f4-75686044e02d.png'
        ],
        description: 'Advanced liquid Organic-Soil conditioner with specialized formulation for enhanced nutrient absorption, improved plant metabolism, and superior crop performance.',
        specifications: {
          'Package Size': '1 Liter',
          'Application Rate': '1 Liter per acre',
          'Shelf Life': '36 months',
          'Storage': 'Cool, dry place away from direct sunlight'
        },
        usage: [
          'Dilute with water as per recommended ratio for foliar application',
          'Can be applied through drip irrigation system for soil application',
          'Apply during early morning or evening hours for best results',
          'Reapply every 15-20 days during growing season for optimal benefits'
        ],
        youtubeUrl: 'https://youtu.be/y4ampAsWuw4?si=gAV5ItpDebYOxngN'
      },

      'jai-k-ayurvedic': {
        id: 'jai-k-ayurvedic',
        name: 'JAI K AYURVEDIC',
        category: 'Ayurvedic Products',
        price: '₹1299 per packet',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/8ef0235b-445d-4ecf-90e6-6bcd89af037b.jpeg',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/8ef0235b-445d-4ecf-90e6-6bcd89af037b.jpeg',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/937f13f4-4e1b-4890-aec5-f2443d6b9eab.png'
        ],
        description: 'Premium Ayurvedic herbal formulation based on ancient principles using medicinal 40 types of Ayurvedic Medicine plants for natural wellness and health benefits this is the natural Ayurvedic products without any side effects.',
        specifications: {
          'Package Size': '1299 Rs Per Packet',
          'Dosage': '1 tablets daily',
          'Shelf Life': '3 year after MFD Date',
          'Storage': 'Cool, dry place away from direct sunlight'
        },
        usage: [
          'Take with warm water after meals',
          'Follow recommended dosage strictly',
          'Consult healthcare provider before use',
          'Continue for recommended duration for best results'
        ],
        youtubeUrl: 'https://youtu.be/GeeHJjJ9KLc'
      },

      'jai-k-sanjeevni': {
        id: 'jai-k-sanjeevni',
        name: 'JAI K SANJEEVNI',
        category: 'Ayurvedic Products',
        price: '₹1299 per bottle',
        image: 'https://app.trickle.so/storage/public/images/usr_148b367c88000001/9b02f2cd-a47a-4f99-9b5c-8ad57e4208b1.png',
        images: [
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/9b02f2cd-a47a-4f99-9b5c-8ad57e4208b1.png',
          'https://app.trickle.so/storage/public/images/usr_148b367c88000001/63286fdc-a8b3-4c39-a0f1-4b2911fcbd73.jpeg'
        ],
        description: 'Premium Ayurvedic herbal formulation based on ancient principles using medicinal 40 types of Ayurvedic Medicine plants for natural wellness and health benefits this is the natural Ayurvedic products without any side effects.',
        specifications: {
          'Package Size': '1299 Rs Per Bottle',
          'Dosage': '30ML Everyday',
          'Shelf Life': '3 year after MFD Date',
          'Storage': 'Cool, dry place away from moisture'
        },
        usage: [
          'Take on empty stomach with lukewarm water',
          'Maintain regular timing for consumption',
          'Avoid during pregnancy without consultation',
          'Store in original packaging for freshness'
        ],
        youtubeUrl: 'https://youtu.be/nz1-TTUXn0g'
      }
    };
    
    return products[id] || products['jai-k-asardhara'];
  };

  const extractYouTubeVideoId = (url) => {
    if (!url) return 'u1itj6l28rE';
    const match = url.match(/youtu\.be\/([^?]+)/);
    return match ? match[1] : 'u1itj6l28rE';
  };

  const getVideoUrl = (product) => {
    return product.youtubeUrl || product.youtubeChannel || 'https://youtu.be/u1itj6l28rE';
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]">
        <div className="text-center p-8">
          <div className="icon-loader animate-spin text-4xl text-[var(--primary-color)] mb-4"></div>
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Loading Product Details</h2>
          <p className="text-[var(--text-secondary)]">Please wait while we fetch the product information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl bg-gray-100">
              <img
                src={product.images ? product.images[currentImageIndex] : product.image}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-96 object-contain transition-all duration-1000 hover:scale-105"
              />
              
              {/* Image Navigation - only show if multiple images */}
              {product.images && product.images.length > 1 && (
                <>
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentImageIndex === index 
                            ? 'bg-white shadow-lg' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentImageIndex(prevIndex => 
                      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
                    )}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <div className="icon-chevron-left text-lg"></div>
                  </button>
                  
                  <button
                    onClick={() => setCurrentImageIndex(prevIndex => 
                      (prevIndex + 1) % product.images.length
                    )}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                  >
                    <div className="icon-chevron-right text-lg"></div>
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail Gallery - only show if multiple images */}
            {product.images && product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-gray-100 ${
                      currentImageIndex === index 
                        ? 'border-[var(--primary-color)] shadow-lg' 
                        : 'border-[var(--border-color)] hover:border-[var(--secondary-color)]'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-contain transition-transform duration-200 hover:scale-110"
                    />
                  </button>
                ))}
              </div>
            )}
            
            <button
              onClick={() => setShowVideoModal(true)}
              className="w-full btn-primary py-3 flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="icon-play text-lg"></div>
              <span>Watch Product Demo</span>
            </button>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-[var(--primary-color)] text-sm font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-[var(--text-primary)] mt-1">{product.name}</h1>
              <p className="text-2xl font-semibold text-[var(--accent-color)] mt-2">{product.price}</p>
            </div>

            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">{product.description}</p>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">Specifications:</h3>
              <div className="bg-[var(--bg-secondary)] rounded-lg p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-[var(--border-color)] last:border-0">
                      <span className="text-[var(--text-secondary)] text-sm">{key}:</span>
                      <span className="text-[var(--text-primary)] font-medium text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">Usage Instructions:</h3>
              <ul className="space-y-2">
                {product.usage.map((instruction, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="icon-check-circle text-[var(--primary-color)] mt-1 text-sm"></div>
                    <span className="text-[var(--text-secondary)] text-sm">{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeVideoModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div 
            className="bg-[var(--bg-primary)] rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-[var(--border-color)]">
              <h3 id="video-modal-title" className="text-lg font-semibold text-[var(--text-primary)]">
                {product.name} Product Demonstration
              </h3>
              <button
                onClick={closeVideoModal}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-full hover:bg-[var(--bg-secondary)]"
                aria-label="Close video modal"
              >
                <div className="icon-x text-xl"></div>
              </button>
            </div>
            <div className="aspect-video bg-gray-900">
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeVideoId(getVideoUrl(product))}?autoplay=1&rel=0&modestbranding=1&cc_load_policy=1`}
                title={`${product.name} Product Demonstration Video`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}