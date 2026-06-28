import { Droplets, Flag, Target, Waves } from "lucide-react";
import { fundraisingProgress } from "../../data/content";

const moneyFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

const mountainPath =
  "M28 246L72 194L108 150L132 114L158 144L184 112L226 172L266 124L322 46L366 104L394 82L430 172L474 126L514 166L548 148L614 246Z";
const mountainSnowPath =
  "M132 114L151 139L158 144L184 112L226 172L184 148L166 158L151 139L132 114ZM322 46L352 92L366 104L394 82L430 172L390 116L368 128L352 92L322 46ZM474 126L496 151L514 166L548 148L614 246L548 180L520 190L496 151L474 126Z";
const mountainRidgePaths = [
  "M72 194L132 114L184 112",
  "M108 150L139 174L184 112",
  "M132 114L166 158L226 172",
  "M184 112L204 148L226 172",
  "M226 172L322 46L366 104",
  "M266 124L302 152L322 46",
  "M322 46L368 128L430 172",
  "M366 104L390 116L394 82",
  "M394 82L430 172L474 126",
  "M430 172L452 193L474 126",
  "M474 126L520 190L614 246",
  "M514 166L548 148L590 224",
  "M108 150L168 205",
  "M266 124L303 205",
  "M548 148L570 206",
];
const liquidBottom = 236;
const liquidTravel = 184;
const waveSurfacePath =
  "M-720 36C-660 10 -600 62 -540 36S-420 10 -360 36S-240 62 -180 36S-60 10 0 36S120 62 180 36S300 10 360 36S480 62 540 36S660 10 720 36S840 62 900 36S1020 10 1080 36S1200 62 1260 36";
const waveFoamPath =
  "M-720 34C-660 8 -600 60 -540 34S-420 8 -360 34S-240 60 -180 34S-60 8 0 34S120 60 180 34S300 8 360 34S480 60 540 34S660 8 720 34S840 60 900 34S1020 8 1080 34S1200 60 1260 34";
const waveFoamSoftPath =
  "M-720 58C-660 38 -600 78 -540 58S-420 38 -360 58S-240 78 -180 58S-60 38 0 58S120 78 180 58S300 38 360 58S480 78 540 58S660 38 720 58S840 78 900 58S1020 38 1080 58S1200 78 1260 58";

const statItems = [
  { label: "Goal", key: "goal" },
  { label: "Raised so far", key: "raised" },
  { label: "Left to raise", key: "remaining" },
] as const;

export default function FundraisingProgress() {
  const { goal, raised, isExample } = fundraisingProgress;
  const remaining = Math.max(goal - raised, 0);
  const progressRatio = goal > 0 ? Math.min(raised / goal, 1) : 0;
  const progressPercent = Math.round(progressRatio * 100);
  const liquidY = liquidBottom - liquidTravel * progressRatio;
  const statValues = { goal, raised, remaining };
  const statusLabel = isExample ? "Example campaign" : "Current campaign";
  const note = isExample ? "Example until totals are confirmed" : "Updated campaign progress";
  const goalDescriptor = isExample ? "an example" : "a";

  return (
    <section
      className="section fundraising-section"
      id="fundraising-progress"
      aria-labelledby="fundraising-title"
    >
      <div className="section-inner fundraising-shell">
        <div className="fundraising-copy">
          <p className="eyebrow">{statusLabel}</p>
          <h2 id="fundraising-title">{fundraisingProgress.title}</h2>
          <p>{fundraisingProgress.body}</p>
          <div className="fundraising-note">
            <Droplets size={18} aria-hidden="true" />
            <span>{note}</span>
          </div>
        </div>

        <div className="fundraising-panel">
          <div className="fundraising-stats" aria-label="Fundraising progress values">
            {statItems.map((item) => (
              <div
                className="fundraising-stat"
                key={item.key}
              >
                <span>{item.label}</span>
                <strong>{moneyFormatter.format(statValues[item.key])}</strong>
              </div>
            ))}
          </div>

          <div className="liquid-meter">
            <div className="liquid-meter-header">
              <div>
                <span>Progress to goal</span>
                <strong>{progressPercent}%</strong>
              </div>
              <div className="liquid-meter-icons" aria-hidden="true">
                <Target size={18} />
                <Waves size={18} />
                <Flag size={18} />
              </div>
            </div>

            <div
              className="liquid-mountain-frame"
              role="img"
              aria-label={`${moneyFormatter.format(raised)} raised toward ${goalDescriptor} ${moneyFormatter.format(goal)} goal, with ${moneyFormatter.format(remaining)} left to raise.`}
            >
              <svg className="liquid-mountain" viewBox="0 0 640 300" aria-hidden="true">
                <defs>
                  <clipPath id="liquid-mountain-clip">
                    <path d={mountainPath} />
                  </clipPath>
                  <linearGradient id="liquid-mountain-fill" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#dff8ff" />
                    <stop offset="48%" stopColor="#65cfee" />
                    <stop offset="100%" stopColor="#1f8fba" />
                  </linearGradient>
                </defs>

                <path className="liquid-mountain-base" d={mountainPath} />

                <g clipPath="url(#liquid-mountain-clip)">
                  <g
                    className="liquid-layer"
                    transform={`translate(0 ${liquidY})`}
                  >
                    <g className="liquid-wave-set">
                      <path
                        className="liquid-deep"
                        fill="url(#liquid-mountain-fill)"
                        d={`${waveSurfacePath}L1260 340H-720Z`}
                      />
                      <path
                        className="liquid-foam"
                        d={waveFoamPath}
                      />
                      <path
                        className="liquid-foam liquid-foam-soft"
                        d={waveFoamSoftPath}
                      />
                    </g>
                  </g>
                </g>

                <path
                  className="liquid-mountain-outline"
                  d={mountainPath}
                />
                <path className="liquid-mountain-snow" d={mountainSnowPath} />
                {mountainRidgePaths.map((path) => (
                  <path className="liquid-mountain-ridge" d={path} key={path} />
                ))}
              </svg>

              <div className="remaining-chip">
                <span>{moneyFormatter.format(remaining)}</span>
                <small>{isExample ? "left in this example" : "left to goal"}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
