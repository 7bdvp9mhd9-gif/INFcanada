import { motion } from "framer-motion";
import { CloudSun, HeartPulse, UsersRound } from "lucide-react";
import { impactAreas, type IconMap } from "../data/content";

const icons: IconMap = {
  health: HeartPulse,
  community: UsersRound,
  climate: CloudSun,
};

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

            return (
              <motion.article
                className="impact-card"
                key={area.title}
                initial={{ y: 34 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="impact-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>
                <p className="card-eyebrow">{area.eyebrow}</p>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
