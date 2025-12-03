import { useState, useEffect } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-mark">NS</span>
          <span className="logo-text">Nur Software</span>
        </div>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {[
            'home',
            'about',
            'services',
            'portfolio',
            'technologies',
            'blog',
            'team',
            'contact',
          ].map((id) => (
            <button
              key={id}
              className="nav-link"
              onClick={() => handleNavClick(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

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
