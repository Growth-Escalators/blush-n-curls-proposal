import {
  ArrowUpRight,
  BarChart3,
  Check,
  Layout,
  Mail,
  MessageCircle,
  MousePointerClick,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import styles from "./ProposalReference.module.css";

const growthLevers = [
  {
    icon: Target,
    title: "Paid Acquisition",
    copy: "Meta Ads + Google Ads structured around bookings and revenue — not just cheap leads.",
    tag: "Acquire",
  },
  {
    icon: MousePointerClick,
    title: "Conversion",
    copy: "Offers, landing pages, booking journeys and website CRO that turn intent into appointments.",
    tag: "Convert",
  },
  {
    icon: Search,
    title: "Organic Growth",
    copy: "Local SEO, technical SEO and AI-search visibility across high-intent salon discovery moments.",
    tag: "Discover",
  },
  {
    icon: RefreshCw,
    title: "Retention",
    copy: "WhatsApp, email, memberships and reactivation flows that increase repeat visits and value.",
    tag: "Retain",
  },
  {
    icon: Star,
    title: "Reputation",
    copy: "Review generation, response systems, referrals and social proof across all three branches.",
    tag: "Advocate",
  },
  {
    icon: BarChart3,
    title: "Growth Intelligence",
    copy: "Tracking, branch analysis and service-level reporting so we know what deserves more budget.",
    tag: "Measure",
    featured: true,
  },
];

const intelligenceCards = [
  ["01", "Best acquisition service", "Which service brings in customers we can profitably retain?"],
  ["02", "Best branch opportunity", "Where should more spend go: Al Qusais, Al Barsha or Mankhool?"],
  ["03", "Best offer", "Which offer creates booked appointments instead of low-intent enquiries?"],
  ["04", "Best customer value", "Which acquisition paths create repeat visits, memberships and referrals?"],
];

const roadmap = [
  {
    when: "DAY 01–07",
    title: "Diagnose",
    accent: "Audit delivered",
    bullets: ["Paid media + tracking audit", "Booking and website diagnosis", "Offers, creative and SEO review"],
  },
  {
    when: "DAY 08–30",
    title: "Fix + Test Meta",
    accent: "15–30 day focus",
    bullets: ["Account and tracking cleanup", "Audience + offer testing", "Creative testing system"],
  },
  {
    when: "DAY 15–60",
    title: "Rebuild Google",
    accent: "45–60 day focus",
    bullets: ["Search structure + keywords", "Negatives + service segmentation", "Landing-page alignment"],
  },
  {
    when: "DAY 30–90",
    title: "Compound + Scale",
    accent: "Scale proven winners",
    bullets: ["SEO + retention systems", "Branch × service insights", "Scale profitable combinations"],
  },
];

const performanceItems = [
  "Meta Ads management",
  "Google Ads management",
  "Static creatives + video edits",
  "Creative strategy + offer testing",
  "Analytics + performance reporting",
  "SEO + conversion recommendations",
];

const growthItems = [
  "Everything in Performance",
  "Website CRO + premium UI/UX improvements",
  "Landing pages + new offer creation",
  "Full SEO: local, technical, on-page + AI search",
  "Email + WhatsApp lifecycle marketing",
  "Membership, loyalty + review activation",
  "Growth dashboard + branch/service analysis",
];

const lifecycle = [
  "Enquiry",
  "Booking",
  "Visit",
  "Review",
  "Repeat",
  "Member",
  "Referral",
];

const outcomes = [
  "Lower acquisition cost",
  "Higher booking conversion",
  "More profitable service mix",
  "Higher repeat-booking rate",
  "Clear branch-level performance",
];

export default function ProposalReference() {
  return (
    <div className={styles.page}>
      <header className={styles.navWrap}>
        <nav className={styles.nav} aria-label="Proposal navigation">
          <a href="#top" className={styles.brand} aria-label="Blush N Curls proposal home">
            <span className={styles.brandMark}>B</span>
            <span>
              <b>Blush N Curls</b>
              <small>Growth proposal</small>
            </span>
          </a>
          <div className={styles.navLinks}>
            <a href="#system">Growth system</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#packages">Packages</a>
            <a href="#outcomes">Outcomes</a>
          </div>
          <a className={styles.navCta} href="#packages">View proposal <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section id="top" className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden />
          <div className={styles.heroShell}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Growth Escalators × Blush N Curls</p>
              <h1>
                <span>Growth,</span>
                <span>Engineered.</span>
                <em>For Blush N Curls.</em>
              </h1>
              <p className={styles.heroLead}>
                A connected growth system to acquire better customers, convert more bookings,
                increase repeat revenue and know what is actually driving growth.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#system">Explore the system <ArrowUpRight size={16} /></a>
                <a className={styles.textButton} href="#roadmap">See the 90-day plan <ArrowUpRight size={15} /></a>
              </div>
            </div>

            <div className={styles.heroStage} aria-label="Blush N Curls connected growth system diagram">
              <div className={styles.stageRail}><span>01 / ACQUIRE</span><span>02 / CONVERT</span><span>03 / RETAIN</span></div>
              <div className={styles.stagePlane}>
                <div className={styles.stageGrid} />
                <div className={`${styles.stageNode} ${styles.metaNode}`}><span>Meta</span><b>Demand</b></div>
                <div className={`${styles.stageNode} ${styles.googleNode}`}><span>Google</span><b>Intent</b></div>
                <div className={`${styles.stageNode} ${styles.bookingNode}`}><span>Bookings</span><b>Convert</b></div>
                <div className={`${styles.stageNode} ${styles.retentionNode}`}><span>Retention</span><b>Repeat</b></div>
                <div className={styles.stageCore}>
                  <Sparkles size={22} />
                  <strong>Growth<br />System</strong>
                  <small>One connected engine</small>
                </div>
              </div>
              <div className={styles.stageBadge}><span>BRANCHES</span><strong>3</strong><small>one growth view</small></div>
              <div className={styles.stageTag}>DUBAI × GROWTH</div>
            </div>
          </div>

          <div className={styles.proofRail}>
            <div><strong>7</strong><span>days to complete audit</span></div>
            <div><strong>15–30</strong><span>days to stabilise Meta</span></div>
            <div><strong>45–60</strong><span>days to stabilise Google</span></div>
            <div><strong>90</strong><span>days to scale what proves itself</span></div>
          </div>
        </section>

        <section id="system" className={styles.systemSection}>
          <div className={styles.sectionShell}>
            <div className={styles.centerIntro}>
              <p className={styles.eyebrow}>The opportunity</p>
              <h2>Every growth lever.<br />One connected system.</h2>
              <p>
                Blush N Curls already has the brand, branches and service depth. The next step is
                connecting acquisition, conversion, retention and intelligence around one commercial goal.
              </p>
            </div>

            <div className={styles.leverGrid}>
              {growthLevers.map((lever) => {
                const Icon = lever.icon;
                return (
                  <article key={lever.title} className={`${styles.leverCard} ${lever.featured ? styles.leverFeatured : ""}`}>
                    <div className={styles.cardTop}>
                      <span>{lever.tag}</span>
                      <Icon size={22} />
                    </div>
                    <h3>{lever.title}</h3>
                    <p>{lever.copy}</p>
                    <div className={styles.cardVisual} aria-hidden>
                      <i /><i /><i /><i />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.intelligenceSection}>
          <div className={styles.sectionShell}>
            <div className={styles.intelligenceIntro}>
              <div>
                <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Growth intelligence</p>
                <h2>Growth you can see.<br />Proof you can measure.</h2>
              </div>
              <p>
                The objective is not vanity performance. It is to see which branch, service,
                offer and audience combinations create the highest-value salon customers — and
                build the next round of spend around those signals.
              </p>
            </div>

            <div className={styles.equation}>
              <span>BRANCH</span><b>×</b><span>SERVICE</span><b>×</b><span>OFFER</span><b>×</b><span>AUDIENCE</span>
              <i>→</i><strong>GROWTH</strong>
            </div>

            <div className={styles.intelligenceGrid}>
              {intelligenceCards.map(([num, title, copy]) => (
                <article key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className={styles.roadmapSection}>
          <div className={styles.sectionShell}>
            <div className={styles.roadmapIntro}>
              <div>
                <p className={styles.eyebrow}>How we move</p>
                <h2>Your 7–30–60–90<br />day growth plan.</h2>
              </div>
              <p>
                Audit first. Fix the acquisition systems next. Then compound growth across website,
                search, retention and reputation instead of trying to change everything at once.
              </p>
            </div>

            <div className={styles.timeline}>
              {roadmap.map((step, index) => (
                <article key={step.when} className={index === 0 ? styles.timelineFeatured : ""}>
                  <div className={styles.timelineIndex}>0{index + 1}</div>
                  <p className={styles.timelineWhen}>{step.when}</p>
                  <h3>{step.title}</h3>
                  <span className={styles.timelineAccent}>{step.accent}</span>
                  <ul>{step.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </article>
              ))}
            </div>

            <div className={styles.auditBand}>
              <div className={styles.auditTitle}>
                <ShieldCheck size={24} />
                <div><span>Before a single dirham is scaled</span><strong>First 7-day audit</strong></div>
              </div>
              <div className={styles.auditItems}>
                <span>Paid media</span><span>Tracking</span><span>Website + booking</span><span>Offers + creative</span><span>Local + AI SEO</span>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className={styles.packagesSection}>
          <div className={styles.sectionShell}>
            <div className={styles.centerIntro}>
              <p className={styles.eyebrow}>Partnership options</p>
              <h2>Two ways to<br />work together.</h2>
              <p>Choose focused acquisition execution or connect the full growth system around it.</p>
            </div>

            <div className={styles.packageGrid}>
              <article className={styles.packageCard}>
                <div className={styles.packageLabel}>Performance</div>
                <h3>Performance Package</h3>
                <p className={styles.packageCopy}>A focused acquisition partnership.</p>
                <div className={styles.price}><span>AED</span><strong>2,500</strong><small>/ month</small></div>
                <ul>{performanceItems.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
                <a href="#contact" className={styles.packageButton}>Choose Performance <ArrowUpRight size={15} /></a>
              </article>

              <article className={`${styles.packageCard} ${styles.packageFeatured}`}>
                <div className={styles.recommended}>Recommended for Blush N Curls</div>
                <div className={styles.packageLabel}>Growth partnership</div>
                <h3>Growth Partnership</h3>
                <p className={styles.packageCopy}>Acquisition, conversion, retention and intelligence connected.</p>
                <div className={styles.price}><span>AED</span><strong>4,000</strong><small>/ month</small></div>
                <ul>{growthItems.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
                <a href="#contact" className={styles.packageButton}>Choose Growth Partnership <ArrowUpRight size={15} /></a>
              </article>
            </div>
            <p className={styles.packageNote}>Performance improves the advertising. <strong>Growth Partnership builds the system around it.</strong></p>
          </div>
        </section>

        <section id="outcomes" className={styles.lifecycleSection}>
          <div className={styles.sectionShell}>
            <div className={styles.lifecycleTop}>
              <div>
                <p className={styles.eyebrow}>Customer economics</p>
                <h2>Turn first-time visitors<br />into long-term customers.</h2>
              </div>
              <p>
                Acquisition becomes more valuable when the first visit is connected to reviews,
                repeat visits, memberships and referrals.
              </p>
            </div>

            <div className={styles.lifecycleFlow}>
              {lifecycle.map((step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                  {index < lifecycle.length - 1 ? <i>→</i> : null}
                </div>
              ))}
            </div>

            <div className={styles.lifecycleChips}>
              <span><MessageCircle size={14} /> Booking reminders</span>
              <span><Mail size={14} /> Reactivation</span>
              <span><Star size={14} /> Review requests</span>
              <span><Users size={14} /> Memberships</span>
              <span><RefreshCw size={14} /> Service reminders</span>
            </div>

            <div className={styles.outcomesBand}>
              <div className={styles.outcomesHeading}><p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Commercial outcomes</p><h3>Measure what matters.</h3></div>
              <div className={styles.outcomeGrid}>
                {outcomes.map((outcome, index) => (
                  <div key={outcome}><span>0{index + 1}</span><strong>{outcome}</strong></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.scopeSection}>
          <div className={styles.sectionShell}>
            <div className={styles.scopeIntro}>
              <p className={styles.eyebrow}>Clear scope</p>
              <h2>No surprises.</h2>
            </div>
            <div className={styles.scopeGrid}>
              <article>
                <div className={styles.scopeIcon}><Check size={20} /></div>
                <h3>Included in the partnership</h3>
                <p>Strategy, campaign management, creative design, supplied-footage editing, reporting and the agreed CRO / SEO / lifecycle work within the selected package.</p>
              </article>
              <article>
                <div className={styles.scopeIcon}><Settings size={20} /></div>
                <h3>Separate third-party costs</h3>
                <p>Media spend, shoots, raw production, WhatsApp/API fees, email platforms, CRM/software subscriptions, premium apps and major custom development.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.ctaSection}>
          <div className={styles.ctaGlow} aria-hidden />
          <div className={styles.sectionShell}>
            <div className={styles.ctaGrid}>
              <div className={styles.ctaCopy}>
                <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Next step</p>
                <h2>You built the brand.<br />Now let&apos;s build the <em>growth engine.</em></h2>
                <p>Start with the seven-day audit, build the acquisition foundation, then scale only what the data proves.</p>
              </div>
              <div className={styles.ctaCard}>
                <div className={styles.ctaCardTop}><span>Recommended</span><strong>AED 4,000 / month</strong></div>
                <div className={styles.ctaChecklist}>
                  <span><Check size={15} /> Acquisition + CRO</span>
                  <span><Check size={15} /> SEO + AI search</span>
                  <span><Check size={15} /> Retention + reviews</span>
                  <span><Check size={15} /> Growth intelligence</span>
                </div>
                <a href="#packages" className={styles.ctaButton}>Start with the 7-day audit <ArrowUpRight size={16} /></a>
                <small>Prepared exclusively for Blush N Curls by Growth Escalators.</small>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.sectionShell}>
          <div className={styles.footerRow}>
            <div className={styles.footerBrand}><span>GE</span><div><strong>Growth Escalators</strong><small>Connected growth systems</small></div></div>
            <div className={styles.footerLinks}><a href="#system">System</a><a href="#roadmap">Roadmap</a><a href="#packages">Packages</a><a href="#outcomes">Outcomes</a></div>
            <p>Prepared for Blush N Curls · 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
}