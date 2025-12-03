import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container nav-container">

        {/* Logo */}
        <div className="logo">
          <span className="logo-mark">NS</span>
          <span className="logo-text">Nur Software</span>
        </div>

        {/* Navigation */}
        <nav className={`nav ${open ? "nav-open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" className="nav-link" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/services" className="nav-link" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link to="/portfolio" className="nav-link" onClick={() => setOpen(false)}>
            Portfolio
          </Link>

          <Link to="/technologies" className="nav-link" onClick={() => setOpen(false)}>
            Technologies
          </Link>

          <Link to="/blog" className="nav-link" onClick={() => setOpen(false)}>
            Blog
          </Link>

          <Link to="/team" className="nav-link" onClick={() => setOpen(false)}>
            Team
          </Link>

          <Link to="/contact" className="nav-link" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="nav-toggle"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
