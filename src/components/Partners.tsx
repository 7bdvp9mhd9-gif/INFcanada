import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { partners } from "../data/content";

export default function Partners() {
  return (
    <section className="section partners-section" id="partners" aria-labelledby="partners-title">
      <div className="section-inner">
        <div className="section-heading compact">
          <p className="eyebrow">Global family</p>
          <h2 id="partners-title">Connected to the work already moving.</h2>
        </div>

        <div className="partner-grid">
          {partners.map((partner, index) => (
            <motion.article
              className="partner-card"
              key={partner.name}
              initial={{ y: 28 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.52, delay: index * 0.08 }}
            >
              <MapPin size={20} aria-hidden="true" />
              <h3>{partner.name}</h3>
              <strong>{partner.location}</strong>
              <p>{partner.focus}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
