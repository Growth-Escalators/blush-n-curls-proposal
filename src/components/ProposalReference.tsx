import { ArrowUpRight, Check } from "lucide-react";
import styles from "./ProposalReference.module.css";

const PROOF = [
  { value: "7", label: "days to complete the audit" },
  { value: "15–30", label: "days to stabilise Meta" },
  { value: "45–60", label: "days to stabilise Google" },
  { value: "90", label: "days to scale proven winners" },
];

const MARQUEE = [
  "Meta Ads",
  "Google Ads",
  "Creative",
  "Website CRO",
  "Local SEO",
  "AI Search",
  "WhatsApp",
  "Retention",
];

const SERVICES = [
  {
    title: "Performance",
    copy: "Meta and Google acquisition managed around booked appointments, revenue quality and profitable service demand.",
    cta: "Acquire better customers",
    visual: "performance",
  },
  {
    title: "Web & Conversion",
    copy: "Premium website, landing pages, booking journeys and CRO designed to convert more intent into appointments.",
    cta: "Convert more demand",
    visual: "commerce",
  },
  {
    title: "Creative & Offers",
    copy: "Static creative, supplied-footage edits, offer packaging and testing systems built for paid acquisition.",
    cta: "Improve creative velocity",
    visual: "creative",
  },
  {
    title: "Search & Organic",
    copy: "Local SEO, technical SEO, service discovery and AI-search visibility around high-intent salon moments.",
    cta: "Compound organic demand",
    visual: "search",
  },
  {
    title: "Retention",
    copy: "WhatsApp, email, memberships, reviews and reactivation flows that turn first visits into repeat revenue.",
    cta: "Increase lifetime value",
    visual: "retention",
  },
  {
    title: "Growth Foundation",
    eyebrow: "Recommended system",
    copy: "Acquisition, conversion, retention and intelligence connected around one branch-level commercial view.",
    cta: "Build the full system",
    visual: "foundation",
    featured: true,
  },
] as const;

const WORK = [
  {
    category: "META ACQUISITION · CREATIVE · OFFERS",
    title: "Stabilise the Meta growth system within the first 15–30 days.",
    visual: "meta",
    metrics: [["15–30", "day focus"], ["Creative", "testing"], ["Offers", "iterated"]],
  },
  {
    category: "GOOGLE SEARCH · INTENT · CONVERSION",
    title: "Rebuild Google around the services and searches that signal booking intent.",
    visual: "google",
    metrics: [["45–60", "day focus"], ["Search", "clean-up"], ["Intent", "segmented"]],
  },
  {
    category: "WEBSITE CRO · BOOKING EXPERIENCE",
    title: "Turn paid demand into more booked appointments with a stronger digital journey.",
    visual: "conversion",
    metrics: [["CRO", "website"], ["Offers", "landing pages"], ["Booking", "journey"]],
  },
  {
    category: "RETENTION · SEO · REPUTATION",
    title: "Build the compounding layer around repeat visits, reviews and organic discovery.",
    visual: "retention",
    metrics: [["90", "day system"], ["3", "branches"], ["Full funnel", "growth"]],
    featured: true,
  },
] as const;

const ROADMAP = [
  ["01", "DAY 01–07", "Complete growth audit", "Paid media, tracking, website, offers, creative, SEO and customer journey."],
  ["02", "DAY 08–30", "Fix + test Meta", "Account structure, tracking, audiences, offers and a repeatable creative testing loop."],
  ["03", "DAY 15–60", "Rebuild Google", "Search structure, keywords, negatives, service segmentation and landing-page alignment."],
  ["04", "DAY 30–90", "Compound + scale", "CRO, SEO, retention, reviews and more budget behind proven branch × service combinations."],
] as const;

const PERFORMANCE = [
  "Meta Ads management",
  "Google Ads management",
  "Static creatives + supplied-footage edits",
  "Creative strategy + existing offer testing",
  "Analytics + performance reporting",
  "SEO + conversion recommendations",
];

const GROWTH = [
  "Everything in Performance",
  "Website CRO + premium UI/UX improvements",
  "Landing pages + new offer creation",
  "Full SEO: local, technical, on-page + AI search",
  "Email + WhatsApp lifecycle marketing",
  "Membership, loyalty + review activation",
  "Growth dashboard + branch/service analysis",
];

