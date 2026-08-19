import { ArrowUpRight, Check } from "lucide-react";
import styles from "./ProposalReference.module.css";
import tune from "./ProposalReferenceTune.module.css";
import sarvaank from "./SarvaankProposal.module.css";

const PROOF = [
  { value: "400+", label: "qualified signups = validation floor" },
  { value: "30+", label: "paid subscriptions = pilot validated" },
  { value: "40–60", label: "paid subscriptions = target zone" },
  { value: "₹650–900", label: "target blended paid CAC" },
];

const MARQUEE = [
  "Meta Ads",
  "Creative Testing",
  "Free Diagnostic",
  "Activation",
  "Paid Conversion",
  "Monthly vs Yearly",
  "Retention",
  "CAC",
];

const SERVICES = [
  {
    title: "Acquire",
    copy: "Find the audiences, hooks and creative formats that bring serious JEE and NEET aspirants into Sarvaank efficiently.",
    cta: "Bring in better-fit students",
    visual: "acquire",
  },
  {
    title: "Activate",
    copy: "Move signups into a meaningful first product experience — a diagnostic, mock test or live Pro Lab — instead of counting empty registrations.",
    cta: "Turn signups into users",
    visual: "activate",
  },
  {
    title: "Creative Testing",
    copy: "Use a high-volume testing system across video and static creative to discover the messages students actually respond to.",
    cta: "Find winning messages faster",
    visual: "creative",
  },
  {
    title: "Convert",
    copy: "Understand which student segments upgrade from free access into the ₹499 monthly or ₹2,999 yearly plan.",
    cta: "Improve paid conversion",
    visual: "convert",
  },
  {
    title: "Retain",
    copy: "Track whether acquired students return, keep using the product and build enough value to justify a scalable CAC.",
    cta: "Improve customer value",
    visual: "retain",
  },
  {
    title: "Scale",
    eyebrow: "The goal of the pilot",
    copy: "Identify the audience × creative × offer × product-entry combination that can be scaled with confidence after Month 1.",
    cta: "Turn learning into scale",
    visual: "scale",
    featured: true,
  },
] as const;

const SUCCESS = [
  {
    category: "VALIDATION FLOOR · MONTH 1",
    title: "Enough signal to prove that paid acquisition deserves a second month.",
    visual: "floor",
    metrics: [["400+", "qualified signups"], ["30+", "paid users"], ["≤₹1,200", "paid CAC"]],
  },
  {
    category: "TARGET ZONE · RECOMMENDED BENCHMARK",
    title: "The range we would actively aim for during the first-month pilot.",
    visual: "target",
    metrics: [["500–700", "qualified signups"], ["40–60", "paid users"], ["₹650–900", "paid CAC"]],
    featured: true,
  },
  {
    category: "STRONG SCALE SIGNAL · MONTH 2 READY",
    title: "A result strong enough to justify increasing spend behind the winning combinations.",
    visual: "scale",
    metrics: [["700+", "qualified signups"], ["60+", "paid users"], ["<₹650", "paid CAC"]],
  },
] as const;

const ROADMAP = [
  ["1", "DAY 01", "Tracking + pilot setup", "Confirm events, funnel measurement, audience hypotheses, creative plan and the exact definition of a qualified signup and paid conversion."],
  ["7", "BY DAY 07", "Launch the first test matrix", "Start the initial audience × creative × message combinations and establish early signup and activation benchmarks."],
  ["14", "BY DAY 14", "Cut weak signals, push winners", "Reduce spend on weak combinations, refresh creative and evaluate which signups are becoming activated students and paid users."],
  ["30", "BY DAY 30", "Scale decision", "Finish with a clear view of signup CAC, activation, paid CAC, monthly vs yearly mix and the combinations worth scaling in Month 2."],
] as const;

