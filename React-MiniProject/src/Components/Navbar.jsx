import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBasket } from "./BasketContext";
import { keyboard } from "./Products"; // Import the keyboard data
import { artisanKeycaps } from "./Artisan-Keycaps"; // Import the artisan keycaps data

export default function Navbar() {
  const [isSearchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setAnimating] = useState(false); // For cart animation
  const [cartCount, setCartCount] = useState(0); // Cart count state for animation
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered search results
  const navigate = useNavigate();
  const { basket } = useBasket(); // Access global basket state

  useEffect(() => {
    if (basket.length !== cartCount) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
      }, 300); // Match animation duration
      setCartCount(basket.length);
    }
  }, [basket, cartCount]);

  useEffect(() => {
    if (searchTerm) {
      const combinedProducts = [...keyboard, ...artisanKeycaps]; // Combine both arrays
      const filtered = combinedProducts.filter((product) => {
        // Make sure the product has the necessary properties
        if (!product.name || !product.id) return false; // Skip invalid items
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); // Clear suggestions when search term is empty
    }
  }, [searchTerm]);

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleCloseClick = () => {
    setSearchActive(false); // Simply hide the search bar
    // No other actions are performed here now (no redirect or resetting states)
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (filteredProducts.length > 0) {
        // Redirect to the first matching product's info page
        handleSuggestionClick(filteredProducts[0]);
      } else {
        alert("No product found.");
      }
    }
  };

  const handleSuggestionClick = (product) => {
    // Differentiate between keycaps and keyboards before navigating
    const isKeycap = artisanKeycaps.some((keycap) => keycap.id === product.id);
    const isKeyboard = keyboard.some((kbd) => kbd.id === product.id);

    if (isKeycap) {
      // Redirect to the artisan keycap's info page
      navigate(`/artisan-keycaps/${product.id}`, {
        state: { product },
      });
    } else if (isKeyboard) {
      // Redirect to the keyboard's info page
      navigate(`/keyboard-Information/${product.id}`, {
        state: { product },
      });
    } else {
      alert("Product not found.");
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const goToBasket = () => {
    navigate("/BasketPage");
  };

  return (
    <>
      <nav>
        <div className="menu">
          <ul className={`menu-list ${isMenuOpen ? "active" : ""}`}>
            <li>
              <img
                src="/src/assets/Logo.png"
                alt="Keystaxx Logo"
                className="menu-item"
                style={{ width: "38px", height: "auto", marginTop: "1.5" }}
              />
            </li>
            <li className={isSearchActive ? "hide-item" : ""}>
              <Link to="/" className="menu-item">
                Home
              </Link>
            </li>
            <li className={isSearchActive ? "hide-item" : ""}>
              <Link to="/Products" className="menu-item">
                Products
              </Link>
            </li>
            <li className={isSearchActive ? "hide-item" : ""}>
              <Link to="/ArtisanKeyboards" className="menu-item">
                Artisan Keycaps
              </Link>
            </li>
            <li className={isSearchActive ? "hide-item" : ""}>
              <Link to="/Reviews" className="menu-item">
                Reviews
              </Link>
            </li>
            <li className={isSearchActive ? "hide-item" : ""}>
              <Link to="/CompanyProfile" className="menu-item">
                Company Profile
              </Link>
            </li>
            <li className={isSearchActive ? "hide-item" : ""}>
              <Link to="/Developer" className="menu-item">
                Developer
              </Link>
            </li>
            <li className={isSearchActive ? "hide-item" : ""}>
              <Link to="/Support" className="menu-item">
                Support
              </Link>
            </li>
            <li className={isSearchActive ? "hide-item" : ""}>
              <a href="#" id="search" onClick={handleSearchClick}>
                <i className="fa fa-search"></i>
              </a>
            </li>

            <div className="cart" style={{ position: "relative" }}>
              <li className={isSearchActive ? "hide-item" : ""}>
                <a href="#" id="basket" onClick={goToBasket}>
                  <i className="fa fa-shopping-basket"></i>
                  {basket.length > 0 && (
                    <span
                      className={`cart-count ${isAnimating ? "slide-up" : ""}`}
                    >
                      {basket.length}
                    </span>
                  )}
                </a>
              </li>
            </div>
          </ul>

          {/* Search Bar */}
          {isSearchActive && (
            <div className="search-form active">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Search Keystaxx..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  onKeyPress={handleSearchKeyPress}
                />
                {filteredProducts.length > 0 && (
                  <ul className="search-suggestions">
                    {filteredProducts.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => handleSuggestionClick(product)}
                      >
                        {product.name}
                      </li>
                    ))}
                  </ul>
                )}
              </form>
            </div>
          )}

          {/* Close button for search */}
          {isSearchActive && (
            <a href="#" className="close active" onClick={handleCloseClick}>
              <i className="fa fa-times"></i>
            </a>
          )}

          {/* Hamburger Menu Icon */}
          <button className="hamburger-menu" onClick={toggleMenu}>
            <i className={isMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
          </button>
        </div>
      </nav>
    </>
  );
}
