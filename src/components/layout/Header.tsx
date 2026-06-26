import { useState } from "react";
import { ChevronDown, HeartHandshake, Menu, X } from "lucide-react";
import BrandLogo from "../brand/BrandLogo";
import CanadaMark from "../brand/CanadaMark";
import { navItems } from "../../data/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  function closeNavigation() {
    setIsOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header className="site-header">
      <a className="brand" href="/#top" aria-label="INF Canada home">
        <BrandLogo className="brand-logo" inverted />
        <CanadaMark />
      </a>

      <nav className={isOpen ? "nav nav-open" : "nav"} aria-label="Primary navigation">
        {navItems.map((item) =>
          item.children ? (
            <div
              className={openDropdown === item.label ? "nav-item nav-item-open" : "nav-item"}
              key={item.label}
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
              onFocus={() => setOpenDropdown(item.label)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setOpenDropdown(null);
                }
              }}
            >
              <button
                className="nav-trigger"
                type="button"
                aria-expanded={openDropdown === item.label}
                onClick={() => {
                  if (!isOpen) {
                    return;
                  }

                  setOpenDropdown((current) => (current === item.label ? null : item.label));
                }}
              >
                <span>{item.label}</span>
                <ChevronDown size={16} aria-hidden="true" />
              </button>
              <div className="nav-dropdown" aria-label={`${item.label} links`}>
                {item.children.map((child) => (
                  <a key={child.href} href={child.href} onClick={closeNavigation}>
                    {child.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a key={item.href} href={item.href} onClick={closeNavigation}>
              {item.label}
            </a>
          ),
        )}
      </nav>

      <a className="header-donate" href="/donate">
        <HeartHandshake size={18} aria-hidden="true" />
        <span>Donate</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen((current) => !current);
          setOpenDropdown(null);
        }}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
