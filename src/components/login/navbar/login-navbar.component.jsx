import { useState } from "react";
import "./login-navbar.styles.css";

function LoginNavbar() {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const openMenu = () => {
    setDropdownMenu(!dropdownMenu);
  };

  return (
    <header class="header-container">
      <nav class="navigation-container">
        {/* Logo */}
        <div class="logo">
          <img
            id="navigation-logo"
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="123Fakturera"
          />
        </div>

        {/* Hambuguer Button */}
        <div class="hamburguer-container">
          <div class="navigation-hamburguer" onClick={openMenu}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="navigation-svg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>

          {/* Dropdown Menu */}
          <div
            class="navigation-drop-down"
            style={{
              height: dropdownMenu ? "325px" : "0px",
            }}
          >
            <div class="navigation-drop-down-items">
              <a class="menu-item" href="">
                home
              </a>
              <a class="menu-item" href="">
                order
              </a>
              <a class="menu-item" href="">
                our costumers
              </a>
              <a class="menu-item" href="">
                about us
              </a>
              <a class="menu-item" href="">
                contact us
              </a>
            </div>
          </div>
        </div>

        {/* All Navbar options */}
        <div class="navigation-options">
          {/* Pc normal navbar */}
          <div class="navigation-pc">
            <span class="navigation-pc-items">home</span>
            <span class="navigation-pc-items">order</span>
            <span class="navigation-pc-items">our costumers</span>
            <span class="navigation-pc-items">about us</span>
            <span class="navigation-pc-items">contact us</span>
          </div>

          {/* Language selector */}
          <div class="navigation-language-select"></div>
        </div>
      </nav>
    </header>
  );
}

export default LoginNavbar;
