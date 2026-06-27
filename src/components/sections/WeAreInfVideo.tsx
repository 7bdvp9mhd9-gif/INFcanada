import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videoEmbedUrl =
  "https://www.youtube-nocookie.com/embed/_IzcSHV_y3U?start=16&autoplay=1&rel=0&modestbranding=1";
const thumbnailUrl = "https://img.youtube.com/vi/_IzcSHV_y3U/maxresdefault.jpg";

export default function WeAreInfVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const startVideo = () => setIsPlaying(true);

  return (
    <section className="watch-section" id="watch" aria-labelledby="watch-title">
      <div className="watch-inner">
        <motion.div
          className="watch-heading"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="watch-kicker">Watch</p>
          <div className="watch-title-row">
            <h2 id="watch-title">We Are INF</h2>
            <button className="watch-all-link" type="button" onClick={startVideo}>
              <span>Watch all</span>
              <Play size={14} fill="currentColor" aria-hidden="true" />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="watch-copy-grid"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>
            "We Are INF" introduces the work of INF Canada, a Christian non-governmental
            organization that has been serving Nepal since 1952.
          </p>
          <p>
            INF focuses on community development, healthcare, and supporting individuals affected
            by disabilities, leprosy, and other medical needs, working to improve the quality of
            life for marginalized and vulnerable communities through sustainable development and
            compassionate care.
          </p>
        </motion.div>

        <motion.div
          className={`watch-video-frame${isPlaying ? " watch-video-frame-playing" : ""}`}
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {isPlaying ? (
            <iframe
              src={videoEmbedUrl}
              title="We Are INF video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              className="watch-video-card"
              type="button"
              onClick={startVideo}
              aria-label="Play We Are INF video"
            >
              <img
                src={thumbnailUrl}
                alt="Portrait from the We Are INF video."
                loading="lazy"
                decoding="async"
              />
              <span className="watch-video-tint" aria-hidden="true" />
              <span className="watch-video-sheen" aria-hidden="true" />
              <span className="watch-play" aria-hidden="true">
                <Play size={31} fill="currentColor" />
              </span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
