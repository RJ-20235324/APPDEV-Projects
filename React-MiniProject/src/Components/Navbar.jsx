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
            <a href="#" className="menu-item">
              Products
            </a>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
            <a href="#" className="menu-item">
              Artisan Keyboards
            </a>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
            <a href="#" className="menu-item">
              Reviews
            </a>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
            <a href="#" className="menu-item">
              Company Profile
            </a>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
            <a href="#" className="menu-item">
              Developer Page
            </a>
          </li>
          <li className={isSearchActive ? "hide-item" : ""}>
            <a href="#" className="menu-item">
              Support
            </a>
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
