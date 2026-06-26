import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import storyPhoto from "../../assets/images/photo-nepal-story-landscape.jpg";
import MountainSignature from "../brand/MountainSignature";

export default function StoryBand() {
  return (
    <section className="story-band" id="stories" aria-labelledby="story-title">
      <MountainSignature className="story-mountain-signature" variant="ink" />
      <div className="section-inner story-inner">
        <motion.figure
          className="story-photo"
          initial={{ y: 28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={storyPhoto}
            alt="A Nepali hillside village with terraced fields, stone paths, and distant mountains."
            loading="lazy"
            decoding="async"
          />
        </motion.figure>
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
        </motion.div>
      </div>
    </section>
  );
}
