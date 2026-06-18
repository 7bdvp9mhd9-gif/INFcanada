import mapleLeaf from "../assets/logos/canada-maple-leaf.png";

export default function CanadaMark() {
  return (
    <span className="brand-country" aria-label="Canada">
      <span className="brand-country-text">Canada</span>
      <img className="brand-leaf" src={mapleLeaf} alt="" aria-hidden="true" decoding="async" />
    </span>
  );
}
