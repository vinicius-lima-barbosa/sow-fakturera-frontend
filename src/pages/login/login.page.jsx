import useMetadataStore from "../../stores/metadata.store";

function LoginPage() {
  const languages = useMetadataStore((state) => state.languages);
  const currentLanguage = useMetadataStore((state) => state.currentLanguage);
  console.log(languages, currentLanguage);

  return (
    <main class="login-container">
      <div class="background-container">
        <img
          id="background-image"
          src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
          alt="123-fakturera"
        />
      </div>

      <nav class="navigation-container">
        <header class="navigation-header">
          {/* Logo */}
          <div></div>

          {/* Hambuguer Button */}
          <div></div>

          {/* All Navbar options */}
          <div></div>
        </header>
      </nav>

      <section class="main-content">
        {/* Login Form */}
        <form action=""></form>

        {/* Login Button */}
        <button></button>

        {/* Forggoten Password and register */}
        <div></div>
      </section>

      <footer class="footer-container">
        {/* Up Part (Title and options) */}
        <div></div>

        {/* Rights */}
        <div></div>
      </footer>
    </main>
  );
}

export default LoginPage;
