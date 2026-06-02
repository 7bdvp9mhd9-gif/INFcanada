import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function StoryBand() {
  return (
    <section className="story-band" id="stories" aria-labelledby="story-title">
      <div className="section-inner story-inner">
        <motion.div
          className="story-panel"
          initial={{ scale: 0.96 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Quote size={31} aria-hidden="true" />
          <p className="eyebrow">Shared INF vision</p>
          <h2 id="story-title">Life in all its fullness for people and communities in Nepal.</h2>
          <p>
            The story system can grow from here: field updates, supporter journeys,
            project reports, short films, and campaign pages that show dignity before need.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
