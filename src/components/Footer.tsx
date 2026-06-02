import { HeartHandshake } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand footer-brand" href="#top" aria-label="INF Canada home">
          <span className="brand-mark">INF</span>
          <span>
            <strong>INF Canada</strong>
            <small>For Nepal</small>
          </span>
        </a>
        <p>Designed as a clean first foundation for a Canadian INF presence.</p>
      </div>
      <a className="button button-footer" href="#giving">
        <HeartHandshake size={18} aria-hidden="true" />
        <span>Donate</span>
      </a>
    </footer>
  );
}