const FIXED = [
  "Meta Ads strategy + campaign management",
  "10–15 video concepts / edits for testing",
  "15–20 static creatives for testing",
  "Audience + creative testing structure",
  "Signup, activation and paid-CAC reporting",
  "Weekly optimisation + Month 1 learning report",
  "Month 2 scale / no-scale recommendation",
];

const HYBRID = [
  "Everything included in the Fixed Pilot",
  "Lower fixed management fee",
  "10% performance-linked share on attributable revenue",
  "Same creative testing volume",
  "Same optimisation and reporting cadence",
  "Same Month 1 scale-readiness analysis",
];

function Arrow() {
  return <span aria-hidden>↗</span>;
}

function ServiceVisual({ type }: { type: (typeof SERVICES)[number]["visual"] }) {
  if (type === "acquire") {
    return (
      <div className={`${styles.serviceVisual} ${styles.performanceVisual}`} aria-hidden>
        <div className={styles.visualRing} />
        <div className={styles.performanceCard}><span>META / PILOT</span><strong>30D</strong><i>↗</i></div>
        <div className={styles.performanceBars}><i /><i /><i /><i /><i /></div>
        <div className={styles.visualCursor}>↗</div>
        <div className={styles.visualWord}>SIGNUPS</div>
      </div>
    );
  }

  if (type === "activate") {
    return (
      <div className={`${styles.serviceVisual} ${styles.commerceVisual}`} aria-hidden>
        <div className={styles.browserMini}>
          <div className={styles.browserDots}><i /><i /><i /></div>
          <div className={styles.browserHero}><b>FREE<br />DIAGNOSTIC</b><span>START TEST</span></div>
          <div className={styles.browserRows}><i /><i /><i /></div>
        </div>
        <div className={styles.phoneMini}><span>ACTIVATION</span><strong>1st test</strong><i>→</i></div>
      </div>
    );
  }

  if (type === "creative") {
    return (
      <div className={`${styles.serviceVisual} ${styles.creativeVisual}`} aria-hidden>
        <div className={styles.creativePoster}><span>THE</span><strong>HOOK.</strong><small>student • pain • proof</small></div>
        <div className={styles.creativeSticker}>15–20<br />STATICS</div>
        <div className={styles.creativeTape}>TEST → LEARN → ITERATE</div>
      </div>
    );
  }

  if (type === "convert") {
    return (
      <div className={`${styles.serviceVisual} ${styles.searchVisual}`} aria-hidden>
        <div className={styles.searchBox}>free → paid <b>⌕</b></div>
        <div className={styles.searchResult}><span>MONTHLY</span><b>₹499 / 30 days</b><i /></div>
        <div className={styles.searchResult}><span>YEARLY</span><b>₹2,999 / 365 days</b><i /></div>
        <div className={styles.searchBadge}>PLAN MIX MATTERS</div>
      </div>
    );
  }

  if (type === "retain") {
    return (
      <div className={`${styles.serviceVisual} ${styles.retentionVisual}`} aria-hidden>
        <div className={styles.flowLine} />
        <div className={`${styles.flowNode} ${styles.flowOne}`}>FREE<br />USER</div>
        <div className={`${styles.flowNode} ${styles.flowTwo}`}>ACTIVE</div>
        <div className={`${styles.flowNode} ${styles.flowThree}`}>PAID</div>
        <div className={styles.messageCard}>RETURN<br /><strong>keep using Sarvaank</strong></div>
      </div>
    );
  }

  return (
    <div className={`${styles.serviceVisual} ${styles.foundationVisual}`} aria-hidden>
      <div className={styles.foundationOrbit}><i /><i /><i /><i /></div>
      <div className={styles.foundationCore}>PAID<br /><span>GROWTH</span></div>
      <div className={`${styles.foundationTag} ${styles.foundationTagOne}`}>AUDIENCE</div>
      <div className={`${styles.foundationTag} ${styles.foundationTagTwo}`}>CREATIVE</div>
      <div className={`${styles.foundationTag} ${styles.foundationTagThree}`}>OFFER</div>
      <div className={`${styles.foundationTag} ${styles.foundationTagFour}`}>PRODUCT</div>
    </div>
  );
}

