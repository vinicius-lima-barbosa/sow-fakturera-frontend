import LoginFooter from "../../components/login/footer/login-footer.component";
import LoginNavbar from "../../components/login/navbar/login-navbar.component";
import useMetadataStore from "../../stores/metadata.store";
import "./login.style.css";

function LoginPage() {
  const languages = useMetadataStore((state) => state.languages);
  const currentLanguage = useMetadataStore((state) => state.currentLanguage);
  const { setCurrentLanguage } = useMetadataStore();

  const onChangeCurrentLanguage = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <main class="login-container">
      <div class="background-container">
        <img
          id="background-image"
          src="https://storage.123fakturera.se/public/wallpapers/sverige43.jpg"
          alt="123-fakturera"
        />
      </div>

      <LoginNavbar
        metadata={currentLanguage}
        languages={languages}
        onChangeLanguage={onChangeCurrentLanguage}
      />

      <section class="main-content">
        {/* Login Form */}
        <form action=""></form>

        {/* Login Button */}
        <button></button>

        {/* Forggoten Password and register */}
        <div></div>
      </section>

      <LoginFooter metadata={currentLanguage} />
    </main>
  );
}

export default LoginPage;
