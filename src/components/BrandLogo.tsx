import logoBlack from "../assets/logos/inf-nepal-logo-black.svg";
import logoWhite from "../assets/logos/inf-nepal-logo-white.svg";

type BrandLogoProps = {
  className?: string;
  inverted?: boolean;
};

export default function BrandLogo({ className = "", inverted = false }: BrandLogoProps) {
  return (
    <img
      className={className}
      src={inverted ? logoWhite : logoBlack}
      alt="International Nepal Fellowship"
      decoding="async"
    />
  );
}
