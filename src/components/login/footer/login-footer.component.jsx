import "./login-footer.styles.css";

function LoginFooter({ metadata }) {
  return (
    <footer className="footer-container">
      {/* Up Part (Title and options) */}
      <div className="footer-up">
        <h1 className="footer-title">
          {metadata.footerTitle ? metadata.footerTitle : "123 Fakturera"}
        </h1>
        <div className="footer-items">
          <span className="footer-item">
            {metadata.footerHome ? metadata.footerHome : "Home"}
          </span>
          <span className="footer-item">
            {metadata.footerOrder ? metadata.footerOrder : "Order"}
          </span>
          <span className="footer-item">
            {metadata.footerContactUs ? metadata.footerContactUs : "Contact Us"}
          </span>
        </div>
      </div>

      {/* Rights */}
      <p className="footer-rights">
        {metadata.rights
          ? metadata.rights
          : "© Lättfaktura, CRO no. 638537, 2025. All rights reserved."}
      </p>
    </footer>
  );
}

export default LoginFooter;
