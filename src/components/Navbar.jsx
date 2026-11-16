import { Menu, X } from "lucide-react";
import { useState } from "react";
import LoginModal from "./LoginModal";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <a className="brand" href="#top" onClick={closeMenu}>
            grammarly<span>.</span>
          </a>

          <nav className={`nav-links${isMenuOpen ? " active" : ""}`}>
            <a href="#product" onClick={closeMenu}>Product</a>
            <a href="#resources" onClick={closeMenu}>Solutions</a>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
            <a href="#resources" onClick={closeMenu}>How it works</a>
            <a className="mobile-cta" href="#get-started" onClick={closeMenu}>Get started</a>
          </nav>

          <div className="nav-actions">
            <button className="login-link login-button" type="button" onClick={() => setIsLoginOpen(true)}>Log in</button>
            <a className="btn btn-primary nav-cta" href="#get-started">Get started</a>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </>
  );
}

export default Navbar;
