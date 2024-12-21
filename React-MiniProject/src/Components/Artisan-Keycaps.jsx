import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBasket } from "./BasketContext";
const artisanKeycaps = [
  {
    id: 1,
    image: "/src/assets/Keystaxx-Metal-Artisan-Keycap.webp",
    preview: "Keystaxx Metal Artisan Keycap",
    name: "Keystaxx Metal Artisan Keycap",
    price: 34.99,
    material: "Durable Aluminum Alloy",
    color: "Silver with Matte Finish",
    description:
      "The Keystaxx Metal Artisan Keycap is precision-engineered using high-quality aluminum alloy for durability and style. This keycap is perfect for enthusiasts who value a premium, minimalist look on their mechanical keyboards.",
    keyFeatures: [
      "Made from high-quality aluminum alloy",
      "Matte silver finish for a sleek appearance",
      "Compatible with Cherry MX switches",
    ],
    reviews: [
      {
        user: "William Dosilito",
        rating: "⭐☆☆☆☆ (2/5)",
        comment: "Maarte design, kupal ata gumawa.",
      },
      {
        user: "Samantha Jones",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Very durable and looks fantastic. Slightly heavier than expected, but I love it.",
      },
      {
        user: "Alex Brown",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Perfect for a minimalistic setup. The quality is top-notch and matches the description perfectly.",
      },
      {
        user: "Maria Lopez",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "This keycap is a beautiful addition to my collection. It’s solid, stylish, and definitely worth the price.",
      },
      {
        user: "David Lee",
        rating: "⭐⭐⭐☆☆ (3/5)",
        comment:
          "Love the sleek design. Only wish it had more texture for extra grip.",
      },
      {
        user: "Catherine Wilson",
        rating: "⭐⭐☆☆☆ (2/5)",
        comment:
          "It looks great, but the weight makes it hard to type comfortably for long periods.",
      },
    ],
  },
  {
    id: 2,
    image: "/src/assets/Christmas-Series-Aluminum-Alloy-Artisan-Keycap.webp",
    preview: "Aluminum Artisan Keycap",
    name: "Keystaxx Christmas Aluminum Alloy Artisan Keycap",
    price: 39.99,
    material: "Aluminum Alloy",
    color: "Festive Red and Green",
    description:
      "The Keystaxx Christmas Aluminum Alloy Artisan Keycap adds holiday cheer to your keyboard. Made from durable aluminum alloy with festive red and green hues, this keycap is ideal for seasonal setups.",
    keyFeatures: [
      "Festive red and green design",
      "Durable aluminum alloy construction",
      "Compatible with Cherry MX switches",
    ],
    reviews: [
      {
        user: "Olivia Martinez",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Such a festive addition to my keyboard! The quality is amazing, and it fits perfectly.",
      },
      {
        user: "James Carter",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "The colors are vibrant and look great. Could be a bit more comfortable to use, though.",
      },
      {
        user: "Emily Davis",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Love this for the holidays! It brings a lot of cheer to my setup.",
      },
      {
        user: "Brian Turner",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Sturdy and eye-catching. Perfect for any Christmas enthusiast.",
      },
      {
        user: "Laura Adams",
        rating: "⭐⭐⭐☆☆ (3/5)",
        comment:
          "A bit pricey, but it really brightens up my keyboard. Definitely worth it for seasonal vibes.",
      },
      {
        user: "Mason Wilson",
        rating: "⭐⭐☆☆☆ (2/5)",
        comment:
          "The colors are great, but the paint chips off easily with frequent use.",
      },
    ],
  },
  {
    id: 3,
    image: "/src/assets/Chrismas-Theme-Resin-Artisan-Keycap.webp",
    preview: "Keystaxx Resin Artisan Keycap",
    name: "Keystaxx Christmas Resin Artisan Keycap",
    price: 29.99,
    material: "Premium Resin",
    color: "Clear with Snowflake Design",
    description:
      "The Keystaxx Christmas Resin Artisan Keycap features a clear resin build with embedded snowflake accents, capturing the festive spirit. It’s perfect for complementing a winter or holiday-themed keyboard layout.",
    keyFeatures: [
      "Clear resin with snowflake accents",
      "Lightweight and durable",
      "Fits Cherry MX and compatible switches",
    ],
    reviews: [
      {
        user: "Sophia White",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Absolutely love the snowflake design! It's beautiful and adds a winter wonderland touch.",
      },
      {
        user: "Ethan Garcia",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "The resin quality is good, but it feels slightly delicate. Still, it looks stunning.",
      },
      {
        user: "Ava Brown",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Perfect for my Christmas theme! It's both elegant and durable.",
      },
      {
        user: "Mason Scott",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Really pretty keycap. Be careful during installation; it can be a bit fragile.",
      },
      {
        user: "Isabella Kim",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "This is such a unique design! It stands out and looks amazing on my keyboard.",
      },
      {
        user: "Noah Davis",
        rating: "⭐⭐☆☆☆ (2/5)",
        comment:
          "I expected better durability. The resin has already started cracking after a week.",
      },
    ],
  },
  {
    id: 4,
    image: "/src/assets/UFO-Aluminium-Alloy-Artisan-Keycap.webp",
    preview: "Keystaxx UFO Artisan Keycap",
    name: "Keystaxx UFO Aluminum Alloy Artisan Keycap",
    price: 44.99,
    material: "Premium Aluminum Alloy",
    color: "Metallic Grey",
    description:
      "The Keystaxx UFO Aluminum Alloy Artisan Keycap brings a futuristic look to your setup. Its sleek metallic grey finish and unique shape add a modern aesthetic to your keyboard.",
    keyFeatures: [
      "Futuristic UFO-inspired design",
      "Durable metallic grey aluminum alloy",
      "Compatible with Cherry MX and similar switches",
    ],
    reviews: [
      {
        user: "Liam Johnson",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "This keycap is one-of-a-kind. The UFO design is sleek and futuristic.",
      },
      {
        user: "Emma Roberts",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Stylish and unique, although I wish it was a bit more textured for better grip.",
      },
      {
        user: "Noah Lee",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Absolutely love the modern look! Fits perfectly and adds an edge to my keyboard.",
      },
      {
        user: "Amelia Williams",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Great quality and design, but make sure it fits your keyboard setup.",
      },
      {
        user: "Lucas Brown",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "A standout piece! The metallic finish is perfect and durable.",
      },
      {
        user: "Mia Clark",
        rating: "⭐⭐☆☆☆ (2/5)",
        comment:
          "The design is cool, but it doesn't sit well on my keyboard. It wobbles.",
      },
    ],
  },
  {
    id: 5,
    image: "/src/assets/Yellow-Duck-Resin-Artisan-Keycap1.webp",
    preview: "Keystaxx Duck Artisan Keycap",
    name: "Keystaxx Yellow Duck Resin Artisan Keycap",
    price: 49.99,
    material: "High-Quality Resin",
    color: "Yellow with Orange Beak",
    description:
      "The Keystaxx Yellow Duck Resin Artisan Keycap is a whimsical addition to your keyboard. Its charming duck design makes it an instant favorite for those who love playful and fun aesthetics.",
    keyFeatures: [
      "Handcrafted yellow duck design",
      "Made from durable resin",
      "Fits standard Cherry MX switches",
    ],
    reviews: [
      {
        user: "Sophia Miller",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "The cutest keycap! I get so many compliments on it. Super high quality.",
      },
      {
        user: "Oliver Wilson",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Fun and playful design. Could be more comfortable for long typing sessions.",
      },
      {
        user: "Mia Green",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment: "Absolutely adorable! Adds so much character to my keyboard.",
      },
      {
        user: "William Martinez",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Great quality and design, but be careful with the paint when cleaning.",
      },
      {
        user: "Isabella King",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment: "A fun piece that makes my desk stand out! Love it.",
      },
      {
        user: "Jacob Hall",
        rating: "⭐⭐☆☆☆ (2/5)",
        comment: "It’s cute, but the resin feels cheap and brittle.",
      },
    ],
  },
  {
    id: 6,
    image: "/src/assets/Family-Computer-Aluminium-Alloy-Artisan-Keycap.webp",
    preview: "Keystaxx Family Computer",
    name: "Keystaxx Family Computer Aluminum Alloy Artisan Keycap",
    price: 24.99,
    material: "Durable Aluminum Alloy",
    color: "Beige and Red",
    description:
      "Inspired by retro gaming consoles, the Keystaxx Family Computer Aluminum Alloy Artisan Keycap features a nostalgic design that adds character to your keyboard.",
    keyFeatures: [
      "Retro family computer design",
      "Durable aluminum alloy",
      "Compatible with Cherry MX switches",
    ],
    reviews: [
      {
        user: "Daniel Scott",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Nostalgic and well-made. It’s a bit small, but still a great touch to my keyboard.",
      },
      {
        user: "Grace Allen",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Perfect for retro gaming enthusiasts! Very sturdy and well-crafted.",
      },
      {
        user: "Michael Young",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment: "Love the design. Just wish it had more texture for grip.",
      },
      {
        user: "Hannah Taylor",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment: "Good quality and design. Looks great on my setup.",
      },
      {
        user: "Lucas Harris",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "A nostalgic gem! Brings back great memories. I’m thrilled with it.",
      },
      {
        user: "Olivia Thomas",
        rating: "⭐⭐☆☆☆ (2/5)",
        comment: "Nice design, but the colors seem to wear off after a while.",
      },
    ],
  },
  {
    id: 7,
    image: "/src/assets/Whelk-Resin-Artisan-Keycap-Blue.webp",
    preview: "Keystaxx Whelk Keycap",
    name: "Keystaxx Whelk Resin Artisan Keycap",
    price: 29.99,
    material: "Resin with Seashell Motif",
    color: "Pearl White with Pink Accents",
    description:
      "The Keystaxx Whelk Resin Artisan Keycap is inspired by ocean life, featuring a beautiful seashell design. Its pearl-like finish captures the elegance of the sea.",
    keyFeatures: [
      "Unique seashell-inspired design",
      "Made from high-quality resin",
      "Compatible with Cherry MX switches",
    ],
    reviews: [
      {
        user: "Anthony Lee",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Absolutely stunning design! Looks amazing and really brings my keyboard to life.",
      },
      {
        user: "Grace Miller",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Unique and fun. Could use a bit more durability, but it’s great for the price.",
      },
      {
        user: "Daniel White",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment: "Perfect for any space and gaming theme. Love it!",
      },
      {
        user: "Alicia Roberts",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Detailed and high quality. The colors are vibrant and eye-catching.",
      },
      {
        user: "Matthew Scott",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment: "A standout keycap! Worth every penny.",
      },
      {
        user: "Ella Adams",
        rating: "⭐⭐☆☆☆ (2/5)",
        comment:
          "Cool design, but the resin has some noticeable imperfections.",
      },
    ],
  },
  {
    id: 8,
    image:
      "/src/assets/Keystaxx-Cute-Computer-Aluminum-Alloy-Artisan-Keycap.webp",
    preview: "Keystaxx Cute Computer Keycap",
    name: "Keystaxx Cute Computer Aluminum Alloy Artisan Keycap",
    price: 34.99,
    material: "Aluminum Alloy",
    color: "Soft Beige with Pastel Accents",
    description:
      "The Keystaxx Cute Computer Artisan Keycap is a playful and charming design, featuring pastel accents that bring a soft, nostalgic vibe to your setup.",
    keyFeatures: [
      "Playful pastel computer design",
      "Durable aluminum alloy construction",
      "Compatible with Cherry MX switches",
    ],
    reviews: [
      {
        user: "Carlos Smith",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "This keycap is beautiful and perfectly crafted. It's an eye-catcher!",
      },
      {
        user: "Sophie Johnson",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment: "Great craftsmanship. The star accents really make it pop.",
      },
      {
        user: "James Brown",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment: "Love the cosmic theme! High quality and looks fantastic.",
      },
      {
        user: "Nora Lewis",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment: "Impressive design and fits well on my keyboard.",
      },
      {
        user: "Oliver Clark",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Amazing detail! I get compliments on this keycap all the time.",
      },
      {
        user: "Lily Peterson",
        rating: "⭐⭐☆☆☆ (2/5)",
        comment:
          "The design is beautiful, but the keycap wobbles a bit on my keyboard.",
      },
    ],
  },
  {
    id: 9,
    image: "/src/assets/Keystaxx-Sword-Aluminum-Alloy-Artisan-Keycap.webp",
    preview: "Keystaxx Sword Keycap",
    name: "Keystaxx Sword Aluminum Alloy Artisan Keycap",
    price: 59.99,
    material: "Metal and Resin",
    color: "Silver with Blade Engraving",
    description:
      "The Keystaxx Sword Artisan Keycap features an intricate sword design, combining the durability of metal with the elegance of resin details.",
    keyFeatures: [
      "Detailed sword engraving",
      "Made from premium metal and resin",
      "Fits Cherry MX and compatible switches",
    ],
    reviews: [
      {
        user: "Zoe Wilson",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "The dragon scale detail is phenomenal. This is a must-have for any fantasy lover.",
      },
      {
        user: "Eli Martinez",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Very unique and looks awesome. The resin could be a bit sturdier, though.",
      },
      {
        user: "Mason Taylor",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment: "Absolutely stunning. The colors and detail are just perfect.",
      },
      {
        user: "Emma Scott",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment: "Great addition to my keyboard. Really stands out.",
      },
      {
        user: "Henry Adams",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment: "Worth every penny! The quality is unmatched.",
      },
      {
        user: "Natalie Clark",
        rating: "⭐⭐☆☆☆ (2/5)",
        comment: "Looks great, but the scale pattern wears out quickly.",
      },
    ],
  },
  {
    id: 10,
    image:
      "/src/assets/Keystaxx-Vintage-Computer-Aluminum-Alloy-Artisan-Keycap.webp",
    preview: "Keystaxx Vintage Computer Keycap",
    name: "Keystaxx Vintage Computer Aluminum Alloy Artisan Keycap",
    price: 49.99,
    material: "Aluminum Alloy",
    color: "Retro Beige with Grey Accents",
    description:
      "The Keystaxx Vintage Computer Artisan Keycap evokes the aesthetics of early computing, with a classic beige design that is both nostalgic and stylish.",
    keyFeatures: [
      "Classic retro computer design",
      "Durable aluminum alloy build",
      "Fits standard mechanical switches",
    ],
    reviews: [
      {
        user: "Oliver Harris",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "This keycap brings back great memories of arcade gaming! Perfect for my setup.",
      },
      {
        user: "Chloe Wilson",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Fun and nostalgic. The quality is good, but it’s a bit pricey.",
      },
      {
        user: "Leo Scott",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment: "Love the retro vibe! A standout piece on my keyboard.",
      },
      {
        user: "Amelia Young",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment: "Great keycap! Really takes me back to my childhood.",
      },
      {
        user: "Daniel Brown",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Perfect for anyone who loves arcade games. The quality is excellent.",
      },
      {
        user: "Sarah Adams",
        rating: "⭐⭐☆☆☆ (2/5)",
        comment: "The design is fun, but the paint fades with use.",
      },
    ],
  },
];

