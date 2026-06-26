import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, CirclePlay, X } from "lucide-react";
import heroImage from "../../assets/images/hero-nepal.jpg";
import storySlideOne from "../../assets/images/inf-story-slides/inf-story-slide-1.jpg";
import storySlideTwo from "../../assets/images/inf-story-slides/inf-story-slide-2.jpg";
import storySlideThree from "../../assets/images/inf-story-slides/inf-story-slide-3.jpg";
import MountainSignature from "../brand/MountainSignature";
import { heroStats } from "../../data/content";

const infStorySlides = [
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
];

export default function Hero() {
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [activeStorySlide, setActiveStorySlide] = useState(0);
  const storySlideTrackRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const imageY = useTransform(scrollY, [0, 700], [0, 90]);
  const copyY = useTransform(scrollY, [0, 700], [0, -38]);

  function openStory() {
    setActiveStorySlide(0);
    setIsStoryOpen(true);
  }

  function showStorySlide(nextIndex: number) {
    const normalizedIndex = (nextIndex + infStorySlides.length) % infStorySlides.length;
    const nextSlide = storySlideTrackRef.current?.children[normalizedIndex];

    setActiveStorySlide(normalizedIndex);

    if (nextSlide instanceof HTMLElement) {
      nextSlide.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  function syncStorySlide() {
    const track = storySlideTrackRef.current;

    if (!track) {
      return;
    }

    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    setActiveStorySlide(Math.min(Math.max(nextIndex, 0), infStorySlides.length - 1));
  }

  useEffect(() => {
    if (!isStoryOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsStoryOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isStoryOpen]);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <motion.img
        className="hero-image"
        src={heroImage}
        alt="A health worker walking through a Nepali hillside village at sunrise."
        loading="eager"
        decoding="async"
        style={{ y: reduceMotion ? 0 : imageY }}
      />
      <div className="hero-scrim" />
      <MountainSignature className="hero-mountain-signature" />

      <motion.div
        className="hero-copy"
        style={{ y: reduceMotion ? 0 : copyY }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Canadians walking beside Nepal</p>
        <h1 id="hero-title">INF Canada</h1>
        <p className="hero-lede">
          A new Canadian home for supporting locally led health, disability inclusion,
          community strength, and resilience across Nepal.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href="/donate">
            <span>Donate now</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#stories">
            <CirclePlay size={19} aria-hidden="true" />
            <span>See the vision</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-story-panel"
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-stats" aria-label="INF Canada quick facts">
          {heroStats.map((stat) => (
            <div key={stat.value} className="hero-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <button className="button hero-story-button" type="button" onClick={openStory}>
          <CirclePlay size={19} aria-hidden="true" />
          <span>INF History</span>
        </button>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {isStoryOpen ? (
            <motion.div
              className="inf-story-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="inf-history-modal-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              <motion.button
                className="inf-story-modal-backdrop"
                type="button"
                aria-label="Close INF history"
                onClick={() => setIsStoryOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.article
                className="inf-story-card"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 34, scale: 0.96 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.98 }}
                transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inf-story-card-header">
                  <div>
                    <p className="eyebrow">History of INF</p>
                    <h2 id="inf-history-modal-title">INF History</h2>
                  </div>
                  <button
                    className="inf-story-close"
                    type="button"
                    aria-label="Close INF history"
                    onClick={() => setIsStoryOpen(false)}
                  >
                    <X size={22} aria-hidden="true" />
                  </button>
                </div>

                <div className="inf-story-slide-frame">
                  <button
                    className="inf-story-nav inf-story-nav-prev"
                    type="button"
                    aria-label="Previous INF history slide"
                    onClick={() => showStorySlide(activeStorySlide - 1)}
                  >
                    <ChevronLeft size={30} aria-hidden="true" />
                  </button>
                  <div
                    className="inf-story-slide-track"
                    ref={storySlideTrackRef}
                    role="list"
                    aria-label="INF history slides"
                    onScroll={syncStorySlide}
                  >
                    {infStorySlides.map((slide, index) => (
                      <figure className="inf-story-slide" key={slide.src} role="listitem">
                        <img
                          src={slide.src}
                          alt={slide.alt}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                        />
                      </figure>
                    ))}
                  </div>
                  <button
                    className="inf-story-nav inf-story-nav-next"
                    type="button"
                    aria-label="Next INF history slide"
                    onClick={() => showStorySlide(activeStorySlide + 1)}
                  >
                    <ChevronRight size={30} aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
