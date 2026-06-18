import { motion } from "framer-motion";
import { CloudSun, HeartPulse, UsersRound } from "lucide-react";
import healthPhoto from "../assets/images/photo-health-support.jpg";
import communityPhoto from "../assets/images/photo-community-leadership.jpg";
import resiliencePhoto from "../assets/images/photo-resilience-path.jpg";
import { impactAreas, type IconMap } from "../data/content";

const icons: IconMap = {
  health: HeartPulse,
  community: UsersRound,
  climate: CloudSun,
};

const impactPhotos = {
  health: {
    src: healthPhoto,
    alt: "A Nepali health worker speaking with a community member in a hillside village.",
  },
  community: {
    src: communityPhoto,
    alt: "A local community group meeting together beside terraced hills in Nepal.",
  },
  climate: {
    src: resiliencePhoto,
    alt: "Community members walking a mountain path in Nepal with terraced hills behind them.",
  },
} satisfies Record<keyof typeof icons, { src: string; alt: string }>;

export default function ImpactGrid() {
  return (
    <section className="section impact-section" id="work" aria-labelledby="work-title">
      <div className="section-inner">
        <motion.div
          className="section-heading"
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Where giving moves first</p>
          <h2 id="work-title">Practical work with a human centre.</h2>
          <p>
            The first site foundation is built around the same core themes carried across
            the INF family: health, opportunity, inclusion, and community resilience.
          </p>
        </motion.div>

        <div className="impact-grid">
          {impactAreas.map((area, index) => {
            const Icon = icons[area.icon];
            const photo = impactPhotos[area.icon];

            return (
              <motion.article
                className="impact-card"
                key={area.title}
                initial={{ y: 34 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="impact-photo">
                  <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                  <div className="impact-icon" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="impact-card-body">
                  <p className="card-eyebrow">{area.eyebrow}</p>
                  <h3>{area.title}</h3>
                  <p>{area.body}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
