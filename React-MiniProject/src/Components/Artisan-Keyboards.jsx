
const artisanKeycaps = [
    {
      id: 1,
      image: '/src/assets/artisanKeycap1.png',
      name: "Keystaxx Celestial - Resin Keycap",
      price: "$34.99",
      material: "Handcrafted Resin",
      color: "Galactic Purple & Blue Swirl",
      description: "The Keystaxx Celestial Artisan Keycap features a stunning swirl design that mimics the deep space nebulae. Made from high-quality resin and hand-polished to perfection, it's a beautiful addition to any keyboard build.",
      keyFeatures: [
        "Handcrafted resin design",
        "Glitter finish to mimic stars",
        "Fits standard Cherry MX switches"
      ],
      reviews: "⭐⭐⭐⭐⭐ (5/5)"
    },
    {
      id: 2,
      image: '/src/assets/artisanKeycap2.png',
      name: "Keystaxx Ember - Fire Resin Keycap",
      price: "$39.99",
      material: "Premium Resin & Glitter",
      color: "Red, Orange, and Yellow Fade",
      description: "The Keystaxx Ember Artisan Keycap brings the warmth of fire to your fingertips. This keycap features a fiery gradient with embedded glitter, perfect for those who appreciate a warm, radiant look on their setup.",
      keyFeatures: [
        "Resin keycap with fiery gradient",
        "Embedded glitter for an extra shine",
        "Fits Cherry MX and compatible switches"
      ],
      reviews: "⭐⭐⭐⭐☆ (4.7/5)"
    },
    {
      id: 3,
      image: '/src/assets/artisanKeycap3.png',
      name: "Keystaxx Crystal - Clear Resin Keycap",
      price: "$29.99",
      material: "Transparent Resin",
      color: "Clear Crystal with Frosted Accents",
      description: "For those who love minimalism and elegance, the Keystaxx Crystal Artisan Keycap features clear resin with frosted accents for a pristine look. Perfect for backlighting, this keycap lets your RGB shine through in style.",
      keyFeatures: [
        "Clear resin with frosted accents",
        "Allows light to shine through for RGB setups",
        "Fits Cherry MX and similar switches"
      ],
      reviews: "⭐⭐⭐⭐⭐ (5/5)"
    },
    {
      id: 4,
      image: '/src/assets/artisanKeycap4.png',
      name: "Keystaxx Lunar - Moonstone Keycap",
      price: "$44.99",
      material: "Moonstone Resin",
      color: "Moonstone Grey with Pearl Finish",
      description: "The Keystaxx Lunar Artisan Keycap features a moonstone resin material with a shimmering pearl finish. It's a soft and subtle keycap that adds sophistication to your setup, perfect for those who enjoy celestial aesthetics.",
      keyFeatures: [
        "Moonstone resin material",
        "Shimmering pearl finish for elegance",
        "Fits all Cherry MX switches"
      ],
      reviews: "⭐⭐⭐⭐⭐ (5/5)"
    },
    {
      id: 5,
      image: '/src/assets/artisanKeycap5.png',
      name: "Keystaxx Forest - Wood & Resin Keycap",
      price: "$49.99",
      material: "Wood, Resin & Brass",
      color: "Deep Brown with Gold Brass Accent",
      description: "The Keystaxx Forest Artisan Keycap combines the natural beauty of wood with resin and a brass accent. This handcrafted keycap brings a touch of nature to your mechanical keyboard, with a rich wood texture and golden detailing.",
      keyFeatures: [
        "Wood and resin design with a brass accent",
        "Handcrafted and polished to perfection",
        "Fits Cherry MX and other mechanical switches"
      ],
      reviews: "⭐⭐⭐⭐⭐ (4.9/5)"
    },
    {
      id: 6,
      image: '/src/assets/artisanKeycap6.png',
      name: "Keystaxx Aurora - Glow-in-the-Dark Keycap",
      price: "$24.99",
      material: "Glow-in-the-Dark Resin",
      color: "Green Glow with Blue Undertones",
      description: "The Keystaxx Aurora Artisan Keycap glows in the dark, providing a soft and ethereal light. Ideal for nighttime use, this keycap features a unique glow with blue undertones, perfect for adding a mystical aura to your keyboard.",
      keyFeatures: [
        "Glow-in-the-dark resin",
        "Blue undertones for a cool effect",
        "Fits Cherry MX compatible switches"
      ],
      reviews: "⭐⭐⭐⭐☆ (4.6/5)"
    },
    {
      id: 7,
      image: '/src/assets/artisanKeycap7.png',
      name: "Keystaxx Honeycomb - Honey Resin Keycap",
      price: "$29.99",
      material: "Resin & Honeycomb Design",
      color: "Golden Honey with Black Accents",
      description: "Inspired by the intricate design of honeycombs, the Keystaxx Honeycomb Artisan Keycap is made of rich golden resin with black accents. It's a bold, eye-catching design that's perfect for collectors and enthusiasts alike.",
      keyFeatures: [
        "Honeycomb design with golden resin",
        "Bold black accents for contrast",
        "Fits standard Cherry MX switches"
      ],
      reviews: "⭐⭐⭐⭐⭐ (5/5)"
    },
    {
      id: 8,
      image: '/src/assets/artisanKeycap8.png',
      name: "Keystaxx Aqua - Water Droplet Resin Keycap",
      price: "$34.99",
      material: "Clear Resin & Water Droplet",
      color: "Clear with Water Droplet Effect",
      description: "The Keystaxx Aqua Artisan Keycap has a unique water droplet effect encapsulated in clear resin. This keycap is designed for those who appreciate the beauty of nature and want to bring the calming essence of water into their workspace.",
      keyFeatures: [
        "Clear resin with water droplet effect",
        "High-gloss finish for added shine",
        "Compatible with Cherry MX and similar switches"
      ],
      reviews: "⭐⭐⭐⭐⭐ (4.8/5)"
    },
    {
      id: 9,
      image: '/src/assets/artisanKeycap9.png',
      name: "Keystaxx Dragon - Dragon Resin Keycap",
      price: "$59.99",
      material: "Handmade Resin & Metal",
      color: "Red, Gold, and Black with Dragon Motif",
      description: "The Keystaxx Dragon Artisan Keycap features a detailed dragon design with bold red, black, and gold accents. Crafted with premium resin and metal, this keycap is perfect for adding a fierce, mythical touch to your keyboard.",
      keyFeatures: [
        "Detailed dragon motif with metal accents",
        "Handmade with premium resin",
        "Fits Cherry MX and compatible switches"
      ],
      reviews: "⭐⭐⭐⭐⭐ (5/5)"
    },
    {
      id: 10,
      image: '/src/assets/artisanKeycap10.png',
      name: "Keystaxx Starry Night - Resin & Glitter Keycap",
      price: "$49.99",
      material: "Resin & Glitter",
      color: "Midnight Blue with Silver Glitter",
      description: "The Keystaxx Starry Night Artisan Keycap captures the magic of a starry sky with its midnight blue resin and shimmering silver glitter. This keycap is perfect for those who enjoy the beauty of the night sky, bringing a touch of wonder to your keyboard.",
      keyFeatures: [
        "Midnight blue resin with silver glitter",
        "Glittering effect that catches the light",
        "Fits all standard mechanical switches"
      ],
      reviews: "⭐⭐⭐⭐⭐ (4.9/5)"
    }
  ];
  
export default function ArtisanKeyboards() {
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
  