import { useState } from "react";
import { HeartHandshake, Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { navItems } from "../data/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="INF Canada home">
        <BrandLogo className="brand-logo" inverted />
        <span>
          <strong>INF Canada</strong>
          <small>International Nepal Fellowship</small>
        </span>
      </a>

      <nav className={isOpen ? "nav nav-open" : "nav"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-donate" href="/#giving">
        <HeartHandshake size={18} aria-hidden="true" />
        <span>Donate</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
