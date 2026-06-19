import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  Hospital,
  Mail,
  MapPin,
  Plane,
  Sparkles,
  UsersRound,
  X,
  XCircle,
} from "lucide-react";
import travelHeroImage from "../assets/images/travel-nepal-hero.jpg";
import communityImage from "../assets/images/travel-community-projects.jpg";
import hospitalImage from "../assets/images/travel-hospital-visit.jpg";
import {
  travelCostDetails,
  travelCountdownTarget,
  travelEligibility,
  travelExcludes,
  travelIncludes,
  travelItinerary,
  travelOverview,
  travelTripStats,
} from "../data/travel";

type CountdownPart = {
  label: string;
  value: number;
};

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0 },
};

const communityProjectsPreview =
  "See how sponsorship and practical gifts support families in Kapilvastu through livelihood, education, and leadership projects.";

const hospitalPreview =
  "Visit Green Pastures Hospital in Pokhara and learn how rehabilitation care supports people affected by leprosy, injury, and disability.";

function getCountdownParts(target: Date, now: number): CountdownPart[] {
  const distance = Math.max(target.getTime() - now, 0);
  const seconds = Math.floor(distance / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: remainingSeconds },
  ];
}

export default function TravelToNepal() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 740], [0, 86]);
  const copyY = useTransform(scrollY, [0, 740], [0, -34]);
  const target = useMemo(() => new Date(travelCountdownTarget), []);
  const [now, setNow] = useState(() => Date.now());
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const countdownParts = getCountdownParts(target, now);

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isItineraryOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsItineraryOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isItineraryOpen]);

  return (
    <div className="travel-page">
      <section className="travel-hero" id="top" aria-labelledby="travel-title">
        <motion.img
          className="travel-hero-image"
          src={travelHeroImage}
          alt="Visitors and Nepali hosts walking together on a hillside path in Nepal."
          loading="eager"
          decoding="async"
          style={{ y: reduceMotion ? 0 : imageY }}
        />
        <div className="travel-hero-scrim" />

        <motion.div
          className="travel-hero-copy"
          style={{ y: reduceMotion ? 0 : copyY }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">READY TO GO</p>
          <h1 id="travel-title">Travel to Nepal</h1>
          <p className="travel-hero-kicker">lets make the change</p>
          <p className="travel-hero-lede">{travelOverview.body}</p>
          <div className="hero-actions" aria-label="Travel page actions">
            <a className="button button-primary" href="#vision-trip">
              <span>2026 November Vision Trip</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#projects">
              <span>Projects</span>
              <Sparkles size={18} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="travel-countdown"
          aria-live="polite"
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.24, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="travel-countdown-header">
            <span>Trip begins in</span>
            <strong>November 7, 2026</strong>
          </div>
          <div className="travel-countdown-grid">
            {countdownParts.map((part, index) => (
              <motion.div
                className="travel-countdown-part"
                key={part.label}
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.38 + index * 0.08, duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduceMotion ? undefined : { y: -3, scale: 1.015 }}
              >
                <strong>
                  {part.value.toString().padStart(part.label === "Days" ? 1 : 2, "0")}
                </strong>
                <span>{part.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="travel-section travel-overview-section" id="vision-trip">
        <div className="travel-section-inner">
          <motion.div
            className="section-heading travel-heading"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Everything you need to know</p>
            <h2>{travelOverview.title}</h2>
            <p>For more information, click below or explore the full trip details on this page.</p>
          </motion.div>

          <div className="travel-stat-grid">
            {travelTripStats.map((stat, index) => (
              <motion.div
                className="travel-stat-card"
                key={stat.label}
                initial={{ y: 22, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="travel-info-grid">
            <motion.article
              className="travel-info-panel travel-cost-panel"
              initial={{ x: -28, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="travel-panel-icon" aria-hidden="true">
                <Plane size={26} />
              </div>
              <p className="card-eyebrow">How much does it cost?</p>
              <h3>Trip cost, airfare, and what to plan for.</h3>
              <ul className="travel-check-list">
                {travelCostDetails.map((detail) => (
                  <li key={detail}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              className="travel-info-panel travel-join-panel"
              initial={{ x: 28, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.32 }}
              transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="travel-panel-icon" aria-hidden="true">
                <UsersRound size={26} />
              </div>
              <p className="card-eyebrow">Who can join?</p>
              <h3>Open to travelers ready for day trips and field visits.</h3>
              <p>{travelEligibility}</p>
              <div className="travel-mini-actions">
                <a href="#contact" className="button button-dark">
                  <Mail size={18} aria-hidden="true" />
                  <span>Drop us a line</span>
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="travel-section travel-itinerary-section" aria-labelledby="itinerary-title">
        <div className="travel-section-inner">
          <motion.div
            className="section-heading travel-heading compact-heading"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">NEPAL IMPACT TRIP</p>
            <h2 id="itinerary-title">SAMPLE TRAVEL ITINERARY</h2>
            <p>
              Cultural touring in Kathmandu, a vision trip with INF Canada for sponsored
              children, and travel through Bandipur, Pokhara, Lumbini, Kapilvastu, and Ghandruk.
            </p>
          </motion.div>

          <motion.div
            className="travel-itinerary-preview"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="travel-itinerary-preview-copy">
              <p className="card-eyebrow">17 days / November 7-24</p>
              <h3>Open the sample itinerary as a day-by-day calendar.</h3>
              <button className="button button-primary" type="button" onClick={() => setIsItineraryOpen(true)}>
                <CalendarDays size={18} aria-hidden="true" />
                <span>Take a look at the sample</span>
              </button>
            </div>
            <div className="travel-itinerary-calendar-tease" aria-hidden="true">
              <span>November</span>
              <div>
                {travelItinerary.slice(0, 12).map((item) => (
                  <i key={item.day}>{item.day.replace("Day ", "")}</i>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="travel-inclusion-grid">
            <motion.article
              className="travel-list-panel"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="travel-list-heading">
                <CheckCircle2 size={22} aria-hidden="true" />
                <h3>TRIP INCLUDES</h3>
              </div>
              <ul className="travel-check-list">
                {travelIncludes.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              className="travel-list-panel"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.56, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="travel-list-heading">
                <XCircle size={22} aria-hidden="true" />
                <h3>THE TRIP COST EXCLUDES THE FOLLOWING</h3>
              </div>
              <ul className="travel-check-list travel-x-list">
                {travelExcludes.map((item) => (
                  <li key={item}>
                    <XCircle size={18} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isItineraryOpen ? (
          <motion.div
            className="travel-itinerary-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="itinerary-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.button
              className="travel-itinerary-modal-backdrop"
              type="button"
              aria-label="Close sample itinerary"
              onClick={() => setIsItineraryOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="travel-itinerary-modal-panel"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 38, scale: 0.96 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="travel-itinerary-modal-header">
                <div>
                  <p className="eyebrow">NEPAL IMPACT TRIP</p>
                  <h2 id="itinerary-modal-title">SAMPLE TRAVEL ITINERARY</h2>
                  <p>
                    Cultural touring in Kathmandu, a vision trip with INF Canada for sponsored
                    children, and travel through Bandipur, Pokhara, Lumbini, Kapilvastu, and Ghandruk.
                  </p>
                </div>
                <button
                  className="travel-itinerary-close"
                  type="button"
                  aria-label="Close sample itinerary"
                  onClick={() => setIsItineraryOpen(false)}
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>

              <div className="travel-calendar-grid" role="list">
                {travelItinerary.map((item, index) => (
                  <motion.article
                    className="travel-calendar-day"
                    key={`${item.day}-${item.date}`}
                    role="listitem"
                    initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.34, delay: Math.min(index * 0.025, 0.22), ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="travel-calendar-day-top">
                      <span>{item.day}</span>
                      <strong>{item.date}</strong>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <small>
                      <MapPin size={14} aria-hidden="true" />
                      {item.stay}
                    </small>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section className="travel-section travel-projects-section" id="projects" aria-labelledby="projects-title">
        <div className="travel-section-inner">
          <motion.div
            className="section-heading travel-heading travel-projects-heading"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Choose what to explore</p>
            <h2 id="projects-title">Two ways to see the work up close</h2>
            <p>
              The vision trip includes both community transformation work in Kapilvastu
              and INF Green Pastures Hospital in Pokhara. Explore each focus on its own page.
            </p>
          </motion.div>

          <div className="travel-pathway-grid">
            <motion.article
              className="travel-pathway-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="travel-pathway-image">
                <img
                  src={communityImage}
                  alt="Community development gathering with families, goats, and a buffalo in Nepal."
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="travel-pathway-body">
                <span className="travel-pathway-icon" aria-hidden="true">
                  <HeartHandshake size={24} />
                </span>
                <p className="card-eyebrow">Kapilvastu</p>
                <h3>Community Transformation Projects</h3>
                <p className="travel-pathway-description">{communityProjectsPreview}</p>
                <a className="button button-dark" href="/community-transformation-projects">
                  <span>Explore Transformation</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </motion.article>

            <motion.article
              className="travel-pathway-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="travel-pathway-image">
                <img
                  src={hospitalImage}
                  alt="A rehabilitation therapist supporting a patient during mobility practice in Nepal."
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="travel-pathway-body">
                <span className="travel-pathway-icon" aria-hidden="true">
                  <Hospital size={24} />
                </span>
                <p className="card-eyebrow">Pokhara</p>
                <h3>INF Green Pastures Leprosy Hospital</h3>
                <p className="travel-pathway-description">{hospitalPreview}</p>
                <a className="button button-dark" href="/inf-green-pastures-hospital">
                  <span>Explore Hospital</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="travel-section travel-contact-section" id="contact" aria-labelledby="contact-title">
        <div className="travel-section-inner">
          <motion.div
            className="travel-contact-panel"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p className="eyebrow">If interested</p>
              <h2 id="contact-title">Drop us a line!</h2>
              <p>Together, we can achieve more.</p>
            </div>
            <form className="travel-contact-form" action="mailto:hello@infcanada.ca" method="post" encType="text/plain">
              <label>
                <span>Name*</span>
                <input name="name" type="text" required />
              </label>
              <label>
                <span>Email*</span>
                <input name="email" type="email" required />
              </label>
              <label>
                <span>Phone*</span>
                <input name="phone" type="tel" required />
              </label>
              <button className="button button-primary" type="submit">
                <span>Send</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
