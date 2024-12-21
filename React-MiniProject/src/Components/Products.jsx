import { Link, useNavigate } from "react-router-dom";
import { useBasket } from "./BasketContext";
export const keyboard = [
  {
    id: 1,
    image: "/src/assets/Keystaxx-Apex.webp",
    preview: "Keystaxx Apex",
    name: "Keystaxx Apex - 60% Compact Mechanical Keyboard",
    price: 99.99,
    layout: "60% (Compact)",
    switchOptions: "Cherry MX Red, Gateron Brown, Gateron Blue",
    material: "Premium Plastic Case, PBT Keycaps",
    rgbLighting: "Full RGB with customizable profiles",
    connectivity: "USB-C Wired, Bluetooth 5.0 (Wireless)",
    description:
      "The Keystaxx Apex is the ultimate compact keyboard, perfect for both gaming and typing. Its small form factor and customizable RGB lighting make it a standout in any setup. Choose from a variety of switch options to fit your typing or gaming style. Designed for portability and convenience, this 60% keyboard will easily fit in any desk space.",
    keyFeatures: [
      "Hot-swappable switches (no soldering required).",
      "16.8 million RGB color options with reactive and wave effects.",
      "Premium build with an aluminum top case.",
    ],
    reviews: [
      {
        user: "Alex M.",
        rating: "⭐⭐⭐⭐☆ (4.5/5)",
        comment:
          "Excellent compact keyboard with smooth keystrokes. The RGB lighting is a real showstopper.",
      },
      {
        user: "Liam P.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Best keyboard I’ve used for both gaming and typing. Highly recommend!",
      },
      {
        user: "Mia R.",
        rating: "⭐⭐⭐⭐☆ (4/5)",
        comment:
          "Great design and portability. The battery life in wireless mode is impressive.",
      },
      {
        user: "John D.",
        rating: "⭐⭐⭐⭐ (4.2/5)",
        comment:
          "Feels great to type on. Only downside is that it could use a bit more customization in key mapping.",
      },
      {
        user: "Sophie L.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "The keyboard is phenomenal! Compact, durable, and the customizable RGB options are a huge plus.",
      },
    ],
    manual: {
      "Unboxing and Setup":
        "Ensure the keyboard is securely removed from its packaging. Connect the keyboard to your device using the provided USB-C cable or pair it with Bluetooth 5.0 for wireless connectivity.",
      Customization:
        "Use the dedicated software or onboard controls to customize RGB profiles and macros. Adjust RGB lighting effects and color schemes using function keys (refer to the keyboard's guide for specific key combinations).",
      "Switch Replacement":
        "The hot-swappable design allows you to replace switches without soldering. Carefully pull out a switch with a keycap puller and insert a new one.",
      Maintenance:
        "Clean the keyboard regularly with a soft, damp cloth. Avoid using harsh chemicals.",
    },
  },
  {
    id: 2,
    image: "/src/assets/Keystaxx-Titan-X.webp",
    preview: "Keystaxx Titan X",
    name: "Keystaxx Titan X - Full-Size Mechanical Keyboard",
    price: 129.99,
    layout: "Full-size (104 Keys)",
    switchOptions: "Cherry MX Black, Cherry MX Brown, Gateron Silent Red",
    material: "ABS Case, PBT Keycaps",
    rgbLighting: "Dynamic RGB with 10+ Effects",
    connectivity: "Wired USB-C, Detachable Cable",
    description:
      "The Keystaxx Titan X offers a full-size layout with a robust, tactile feel. Whether you're gaming or working, this keyboard delivers precision and comfort with its tactile switches and customizable RGB effects. The premium build quality and USB-C wired connectivity ensure durability and fast response times.",
    keyFeatures: [
      "On-the-fly RGB adjustments via function keys.",
      "Cherry MX or Gateron switches, designed for longevity.",
      "Built with a durable plastic and steel frame.",
    ],
    reviews: [
      {
        user: "Sophia L.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Love the full-size layout! The RGB lighting options make it perfect for any setup.",
      },
      {
        user: "Noah R.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Great keyboard for work and play. Wish the keys were a bit quieter, but overall very good.",
      },
      {
        user: "Olivia S.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "The tactile feedback is fantastic, and the customization options are endless.",
      },
      {
        user: "Ethan W.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "The detachable cable is a nice touch, but it would be even better if it had wireless options.",
      },
      {
        user: "Lucas H.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Perfect for both gaming and typing. The build quality feels premium and solid.",
      },
    ],
    manual: {
      "Unboxing and Setup":
        "Place the keyboard on a stable surface. Use the detachable USB-C cable for a reliable wired connection.",
      "RGB Customization":
        "Adjust the RGB lighting effects through the function keys (refer to the manual for combinations). Use the included software for detailed color and effect customization.",
      "Switch Replacement":
        "Hot-swappable switches can be changed easily. Remove the keycap, use a switch puller to extract the switch, and insert a new one.",
      "Cleaning and Care":
        "Wipe down the keyboard with a microfiber cloth. Remove keycaps for a deeper clean.",
    },
  },
  {
    id: 3,
    image: "/src/assets/Keystaxx-Nimbus.webp",
    preview: "Keystaxx Nimbus",
    name: "Keystaxx Nimbus - 75% Mechanical Keyboard",
    price: 119.99,
    layout: "75% (87 Keys)",
    switchOptions: "Gateron Yellow, Cherry MX Red, Cherry MX Brown",
    material: "Plastic Case, PBT Keycaps",
    rgbLighting: "None",
    connectivity: "Wired USB-C",
    description:
      "The Keystaxx Nimbus offers a mid-size 75% layout, making it a versatile choice for users who want both compactness and the full set of keys. Its high-quality keycaps and smooth keypresses, combined with the reliable RGB effects, make it perfect for anyone who loves a mix of aesthetics and functionality.",
    keyFeatures: [
      "Ergonomically designed for long typing sessions.",
      "Wide range of RGB effects with customizable settings.",
      "Hot-swappable switches for easy customization.",
    ],
    reviews: [
      {
        user: "Emily C.",
        rating: "⭐⭐⭐⭐☆ (4.3/5)",
        comment:
          "Good balance between size and function. The build quality is solid and it feels great to type on.",
      },
      {
        user: "James T.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Very comfortable for extended typing. Would be perfect if it had RGB lighting.",
      },
      {
        user: "Sarah K.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Solid keyboard for the price. The non-RGB version is great for productivity.",
      },
      {
        user: "Ryan B.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Fantastic keyboard! I love the smooth typing experience and the compact layout.",
      },
      {
        user: "Isabelle M.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Perfect size for my desk, and the build quality is quite nice. Could use more lighting options.",
      },
    ],
    manual: {
      "Initial Setup":
        "Connect the keyboard via USB-C cable to your computer. Ensure the device is recognized.",
      "Adjusting RGB Lighting":
        "Although the Nimbus does not feature RGB lighting, the keycaps are designed for a bright, visible appearance.",
      "Switch Customization":
        "The hot-swappable feature lets you replace switches without soldering. Pull out the switch and replace it with a compatible model.",
      "Routine Cleaning":
        "Use compressed air to remove dust and a damp cloth for surface cleaning.",
    },
  },
  {
    id: 4,
    image: "/src/assets/Keystaxx-Kraken.webp",
    preview: "Keystaxx Kraken",
    name: "Keystaxx Kraken - Tenkeyless (TKL) Mechanical Keyboard",
    price: 109.99,
    layout: "Tenkeyless (87 Keys)",
    switchOptions: "Gateron Green, Cherry MX Blue",
    material: "ABS Plastic, PBT Keycaps",
    rgbLighting: "RGB Backlighting with 5 Dynamic Modes",
    connectivity: "Wired USB-C",
    description:
      "For gamers and typists who prefer to keep it minimal, the Keystaxx Kraken features a tenkeyless layout, providing you with more space for mouse movement and a cleaner desk. The mechanical switches give you responsive feedback, and the RGB lighting adds style to your setup.",
    keyFeatures: [
      "Tactile mechanical switches for precision.",
      "5 dynamic RGB lighting modes.",
      "Compact, durable design with high-quality PBT keycaps.",
    ],
    reviews: [
      {
        user: "Michael B.",
        rating: "⭐⭐⭐⭐⭐ (4.9/5)",
        comment:
          "Amazing keyboard! The tactile feel and RGB modes are perfect for any gamer.",
      },
      {
        user: "Olivia D.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Great keyboard for gaming, but I wish it came with more customization options for the RGB lighting.",
      },
      {
        user: "Nathan H.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Awesome keyboard. The RGB modes are bright, and the feel of the keys is premium.",
      },
      {
        user: "Anna P.",
        rating: "⭐⭐⭐⭐ (4.2/5)",
        comment: "Good for gaming but could use a quieter switch option.",
      },
      {
        user: "Sophia J.",
        rating: "⭐⭐⭐⭐☆ (4/5)",
        comment:
          "I really like this keyboard's compact design and lighting effects. Would be perfect if it had more key options.",
      },
    ],
    manual: {
      "Setup Instructions":
        "Position the keyboard comfortably on your desk and connect it via USB-C.",
      "Lighting Customization":
        "Cycle through the 5 dynamic RGB modes using the dedicated RGB key. Access additional lighting settings using function keys.",
      "Switch Replacement":
        "Use the provided switch puller to remove and replace the switches.",
      "Care Guidelines":
        "Use a soft brush or compressed air for cleaning between the keys.",
    },
  },
  {
    id: 5,
    image: "/src/assets/Keystaxx-Horizon.webp",
    preview: "Keystaxx Horizon",
    name: "Keystaxx Horizon - 65% Mechanical Keyboard",
    price: 129.99,
    layout: "65% (70 Keys)",
    switchOptions: "Cherry MX Black, Gateron Brown",
    material: "Aluminum Frame, PBT Keycaps",
    rgbLighting: "Full RGB with Custom Effects",
    connectivity: "USB-C Wired",
    description:
      "The Keystaxx Horizon combines the ideal layout with premium materials and customizable RGB lighting. This 65% keyboard is perfect for gamers and professionals who value both functionality and style. Its smooth switches and sleek design make it the ultimate choice for any workspace.",
    keyFeatures: [
      "Customizable RGB effects and color profiles.",
      "Compact and ergonomic design for extended comfort.",
      "High-durability PBT keycaps.",
    ],
    reviews: [
      {
        user: "Eleanor C.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "I love the look and feel of this keyboard, and the RGB customization is fantastic.",
      },
      {
        user: "William M.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Perfect keyboard with a great feel. The compact size fits right on my desk.",
      },
      {
        user: "Lucas F.",
        rating: "⭐⭐⭐⭐ (4.2/5)",
        comment:
          "Good feel and solid build. The hot-swappable option is a big plus.",
      },
      {
        user: "Ava L.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Absolutely love the Keystaxx Horizon. It’s perfect for gaming and looks sleek too!",
      },
      {
        user: "Henry J.",
        rating: "⭐⭐⭐⭐ (4.5/5)",
        comment:
          "Great keyboard with an amazing feel. Would have liked a bit more customization on the RGB settings.",
      },
    ],
    manual: {
      "Getting Started":
        "Connect the keyboard using the USB-C cable and verify the connection with your device.",
      "RGB Settings":
        "Adjust custom RGB effects and profiles via the onboard function keys or software.",
      "Switch Replacement":
        "Pull out old switches with a switch puller and replace with compatible ones.",
      "Cleaning Instructions":
        "Gently clean the keyboard with a microfiber cloth. Keycap removal is recommended for thorough cleaning.",
    },
  },
  {
    id: 6,
    image: "/src/assets/Keystaxx-Arcana.webp",
    preview: "Keystaxx Arcana",
    name: "Keystaxx Arcana - Handcrafted Resin Artisan Keyboard",
    price: 199.99,
    layout: "Full-Size (104 Keys)",
    switchOptions: "Custom Gateron X switches, Silent Cherry MX",
    material: "Handcrafted Resin Case, CNC-machined Aluminum Plate",
    rgbLighting: "Under-glow RGB with customizable effects",
    connectivity: "USB-C Wired",
    description:
      "The Keystaxx Arcana is a premium artisan mechanical keyboard, featuring a handcrafted resin case with a unique celestial design. The keyboard is designed for enthusiasts who want both aesthetics and functionality. Whether you're looking to enhance your setup with a visually stunning piece or require a keyboard with excellent typing feel, the Arcana is a masterpiece.",
    keyFeatures: [
      "Handcrafted, limited-edition resin case with individual designs.",
      "Hot-swappable switches, allowing for easy customization.",
      "Full RGB support with reactive lighting effects.",
      "Premium keycaps made from PBT plastic.",
    ],
    reviews: [
      {
        user: "Jackson M.",
        rating: "⭐⭐⭐⭐ (4.2/5)",
        comment:
          "Love the modularity and ease of swapping out keys. The RGB modes are a bonus.",
      },
      {
        user: "Zoe K.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "The best keyboard I've owned! The customization options are incredible.",
      },
      {
        user: "Adam B.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "The build quality is top-notch, and it feels great to type on. Could use a little quieter switch option.",
      },
      {
        user: "Emily S.",
        rating: "⭐⭐⭐⭐ (4.4/5)",
        comment:
          "Amazing modularity and overall build. I love how customizable it is.",
      },
      {
        user: "Dylan R.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Very durable and well-built. Great for gaming and work alike.",
      },
    ],
    manual: {
      "Initial Setup":
        "Connect the keyboard via USB-C and ensure recognition by your device.",
      "RGB Effects":
        "Use the onboard keys or software to enable and customize RGB under-glow and other effects.",
      "Switch Customization":
        "Hot-swappable switches allow you to experiment with different switch types. Use the keycap puller to remove and replace.",
      "Maintenance Tips":
        "Clean the resin case with a damp cloth to keep its shine. Avoid using abrasive materials.",
    },
  },
  {
    id: 7,
    image: "/src/assets/Keystaxx-Mirage.webp",
    preview: "Keystaxx Mirage",
    name: "Keystaxx Mirage - Artisan Acrylic Keyboard with Custom Artwork",
    price: 179.99,
    layout: "75% (87 Keys)",
    switchOptions: "Gateron Ink V2 switches, Cherry MX Silent Red",
    material: "Acrylic Body with Custom Artwork Inserts",
    rgbLighting: "RGB Backlighting with multiple profiles",
    connectivity: "USB-C Wired",
    description:
      "The Keystaxx Mirage features a stunning acrylic body that can be customized with unique artwork inserts, making it a truly one-of-a-kind keyboard. The craftsmanship is visible in every detail, from the smooth, tactile switches to the crisp RGB lighting that highlights the keyboard's elegance.",
    keyFeatures: [
      "Custom artwork inserts that can be changed.",
      "High-quality PBT keycaps with shine-through RGB lighting.",
      "Precise, responsive switches designed for both gaming and typing.",
    ],
    reviews: [
      {
        user: "Jacob T.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Super responsive and perfect for on-the-go work. I love the wireless feature.",
      },
      {
        user: "Hannah W.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Works great and looks sleek. Would have loved a bit more color customization.",
      },
      {
        user: "Mason L.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "The wireless functionality is flawless, and the feel of the keys is exceptional.",
      },
      {
        user: "Lily C.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Solid keyboard, and the aluminum frame feels premium. Just a little more RGB customization would be ideal.",
      },
      {
        user: "Oliver S.",
        rating: "⭐⭐⭐⭐ (4.2/5)",
        comment:
          "A great keyboard for travel or daily use. The wireless option is convenient.",
      },
    ],
    manual: {
      "Connection and Setup":
        "Connect the keyboard to your device using the USB-C cable. Confirm the connection.",
      Customization:
        "Change and customize the RGB backlighting using onboard function keys or the provided software.",
      "Switch Replacement":
        "Use a switch puller to easily replace switches for a customized typing experience.",
      "Care Recommendations":
        "Regularly wipe down with a microfiber cloth and ensure artwork inserts are not exposed to moisture.",
    },
  },
  {
    id: 8,
    image: "/src/assets/Keystaxx-Seraph.webp",
    preview: "Keystaxx Seraph",
    name: "Keystaxx Seraph - Wood & Resin Hybrid Artisan Keyboard",
    price: 239.99,
    layout: "65% (68 Keys)",
    switchOptions: "Linear Gateron Black, Tactile Cherry MX Brown",
    material: "Wood and Resin Hybrid Case",
    rgbLighting: "RGB lighting with custom profiles and under-glow",
    connectivity: "USB-C Wired",
    description:
      "The Keystaxx Seraph blends natural materials with modern design. The wood and resin hybrid case offers a smooth, luxurious feel and a unique design. Paired with high-end mechanical switches and premium keycaps, the Seraph is both a functional tool and a beautiful piece of art.",
    keyFeatures: [
      "Handcrafted wood and resin case with a unique, organic look.",
      "Customizable RGB backlighting and under-glow effects.",
      "Premium, high-quality switches for an unmatched typing experience.",
    ],
    reviews: [
      {
        user: "Brian K.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Absolutely love the RGB lighting. The keys feel great to type on, and it has all the features I need.",
      },
      {
        user: "Ella H.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Very responsive, with amazing RGB effects. Only wish it was a bit quieter.",
      },
      {
        user: "Isaiah R.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Top-tier keyboard with great feel and awesome customization options.",
      },
      {
        user: "Ava P.",
        rating: "⭐⭐⭐⭐ (4.5/5)",
        comment:
          "Love the lighting and build. Could have better cable management options.",
      },
      {
        user: "Daniel S.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Solid keyboard with great performance. The RGB lights are a real plus.",
      },
    ],
    manual: {
      "Initial Setup":
        "Plug in the USB-C cable and make sure your device detects the keyboard.",
      "RGB Customization":
        "Access custom RGB profiles and under-glow effects through function keys or software.",
      "Switch Replacement":
        "Hot-swappable switches for effortless customization.",
      "Cleaning and Maintenance":
        "Keep the wooden and resin case clean with a dry, soft cloth. Avoid water and harsh cleaning solutions.",
    },
  },
  {
    id: 9,
    image: "/src/assets/Keystaxx-Zenith.webp",
    preview: "Keystaxx Zenith",
    name: "Keystaxx Zenith - Limited Edition Artisan Keyboard",
    price: 299.99,
    layout: "Full-Size (104 Keys)",
    switchOptions: "Custom MX Browns, Silent Gateron Yellows",
    material: "Premium Brass Body, Custom Handcrafted Keycaps",
    rgbLighting: "Full RGB with dynamic color waves",
    connectivity: "USB-C Wired",
    description:
      "The Keystaxx Zenith is a top-tier artisan keyboard made for collectors and connoisseurs. Its brass body and handcrafted keycaps elevate it to the highest levels of luxury. Limited to only 50 units, the Zenith is not just a keyboard—it's an investment in quality and style.",
    keyFeatures: [
      "Solid brass body for a premium and durable feel.",
      "Custom, hand-carved keycaps designed by artisans.",
      "Fully customizable RGB lighting with reactive and color wave effects.",
    ],
    reviews: [
      {
        user: "Charlie R.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Amazing keyboard for gaming! The switches are so responsive, and the RGB effects are stunning.",
      },
      {
        user: "Amelia T.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "The build quality is excellent. The only thing is that it could be a bit quieter.",
      },
      {
        user: "William F.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Perfect keyboard for competitive gaming. The keys are super responsive, and the RGB looks awesome.",
      },
      {
        user: "Samantha M.",
        rating: "⭐⭐⭐⭐ (4.2/5)",
        comment: "Great keyboard, but I wish the keys were quieter for typing.",
      },
      {
        user: "Jack H.",
        rating: "⭐⭐⭐⭐ (4.5/5)",
        comment:
          "Love the build and feel. The RGB lights are vibrant and add to the experience.",
      },
    ],
    manual: {
      "Setup Process":
        "Connect to your device with the USB-C cable and confirm recognition.",
      "RGB Customization":
        "Adjust RGB color wave and reactive effects through function keys or custom software.",
      "Switch Customization":
        "Utilize the hot-swappable feature to switch out keys as needed.",
      "Cleaning and Care":
        "Regularly wipe the brass body with a microfiber cloth to maintain its shine. Use a keycap puller for cleaning between keys.",
    },
  },
  {
    id: 10,
    image: "/src/assets/Keystaxx-Nephim.webp",
    preview: "Keystaxx Nephim",
    name: "Keystaxx Nephim - Wood & Saphire Hybrid Artisan Keyboard",
    price: 239.99,
    layout: "65% (68 Keys)",
    switchOptions: "Linear Gateron Black, Tactile Cherry MX Brown",
    material: "Wood and Resin Hybrid Case",
    rgbLighting: "RGB lighting with custom profiles and under-glow",
    connectivity: "USB-C Wired",
    description:
      "The Keystaxx Seraph blends natural materials with modern design. The wood and resin hybrid case offers a smooth, luxurious feel.",
    keyFeatures: [
      "Handcrafted wood and resin case with a unique, organic look.",
      "Customizable RGB backlighting and under-glow effects.",
      "Premium, high-quality switches for an unmatched typing experience.",
    ],
    reviews: [
      {
        user: "Sophia L.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Comfortable to type on for long sessions. The RGB effects add a nice touch.",
      },
      {
        user: "Ryan B.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "Great ergonomic design and smooth key response. Worth every penny.",
      },
      {
        user: "Lucas T.",
        rating: "⭐⭐⭐⭐ (4.5/5)",
        comment:
          "The keyboard is great for gaming and long typing sessions. Wish the lighting had more effects.",
      },
      {
        user: "Megan C.",
        rating: "⭐⭐⭐⭐ (4/5)",
        comment:
          "Excellent build quality and comfortable design. Could use quieter keys.",
      },
      {
        user: "Dylan M.",
        rating: "⭐⭐⭐⭐⭐ (5/5)",
        comment:
          "My hands don't get tired anymore after long use. The Phoenix is a game-changer.",
      },
    ],
    manual: {
      "Connecting Your Keyboard":
        "Use the USB-C cable to connect to your computer.",
      "RGB Settings":
        "Enable and modify RGB effects through function keys or software for tailored lighting.",
      "Switch Customization":
        "Hot-swappable switches allow for effortless customization.",
      "Care Tips":
        "Use a microfiber cloth for cleaning. Keep the wooden and sapphire inlays protected from excessive moisture.",
    },
  },
];

export default function Products() {
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
        {keyboard.map((product) => (
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
                {product.preview}{" "}
              </h4>
              <p>
                <strong>Price:</strong> ${product.price}
              </p>
              <Link
                to={`/keyboard-Information/${product.id}`}
                state={{ product }}
                className="btn btn-primary"
                style={{ borderRadius: "20px" }}
              >
                Learn More
              </Link>
              <button
                className="btn btn-link"
                style={{
                  borderRadius: "20px",
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
