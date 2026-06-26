import { motion } from "framer-motion";
import { ArrowUpRight, HandCoins } from "lucide-react";
import { givingSteps } from "../../data/content";

export default function GivingPath() {
  return (
    <section className="section giving-section" id="giving" aria-labelledby="giving-title">
      <div className="section-inner giving-layout">
        <motion.div
          className="giving-copy"
          initial={{ y: 28 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65 }}
        >
          <p className="eyebrow">Built for trust</p>
          <h2 id="giving-title">A giving journey people can understand.</h2>
          <p>
            INF Canada can start with a simple promise: make generosity feel personal,
            transparent, and connected to communities doing the work on the ground.
          </p>
          <a className="button button-dark" href="/donate">
            <HandCoins size={18} aria-hidden="true" />
            <span>See ways to donate</span>
          </a>
        </motion.div>

        <div className="giving-steps">
          {givingSteps.map((step, index) => (
            <motion.article
              className="step-card"
              key={step.title}
              initial={{ y: 28 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <span>{step.label}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <ArrowUpRight size={19} aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
