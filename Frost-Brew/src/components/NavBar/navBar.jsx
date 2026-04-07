import React, { useState } from "react";
import "./navBar.css";

export default function navBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>



      {/* Header */}
      <header className="header">

        <div className="navbar">

          {/* Logo */}
          <div className="logo">
            Frost-Brew
          </div>

          {/* Menu */}
          <ul className={menuOpen ? "nav-links active" : "nav-links"}>
            <li>Deals</li>
            <li>Coffee</li>
            <li>Cupcakes</li>
          </ul>

          {/* Cart */}
          <div className="cart">
            🛒
            <span className="cart-count">2</span>
          </div>

          {/* Mobile Button */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </header>

    </div>
  );
}