import { motion } from "framer-motion";
import { ArrowUpRight, HandHeart, Sparkles } from "lucide-react";
import kamalPhoto from "../assets/images/team-kamal-ghamal.jpg";
import jenniferPhoto from "../assets/images/team-jennifer-huang.jpeg";
import { teamMembers, type TeamMember } from "../data/content";

const teamPhotos = {
  kamal: kamalPhoto,
  jennifer: jenniferPhoto,
} satisfies Record<TeamMember["image"], string>;

type TeamProps = {
  isPage?: boolean;
};

export default function Team({ isPage = false }: TeamProps) {
  return (
    <section
      className={isPage ? "section team-section team-page-section" : "section team-section"}
      id="team"
      aria-labelledby="team-title"
    >
      <div className="section-inner team-inner">
        <motion.div
          className="section-heading team-heading"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Our team</p>
          <h2 id="team-title">People carrying the mission with care.</h2>
          <p>
            INF Canada is being shaped by people who believe generosity should feel
            personal, transparent, and close to the communities it serves.
          </p>
        </motion.div>

        <div className="team-showcase">
          <motion.div
            className="team-mission-panel"
            initial={{ x: -26, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.36 }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="team-mission-icon" aria-hidden="true">
              <HandHeart size={28} />
            </div>
            <p className="card-eyebrow">Canadian roots, Nepali partnership</p>
            <h3>Built around trust, dignity, and steady relationship.</h3>
            <p>
              This page is ready for the first two team profiles, with space for each
              person's story, role, and connection to the work.
            </p>
            <a className="team-link" href="/#partners">
              <span>See the wider partnership</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </motion.div>

          <div className="team-card-grid">
            {teamMembers.map((member, index) => {
              const paragraphs = member.bio.split("\n\n");
              const previewCount = member.image === "jennifer" ? 2 : 1;
              const intro = paragraphs.slice(0, previewCount);
              const more = paragraphs.slice(previewCount);

              return (
                <motion.article
                  className="team-card"
                  key={`${member.name}-${index}`}
                  initial={{ y: 34, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true, amount: 0.38 }}
                  transition={{ duration: 0.58, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="team-portrait">
                    <div className="team-portrait-ring" />
                    <img src={teamPhotos[member.image]} alt={member.imageAlt} loading="lazy" decoding="async" />
                  </div>
                  <div className="team-card-body">
                    <p className="card-eyebrow">{member.role}</p>
                    <h3>{member.name}</h3>
                    {intro.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {more.length > 0 ? (
                      <details className="team-bio-more">
                        <summary>
                          <span className="more-label">Read more</span>
                          <span className="less-label">Show less</span>
                        </summary>
                        {more.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </details>
                    ) : null}
                  </div>
                  <div className="team-card-spark" aria-hidden="true">
                    <Sparkles size={18} />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
