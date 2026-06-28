import { CirclePlay } from "lucide-react";
import heroImage from "../../assets/images/hero-nepal.jpg";
import MountainSignature from "../brand/MountainSignature";
import { heroStats } from "../../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={heroImage}
        alt="A health worker walking through a Nepali hillside village at sunrise."
        loading="eager"
        decoding="async"
      />
      <div className="hero-scrim" />
      <MountainSignature className="hero-mountain-signature" />

      <div className="hero-copy">
        <p className="eyebrow">Canadians walking beside Nepal</p>
        <h1 id="hero-title">INF Canada</h1>
        <p className="hero-lede">
          A new Canadian home for supporting locally led health, disability inclusion,
          community strength, and resilience across Nepal.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-secondary" href="#stories">
            <CirclePlay size={19} aria-hidden="true" />
            <span>See the vision</span>
          </a>
        </div>
      </div>

      <div className="hero-story-panel">
        <div className="hero-stats" aria-label="INF Canada quick facts">
          {heroStats.map((stat) => (
            <div key={stat.value} className="hero-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
