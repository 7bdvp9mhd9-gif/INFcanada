import {
  ArrowRight,
  Compass,
  HandHeart,
  HeartHandshake,
  Landmark,
  Sprout,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import storySlideOne from "../assets/images/inf-story-slides/inf-story-slide-1.jpg";
import storySlideTwo from "../assets/images/inf-story-slides/inf-story-slide-2.jpg";
import storySlideThree from "../assets/images/inf-story-slides/inf-story-slide-3.jpg";

export type AboutPageKey = "vision-mission" | "our-mandate" | "core-values" | "inf-history";

type Statement = {
  label: string;
  body: string;
  icon?: LucideIcon;
};

type AboutPage = {
  eyebrow: string;
  title: string;
  intro: string;
  icon: LucideIcon;
  mode: "statements" | "quote" | "values" | "history";
  statements: Statement[];
  verseReference?: string;
  slides?: {
    src: string;
    alt: string;
  }[];
};

const aboutPages: Record<AboutPageKey, AboutPage> = {
  "vision-mission": {
    eyebrow: "Vision & mission",
    title: "Life in all its fullness.",
    intro: "Two short statements shape the direction and daily work of INF Canada.",
    icon: Compass,
    mode: "statements",
    statements: [
      {
        label: "Vision",
        body: "Life in all its fullness for Nepal's poor and disadvantaged people and communities.",
      },
      {
        label: "Mission",
        body: "To be agents of hope and wholeness, serving Nepal's poor through Christ-centred health and development.",
      },
    ],
  },
  "our-mandate": {
    eyebrow: "Our mandate",
    title: "Loved first, called to love.",
    intro: "This verse holds the heart behind the work and the way INF Canada serves.",
    icon: HeartHandshake,
    mode: "quote",
    verseReference: "1 John 4:19",
    statements: [
      {
        label: "Mandate",
        body: "We love because he first loved us",
      },
    ],
  },
  "core-values": {
    eyebrow: "Core values",
    title: "The posture behind the work.",
    intro: "These values keep the work grounded, relational, and close to community.",
    icon: HandHeart,
    mode: "values",
    statements: [
      {
        label: "Compassion",
        body: "Compassion",
        icon: HandHeart,
      },
      {
        label: "Collaboration",
        body: "Collaboration",
        icon: UsersRound,
      },
      {
        label: "Community Building",
        body: "Community Building",
        icon: Sprout,
      },
    ],
  },
  "inf-history": {
    eyebrow: "History of INF",
    title: "INF History",
    intro: "A short visual history of INF's work in Nepal and the people who helped carry it forward.",
    icon: Landmark,
    mode: "history",
    statements: [],
    slides: [
      {
        src: storySlideOne,
        alt: "History of INF slide with an archival Nepal river crossing photo and portraits of Lily O'Hanlon and Hilda Steele.",
      },
      {
        src: storySlideTwo,
        alt: "INF history slide describing the Shining Hospital and the beginning of INF's work in Nepal in 1952.",
      },
      {
        src: storySlideThree,
        alt: "INF history slide honouring Beth Allinger's years of service with INF in India and Nepal.",
      },
    ],
  },
};

const relatedLinks: { label: string; href: string }[] = [
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Our Mandate", href: "/our-mandate" },
  { label: "Core Values", href: "/core-values" },
  { label: "INF History", href: "/inf-history" },
  { label: "Our Team", href: "/team" },
];

function AboutStatements({ page }: { page: AboutPage }) {
  if (page.mode === "quote") {
    const statement = page.statements[0];

    return (
      <blockquote className="about-quote-card">
        <p>"{statement.body}"</p>
        <cite>{page.verseReference}</cite>
      </blockquote>
    );
  }

  if (page.mode === "values") {
    return (
      <div className="about-values-grid" aria-label="Core values">
        {page.statements.map((statement) => {
          const Icon = statement.icon ?? HandHeart;

          return (
            <article className="about-value-card" key={statement.label}>
              <Icon size={28} aria-hidden="true" />
              <h2>{statement.label}</h2>
            </article>
          );
        })}
      </div>
    );
  }

  if (page.mode === "history") {
    return (
      <div className="about-history-gallery" aria-label="INF history slides">
        {page.slides?.map((slide, index) => (
          <figure className="about-history-slide" key={slide.src}>
            <img
              src={slide.src}
              alt={slide.alt}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className="about-statement-grid">
      {page.statements.map((statement) => (
        <article className="about-statement-card" key={statement.label}>
          <p className="card-eyebrow">{statement.label}</p>
          <h2>{statement.body}</h2>
        </article>
      ))}
    </div>
  );
}

export default function AboutInfoPage({ page: pageKey }: { page: AboutPageKey }) {
  const page = aboutPages[pageKey];
  const Icon = page.icon;

  return (
    <div className={`about-info-page about-info-page-${page.mode}`}>
      <section className={`about-info-shell about-info-shell-${page.mode}`} aria-labelledby="about-info-title">
        <div className="about-info-intro">
          <div className="about-info-mark" aria-hidden="true">
            <Icon size={34} />
          </div>
          <p className="eyebrow">About INF Canada / {page.eyebrow}</p>
          <h1 id="about-info-title">{page.title}</h1>
          <p>{page.intro}</p>
        </div>

        <div className={`about-info-panel about-info-panel-${page.mode}`}>
          <AboutStatements page={page} />
        </div>
      </section>

      <nav className="about-info-links" aria-label="About pages">
        {relatedLinks.map((link) => (
          <a
            className={link.href === `/${pageKey}` ? "about-info-link active" : "about-info-link"}
            href={link.href}
            key={link.href}
            aria-current={link.href === `/${pageKey}` ? "page" : undefined}
          >
            <span>{link.label}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </div>
  );
}
