import useMetadataStore from "../stores/metadata.store";

function LoginPage() {
  const languages = useMetadataStore((state) => state.languages);
  const currentLanguage = useMetadataStore((state) => state.currentLanguage);
  console.log(languages, currentLanguage);

  return <div>Login</div>;
}

export default LoginPage;
