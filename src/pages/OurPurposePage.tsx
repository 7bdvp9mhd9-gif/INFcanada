import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Hospital,
  MapPin,
  ShieldCheck,
  Sprout,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import communityMeetingImage from "../assets/images/purpose-community-meeting.jpeg";
import fieldWalkImage from "../assets/images/purpose-field-walk.jpeg";
import livelihoodImage from "../assets/images/purpose-livelihood-goat.jpeg";
import sewingImage from "../assets/images/purpose-sewing-support.jpeg";
import villageImage from "../assets/images/purpose-village-landscape.jpeg";
import womensCircleImage from "../assets/images/purpose-womens-circle.jpeg";

type Purpose = {
  id: string;
  number: string;
  title: string;
  statement: string;
  activity: string;
  location: string;
  beneficiaries: string;
  icon: LucideIcon;
  accent: "red" | "gold" | "blue";
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const purposes: Purpose[] = [
  {
    id: "health-care",
    number: "01",
    title: "Health Care",
    statement:
      "Promote health among Nepali people through hospital, clinical and palliative care programs.",
    activity:
      "Specialist care for leprosy and disability, including surgery, orthotics, prosthetics, therapy, palliative care and counselling.",
    location:
      "INF Nepal rehabilitation hospitals in Pokhara, Surkhet and Nepalgunj, with outreach into rural Western Nepal.",
    beneficiaries:
      "People with leprosy and other disabilities who often face stigma, exclusion, loss of income and loss of dignity.",
    icon: Hospital,
    accent: "red",
  },
  {
    id: "education",
    number: "02",
    title: "Education",
    statement:
      "Promote the health, wellbeing and dignity of Nepali people with disability through rehabilitation, education, counselling and social care.",
    activity:
      "Community Based Rehabilitation, home modification, assistive devices, home therapy, schooling support, self-help groups and training for primary health staff.",
    location:
      "The poorest areas of Provinces 5, 6 and 7, and the homes of people discharged from clinical care.",
    beneficiaries:
      "People with leprosy and disabilities who need practical support to participate in family, school, work and local decisions.",
    icon: GraduationCap,
    accent: "gold",
  },
  {
    id: "community-health",
    number: "03",
    title: "Community Health Program",
    statement:
      "Promote health through community and preventative health programs, especially among poor and marginalised people.",
    activity:
      "Maternal and child health, child nutrition, community health volunteers, primary health support, referral and clinical-care subsidy.",
    location:
      "The poorest areas of Provinces 5, 6 and 7, with locations agreed in partnership with Nepal Government health officials.",
    beneficiaries:
      "The poorest and most marginalised communities, including low caste groups, women, children and people with disabilities.",
    icon: HeartPulse,
    accent: "blue",
  },
  {
    id: "community-development",
    number: "04",
    title: "Community Development",
    statement:
      "Prevent and relieve poverty among Nepali people through community development and social care programs.",
    activity:
      "Community savings, drinking water and sanitation, smallholder farming, small business development, adult literacy, and action on caste and gender discrimination.",
    location:
      "The poorest areas of Provinces 5, 6 and 7, shaped by local priorities and government health partnerships.",
    beneficiaries:
      "Poor and marginalised communities, including low caste groups, women and people with disabilities.",
    icon: Sprout,
    accent: "gold",
  },
  {
    id: "disaster-relief",
    number: "05",
    title: "Disaster & Relief Program",
    statement: "Relieve distress among Nepali people through disaster relief programs.",
    activity:
      "Strengthening local response committees and resilience plans, plus emergency food, medicines, water, shelter, clothing and medical care.",
    location:
      "Across INF Nepal's working area in Central and Western Nepal, with local and national emergency coordination committees.",
    beneficiaries:
      "People affected by natural disasters, especially marginalised groups who are disproportionately impacted.",
    icon: ShieldCheck,
    accent: "red",
  },
  {
    id: "leadership-development",
    number: "06",
    title: "Leadership Development",
    statement:
      "Strengthen Nepali organisations and agencies through staff training and development.",
    activity:
      "Training in medical and community practice, planning, project management, monitoring, evaluation, reporting and leadership development.",
    location:
      "Partner offices, hospitals and field locations, with occasional training elsewhere in Nepal or the region.",
    beneficiaries:
      "The ultimate beneficiaries are the poor and marginalised Nepali people who are the focus of these programmes.",
    icon: UsersRound,
    accent: "blue",
  },
];

const pathwayPhotos = [
  {
    image: villageImage,
    title: "Places",
    body: "Western Nepal, Provinces 5, 6 and 7, and rural communities where need is high.",
  },
  {
    image: communityMeetingImage,
    title: "Activities",
    body: "Clinical care, rehabilitation, community health, development, relief and practical training.",
  },
  {
    image: livelihoodImage,
    title: "People",
    body: "Poor and marginalised Nepali people, including low caste groups, women, children and people with disabilities.",
  },
];

function PurposeBand({ purpose, index }: { purpose: Purpose; index: number }) {
  const Icon = purpose.icon;

  return (
    <motion.article
      className={`purpose-band purpose-band-${purpose.accent}`}
      id={purpose.id}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.56, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="purpose-band-index">
        <span>{purpose.number}</span>
        <Icon size={24} aria-hidden="true" />
      </div>
      <div className="purpose-band-statement">
        <p className="card-eyebrow">{purpose.title}</p>
        <h2>{purpose.statement}</h2>
      </div>
      <div className="purpose-band-notes">
        <p>
          <b>Activities</b>
          {purpose.activity}
        </p>
        <p>
          <b>Locations</b>
          {purpose.location}
        </p>
        <p>
          <b>Beneficiaries</b>
          {purpose.beneficiaries}
        </p>
      </div>
    </motion.article>
  );
}

export default function OurPurposePage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="purpose-page purpose-redesign">
      <section className="purpose-manifesto" aria-labelledby="purpose-title">
        <div className="purpose-manifesto-inner">
          <motion.div
            className="purpose-manifesto-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Our purposes</p>
            <h1 id="purpose-title">Six ways INF Canada serves Nepali people.</h1>
            <div className="purpose-manifesto-actions">
              <a className="button button-primary" href="#purpose-list">
                <span>Read the purposes</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="purpose-photo-field"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Photos from INF-related community work in Nepal"
          >
            <figure className="purpose-photo-main">
              <img
                src={fieldWalkImage}
                alt="Women walking together through hillside fields in Nepal."
                loading="eager"
                decoding="async"
              />
            </figure>
            <figure className="purpose-photo-small purpose-photo-small-top">
              <img
                src={womensCircleImage}
                alt="Women gathered in a circle for a community meeting in Nepal."
                loading="eager"
                decoding="async"
              />
            </figure>
            <figure className="purpose-photo-small purpose-photo-small-bottom">
              <img
                src={sewingImage}
                alt="People visiting a woman using a sewing machine in Nepal."
                loading="eager"
                decoding="async"
              />
            </figure>
            <div className="purpose-photo-note">
              <MapPin size={17} aria-hidden="true" />
              <span>Western Nepal</span>
            </div>
          </motion.div>
        </div>

        <nav className="purpose-anchor-rail" aria-label="Purpose shortcuts">
          {purposes.map((purpose) => (
            <a href={`#${purpose.id}`} key={purpose.id}>
              <span>{purpose.number}</span>
              {purpose.title}
            </a>
          ))}
        </nav>
      </section>

      <section className="purpose-pathway-section" aria-label="Purpose photos">
        <div className="purpose-section-inner">
          <div className="purpose-pathway-grid">
            {pathwayPhotos.map((photo, index) => (
              <motion.figure
                className="purpose-pathway-photo"
                key={photo.title}
                initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.56, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={photo.image} alt="" loading="lazy" decoding="async" />
                <figcaption>
                  <b>{photo.title}</b>
                  <span>{photo.body}</span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="purpose-list-section" id="purpose-list" aria-labelledby="purpose-list-title">
        <div className="purpose-section-inner">
          <motion.div
            className="purpose-list-heading"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Purpose statements</p>
            <h2 id="purpose-list-title">Clear commitments for health, dignity and stronger communities in Nepal.</h2>
          </motion.div>

          <div className="purpose-band-list">
            {purposes.map((purpose, index) => (
              <PurposeBand purpose={purpose} index={index} key={purpose.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="purpose-final-section" aria-labelledby="purpose-final-title">
        <div className="purpose-final-panel">
          <p className="eyebrow">The focus</p>
          <h2 id="purpose-final-title">The ultimate beneficiaries are poor and marginalised Nepali people.</h2>
          <p>
            Every purpose returns to the same aim: health, wellbeing, dignity,
            resilience and stronger local leadership.
          </p>
        </div>
      </section>
    </div>
  );
}
