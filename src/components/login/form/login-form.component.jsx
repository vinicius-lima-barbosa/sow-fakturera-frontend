import { useState } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "../../../stores/auth.store";
import "./login-form.component.css";

function LoginForm({ metadata }) {
  const { login } = useAuthStore();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showEmailError, setShowEmailError] = useState("");
  const [showPasswordError, setShowPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const changeShowEmailError = () => {
    setShowEmailError(email.trim() === "" && true);
  };

  const changeShowPasswordError = () => {
    setShowPasswordError(password.trim() === "" && true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate("/pricelist");
  };

  return (
    <section className="form-main-content">
      <div className="login-card">
        {/* Login Title */}
        <h1 className="login-title">
          {metadata.loginHeader ? metadata.loginHeader : "Log in"}
        </h1>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form-container">
          <div className="login-field-container">
            <label htmlFor="" className="login-form-label">
              {metadata.emailLabel
                ? metadata.emailLabel
                : "Enter your email address"}
            </label>
            <input
              type="text"
              className="login-form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onBlur={() => changeShowEmailError()}
              placeholder={
                metadata.emailField ? metadata.emailField : "Email address"
              }
            />
            {showEmailError && (
              <span className="error-span">
                {metadata.emailRequired
                  ? metadata.emailRequired
                  : "Please enter a valid email address"}
              </span>
            )}
          </div>
          <div className="login-field-container">
            <label htmlFor="" className="login-form-label">
              {metadata.passwordLabel
                ? metadata.passwordLabel
                : "Enter your password"}
            </label>
            <div className="login-input-container">
              <input
                type={showPassword ? "text" : "password"}
                className="login-form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                onBlur={() => changeShowPasswordError()}
                placeholder={
                  metadata.passwordField ? metadata.passwordField : "Password"
                }
              />
              <img
                id="show-password-img"
                src="https://online.123fakturera.se/components/icons/show_password.png"
                alt="show-passowrd"
                onClick={changeShowPassword}
              />
            </div>
            {showPasswordError && (
              <span className="error-span">
                {metadata.passwordRequired
                  ? metadata.passwordRequired
                  : "This field cannot be empty"}
              </span>
            )}
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">
            {metadata.loginButton ? metadata.loginButton : "Log in"}
          </button>
        </form>

        {/* Forggoten Password and register */}
        <div className="links-container">
          <a className="link-item">
            {metadata.registerButton ? metadata.registerButton : "Register"}
          </a>
          <a className="link-item">
            {metadata.forgottenPasswordButton
              ? metadata.forgottenPasswordButton
              : "Forgot Password"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
