import { useState } from "react";
import "./login-navbar.styles.css";

function LoginNavbar({ metadata, languages, onChangeLanguage }) {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [languageSelectorMenu, setLanguageSelectorMenu] = useState(false);

  const openNavbarMenu = () => {
    setDropdownMenu(!dropdownMenu);
  };

  const openLanguageSelector = () => {
    setLanguageSelectorMenu(!languageSelectorMenu);
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
          <div class="navigation-hamburguer" onClick={openNavbarMenu}>
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
                {metadata.home ? metadata.home : "Home"}
              </a>
              <a class="menu-item" href="">
                {metadata.order ? metadata.order : "Order"}
              </a>
              <a class="menu-item" href="">
                {metadata.ourCostumers
                  ? metadata.ourCostumers
                  : "Our Costumers"}
              </a>
              <a class="menu-item" href="">
                {metadata.aboutUs ? metadata.aboutUs : "About us"}
              </a>
              <a class="menu-item" href="">
                {metadata.contactUs ? metadata.contactUs : "Contact us"}
              </a>
            </div>
          </div>
        </div>

        {/* All Navbar options */}
        <div class="navigation-options">
          {/* Pc normal navbar */}
          <div class="navigation-pc">
            <span class="navigation-pc-items">
              {metadata.home ? metadata.home : "Home"}
            </span>
            <span class="navigation-pc-items">
              {metadata.order ? metadata.order : "Order"}
            </span>
            <span class="navigation-pc-items">
              {metadata.ourCostumers ? metadata.ourCostumers : "Our Costumers"}
            </span>
            <span class="navigation-pc-items">
              {metadata.aboutUs ? metadata.aboutUs : "About us"}
            </span>
            <span class="navigation-pc-items">
              {metadata.contactUs ? metadata.contactUs : "Contact us"}
            </span>
          </div>

          {/* Language selector */}
          <div class="language-selector-container">
            <div
              class="navigation-language-select"
              onClick={openLanguageSelector}
            >
              <span class="navigation-pc-items">
                {metadata.language ? metadata.language : "English"}
              </span>
              <img
                src={
                  metadata.iconUrl
                    ? metadata.iconUrl
                    : "https://storage.123fakturere.no/public/flags/GB.png"
                }
                alt="flag"
                class="navigation-language-flag"
              />
            </div>

            {/* Language Menu */}
            <div
              class="language-menu"
              style={{
                height: languageSelectorMenu ? "100px" : "0px",
              }}
            >
              <div class="language-menu-items">
                {languages &&
                  languages.map((l) => {
                    return (
                      <div
                        class="language-menu-item-container"
                        onClick={() => onChangeLanguage(l)}
                      >
                        <span class="language-menu-item">{l.language}</span>
                        <div class="navigation-flag-container">
                          <img
                            src={l.iconUrl}
                            alt="flag"
                            class="navigation-language-flag"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default LoginNavbar;
