const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo">
            <span className="logo-mark">NS</span>
            <span className="logo-text">Nur Software</span>
          </div>
          <p className="small">
            We develop high-quality mobile and web solutions that help companies
            scale, automate processes, and grow faster in a competitive market.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Technologies</h4>
          <p className="small">
            Flutter · React Native · ReactJS · Laravel · NodeJS · Django ·
            Firebase · MySQL · PostgreSQL · MongoDB · AWS
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Nur Software. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
