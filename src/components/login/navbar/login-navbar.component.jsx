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
    <header className="header-container">
      <nav className="navigation-container">
        {/* Logo */}
        <div className="logo">
          <img
            id="navigation-logo"
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="123Fakturera"
          />
        </div>

        {/* Hambuguer Button */}
        <div className="hamburguer-container">
          <div className="navigation-hamburguer" onClick={openNavbarMenu}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="navigation-svg"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>

          {/* Dropdown Menu */}
          <div
            className="navigation-drop-down"
            style={{
              height: dropdownMenu ? "325px" : "0px",
            }}
          >
            <div className="navigation-drop-down-items">
              <a className="menu-item" href="">
                {metadata.home ? metadata.home : "Home"}
              </a>
              <a className="menu-item" href="">
                {metadata.order ? metadata.order : "Order"}
              </a>
              <a className="menu-item" href="">
                {metadata.ourCostumers
                  ? metadata.ourCostumers
                  : "Our Costumers"}
              </a>
              <a className="menu-item" href="">
                {metadata.aboutUs ? metadata.aboutUs : "About us"}
              </a>
              <a className="menu-item" href="">
                {metadata.contactUs ? metadata.contactUs : "Contact us"}
              </a>
            </div>
          </div>
        </div>

        {/* All Navbar options */}
        <div className="navigation-options">
          {/* Pc normal navbar */}
          <div className="navigation-pc">
            <span className="navigation-pc-items">
              {metadata.home ? metadata.home : "Home"}
            </span>
            <span className="navigation-pc-items">
              {metadata.order ? metadata.order : "Order"}
            </span>
            <span className="navigation-pc-items">
              {metadata.ourCostumers ? metadata.ourCostumers : "Our Costumers"}
            </span>
            <span className="navigation-pc-items">
              {metadata.aboutUs ? metadata.aboutUs : "About us"}
            </span>
            <span className="navigation-pc-items">
              {metadata.contactUs ? metadata.contactUs : "Contact us"}
            </span>
          </div>

          {/* Language selector */}
          <div className="language-selector-container">
            <div
              className="navigation-language-select"
              onClick={openLanguageSelector}
            >
              <span className="navigation-pc-items">
                {metadata.language ? metadata.language : "English"}
              </span>
              <img
                src={
                  metadata.iconUrl
                    ? metadata.iconUrl
                    : "https://storage.123fakturere.no/public/flags/GB.png"
                }
                alt="flag"
                className="navigation-language-flag"
              />
            </div>

            {/* Language Menu */}
            <div
              className="language-menu"
              style={{
                height: languageSelectorMenu ? "100px" : "0px",
              }}
            >
              <div className="language-menu-items">
                {languages &&
                  languages.map((l) => {
                    return (
                      <div
                        key={l.id}
                        className="language-menu-item-container"
                        onClick={() => onChangeLanguage(l)}
                      >
                        <span className="language-menu-item">{l.language}</span>
                        <div className="navigation-flag-container">
                          <img
                            src={l.iconUrl}
                            alt="flag"
                            className="navigation-language-flag"
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