function SuccessVisual({ type }: { type: (typeof SUCCESS)[number]["visual"] }) {
  if (type === "floor") {
    return (
      <div className={`${styles.workVisual} ${styles.workMeta}`} aria-hidden>
        <div className={styles.workPhone}><span>VALIDATION</span><strong>30+</strong><small>PAID USERS</small></div>
        <div className={styles.workBars}><i /><i /><i /><i /><i /><i /></div>
        <div className={styles.workChip}>PROVE THE FUNNEL</div>
      </div>
    );
  }

  if (type === "target") {
    return (
      <div className={`${styles.workVisual} ${styles.workGoogle}`} aria-hidden>
        <div className={styles.searchDial}>40–60<span>PAID</span></div>
        <div className={styles.keywordStack}><span>500–700 signups</span><span>₹650–900 paid CAC</span><span>activation measured</span><span>plan mix tracked</span></div>
      </div>
    );
  }

  return (
    <div className={`${styles.workVisual} ${styles.workRetention}`} aria-hidden>
      <div className={styles.retentionDial}>60+<span>PAID</span></div>
      <div className={styles.retentionTiles}><i>WINNER</i><i>CAC</i><i>PLAN MIX</i><i>SCALE</i></div>
      <div className={styles.retentionCaption}>MONTH 2 READY</div>
    </div>
  );
}

