import { motion } from "framer-motion";
import {
  ArrowRight,
  CreditCard,
  ExternalLink,
  Landmark,
  Mail,
  ReceiptText,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import heroImage from "../assets/images/photo-health-support.jpg";

const onlineDonationUrl =
  "https://www.canadahelps.org/en/charities/international-nepal-fellowship-canada/";

const donationMethods = [
  {
    title: "Donate online",
    kicker: "Secure online giving",
    icon: CreditCard,
    body: "Give by card through CanadaHelps, INF Canada's online giving provider.",
    details: [
      { label: "Provider", value: "CanadaHelps" },
      { label: "Best for", value: "Fast one-time or recurring gifts" },
    ],
    action: "Donate through CanadaHelps",
    href: onlineDonationUrl,
  },
  {
    title: "Send a cheque",
    kicker: "Mail your gift",
    icon: Landmark,
    body: "Please make cheques payable to INF CANADA and mail them to our Calgary address.",
    details: [
      { label: "Payable to", value: "INF CANADA" },
      { label: "Receipts", value: "Issued for donations of at least $20" },
    ],
    address: ["INF Canada PO Box 91112", "Royal Oak RPO", "Calgary AB T3G 5W6"],
    mutedAction: "Mail cheque to the address above",
  },
  {
    title: "E-transfer",
    kicker: "Coming soon",
    icon: Mail,
    body: "We are preparing an e-transfer option so supporters can give directly from their bank.",
    details: [
      { label: "Email", value: "Coming soon" },
      { label: "Status", value: "Not available yet" },
    ],
    mutedAction: "E-transfer email coming soon",
  },
];

const quickFacts = [
  {
    icon: ShieldCheck,
    title: "Secure online option",
    body: "CanadaHelps handles online gifts through a trusted Canadian donation platform.",
  },
  {
    icon: ReceiptText,
    title: "Tax receipts",
    body: "Receipts are issued for donations of at least $20.",
  },
  {
    icon: HeartHandshake,
    title: "Local impact",
    body: "Your generosity supports health, disability inclusion, and resilient communities in Nepal.",
  },
];

export default function DonatePage() {
  return (
    <div className="donate-page">
      <section className="donate-hero" aria-labelledby="donate-title">
        <img
          className="donate-hero-image"
          src={heroImage}
          alt="INF Nepal health workers and community members gathered outdoors."
          loading="eager"
          decoding="async"
        />
        <div className="donate-hero-scrim" />

        <div className="donate-hero-inner">
          <motion.div
            className="donate-hero-copy"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Give with confidence</p>
            <h1 id="donate-title">Donate to INF Canada</h1>
            <div className="donate-actions" aria-label="Donation actions">
              <a className="button button-secondary" href="#donation-options">
                <span>View all options</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="donate-methods-section"
        id="donation-options"
        aria-labelledby="donation-options-title"
      >
        <div className="donate-section-inner">
          <div className="donate-methods-heading">
            <div>
              <p className="eyebrow">Ways to donate</p>
              <h2 id="donation-options-title">Choose your giving method.</h2>
            </div>
          </div>

          <div className="donate-method-grid">
            {donationMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <motion.article
                  className="donate-method-card donate-method-card-featured"
                  key={method.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.32 }}
                  transition={{ duration: 0.56, delay: index * 0.08 }}
                >
                  <div className="donate-card-icon">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <p className="card-eyebrow">{method.kicker}</p>
                  <h3>{method.title}</h3>
                  <p>{method.body}</p>

                  <dl className="donate-detail-list">
                    {method.details.map((detail) => (
                      <div key={detail.label}>
                        <dt>{detail.label}</dt>
                        <dd>{detail.value}</dd>
                      </div>
                    ))}
                  </dl>

                  {method.address ? (
                    <address className="donate-address">
                      {method.address.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </address>
                  ) : null}

                  {"href" in method ? (
                    <a
                      className="donate-card-action"
                      href={method.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{method.action}</span>
                      <ExternalLink size={17} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="donate-card-action donate-card-action-muted" aria-disabled="true">
                      <span>{method.mutedAction ?? "Details coming soon"}</span>
                    </span>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="donate-trust-section" aria-labelledby="donate-trust-title">
        <div className="donate-section-inner donate-trust-layout">
          <div className="donate-trust-copy">
            <p className="eyebrow">Donation notes</p>
            <h2 id="donate-trust-title">A simple, transparent path for every gift.</h2>
            <a className="button button-dark" href="mailto:hello@infcanada.ca">
              <span>Ask about giving</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="donate-fact-grid">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <article className="donate-fact" key={fact.title}>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{fact.title}</h3>
                  <p>{fact.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