function Arrow() {
  return <span aria-hidden>↗</span>;
}

function ServiceVisual({ type }: { type: (typeof SERVICES)[number]["visual"] }) {
  if (type === "performance") {
    return (
      <div className={`${styles.serviceVisual} ${styles.performanceVisual}`} aria-hidden>
        <div className={styles.visualRing} />
        <div className={styles.performanceCard}><span>META / TEST</span><strong>30D</strong><i>↗</i></div>
        <div className={styles.performanceBars}><i /><i /><i /><i /><i /></div>
        <div className={styles.visualCursor}>↗</div>
        <div className={styles.visualWord}>BOOKINGS</div>
      </div>
    );
  }

  if (type === "commerce") {
    return (
      <div className={`${styles.serviceVisual} ${styles.commerceVisual}`} aria-hidden>
        <div className={styles.browserMini}>
          <div className={styles.browserDots}><i /><i /><i /></div>
          <div className={styles.browserHero}><b>PREMIUM<br />SERVICE PAGE</b><span>BOOK APPOINTMENT</span></div>
          <div className={styles.browserRows}><i /><i /><i /></div>
        </div>
        <div className={styles.phoneMini}><span>BOOKING</span><strong>3 taps</strong><i>→</i></div>
      </div>
    );
  }

  if (type === "creative") {
    return (
      <div className={`${styles.serviceVisual} ${styles.creativeVisual}`} aria-hidden>
        <div className={styles.creativePoster}><span>THE</span><strong>OFFER.</strong><small>clear • premium • specific</small></div>
        <div className={styles.creativeSticker}>15–20<br />STATICS</div>
        <div className={styles.creativeTape}>TEST → LEARN → SCALE</div>
      </div>
    );
  }

  if (type === "search") {
    return (
      <div className={`${styles.serviceVisual} ${styles.searchVisual}`} aria-hidden>
        <div className={styles.searchBox}>best salon near me <b>⌕</b></div>
        <div className={styles.searchResult}><span>BLUSH N CURLS</span><b>Premium salon · Dubai</b><i /></div>
        <div className={styles.searchResult}><span>LOCAL SEO</span><b>Service + branch intent</b><i /></div>
        <div className={styles.searchBadge}>AI SEARCH READY</div>
      </div>
    );
  }

  if (type === "retention") {
    return (
      <div className={`${styles.serviceVisual} ${styles.retentionVisual}`} aria-hidden>
        <div className={styles.flowLine} />
        <div className={`${styles.flowNode} ${styles.flowOne}`}>1ST<br />VISIT</div>
        <div className={`${styles.flowNode} ${styles.flowTwo}`}>REPEAT</div>
        <div className={`${styles.flowNode} ${styles.flowThree}`}>MEMBER</div>
        <div className={styles.messageCard}>WhatsApp<br /><strong>time to rebook?</strong></div>
      </div>
    );
  }

  return (
    <div className={`${styles.serviceVisual} ${styles.foundationVisual}`} aria-hidden>
      <div className={styles.foundationOrbit}><i /><i /><i /><i /></div>
      <div className={styles.foundationCore}>GE<br /><span>GROWTH</span></div>
      <div className={`${styles.foundationTag} ${styles.foundationTagOne}`}>META</div>
      <div className={`${styles.foundationTag} ${styles.foundationTagTwo}`}>GOOGLE</div>
      <div className={`${styles.foundationTag} ${styles.foundationTagThree}`}>CRO</div>
      <div className={`${styles.foundationTag} ${styles.foundationTagFour}`}>RETENTION</div>
    </div>
  );
}

