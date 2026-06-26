import {
  ArrowRight,
  Compass,
  HandHeart,
  HeartHandshake,
  Sprout,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type AboutPageKey = "vision-mission" | "our-mandate" | "core-values";

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
  mode: "statements" | "quote" | "values";
  statements: Statement[];
  verseReference?: string;
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
};

const relatedLinks: { label: string; href: string }[] = [
  { label: "Vision & Mission", href: "/vision-mission" },
  { label: "Our Mandate", href: "/our-mandate" },
  { label: "Core Values", href: "/core-values" },
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
    <div className="about-info-page">
      <section className="about-info-shell" aria-labelledby="about-info-title">
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
