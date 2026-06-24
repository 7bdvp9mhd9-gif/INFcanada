import { useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Hospital,
  MapPin,
  ShieldCheck,
  Sparkles,
  Sprout,
  UsersRound,
} from "lucide-react";
import heroImage from "../assets/images/what-we-do-hero.jpg";
import kapilvastuImage from "../assets/images/what-we-do-kapilvastu.jpg";
import medicalImage from "../assets/images/what-we-do-medical-charity.jpg";
import womensImage from "../assets/images/what-we-do-womens-capacity.jpg";

type Project = {
  id: string;
  number: string;
  label: string;
  title: string;
  shortTitle: string;
  summary: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  icon: typeof HeartPulse;
  details: string[];
  accent: "red" | "gold" | "blue";
};

const reveal = {
  hidden: { y: 28 },
  show: { y: 0 },
};

const projects: Project[] = [
  {
    id: "medical-charity",
    number: "01",
    label: "Compassion",
    title: "Compassion: Medical Charity Project",
    shortTitle: "Medical Charity Project",
    summary:
      "Financial assistance for treatment, rehabilitation, and mobility aids at INF Green Pastures hospitals.",
    paragraphs: [
      "INF Canada's Medical Charity Project provides financial assistance for treatment, rehabilitation, and mobility aids at INF Green Pastures hospitals, helping ensure that financial hardship does not prevent access to essential health services.",
      "For patients and families facing poverty, medical costs can be overwhelming; this project helps make care more accessible, affordable, and equitable.",
      "With your support, INF Canada helps provide vital medical services and mobility aids to people who need care most.",
    ],
    image: medicalImage,
    imageAlt:
      "Illustrative rehabilitation worker supporting a patient practicing with a walker in a clinic veranda.",
    icon: HeartPulse,
    details: ["Treatment", "Rehabilitation", "Mobility aids"],
    accent: "red",
  },
  {
    id: "womens-capacity",
    number: "02",
    label: "Development",
    title: "Development: Women's Capacity Building Project",
    shortTitle: "Women's Capacity Building Project",
    summary:
      "Practical skills, ongoing mentoring, and encouragement for dignity, confidence, leadership, and resilience.",
    paragraphs: [
      "Many women in Nepal face poverty, exploitation, gender inequality, limited access to education and healthcare, restricted mobility, and fewer economic opportunities.",
      "The Women's Capacity Building Project provides practical skills, ongoing mentoring, and encouragement to help women grow in dignity, confidence, leadership, and economic resilience.",
      "Your generosity enables INF Canada to equip Nepalese women with vocational and income-generating skills that support greater independence and long-term sustainability.",
    ],
    image: womensImage,
    imageAlt:
      "Illustrative women in Nepal learning vocational and small-business skills in a bright workshop.",
    icon: GraduationCap,
    details: ["Practical skills", "Ongoing mentoring", "Income-generating skills"],
    accent: "gold",
  },
  {
    id: "kapilvastu-transformation",
    number: "03",
    label: "Transformation",
    title: "Transformation: Kapilvastu Community Transformation Project",
    shortTitle: "Kapilvastu Community Transformation Project",
    summary:
      "Local resources and opportunities that benefit women, families, and marginalized groups in Kapilvastu.",
    paragraphs: [
      "Kapilvastu faces social and economic challenges that affect women, families, and marginalized groups, including poverty, limited access to education, fewer employment opportunities, and barriers to health and safety.",
      "The Community Transformation Project works with local communities to reduce these barriers and strengthen opportunity, resilience, and wellbeing for all.",
      "Your support through INF Canada helps provide resources and opportunities that directly benefit women, families, and marginalized groups in Kapilvastu.",
    ],
    image: kapilvastuImage,
    imageAlt:
      "Illustrative community gathering in a lowland Kapilvastu village courtyard beside green fields.",
    icon: Sprout,
    details: ["Opportunity", "Resilience", "Wellbeing"],
    accent: "blue",
  },
];

const focusPoints = [
  {
    icon: Hospital,
    title: "Compassionate care",
    body: "Treatment, rehabilitation, and mobility support for people who need care most.",
  },
  {
    icon: UsersRound,
    title: "Women's opportunity",
    body: "Mentoring and practical skills that support dignity, confidence, and long-term sustainability.",
  },
  {
    icon: ShieldCheck,
    title: "Community resilience",
    body: "Local resources that help families and marginalized groups reduce barriers and strengthen wellbeing.",
  },
];