function WorkVisual({ type }: { type: (typeof WORK)[number]["visual"] }) {
  if (type === "meta") {
    return (
      <div className={`${styles.workVisual} ${styles.workMeta}`} aria-hidden>
        <div className={styles.workPhone}><span>CREATIVE TEST</span><strong>15–30</strong><small>DAY META SYSTEM</small></div>
        <div className={styles.workBars}><i /><i /><i /><i /><i /><i /></div>
        <div className={styles.workChip}>HOOK × OFFER × AUDIENCE</div>
      </div>
    );
  }
  if (type === "google") {
    return (
      <div className={`${styles.workVisual} ${styles.workGoogle}`} aria-hidden>
        <div className={styles.searchDial}>45–60<span>DAYS</span></div>
        <div className={styles.keywordStack}><span>hair salon dubai</span><span>keratin treatment</span><span>nail salon near me</span><span>premium facial</span></div>
      </div>
    );
  }
  if (type === "conversion") {
    return (
      <div className={`${styles.workVisual} ${styles.workConversion}`} aria-hidden>
        <div className={styles.funnelPanel}><span>AD</span><i>→</i><span>OFFER</span><i>→</i><span>BOOK</span></div>
        <div className={styles.conversionCard}><b>BOOKING JOURNEY</b><strong>less friction</strong><small>clear service · clear branch · clear CTA</small></div>
      </div>
    );
  }
  return (
    <div className={`${styles.workVisual} ${styles.workRetention}`} aria-hidden>
      <div className={styles.retentionDial}>90<span>DAY</span></div>
      <div className={styles.retentionTiles}><i>SEO</i><i>REVIEWS</i><i>EMAIL</i><i>WHATSAPP</i></div>
      <div className={styles.retentionCaption}>COMPOUND THE CUSTOMER VALUE</div>
    </div>
  );
}

