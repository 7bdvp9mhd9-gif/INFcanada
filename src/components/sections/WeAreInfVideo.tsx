import { useState } from "react";
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
        <div className="watch-heading">
          <p className="watch-kicker">Watch</p>
          <div className="watch-title-row">
            <h2 id="watch-title">We Are INF</h2>
            <button className="watch-all-link" type="button" onClick={startVideo}>
              <span>Watch all</span>
              <Play size={14} fill="currentColor" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="watch-copy-grid">
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
        </div>

        <div
          className={`watch-video-frame${isPlaying ? " watch-video-frame-playing" : ""}`}
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
        </div>
      </div>
    </section>
  );
}
