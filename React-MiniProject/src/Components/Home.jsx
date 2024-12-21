import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Ensure you import Link if needed
import { keyboard } from "./Products";
import { artisanKeycaps } from "./Artisan-Keycaps";
import { useBasket } from "./BasketContext";

export default function Home() {
  const navigate = useNavigate();

  const goToBasket = () => {
    navigate("/BasketPage");
  };

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

  return (
    <>
      {/* Carousel */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        style={{ marginTop: "44px" }}
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/src/assets/Keystaxx-Horizon-Preview.webp"
              className="d-block w-100"
              alt="Keystaxx Horizon"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>
                Keystaxx Horizon
              </h2>
              <p style={{ fontSize: "20px" }}>
                The Keystaxx Horizon combines the ideal layout with premium
                materials and customizable RGB lighting.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/Keystaxx-Mirage-Preview.webp"
              className="d-block w-100"
              alt="Keystaxx Mirage"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>
                Keystaxx Mirage
              </h2>
              <p style={{ fontSize: "20px" }}>
                The Keystaxx Mirage features a stunning acrylic body that can be
                customized with unique artwork inserts, making it a truly
                one-of-a-kind keyboard.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/src/assets/Keystaxx-Vintage-Computer-Aluminum-Alloy-Artisan-Keycap-preview.jpg"
              className="d-block w-100"
              alt="Vintage Computer Keycap"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>
                Keystaxx Artisan
              </h2>
              <p style={{ fontSize: "20px" }}>
                Experience the beauty and craftsmanship of artisan keycaps with
                Keystaxx's unique collection.
              </p>
            </div>
          </div>
        </div>
        <button
          style={{ borderRadius: "20px" }}
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          style={{ borderRadius: "20px" }}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "black",
          marginTop: "74px",
          marginLeft: "135px",
        }}
      >
        Signature Keystaxx Features.
      </h2>

      {/* Card 1 */}
      <div
        className="card mb-3"
        style={{ maxWidth: "82%", margin: "20px auto", border: "none" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="/src/assets/Wireless_Wired_feature.webp"
              className="img-fluid rounded-start"
              alt="Wireless & Wired Feature"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title" style={{ fontWeight: "bold" }}>
                Wireless & Wired
              </h3>
              <p className="card-text">
                Connect the keyboard with up to 3 devices via Bluetooth or to a
                single device with the USB Type-C wired option. Pair it up with
                your smartphone, laptop, and iPad, and switch amongst the
                devices swiftly, that is best for home, office, and light gaming
                uses.
              </p>
              <p className="card-text">
                <small
                  className="text-body-secondary"
                  id="lastUpdatedDisplay"
                ></small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="card mb-3"
        style={{ maxWidth: "82%", margin: "20px auto", border: "none" }}
      >
        <div className="row g-0" style={{ width: "100%" }}>
          {/* Text column */}
          <div className="col-md-8" style={{ paddingRight: "0" }}>
            <div className="card-body" style={{ marginTop: "70px" }}>
              <h3 className="card-title" style={{ fontWeight: "bold" }}>
                Keystaxx's Mac Layout
              </h3>
              <p className="card-text">
                Keystaxx is one of the few mechanical keyboards that features
                macOS media keys (F1 to F12) in a Mac layout with the same as
                conventional Mac systems.
              </p>
              <p className="card-text">
                <small
                  className="text-body-secondary"
                  id="lastUpdatedDisplay"
                ></small>
              </p>
            </div>
          </div>
          {/* Image column */}
          <div className="col-md-4" style={{ paddingLeft: "0" }}>
            <img
              src="/src/assets/Keystaxx_s_mac_layout.webp"
              className="img-fluid rounded-end"
              alt="Mac Layout"
              style={{
                height: "300px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* Keyboard Products */}
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginLeft: "135px",
          marginRight: "135px",
          gap: "11px",
          borderStyle: "none",
        }}
      >
        {keyboard.slice(0, 5).map((product) => (
          <div
            key={product.id}
            style={{
              width: "18rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div style={{ padding: "16px" }}>
              <h4 style={{ fontWeight: "bold" }}>{product.preview}</h4>
              <p style={{ marginBottom: "10px" }}>
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
                // Add to basket
              >
                Buy &gt;
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Keycaps */}
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "50px",
          color: "black",
          marginTop: "34px",
          marginLeft: "135px",
        }}
      >
        Artisan keycaps.
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginLeft: "135px",
          marginRight: "135px",
          gap: "11px",
        }}
      >
        {artisanKeycaps.slice(0, 5).map((keycap) => (
          <div
            key={keycap.id}
            style={{
              width: "18rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={keycap.image}
              alt={keycap.name}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div style={{ padding: "16px" }}>
              <h4 style={{ fontWeight: "bold" }}>{keycap.preview}</h4>
              <p style={{ marginBottom: "10px" }}>
                <strong>Price:</strong> ${keycap.price}
              </p>
              <Link
                to={`/artisan-keycaps/${keycap.id}`}
                state={{ keycap }}
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
                  addToBasket(keycap); // Call the first function
                  triggerCartAnimationLocal();
                  goToBasket();
                }}
                // Add to basket
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
