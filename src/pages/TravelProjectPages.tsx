import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  HeartHandshake,
  Hospital,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import communityImage from "../assets/images/travel-community-projects.jpg";
import hospitalImage from "../assets/images/travel-hospital-visit.jpg";
import travelHeroImage from "../assets/images/travel-nepal-hero.jpg";
import { communityProjects, communityProjectsIntro, hospitalVisit } from "../data/travel";

type Stat = {
  value: string;
  label: string;
};

type DetailItem = {
  title: string;
  body: string;
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const communityStats: Stat[] = [
  { value: "3", label: "Projects launched in Kapilvastu" },
  { value: "$500", label: "Approximate cost for one animal or program" },
  { value: "$400", label: "Annual child sponsorship support" },
];

const communityPath: DetailItem[] = [
  {
    title: "Families build income",
    body: "Goats and buffalos give families a practical way to earn, save, and plan beyond one season.",
  },
  {
    title: "Children stay connected",
    body: "Sponsors help children continue school while families receive encouragement through regular visits.",
  },
  {
    title: "Women lead change",
    body: "Leadership, health, nutrition, and capacity-building programs help young women and mothers grow stronger networks.",
  },
];

const hospitalStats: Stat[] = [
  { value: "Pokhara", label: "Green Pastures Hospital campus" },
  { value: "Leprosy", label: "Specialist care and rehabilitation" },
  { value: "Vision trip", label: "Meet the work in person" },
];

const hospitalCare: DetailItem[] = [
  {
    title: "Rehabilitation that restores dignity",
    body: "Patients receive practical therapy, mobility support, and care that helps them return to daily life with confidence.",
  },
  {
    title: "Long-term leprosy ministry",
    body: "The hospital continues a deeply trusted INF legacy of serving people affected by leprosy and social exclusion.",
  },
  {
    title: "Whole-person health",
    body: "Clinical care, encouragement, and community connection work together so healing is not only physical.",
  },
];

function DetailHero({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  stats,
}: {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  stats: Stat[];
}) {
  return (
    <section className="project-detail-hero" aria-labelledby="project-detail-title">
      <img className="project-detail-hero-image" src={image} alt={imageAlt} loading="eager" decoding="async" />
      <div className="project-detail-hero-scrim" />
      <motion.div
        className="project-detail-hero-copy"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <a className="project-back-link" href="/travel-to-nepal">
          <ArrowLeft size={17} aria-hidden="true" />
          <span>Travel to Nepal</span>
        </a>
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="project-detail-title">{title}</h1>
        <p>{body}</p>
        <div className="project-detail-actions">
          <a className="button button-primary" href="/donate">
            <HeartHandshake size={18} aria-hidden="true" />
            <span>Donate Now</span>
          </a>
          <a className="button button-secondary" href="/travel-to-nepal#contact">
            <Plane size={18} aria-hidden="true" />
            <span>Ask About the Trip</span>
          </a>
        </div>
      </motion.div>
      <motion.div
        className="project-detail-stat-strip"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
      >
        {stats.map((stat) => (
          <div className="project-detail-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function DetailCards({ items, icon }: { items: DetailItem[]; icon: "heart" | "hospital" }) {
  const Icon = icon === "heart" ? HeartHandshake : Hospital;

  return (
    <div className="project-detail-card-grid">
      {items.map((item, index) => (
        <motion.article
          className="project-detail-card"
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <Icon size={24} aria-hidden="true" />
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </motion.article>
      ))}
    </div>
  );
}

export function CommunityTransformationProjectsPage() {
  return (
    <div className="project-detail-page community-detail-page">
      <DetailHero
        eyebrow="Community transformation"
        title="Community Transformation Projects"
        body="In Kapilvastu, support becomes practical: animals that create income, sponsorship that keeps children encouraged, and leadership programs that strengthen women and families."
        image={communityImage}
        imageAlt="Community development gathering with families, goats, and a buffalo in Nepal."
        stats={communityStats}
      />

      <section className="project-detail-section">
        <div className="project-detail-inner project-detail-split">
          <motion.div
            className="project-detail-copy"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Why it matters</p>
            <h2>Change that families can keep building on.</h2>
            <p>{communityProjectsIntro}</p>
          </motion.div>

          <motion.div
            className="project-detail-image-panel"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={travelHeroImage}
              alt="Visitors and Nepali hosts walking together on a hillside path in Nepal."
              loading="lazy"
              decoding="async"
            />
            <div className="project-image-note">
              <MapPin size={17} aria-hidden="true" />
              <span>Kapilvastu field visits are part of the 2026 vision trip.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="project-detail-section project-detail-soft-section" aria-labelledby="community-focus-title">
        <div className="project-detail-inner">
          <motion.div
            className="section-heading travel-heading compact-heading"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Project focus</p>
            <h2 id="community-focus-title">Three connected paths of support</h2>
            <p>Each project starts with a practical need and grows through local relationships.</p>
          </motion.div>
          <DetailCards items={communityProjects} icon="heart" />
        </div>
      </section>

      <section className="project-detail-section">
        <div className="project-detail-inner project-detail-split project-detail-split-tight">
          <motion.div
            className="project-detail-copy"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">What support does</p>
            <h2>Small, focused gifts become visible change.</h2>
            <p>
              The goal is not a one-time handout. It is steady encouragement that helps
              families protect education, increase income, and strengthen community leadership.
            </p>
          </motion.div>
          <div className="project-detail-step-list">
            {communityPath.map((item, index) => (
              <motion.article
                className="project-detail-step"
                key={item.title}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.32 }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-detail-section project-detail-cta-section">
        <div className="project-detail-inner">
          <div className="project-detail-cta">
            <div>
              <p className="eyebrow">Take the next step</p>
              <h2>Support Kapilvastu or see the projects in person.</h2>
            </div>
            <div className="project-detail-cta-actions">
              <a className="button button-primary" href="/donate">
                <span>Donate Now</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="/travel-to-nepal">
                <span>Travel to Nepal</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function GreenPasturesHospitalPage() {
  return (
    <div className="project-detail-page hospital-detail-page">
      <DetailHero
        eyebrow="Care and rehabilitation"
        title="INF Green Pastures Leprosy Hospital"
        body="Green Pastures Hospital in Pokhara is a place where specialist care, rehabilitation, and faithful presence meet people affected by leprosy, disability, and long-term health challenges."
        image={hospitalImage}
        imageAlt="A rehabilitation therapist supporting a patient during mobility practice in Nepal."
        stats={hospitalStats}
      />

      <section className="project-detail-section">
        <div className="project-detail-inner project-detail-split">
          <motion.div
            className="project-detail-copy"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Why visit</p>
            <h2>See compassionate care at work.</h2>
            <p>{hospitalVisit}</p>
            <a className="travel-inline-link" href="https://www.inf.org.np" target="_blank" rel="noreferrer">
              <Hospital size={18} aria-hidden="true" />
              <span>www.inf.org.np</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="project-detail-image-panel"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={travelHeroImage}
              alt="Visitors and Nepali hosts walking together on a hillside path in Nepal."
              loading="lazy"
              decoding="async"
            />
            <div className="project-image-note">
              <MapPin size={17} aria-hidden="true" />
              <span>Hospital visits are included during the Pokhara portion of the trip.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="project-detail-section project-detail-soft-section" aria-labelledby="hospital-care-title">
        <div className="project-detail-inner">
          <motion.div
            className="section-heading travel-heading compact-heading"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Care focus</p>
            <h2 id="hospital-care-title">What Green Pastures represents</h2>
            <p>Visitors encounter a ministry of skilled care, patient dignity, and long-term presence.</p>
          </motion.div>
          <DetailCards items={hospitalCare} icon="hospital" />
        </div>
      </section>

      <section className="project-detail-section">
        <div className="project-detail-inner project-detail-split project-detail-split-tight">
          <motion.div
            className="project-detail-copy"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">During the vision trip</p>
            <h2>A visit that helps supporters understand the need.</h2>
            <p>
              The hospital page gives donors and travelers a clearer picture of why health,
              rehabilitation, and social inclusion remain central to INF's work in Nepal.
            </p>
          </motion.div>
          <div className="project-detail-step-list">
            {[
              {
                icon: ShieldCheck,
                title: "Learn from staff",
                body: "Understand the clinical and community needs behind long-term rehabilitation.",
              },
              {
                icon: UsersRound,
                title: "Meet the human story",
                body: "See how care restores confidence, mobility, and connection for patients and families.",
              },
              {
                icon: Sparkles,
                title: "Carry the story home",
                body: "Help Canadian supporters give, pray, and advocate with a more personal understanding.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="project-detail-step icon-step"
                  key={item.title}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.32 }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span>
                    <Icon size={21} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="project-detail-section project-detail-cta-section">
        <div className="project-detail-inner">
          <div className="project-detail-cta">
            <div>
              <p className="eyebrow">Take the next step</p>
              <h2>Support rehabilitation and learn more through the Nepal trip.</h2>
            </div>
            <div className="project-detail-cta-actions">
              <a className="button button-primary" href="/donate">
                <span>Donate Now</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="/travel-to-nepal">
                <span>Travel to Nepal</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
