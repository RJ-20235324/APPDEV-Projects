
const products = [
    {
      id: 1,
      image:'/src/assets/Keystaxx-Apex.webp',
      preview: "Keystaxx Apex",
      name: "Keystaxx Apex - 60% Compact Mechanical Keyboard",
      price: "$99.99",
      layout: "60% (Compact)",
      switchOptions: "Cherry MX Red, Gateron Brown, Gateron Blue",
      material: "Premium Plastic Case, PBT Keycaps",
      rgbLighting: "Full RGB with customizable profiles",
      connectivity: "USB-C Wired, Bluetooth 5.0 (Wireless)",
      description: "The Keystaxx Apex is the ultimate compact keyboard, perfect for both gaming and typing. Its small form factor and customizable RGB lighting make it a standout in any setup. Choose from a variety of switch options to fit your typing or gaming style. Designed for portability and convenience, this 60% keyboard will easily fit in any desk space.",
      keyFeatures: [
        "Hot-swappable switches (no soldering required).",
        "16.8 million RGB color options with reactive and wave effects.",
        "Premium build with an aluminum top case."
      ],
      reviews: "⭐⭐⭐⭐☆ (4.5/5)"
      
    },
    {
      id: 2,
      image:'/src/assets/Keystaxx-Titan-X.webp',
      preview: "Keystaxx Titan X",
      name: "Keystaxx Titan X - Full-Size Mechanical Keyboard",
      price: "$129.99",
      layout: "Full-size (104 Keys)",
      switchOptions: "Cherry MX Black, Cherry MX Brown, Gateron Silent Red",
      material: "ABS Case, PBT Keycaps",
      rgbLighting: "Dynamic RGB with 10+ Effects",
      connectivity: "Wired USB-C, Detachable Cable",
      description: "The Keystaxx Titan X offers a full-size layout with a robust, tactile feel. Whether you're gaming or working, this keyboard delivers precision and comfort with its tactile switches and customizable RGB effects. The premium build quality and USB-C wired connectivity ensure durability and fast response times.",
      keyFeatures: [
        "On-the-fly RGB adjustments via function keys.",
        "Cherry MX or Gateron switches, designed for longevity.",
        "Built with a durable plastic and steel frame."
      ],
      reviews: "⭐⭐⭐⭐⭐ (5/5)"
    },
    {
      id: 3,
      image:'/src/assets/Keystaxx-Nimbus.webp',
      preview: "Keystaxx Nimbus",
      name: "Keystaxx Nimbus - 75% Mechanical Keyboard",
      price: "$119.99",
      layout: "75% (87 Keys)",
      switchOptions: "Gateron Yellow, Cherry MX Red, Cherry MX Brown",
      material: "Plastic Case, PBT Keycaps",
      rgbLighting: "None",
      connectivity: "Wired USB-C",
      description: "The Keystaxx Nimbus offers a mid-size 75% layout, making it a versatile choice for users who want both compactness and the full set of keys. Its high-quality keycaps and smooth keypresses, combined with the reliable RGB effects, make it perfect for anyone who loves a mix of aesthetics and functionality.",
      keyFeatures: [
        "Ergonomically designed for long typing sessions.",
        "Wide range of RGB effects with customizable settings.",
        "Hot-swappable switches for easy customization."
      ],
      reviews: "⭐⭐⭐⭐☆ (4.3/5)"
      
    },
    {
      id: 4,
      image:'/src/assets/Keystaxx-Kraken.webp',
      preview: "Keystaxx Kraken",
      name: "Keystaxx Kraken - Tenkeyless (TKL) Mechanical Keyboard",
      price: "$109.99",
      layout: "Tenkeyless (87 Keys)",
      switchOptions: "Gateron Green, Cherry MX Blue",
      material: "ABS Plastic, PBT Keycaps",
      rgbLighting: "RGB Backlighting with 5 Dynamic Modes",
      connectivity: "Wired USB-C",
      description: "For gamers and typists who prefer to keep it minimal, the Keystaxx Kraken features a tenkeyless layout, providing you with more space for mouse movement and a cleaner desk. The mechanical switches give you responsive feedback, and the RGB lighting adds style to your setup.",
      keyFeatures: [
        "Tactile mechanical switches for precision.",
        "5 dynamic RGB lighting modes.",
        "Compact, durable design with high-quality PBT keycaps."
      ],
      reviews: "⭐⭐⭐⭐⭐ (4.9/5)"
     
    },
    {
      id: 5,
      image:'/src/assets/Keystaxx-Horizon.webp',
      preview: "Keystaxx Horizon",
      name: "Keystaxx Horizon - 65% Mechanical Keyboard",
      price: "$129.99",
      layout: "65% (70 Keys)",
      switchOptions: "Cherry MX Black, Gateron Brown",
      material: "Aluminum Frame, PBT Keycaps",
      rgbLighting: "Full RGB with Custom Effects",
      connectivity: "USB-C Wired",
      description: "The Keystaxx Horizon combines the ideal layout with premium materials and customizable RGB lighting. This 65% keyboard is perfect for gamers and professionals who value both functionality and style. Its smooth switches and sleek design make it the ultimate choice for any workspace.",
      keyFeatures: [
        "Customizable RGB effects and color profiles.",
        "Compact and ergonomic design for extended comfort.",
        "High-durability PBT keycaps."
      ],
      reviews: "⭐⭐⭐⭐⭐ (5/5)"
      
    },
    {
      id: 6,
      image:'/src/assets/Keystaxx-Arcana.webp',
      preview: "Keystaxx Arcana",
      name: "Keystaxx Arcana - Handcrafted Resin Artisan Keyboard",
      price: "$199.99",
      layout: "Full-Size (104 Keys)",
      switchOptions: "Custom Gateron X switches, Silent Cherry MX",
      material: "Handcrafted Resin Case, CNC-machined Aluminum Plate",
      rgbLighting: "Under-glow RGB with customizable effects",
      connectivity: "USB-C Wired",
      description: "The Keystaxx Arcana is a premium artisan mechanical keyboard, featuring a handcrafted resin case with a unique celestial design. The keyboard is designed for enthusiasts who want both aesthetics and functionality. Whether you're looking to enhance your setup with a visually stunning piece or require a keyboard with excellent typing feel, the Arcana is a masterpiece.",
      keyFeatures: [
        "Handcrafted, limited-edition resin case with individual designs.",
        "Hot-swappable switches, allowing for easy customization.",
        "Full RGB support with reactive lighting effects.",
        "Premium keycaps made from PBT plastic."
      ],
      reviews: "⭐⭐⭐⭐⭐ (5/5)"

    },
    {
      id: 7,
      image:'/src/assets/Keystaxx-Mirage.webp',
      preview: "Keystaxx Mirage",
      name: "Keystaxx Mirage - Artisan Acrylic Keyboard with Custom Artwork",
      price: "$179.99",
      layout: "75% (87 Keys)",
      switchOptions: "Gateron Ink V2 switches, Cherry MX Silent Red",
      material: "Acrylic Body with Custom Artwork Inserts",
      rgbLighting: "RGB Backlighting with multiple profiles",
      connectivity: "USB-C Wired",
      description: "The Keystaxx Mirage features a stunning acrylic body that can be customized with unique artwork inserts, making it a truly one-of-a-kind keyboard. The craftsmanship is visible in every detail, from the smooth, tactile switches to the crisp RGB lighting that highlights the keyboard's elegance.",
      keyFeatures: [
        "Custom artwork inserts that can be changed.",
        "High-quality PBT keycaps with shine-through RGB lighting.",
        "Precise, responsive switches designed for both gaming and typing."
      ],
      reviews: "⭐⭐⭐⭐⭐ (4.8/5)"

    },
    {
      id: 8,
      image:'/src/assets/Keystaxx-Seraph.webp',
      preview: "Keystaxx Seraph",
      name: "Keystaxx Seraph - Wood & Resin Hybrid Artisan Keyboard",
      price: "$239.99",
      layout: "65% (68 Keys)",
      switchOptions: "Linear Gateron Black, Tactile Cherry MX Brown",
      material: "Wood and Resin Hybrid Case",
      rgbLighting: "RGB lighting with custom profiles and under-glow",
      connectivity: "USB-C Wired",
      description: "The Keystaxx Seraph blends natural materials with modern design. The wood and resin hybrid case offers a smooth, luxurious feel and a unique design. Paired with high-end mechanical switches and premium keycaps, the Seraph is both a functional tool and a beautiful piece of art.",
      keyFeatures: [
        "Handcrafted wood and resin case with a unique, organic look.",
        "Customizable RGB backlighting and under-glow effects.",
        "Premium, high-quality switches for an unmatched typing experience."
      ],
      reviews: "⭐⭐⭐⭐⭐ (4.9/5)"
     
    },
    {
      id: 9,
      image:'/src/assets/Keystaxx-Zenith.webp',
      preview: "Keystaxx Zenith" ,
      name: "Keystaxx Zenith - Limited Edition Artisan Keyboard",
      price: "$299.99",
      layout: "Full-Size (104 Keys)",
      switchOptions: "Custom MX Browns, Silent Gateron Yellows",
      material: "Premium Brass Body, Custom Handcrafted Keycaps",
      rgbLighting: "Full RGB with dynamic color waves",
      connectivity: "USB-C Wired",
      description: "The Keystaxx Zenith is a top-tier artisan keyboard made for collectors and connoisseurs. Its brass body and handcrafted keycaps elevate it to the highest levels of luxury. Limited to only 50 units, the Zenith is not just a keyboard—it's an investment in quality and style.",
      keyFeatures: [
        "Solid brass body for a premium and durable feel.",
        "Custom, hand-carved keycaps designed by artisans.",
        "Fully customizable RGB lighting with reactive and color wave effects."
      ],
      reviews: "⭐⭐⭐⭐⭐ (5/5)"
   
    },
    {
        id: 10,
        image: '/src/assets/Keystaxx-Nephim.webp',
        preview: "Keystaxx Nephim" ,
        name: "Keystaxx Nephim - Wood & Saphire Hybrid Artisan Keyboard",
        price: "$239.99",
        layout: "65% (68 Keys)",
        switchOptions: "Linear Gateron Black, Tactile Cherry MX Brown",
        material: "Wood and Resin Hybrid Case",
        rgbLighting: "RGB lighting with custom profiles and under-glow",
        connectivity: "USB-C Wired",
        description: "The Keystaxx Seraph blends natural materials with modern design. The wood and resin hybrid case offers a smooth, luxurious feel.",
        keyFeatures: [
          "Handcrafted wood and resin case with a unique, organic look.",
          "Customizable RGB backlighting and under-glow effects.",
          "Premium, high-quality switches for an unmatched typing experience."
        ],
        reviews: "⭐⭐⭐⭐⭐ (4.9/5)"
      }

    
  ];
  
export default function Products() {
    return (
      <>
    <h1 style={{fontWeight: 'bold',fontSize: '50px',color: 'black',marginTop: '74px', marginLeft: '135px'}}>Explore the lineup.</h1>
    <br />
    <div className="product-list" style={{  marginLeft: '100px', marginRight: '100px', outline: 'none' }}>
    

        {products.map((product) => (
            <div key={product.id} className="card" style={{ width: '18rem', marginBottom: '20px' }}>
                <img src={product.image} alt={product.name} className="card-img-top" style={{height: '300px'}}/>
            <div className="card-body">
                <h4 className="card-title" style={{fontWeight: 'bold'}}>{product.preview}  </h4>
                <p><strong>Price:</strong> {product.price}</p>
                <a href="#" class="btn btn-primary" style={{borderRadius: "20px"}}>Learn More</a>
                <a href="#" class="card-link" style={{borderRadius: "20px", textDecoration: "none", fontSize: '17px'}}> Buy &gt; </a>
            </div>
            </div>
        ))}
        </div>
      </>
    );
  }
  