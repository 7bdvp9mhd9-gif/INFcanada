import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, UsersRound } from "lucide-react";
import healthPhoto from "../assets/images/photo-health-support.jpg";
import communityPhoto from "../assets/images/photo-community-leadership.jpg";
import hospitalPhoto from "../assets/images/photo-medical-charity-care.jpg";
import { impactAreas, type IconMap } from "../data/content";

const icons: IconMap = {
  women: GraduationCap,
  community: UsersRound,
  hospital: HeartPulse,
};

const impactPhotos = {
  women: {
    src: healthPhoto,
    alt: "Two women meeting in a hillside Nepali community as part of a capacity-building visit.",
  },
  community: {
    src: communityPhoto,
    alt: "A local community group meeting together beside terraced hills in Nepal.",
  },
  hospital: {
    src: hospitalPhoto,
    alt: "A rehabilitation worker supporting a patient practicing with a walker at an INF hospital in Nepal.",
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
          <h2 id="work-title">Three projects, one shared purpose.</h2>
          <p>
            INF Canada supports women&apos;s capacity building, community transformation,
            and medical charity care through trusted work in Nepal.
          </p>
        </motion.div>

        <div className="impact-grid">
          {impactAreas.map((area, index) => {
            const Icon = icons[area.icon];
            const photo = impactPhotos[area.icon];

            return (
              <motion.a
                className="impact-card"
                href={area.href}
                key={area.title}
                aria-label={`Read more about ${area.title}`}
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
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
