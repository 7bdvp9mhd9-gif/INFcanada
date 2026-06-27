import { ArrowUpRight, HandHeart, Sparkles } from "lucide-react";
import kamalPhoto from "../assets/images/team-kamal-ghamal.jpg";
import jenniferPhoto from "../assets/images/team-jennifer-huang.jpeg";
import arjunPhoto from "../assets/images/team-arjun-pandey.jpeg";
import davidPhoto from "../assets/images/team-david-stevens.jpg";
import evelynPhoto from "../assets/images/team-evelyn-villanueva.jpg";
import { teamMembers, type TeamMember } from "../data/content";

const teamPhotos = {
  kamal: kamalPhoto,
  jennifer: jenniferPhoto,
  arjun: arjunPhoto,
  david: davidPhoto,
  evelyn: evelynPhoto,
} satisfies Record<NonNullable<TeamMember["image"]>, string>;

type TeamProps = {
  isPage?: boolean;
};

const bioPreviewLength = 360;

function splitBioPreview(bio: string) {
  if (bio.length <= bioPreviewLength) {
    return { intro: bio, more: [] };
  }

  const excerpt = bio.slice(0, bioPreviewLength);
  const sentenceBreak = Math.max(excerpt.lastIndexOf(". "), excerpt.lastIndexOf('." '));
  const wordBreak = excerpt.lastIndexOf(" ");
  const splitIndex = sentenceBreak > 240 ? sentenceBreak + 1 : wordBreak;
  const intro = `${bio.slice(0, splitIndex).trim()}...`;
  const remaining = bio.slice(splitIndex).trim();

  return {
    intro,
    more: remaining.split("\n\n").filter(Boolean),
  };
}

export default function Team({ isPage = false }: TeamProps) {
  return (
    <section
      className={isPage ? "section team-section team-page-section" : "section team-section"}
      id="team"
      aria-labelledby="team-title"
    >
      <div className="section-inner team-inner">
        <div className="section-heading team-heading">
          <p className="eyebrow">Our team</p>
          <h2 id="team-title">People carrying the mission with care.</h2>
          <p>
            INF Canada is being shaped by people who believe generosity should feel
            personal, transparent, and close to the communities it serves.
          </p>
        </div>

        <div className="team-showcase">
          <div className="team-mission-panel">
            <div className="team-mission-icon" aria-hidden="true">
              <HandHeart size={28} />
            </div>
            <p className="card-eyebrow">Canadian roots, Nepali partnership</p>
            <h3>Built around trust, dignity, and steady relationship.</h3>
            <p>
              Meet the people helping carry INF Canada's work with practical care,
              faithful stewardship, and long-term relationship.
            </p>
            <a className="team-link" href="/#watch">
              <span>Watch the INF story</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="team-card-grid">
            {teamMembers.map((member, index) => {
              const { intro, more } = splitBioPreview(member.bio);
              const photo = member.image ? teamPhotos[member.image] : undefined;

              return (
                <article
                  className="team-card"
                  key={`${member.name}-${index}`}
                >
                  <div className="team-portrait">
                    <div className="team-portrait-ring" />
                    {photo ? (
                      <img src={photo} alt={member.imageAlt} loading="eager" decoding="async" />
                    ) : (
                      <div className="team-portrait-fallback" aria-label={`${member.name} portrait placeholder`}>
                        {member.initials}
                      </div>
                    )}
                  </div>
                  <div className="team-card-body">
                    <p className="card-eyebrow">{member.role}</p>
                    <h3>{member.name}</h3>
                    <p>{intro}</p>
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
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
