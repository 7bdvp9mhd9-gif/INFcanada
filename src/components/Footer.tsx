import { HeartHandshake } from "lucide-react";
import BrandLogo from "./BrandLogo";
import CanadaMark from "./CanadaMark";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand footer-brand" href="/#top" aria-label="INF Canada home">
          <BrandLogo className="brand-logo" inverted />
          <CanadaMark />
        </a>
      </div>
      <a className="button button-footer" href="/donate">
        <HeartHandshake size={18} aria-hidden="true" />
        <span>Donate</span>
      </a>
    </footer>
  );
}