export default function ProposalReference() {
  return (
    <div className={styles.homepage}>
      <header className={styles.navWrap}>
        <nav className={styles.nav} aria-label="Proposal navigation">
          <a className={styles.brand} href="#top"><b>BLUSH N CURLS</b><small>GROWTH PROPOSAL</small></a>
          <div className={styles.navLinks}><a href="#system">System</a><a href="#proof">Plan</a><a href="#roadmap">Roadmap</a><a href="#packages">Packages</a></div>
          <a className={styles.navCta} href="#packages">View proposal <ArrowUpRight size={13} /></a>
        </nav>
      </header>

      <main>
        <section id="top" className={styles.hero}>
          <div className={styles.heroBackdrop} aria-hidden />
          <div className={styles.heroShell}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Proposal for Blush N Curls · Dubai</p>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroLine}>GROWTH,</span>
                <span className={styles.heroLine}>ENGINEERED.</span>
              </h1>
              <p className={styles.heroAccent}>For Blush N Curls.</p>
              <p className={styles.heroLead}>A connected acquisition, conversion and retention system designed to create more bookings, stronger customer economics and clearer branch-level growth.</p>
              <div className={styles.heroActions}>
                <a href="#system" className={styles.primaryCta}>Explore the system <Arrow /></a>
                <a href="#roadmap" className={styles.textLink}>See the 90-day plan <Arrow /></a>
              </div>
            </div>

            <div className={styles.heroStage} aria-label="Blush N Curls growth system visual">
              <div className={styles.heroStageRail}><span>01 / ACQUISITION</span><span>02 / EXPERIENCE</span><span>03 / RETENTION</span></div>
              <div className={styles.heroMedia}>
                <div className={styles.heroCanvasGrid} />
                <div className={styles.heroCanvasTitle}>ONE CONNECTED<br /><strong>GROWTH SYSTEM.</strong></div>
                <div className={styles.heroPath} />
                <span className={`${styles.heroNode} ${styles.heroNodeOne}`}>META</span>
                <span className={`${styles.heroNode} ${styles.heroNodeTwo}`}>GOOGLE</span>
                <span className={`${styles.heroNode} ${styles.heroNodeThree}`}>BOOKINGS</span>
                <span className={`${styles.heroNode} ${styles.heroNodeFour}`}>RETENTION</span>
              </div>
              <div className={styles.heroInset}>
                <span>GROWTH VIEW</span>
                <strong>3</strong>
                <small>branches connected</small>
              </div>
              <div className={styles.heroMetric}><span>START HERE</span><strong>7D</strong><small>full growth audit</small></div>
              <div className={styles.heroTag}>DUBAI × GROWTH</div>
            </div>
          </div>

          <div className={styles.proofRail}>
            {PROOF.map((item) => <div className={styles.proofItem} key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </section>

        <section className={styles.brands} aria-label="Connected growth capabilities">
          <div className={styles.sectionShell}><div className={styles.brandHeading}><p className={styles.eyebrow}>Connected around one commercial goal</p><span>Acquire → Convert → Retain → Measure</span></div></div>
          <div className={styles.brandMarquee}><div className={styles.brandTrack}>{[...MARQUEE, ...MARQUEE].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>
        </section>

        <section id="system" className={styles.services}>
          <div className={styles.sectionShell}>
            <div className={styles.servicesIntro}>
              <p className={styles.eyebrow}>One connected growth system</p>
              <h2>Every growth lever.<br />One connected system.</h2>
              <p>Paid acquisition, premium conversion, creative, search and retention work better when they share one commercial goal. This is the operating system we would build around Blush N Curls.</p>
              <a className={styles.pillCta} href="#proof">See how we execute</a>
            </div>

            <div className={styles.serviceGrid}>
              {SERVICES.map((service) => (
                <article className={`${styles.serviceCard} ${service.featured ? styles.serviceFeatured : ""}`} key={service.title}>
                  <div className={styles.serviceContent}>
                    {service.eyebrow ? <p className={styles.serviceEyebrow}>{service.eyebrow}</p> : null}
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <span className={styles.cardCta}>{service.cta}</span>
                  </div>
                  <ServiceVisual type={service.visual} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className={styles.work}>
          <div className={styles.sectionShell}>
            <div className={styles.workIntro}>
              <div><p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>The growth plan</p><h2>Growth you can see.<br />Proof you can measure.</h2></div>
              <div className={styles.workIntroSide}><p>Fix the foundations first. Then make each growth lever measurable enough to scale with confidence.</p><a href="#roadmap" className={styles.lightPill}>See the roadmap</a></div>
            </div>

            <div className={styles.caseList}>
              {WORK.map((item) => (
                <article className={`${styles.caseCard} ${item.featured ? styles.caseCardFeature : ""}`} key={item.title}>
                  <div className={styles.caseMedia}><WorkVisual type={item.visual} /></div>
                  <div className={styles.caseBody}>
                    <div className={styles.caseCategory}>{item.category}</div>
                    <h3>{item.title}</h3>
                    <span className={styles.caseCta}>What we build <Arrow /></span>
                    <div className={styles.caseMetrics}>{item.metrics.map(([value,label]) => <div className={styles.caseMetric} key={`${item.title}-${value}`}><span>↗</span><strong>{value}</strong><small>{label}</small></div>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.technology}>
          <div className={styles.sectionShell}>
            <div className={styles.techTop}>
              <div className={styles.techCopy}><p className={styles.eyebrow}>Growth intelligence</p><h2>Meet your growth advantage.</h2><p>Instead of isolated channel reports, we connect spend to service demand, bookings, branch performance and repeat value so the next decision is obvious.</p><a href="#packages" className={styles.darkPill}>See the growth partnership</a></div>
              <div className={styles.techBenefits}><span>Branch-level acquisition view</span><span>Service + offer performance</span><span>Booking and conversion visibility</span><span>Retention and reputation signals</span></div>
            </div>

            <div className={styles.botStage}>
              <div className={styles.botGlow} />
              <div className={styles.botWindow}>
                <div className={styles.botHeader}><div><b>Blush Growth Intelligence</b><span>One commercial view</span></div><span className={styles.online}><i /> Live system</span></div>
                <div className={styles.dashboardGrid}>
                  <div className={styles.dashboardPanel}><span>ACQUISITION</span><strong>Meta + Google</strong><div className={styles.dashboardBars}><i /><i /><i /><i /><i /></div></div>
                  <div className={styles.dashboardPanel}><span>BRANCH VIEW</span><strong>Al Barsha</strong><small>Al Qusais · Mankhool</small></div>
                  <div className={styles.dashboardPanel}><span>SERVICE SIGNAL</span><strong>What scales?</strong><small>Branch × service × offer</small></div>
                  <div className={styles.dashboardPanel}><span>RETENTION</span><strong>Repeat value</strong><small>Reviews · loyalty · reactivation</small></div>
                </div>
                <div className={styles.dashboardFlow}><span>SPEND</span><b>→</b><span>ENQUIRY</span><b>→</b><span>BOOKING</span><b>→</b><span>VISIT</span><b>→</b><span>REPEAT</span></div>
              </div>
              <div className={styles.botSignalCard}><span>DECISION MODEL</span><strong>Branch × service × offer × audience</strong></div>
              <div className={styles.botResultCard}><span>CONNECTED</span><strong>3 / 1</strong><small>branches / growth view</small></div>
            </div>
          </div>
        </section>

        <section className={styles.people}>
          <div className={styles.sectionShell}>
            <div className={styles.peopleGrid}>
              <div className={styles.peopleCopy}><p className={styles.eyebrow}>How we operate</p><h2>Human-led.<br />AI-enabled.<br />Accountable.</h2><p>Strategy stays close to execution. Performance, creative, CRO, SEO and retention decisions are reviewed against the same commercial outcomes instead of disappearing into separate channel reports.</p><a className={styles.pillOutline} href="#roadmap">See how we move</a></div>
              <div className={styles.peopleMedia} aria-label="No-face operating system visual">
                <div className={styles.peopleMain}>
                  <div className={styles.operatorHeader}><span>ONE GROWTH TEAM</span><b>BLUSH N CURLS</b></div>
                  <div className={styles.operatorGrid}><i>PERFORMANCE</i><i>CREATIVE</i><i>CRO</i><i>SEO</i><i>RETENTION</i><i>ANALYTICS</i></div>
                  <div className={styles.operatorLine}><span>ONE WEEKLY PRIORITY</span><strong>→ measurable growth</strong></div>
                </div>
                <div className={styles.peopleInset}><span>WEEKLY GROWTH ROOM</span><strong>Decide → Execute → Learn</strong><small>No faces. No silos. One owner per action.</small></div>
                <div className={styles.peopleTag}>ACCOUNTABILITY × SPEED</div>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className={styles.insights}>
          <div className={styles.sectionShell}>
            <div className={styles.insightsHeading}><div><p className={styles.eyebrow}>How we move</p><h2>Thinking built<br />to move the work.</h2></div><span>7 / 30 / 60 / 90</span></div>
            <div className={styles.insightsLayout}>
              <article className={styles.featuredInsight}><span>01 / THE FIRST 90 DAYS</span><h3>AUDIT FIRST.<br />FIX ACQUISITION.<br />THEN COMPOUND.</h3><p>The operating principle is simple: diagnose the leaks, stabilise paid acquisition, improve conversion, then add retention and organic compounding.</p><div className={styles.featuredInsightTags}><i>Audit</i><i>Meta</i><i>Google</i><i>CRO</i><i>Retention</i></div></article>
              <div className={styles.insightList}>{ROADMAP.map(([num,when,title,copy]) => <article key={num}><span>{num}</span><div><small>{when}</small><h3>{title}</h3><p>{copy}</p></div><b>↗</b></article>)}</div>
            </div>
          </div>
        </section>

        <section id="packages" className={styles.packageBand}>
          <div className={styles.sectionShell}>
            <div className={styles.packageLayout}>
              <div className={styles.packageIntro}><p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Partnership options</p><h2>Choose your<br />growth partnership.</h2><p>Performance improves the advertising. Growth Partnership builds the system around it.</p><div className={styles.packageChecks}><span><Check size={15} /> 7-day audit first</span><span><Check size={15} /> No team-member faces</span><span><Check size={15} /> Clear monthly scope</span></div></div>
              <div className={styles.packagePanel}>
                <article className={styles.packageOption}><div><span>PERFORMANCE</span><h3>AED 2,500 <small>/ month</small></h3><p>A focused acquisition partnership.</p></div><ul>{PERFORMANCE.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul></article>
                <article className={`${styles.packageOption} ${styles.packageRecommended}`}><div className={styles.recommendedLabel}>RECOMMENDED FOR BLUSH N CURLS</div><div><span>GROWTH PARTNERSHIP</span><h3>AED 4,000 <small>/ month</small></h3><p>Acquisition, conversion, retention and intelligence connected.</p></div><ul>{GROWTH.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul></article>
                <a href="#top" className={styles.packageButton}>Start with the 7-day audit <ArrowUpRight size={16} /></a>
                <p className={styles.packageFine}>Media spend, professional shoots, WhatsApp/API fees, software subscriptions and major custom development are separate.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}><div className={styles.sectionShell}><div className={styles.footerRow}><div><b>Growth Escalators</b><small>Connected growth systems</small></div><div className={styles.footerLinks}><a href="#system">System</a><a href="#proof">Plan</a><a href="#roadmap">Roadmap</a><a href="#packages">Packages</a></div><p>Prepared for Blush N Curls · 2026</p></div></div></footer>
    </div>
  );
}