export default function SarvaankProposal() {
  return (
    <div className={`${styles.homepage} ${sarvaank.theme}`}>
      <header className={styles.navWrap}>
        <nav className={styles.nav} aria-label="Sarvaank proposal navigation">
          <a className={styles.brand} href="#top"><b>SARVAANK</b><small>30-DAY PILOT PROPOSAL</small></a>
          <div className={styles.navLinks}><a href="#system">System</a><a href="#success">Success</a><a href="#roadmap">Timeline</a><a href="#packages">Commercials</a></div>
          <a className={styles.navCta} href="#packages">View pilot <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      <main>
        <section id="top" className={`${styles.hero} ${tune.hero}`}>
          <div className={styles.heroBackdrop} aria-hidden />
          <div className={`${styles.heroShell} ${tune.heroShell}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Growth Escalators × Sarvaank · Month 1 Pilot</p>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroLine}>PAID</span>
                <span className={styles.heroLine}>GROWTH.</span>
              </h1>
              <p className={styles.heroAccent}>From student traffic to paid subscriptions.</p>
              <p className={styles.heroLead}>A 30-day Meta acquisition pilot designed to discover which audiences, creatives and product entry points can generate qualified Sarvaank users at economics worth scaling.</p>
              <div className={styles.heroActions}>
                <a href="#system" className={styles.primaryCta}>Explore the pilot <Arrow /></a>
                <a href="#success" className={styles.textLink}>See the success benchmarks <Arrow /></a>
              </div>
            </div>

            <div className={`${styles.heroStage} ${tune.heroStage}`} aria-label="Sarvaank paid growth funnel visual">
              <div className={styles.heroStageRail}><span>01 / ACQUIRE</span><span>02 / ACTIVATE</span><span>03 / CONVERT</span></div>
              <div className={`${styles.heroMedia} ${tune.heroMedia}`}>
                <div className={styles.heroCanvasGrid} />
                <div className={styles.heroCanvasTitle}>ONE MONTH.<br /><strong>ONE CLEAR SIGNAL.</strong></div>
                <div className={styles.heroPath} />
                <span className={`${styles.heroNode} ${styles.heroNodeOne}`}>META</span>
                <span className={`${styles.heroNode} ${styles.heroNodeTwo}`}>SIGNUP</span>
                <span className={`${styles.heroNode} ${styles.heroNodeThree}`}>ACTIVATE</span>
                <span className={`${styles.heroNode} ${styles.heroNodeFour}`}>PAID</span>
              </div>
              <div className={`${styles.heroInset} ${tune.heroInset}`}>
                <span>MONTH 1 MEDIA</span>
                <strong>₹40K</strong>
                <small>₹35–40k planned pilot spend</small>
              </div>
              <div className={styles.heroMetric}><span>TARGET ZONE</span><strong>40–60</strong><small>paid subscriptions</small></div>
              <div className={styles.heroTag}>JEE × NEET × GROWTH</div>
            </div>
          </div>

          <div className={`${styles.proofRail} ${tune.proofRail}`}>
            {PROOF.map((item) => <div className={styles.proofItem} key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </section>

        <section className={`${styles.brands} ${tune.brands}`} aria-label="Sarvaank pilot funnel">
          <div className={styles.sectionShell}><div className={styles.brandHeading}><p className={styles.eyebrow}>The commercial funnel we will measure</p><span>Acquire → Activate → Convert → Retain → Scale</span></div></div>
          <div className={styles.brandMarquee}><div className={styles.brandTrack}>{[...MARQUEE, ...MARQUEE].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>
        </section>

        <section id="system" className={`${styles.services} ${tune.services}`}>
          <div className={styles.sectionShell}>
            <div className={styles.servicesIntro}>
              <p className={styles.eyebrow}>How the Month 1 pilot works</p>
              <h2>Do not optimise<br />for signups alone.</h2>
              <p>The pilot only becomes useful when we can see the whole journey: who signs up, who actually uses Sarvaank, who pays, which plan they choose and what that customer cost to acquire.</p>
              <a className={styles.pillCta} href="#success">See what success means</a>
            </div>

            <div className={`${styles.serviceGrid} ${tune.serviceGrid}`}>
              {SERVICES.map((service) => {
                const featured = "featured" in service && service.featured;
                const eyebrow = "eyebrow" in service ? service.eyebrow : undefined;
                return (
                  <article className={`${styles.serviceCard} ${tune.serviceCard} ${featured ? styles.serviceFeatured : ""}`} key={service.title}>
                    <div className={styles.serviceContent}>
                      {eyebrow ? <p className={styles.serviceEyebrow}>{eyebrow}</p> : null}
                      <h3>{service.title}</h3>
                      <p>{service.copy}</p>
                      <span className={styles.cardCta}>{service.cta}</span>
                    </div>
                    <ServiceVisual type={service.visual} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="success" className={`${styles.work} ${tune.work}`}>
          <div className={styles.sectionShell}>
            <div className={styles.workIntro}>
              <div><p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Month 1 success benchmarks</p><h2>Clear targets.<br />No fake guarantees.</h2></div>
              <div className={styles.workIntroSide}><p>These are pilot validation bands, not guaranteed outcomes. The goal is to know whether the acquisition economics are strong enough to scale with confidence in Month 2.</p><a href="#roadmap" className={styles.lightPill}>See the 30-day timeline</a></div>
            </div>

            <div className={styles.caseList}>
              {SUCCESS.map((item) => {
                const featured = "featured" in item && item.featured;
                return (
                  <article className={`${styles.caseCard} ${tune.caseCard} ${featured ? styles.caseCardFeature : ""}`} key={item.title}>
                    <div className={`${styles.caseMedia} ${tune.caseMedia}`}><SuccessVisual type={item.visual} /></div>
                    <div className={styles.caseBody}>
                      <div className={styles.caseCategory}>{item.category}</div>
                      <h3>{item.title}</h3>
                      <span className={styles.caseCta}>Pilot benchmark <Arrow /></span>
                      <div className={styles.caseMetrics}>{item.metrics.map(([value,label]) => <div className={styles.caseMetric} key={`${item.title}-${value}`}><span>↗</span><strong>{value}</strong><small>{label}</small></div>)}</div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={`${styles.technology} ${tune.technology}`}>
          <div className={styles.sectionShell}>
            <div className={styles.techTop}>
              <div className={styles.techCopy}><p className={styles.eyebrow}>Paid growth intelligence</p><h2>Know where the funnel is actually breaking.</h2><p>If signups are cheap but paid conversion is weak, the problem is different from expensive acquisition. We will separate acquisition quality, activation and paid conversion instead of blending everything into one CPL number.</p><a href="#roadmap" className={styles.darkPill}>See how we diagnose it</a></div>
              <div className={styles.techBenefits}><span>Signup CAC</span><span>Activation rate</span><span>Paid subscription CAC</span><span>Monthly vs yearly plan mix</span></div>
            </div>

            <div className={`${styles.botStage} ${tune.botStage}`}>
              <div className={styles.botGlow} />
              <div className={styles.botWindow}>
                <div className={styles.botHeader}><div><b>Sarvaank Pilot Dashboard</b><span>One commercial funnel</span></div><span className={styles.online}><i /> Pilot view</span></div>
                <div className={styles.dashboardGrid}>
                  <div className={styles.dashboardPanel}><span>ACQUISITION</span><strong>Signup CAC</strong><div className={styles.dashboardBars}><i /><i /><i /><i /><i /></div></div>
                  <div className={styles.dashboardPanel}><span>ACTIVATION</span><strong>First real use</strong><small>Diagnostic · Test · Pro Lab</small></div>
                  <div className={styles.dashboardPanel}><span>PAID SIGNAL</span><strong>Paid CAC</strong><small>Monthly vs yearly</small></div>
                  <div className={styles.dashboardPanel}><span>SCALE SIGNAL</span><strong>What wins?</strong><small>Audience × creative × entry point</small></div>
                </div>
                <div className={styles.dashboardFlow}><span>SPEND</span><b>→</b><span>SIGNUP</span><b>→</b><span>ACTIVATE</span><b>→</b><span>PAID</span><b>→</b><span>RETAIN</span></div>
              </div>
              <div className={styles.botSignalCard}><span>DECISION VIEW</span><strong>Audience × creative × offer × product entry</strong></div>
              <div className={styles.botResultCard}><span>TARGET</span><strong>40–60</strong><small>paid users / Month 1</small></div>
            </div>
          </div>
        </section>

        <section className={`${styles.people} ${tune.people}`}>
          <div className={styles.sectionShell}>
            <div className={styles.peopleGrid}>
              <div className={styles.peopleCopy}><p className={styles.eyebrow}>How we will operate</p><h2>Fast testing.<br />Clear learning.<br />No vanity metrics.</h2><p>We will review acquisition, creative, activation and paid conversion together so every week ends with a clear decision: cut, iterate or scale.</p><a className={styles.pillOutline} href="#roadmap">See the Month 1 plan</a></div>
              <div className={`${styles.peopleMedia} ${tune.peopleMedia}`} aria-label="Sarvaank pilot operating system visual">
                <div className={styles.peopleMain}>
                  <div className={styles.operatorHeader}><span>ONE PILOT TEAM</span><b>SARVAANK × GE</b></div>
                  <div className={styles.operatorGrid}><i>AUDIENCE</i><i>CREATIVE</i><i>ACTIVATION</i><i>CONVERSION</i><i>CAC</i><i>LEARNING</i></div>
                  <div className={styles.operatorLine}><span>ONE WEEKLY DECISION</span><strong>→ cut, iterate or scale</strong></div>
                </div>
                <div className={styles.peopleInset}><span>WEEKLY PILOT REVIEW</span><strong>Launch → Learn → Improve</strong><small>One test matrix. One scorecard. One clear view of what deserves the next rupee.</small></div>
                <div className={styles.peopleTag}>LEARNING × SPEED</div>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className={`${styles.insights} ${tune.insights}`}>
          <div className={styles.sectionShell}>
            <div className={styles.insightsHeading}><div><p className={styles.eyebrow}>30-day execution plan</p><h2>From setup<br />to scale decision.</h2></div><span>DAY 1 → 7 → 14 → 30</span></div>
            <div className={`${styles.insightsLayout} ${tune.insightsLayout}`}>
              <article className={`${styles.featuredInsight} ${tune.featuredInsight}`}><span>THE FIRST 30 DAYS</span><h3>LAUNCH FAST.<br />LEARN FAST.<br />SCALE ONLY THE SIGNAL.</h3><p>The purpose of Month 1 is not to spend the entire budget and report clicks. It is to leave with a clear acquisition model: what brings the right students in, what gets them activated and what converts them into paid users.</p><div className={styles.featuredInsightTags}><i>Meta</i><i>Creative</i><i>Activation</i><i>Paid CAC</i><i>Scale</i></div></article>
              <div className={`${styles.insightList} ${tune.timeline}`}>{ROADMAP.map(([num,when,title,copy]) => <article className={tune.timelineItem} key={num}><span className={tune.timelineNumber}>{num}</span><div className={tune.timelineContent}><small>{when}</small><h3>{title}</h3><p>{copy}</p></div><b>↗</b></article>)}</div>
            </div>
          </div>
        </section>

        <section id="packages" className={`${styles.packageBand} ${tune.packageBand}`}>
          <div className={styles.sectionShell}>
            <div className={`${styles.packageLayout} ${tune.packageLayout}`}>
              <div className={`${styles.packageIntro} ${tune.packageIntro}`}><p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Pilot commercials</p><h2>Two ways<br />to start.</h2><p>The pilot scope stays focused in both options. The difference is how Growth Escalators is compensated for the first month.</p><div className={styles.packageChecks}><span><Check size={15} /> ₹35–40k media budget separate</span><span><Check size={15} /> 30-day pilot</span><span><Check size={15} /> Static creatives included</span></div></div>
              <div className={`${styles.packagePanel} ${tune.packagePanel}`}>
                <div className={tune.packageCards}>
                  <article className={`${styles.packageOption} ${tune.packageOption}`}>
                    <div className={tune.packageCardHead}><span>FIXED PILOT</span><h3>₹30,000 <small>+ GST</small></h3><p>Simple fixed management fee for the complete 30-day pilot execution and learning cycle.</p></div>
                    <ul>{FIXED.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul>
                    <a href="#top" className={`${styles.packageButton} ${tune.packageCardButton}`}>Start Fixed Pilot <ArrowUpRight size={16} /></a>
                  </article>
                  <article className={`${styles.packageOption} ${styles.packageRecommended} ${tune.packageOption} ${tune.packageRecommended}`}>
                    <div className={styles.recommendedLabel}>PERFORMANCE-ALIGNED OPTION</div>
                    <div className={tune.packageCardHead}><span>HYBRID PILOT</span><h3>₹20,000 <small>+ 10% revenue</small></h3><p>Lower fixed fee with a performance-linked share on attributable revenue generated during the agreed measurement window.</p></div>
                    <ul>{HYBRID.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul>
                    <a href="#top" className={`${styles.packageButton} ${tune.packageCardButton}`}>Start Hybrid Pilot <ArrowUpRight size={16} /></a>
                  </article>
                </div>
                <p className={styles.packageFine}>Media spend is separate. AI video-generation or external raw video production costs are covered by Sarvaank. Pilot benchmarks are targets for validation, not guaranteed outcomes.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}><div className={styles.sectionShell}><div className={styles.footerRow}><div><b>Growth Escalators</b><small>Paid growth systems built around commercial outcomes</small></div><div className={styles.footerLinks}><a href="#system">System</a><a href="#success">Success</a><a href="#roadmap">Timeline</a><a href="#packages">Commercials</a></div><p>Prepared for Sarvaank · 2026</p></div></div></footer>
    </div>
  );
}