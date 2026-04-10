import "./login-footer.styles.css";

function LoginFooter({ metadata }) {
  return (
    <footer class="footer-container">
      {/* Up Part (Title and options) */}
      <div class="footer-up">
        <h1 class="footer-title">
          {metadata.footerTitle ? metadata.footerTitle : "123 Fakturera"}
        </h1>
        <div class="footer-items">
          <span class="footer-item">
            {metadata.footerHome ? metadata.footerHome : "Home"}
          </span>
          <span class="footer-item">
            {metadata.footerOrder ? metadata.footerOrder : "Order"}
          </span>
          <span class="footer-item">
            {metadata.footerContactUs ? metadata.footerContactUs : "Contact Us"}
          </span>
        </div>
      </div>

      {/* Rights */}
      <p class="footer-rights">
        {metadata.rights
          ? metadata.rights
          : "© Lättfaktura, CRO no. 638537, 2025. All rights reserved."}
      </p>
    </footer>
  );
}

export default LoginFooter;
