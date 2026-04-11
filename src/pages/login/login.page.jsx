import LoginFooter from "../../components/login/footer/login-footer.component";
import LoginForm from "../../components/login/form/login-form.component";
import LoginNavbar from "../../components/login/navbar/login-navbar.component";
import useMetadataStore from "../../stores/metadata.store";
import "./login.style.css";

function LoginPage() {
  const { setCurrentLanguage } = useMetadataStore();
  const languages = useMetadataStore((state) => state.languages);
  const currentLanguage = useMetadataStore((state) => state.currentLanguage);

  const onChangeCurrentLanguage = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <main className="login-container">
      <div className="background-container">
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
      <LoginForm metadata={currentLanguage} />
      <LoginFooter metadata={currentLanguage} />
    </main>
  );
}

export default LoginPage;
