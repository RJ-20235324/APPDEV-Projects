import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isSearchActive, setSearchActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleCloseClick = () => {
    setSearchActive(false);
  };

  return (
    <nav>
      <div className="menu">
        <ul>
          <li>
            <img src="/src/assets/K.png" alt="Keystaxx Logo" style={{ width: "38px", height: "auto", marginTop: "2.5" }} />
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
          <Link to="/" className="menu-item">Home</Link>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
          <Link to="/Products" className="menu-item">Products</Link>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
          <Link to="/ArtisanKeyboards" className="menu-item">Artisan Keycaps</Link>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
          <Link to="/Reviews" className="menu-item">Reviews</Link>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
          <Link to="/CompanyProfile" className="menu-item">Company Profile</Link>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
            <Link to="/Developer" className="menu-item">Home</Link>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
          <Link to="/Support" className="menu-item">Support</Link>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
            <a href="#" id="search" onClick={handleSearchClick}>
              <i className="fa fa-search"></i>
            </a>
          </li>
        </ul>

        {isSearchActive && (
          <div className="search-form active">
            <form>
              <input type="text" placeholder="Search Keystaxx..." />
            </form>
          </div>
        )}

        {isSearchActive && (
          <a href="#" className="close active" onClick={handleCloseClick}>
            <i className="fa fa-times"></i>
          </a>
        )}
      </div>
    </nav>
  );
}
