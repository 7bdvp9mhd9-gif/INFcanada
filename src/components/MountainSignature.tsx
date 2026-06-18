import mountainCtaMax from "../assets/mountains/mountain-cta-max.svg";
import mountainCtaMin from "../assets/mountains/mountain-cta-min.svg";
import mountainMaskGreys from "../assets/mountains/mountain-mask-greys.svg";
import mountainSilhouette from "../assets/mountains/mountain-silhouette.svg";

type MountainSignatureVariant = "light" | "red" | "ink" | "silhouette" | "cta";

type MountainSignatureProps = {
  className?: string;
  variant?: MountainSignatureVariant;
};

const mountainAssets: Record<MountainSignatureVariant, string> = {
  light: mountainMaskGreys,
  red: mountainCtaMax,
  ink: mountainMaskGreys,
  silhouette: mountainSilhouette,
  cta: mountainCtaMin,
};

export default function MountainSignature({
  className = "",
  variant = "light",
}: MountainSignatureProps) {
  return (
    <img
      className={["mountain-signature", `mountain-signature-${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      src={mountainAssets[variant]}
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  );
}
