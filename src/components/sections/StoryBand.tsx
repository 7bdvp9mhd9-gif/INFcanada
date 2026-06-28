import { Quote } from "lucide-react";
import storyPhoto from "../../assets/images/photo-nepal-story-landscape.jpg";
import MountainSignature from "../brand/MountainSignature";

export default function StoryBand() {
  return (
    <section className="story-band" id="stories" aria-labelledby="story-title">
      <MountainSignature className="story-mountain-signature" variant="ink" />
      <div className="section-inner story-inner">
        <figure className="story-photo">
          <img
            src={storyPhoto}
            alt="A Nepali hillside village with terraced fields, stone paths, and distant mountains."
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="story-panel">
          <Quote size={31} aria-hidden="true" />
          <p className="eyebrow">Shared INF vision</p>
          <h2 id="story-title">Life in all its fullness for people and communities in Nepal.</h2>
        </div>
      </div>
    </section>
  );
}