function ProjectSection({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const reverse = index % 2 === 1;

  return (
    <section
      className={`what-project-section what-project-${project.accent}`}
      id={project.id}
      aria-labelledby={`${project.id}-title`}
    >
      <div className={reverse ? "what-project-layout reverse" : "what-project-layout"}>
        <motion.figure
          className="what-project-media"
          style={{ backgroundImage: `url(${project.image})` }}
          initial={{ scale: 0.96 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.66, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={project.image} alt={project.imageAlt} loading="eager" decoding="async" />
          <figcaption>
            <MapPin size={17} aria-hidden="true" />
            <span>{project.label} in Nepal</span>
          </figcaption>
        </motion.figure>

        <motion.article
          className="what-project-copy"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="what-project-kicker">
            <span>{project.number}</span>
            <Icon size={25} aria-hidden="true" />
            <p>{project.label}</p>
          </div>
          <h2 id={`${project.id}-title`}>{project.title}</h2>
          {project.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="what-detail-pills" aria-label={`${project.shortTitle} focus areas`}>
            {project.details.map((detail) => (
              <span key={detail}>
                <CheckCircle2 size={16} aria-hidden="true" />
                {detail}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default function WhatWeDoPage() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 720], [0, 82]);
  const copyY = useTransform(scrollY, [0, 720], [0, -32]);

  useEffect(() => {
    const targetId = window.location.hash.slice(1);

    if (!targetId) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });
  }, []);

  return (
    <div className="what-page">
      <section className="what-hero" id="top" aria-labelledby="what-title">
        <motion.img
          className="what-hero-image"
          src={heroImage}
          alt="Illustrative community care gathering in a Nepali courtyard with health supplies and notebooks."
          loading="eager"
          decoding="async"
          style={{ y: reduceMotion ? 0 : imageY }}
        />
        <div className="what-hero-scrim" />
        <motion.div
          className="what-hero-copy"
          style={{ y: reduceMotion ? 0 : copyY }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Our projects / What we do</p>
          <h1 id="what-title">Compassion, development, and transformation in Nepal.</h1>
          <p>
            INF Canada focuses on three core projects in Nepal that provide compassionate
            care, strengthen women's opportunities, and support long-term community transformation.
          </p>
          <div className="what-hero-actions" aria-label="What we do actions">
            <a className="button button-primary" href="#projects">
              <span>Explore the projects</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="/donate">
              <HeartHandshake size={18} aria-hidden="true" />
              <span>Donate</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="what-hero-panel"
          initial={{ opacity: 0, y: 34, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <a className={`what-hero-pill what-pill-${project.accent}`} href={`#${project.id}`} key={project.id}>
                <span>{project.number}</span>
                <Icon size={20} aria-hidden="true" />
                <strong>{project.label}</strong>
              </a>
            );
          })}
        </motion.div>
      </section>

      <section className="what-intro-section" id="projects" aria-labelledby="what-projects-title">
        <div className="what-section-inner">
          <motion.div
            className="section-heading what-heading"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.38 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Three core projects</p>
            <h2 id="what-projects-title">The work moves through three connected paths.</h2>
          </motion.div>

          <div className="what-project-nav" aria-label="Project sections">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.a
                  className={`what-nav-card what-nav-${project.accent}`}
                  href={`#${project.id}`}
                  key={project.id}
                  initial={{ y: 28 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span>{project.number}</span>
                  <Icon size={27} aria-hidden="true" />
                  <p className="card-eyebrow">{project.label}</p>
                  <h3>{project.shortTitle}</h3>
                  <p>{project.summary}</p>
                  <b>
                    Read more
                    <ArrowRight size={16} aria-hidden="true" />
                  </b>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="what-focus-section" aria-labelledby="what-focus-title">
        <div className="what-section-inner what-focus-layout">
          <motion.div
            className="what-focus-copy"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">What support makes possible</p>
            <h2 id="what-focus-title">Support that meets urgent need and builds long-term strength.</h2>
          </motion.div>
          <div className="what-focus-grid">
            {focusPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.article
                  className="what-focus-card"
                  key={point.title}
                  initial={{ x: 24 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true, amount: 0.36 }}
                  transition={{ duration: 0.52, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Icon size={24} aria-hidden="true" />
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {projects.map((project, index) => (
        <ProjectSection project={project} index={index} key={project.id} />
      ))}

      <section className="what-support-section" aria-labelledby="what-support-title">
        <div className="what-section-inner what-support-panel">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">With your support</p>
            <h2 id="what-support-title">Every gift helps care reach farther.</h2>
            <p>
              Your generosity helps INF Canada provide medical care, equip Nepalese women,
              and create resources and opportunities for families and marginalized groups in Kapilvastu.
            </p>
          </motion.div>
          <div className="what-support-actions">
            <a className="button button-primary" href="/donate">
              <HeartHandshake size={18} aria-hidden="true" />
              <span>Donate now</span>
            </a>
            <a className="button button-secondary" href="/travel-to-nepal">
              <Sparkles size={18} aria-hidden="true" />
              <span>Travel to Nepal</span>
            </a>
          </div>
          <div className="what-support-markers" aria-hidden="true">
            <span>
              <CircleDollarSign size={20} />
              Financial assistance
            </span>
            <span>
              <UsersRound size={20} />
              Practical mentoring
            </span>
            <span>
              <Sprout size={20} />
              Community opportunity
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