export { artisanKeycaps };

export default function ArtisanKeyboards() {
  const { addToBasket } = useBasket();

  const triggerCartAnimationLocal = () => {
    const cartIcon = document.querySelector(".fa-shopping-basket");
    if (cartIcon) {
      cartIcon.classList.add("cart-animation");
      setTimeout(() => {
        cartIcon.classList.remove("cart-animation");
      }, 1000); // Match this duration to the CSS animation duration
    } else {
      console.error("Cart icon not found.");
    }
  };

  const navigate = useNavigate();

  const goToBasket = () => {
    navigate("/BasketPage");
  };

  return (
    <>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "50px",
          color: "black",
          marginTop: "74px",
          marginLeft: "135px",
        }}
      >
        Explore the lineup.
      </h1>
      <br />
      <div
        className="product-list"
        style={{ marginLeft: "100px", marginRight: "100px", outline: "none" }}
      >
        {artisanKeycaps.map((product) => (
          <div
            key={product.id}
            className="card"
            style={{ width: "18rem", marginBottom: "20px" }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="card-img-top"
              style={{ height: "300px" }}
            />
            <div className="card-body">
              <h4 className="card-title" style={{ fontWeight: "bold" }}>
                {product.preview}
              </h4>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <Link
                to={`/artisan-keycaps/${product.id}`} // Use dynamic routing
                className="btn btn-primary"
                style={{ borderRadius: "20px" }}
              >
                Learn More
              </Link>
              <button
                className="btn btn-link"
                style={{
                  textDecoration: "none",
                  fontSize: "17px",
                }}
                onClick={() => {
                  addToBasket(product); // Call the first function
                  triggerCartAnimationLocal(); // Call the second function
                  goToBasket();
                }}
              >
                Buy &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
