import { ArrowUpRight, Check } from "lucide-react";
import styles from "./ProposalReference.module.css";
import tune from "./ProposalReferenceTune.module.css";

const PROOF = [
  { value: "7", label: "days to complete the audit" },
  { value: "15–30", label: "days to get Meta into a reliable testing rhythm" },
  { value: "45–60", label: "days to rebuild Google around booking intent" },
  { value: "90", label: "days to scale what proves itself" },
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
    copy: "Static creative, supplied-footage edits, offer packaging and testing built around what actually drives bookings.",
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
    title: "Growth Partnership",
    eyebrow: "Recommended approach",
    copy: "Paid acquisition, conversion, retention and reporting connected around one clear commercial view.",
    cta: "Connect every growth lever",
    visual: "foundation",
    featured: true,
  },
] as const;

const WORK = [
  {
    category: "META ACQUISITION · CREATIVE · OFFERS",
    title: "Get Meta into a reliable testing rhythm within the first 15–30 days.",
    visual: "meta",
    metrics: [["15–30", "day focus"], ["Creative", "testing"], ["Offers", "iterated"]],
  },
  {
    category: "GOOGLE SEARCH · INTENT · CONVERSION",
    title: "Make Google capture the searches that show the strongest booking intent.",
    visual: "google",
    metrics: [["45–60", "day focus"], ["Search", "clean-up"], ["Intent", "segmented"]],
  },
  {
    category: "WEBSITE CRO · BOOKING EXPERIENCE",
    title: "Turn more paid traffic into booked appointments with a clearer digital journey.",
    visual: "conversion",
    metrics: [["CRO", "website"], ["Offers", "landing pages"], ["Booking", "journey"]],
  },
  {
    category: "RETENTION · SEO · REPUTATION",
    title: "Build repeat revenue through retention, reviews and organic discovery.",
    visual: "retention",
    metrics: [["90", "day plan"], ["3", "branches"], ["Full funnel", "growth"]],
    featured: true,
  },
] as const;

const ROADMAP = [
  ["7", "DAY 01–07", "Audit + priorities", "Paid media, tracking, website, offers, creative, SEO and the customer journey — with a clear priority list at the end."],
  ["30", "BY DAY 30", "Meta testing rhythm", "Clean account structure, reliable tracking, audience testing, stronger offers and a repeatable creative testing cadence."],
  ["60", "BY DAY 60", "Google intent capture", "Search structure, keywords, negatives, service segmentation and landing pages aligned to high-intent searches."],
  ["90", "BY DAY 90", "Scale proven growth", "Increase investment behind the branch × service × offer combinations that show the strongest commercial signal."],
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
        <div className={styles.workPhone}><span>CREATIVE TEST</span><strong>15–30</strong><small>DAY META PLAN</small></div>
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
      <div className={styles.retentionCaption}>COMPOUND CUSTOMER VALUE</div>
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
        <section id="top" className={`${styles.hero} ${tune.hero}`}>
          <div className={styles.heroBackdrop} aria-hidden />
          <div className={`${styles.heroShell} ${tune.heroShell}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Proposal for Blush N Curls · Dubai</p>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroLine}>PREDICTABLE</span>
                <span className={styles.heroLine}>GROWTH.</span>
              </h1>
              <p className={styles.heroAccent}>Built for Blush N Curls.</p>
              <p className={styles.heroLead}>A connected acquisition, conversion and retention plan designed to increase bookings, improve repeat revenue and show exactly which branches, services and offers deserve more investment.</p>
              <div className={styles.heroActions}>
                <a href="#system" className={styles.primaryCta}>Explore the plan <Arrow /></a>
                <a href="#roadmap" className={styles.textLink}>See the 90-day timeline <Arrow /></a>
              </div>
            </div>

            <div className={`${styles.heroStage} ${tune.heroStage}`} aria-label="Blush N Curls connected growth plan visual">
              <div className={styles.heroStageRail}><span>01 / ACQUISITION</span><span>02 / EXPERIENCE</span><span>03 / RETENTION</span></div>
              <div className={`${styles.heroMedia} ${tune.heroMedia}`}>
                <div className={styles.heroCanvasGrid} />
                <div className={styles.heroCanvasTitle}>ONE CONNECTED<br /><strong>GROWTH PLAN.</strong></div>
                <div className={styles.heroPath} />
                <span className={`${styles.heroNode} ${styles.heroNodeOne}`}>META</span>
                <span className={`${styles.heroNode} ${styles.heroNodeTwo}`}>GOOGLE</span>
                <span className={`${styles.heroNode} ${styles.heroNodeThree}`}>BOOKINGS</span>
                <span className={`${styles.heroNode} ${styles.heroNodeFour}`}>RETENTION</span>
              </div>
              <div className={`${styles.heroInset} ${tune.heroInset}`}>
                <span>BLUSH N CURLS</span>
                <strong>3</strong>
                <small>Dubai branches connected</small>
              </div>
              <div className={styles.heroMetric}><span>START HERE</span><strong>7D</strong><small>full growth audit</small></div>
              <div className={styles.heroTag}>DUBAI × GROWTH</div>
            </div>
          </div>

          <div className={`${styles.proofRail} ${tune.proofRail}`}>
            {PROOF.map((item) => <div className={styles.proofItem} key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </section>

        <section className={`${styles.brands} ${tune.brands}`} aria-label="Connected growth capabilities">
          <div className={styles.sectionShell}><div className={styles.brandHeading}><p className={styles.eyebrow}>Connected around one commercial goal</p><span>Acquire → Convert → Retain → Measure</span></div></div>
          <div className={styles.brandMarquee}><div className={styles.brandTrack}>{[...MARQUEE, ...MARQUEE].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div></div>
        </section>

        <section id="system" className={`${styles.services} ${tune.services}`}>
          <div className={styles.sectionShell}>
            <div className={styles.servicesIntro}>
              <p className={styles.eyebrow}>How the growth plan works</p>
              <h2>Every growth lever.<br />Working together.</h2>
              <p>Paid acquisition, conversion, creative, search and retention become much more useful when they are all measured against the same outcome: profitable booked appointments and stronger repeat revenue.</p>
              <a className={styles.pillCta} href="#proof">See how we execute</a>
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

        <section id="proof" className={`${styles.work} ${tune.work}`}>
          <div className={styles.sectionShell}>
            <div className={styles.workIntro}>
              <div><p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>The growth plan</p><h2>A plan you can see.<br />Progress you can measure.</h2></div>
              <div className={styles.workIntroSide}><p>Fix the foundations first, then make every major growth lever measurable enough to know what deserves more time and budget.</p><a href="#roadmap" className={styles.lightPill}>See the timeline</a></div>
            </div>

            <div className={styles.caseList}>
              {WORK.map((item) => {
                const featured = "featured" in item && item.featured;
                return (
                  <article className={`${styles.caseCard} ${tune.caseCard} ${featured ? styles.caseCardFeature : ""}`} key={item.title}>
                    <div className={`${styles.caseMedia} ${tune.caseMedia}`}><WorkVisual type={item.visual} /></div>
                    <div className={styles.caseBody}>
                      <div className={styles.caseCategory}>{item.category}</div>
                      <h3>{item.title}</h3>
                      <span className={styles.caseCta}>What we improve <Arrow /></span>
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
              <div className={styles.techCopy}><p className={styles.eyebrow}>Growth intelligence</p><h2>Know what is actually driving growth.</h2><p>Instead of isolated channel reports, we connect spend to service demand, bookings, branch performance and repeat value so the next decision is much clearer.</p><a href="#packages" className={styles.darkPill}>See the growth partnership</a></div>
              <div className={styles.techBenefits}><span>Branch-level acquisition view</span><span>Service + offer performance</span><span>Booking and conversion visibility</span><span>Retention and reputation signals</span></div>
            </div>

            <div className={`${styles.botStage} ${tune.botStage}`}>
              <div className={styles.botGlow} />
              <div className={styles.botWindow}>
                <div className={styles.botHeader}><div><b>Blush Growth Dashboard</b><span>One commercial view</span></div><span className={styles.online}><i /> Live view</span></div>
                <div className={styles.dashboardGrid}>
                  <div className={styles.dashboardPanel}><span>ACQUISITION</span><strong>Meta + Google</strong><div className={styles.dashboardBars}><i /><i /><i /><i /><i /></div></div>
                  <div className={styles.dashboardPanel}><span>BRANCH VIEW</span><strong>Al Barsha</strong><small>Al Qusais · Mankhool</small></div>
                  <div className={styles.dashboardPanel}><span>SERVICE SIGNAL</span><strong>What scales?</strong><small>Branch × service × offer</small></div>
                  <div className={styles.dashboardPanel}><span>RETENTION</span><strong>Repeat value</strong><small>Reviews · loyalty · reactivation</small></div>
                </div>
                <div className={styles.dashboardFlow}><span>SPEND</span><b>→</b><span>ENQUIRY</span><b>→</b><span>BOOKING</span><b>→</b><span>VISIT</span><b>→</b><span>REPEAT</span></div>
              </div>
              <div className={styles.botSignalCard}><span>DECISION VIEW</span><strong>Branch × service × offer × audience</strong></div>
              <div className={styles.botResultCard}><span>CONNECTED</span><strong>3 / 1</strong><small>branches / growth view</small></div>
            </div>
          </div>
        </section>

        <section className={`${styles.people} ${tune.people}`}>
          <div className={styles.sectionShell}>
            <div className={styles.peopleGrid}>
              <div className={styles.peopleCopy}><p className={styles.eyebrow}>How we operate</p><h2>Human-led.<br />AI-enabled.<br />Accountable.</h2><p>Strategy stays close to execution. Performance, creative, CRO, SEO and retention decisions are reviewed against the same commercial outcomes instead of disappearing into separate channel reports.</p><a className={styles.pillOutline} href="#roadmap">See how we move</a></div>
              <div className={`${styles.peopleMedia} ${tune.peopleMedia}`} aria-label="No-face operating system visual">
                <div className={styles.peopleMain}>
                  <div className={styles.operatorHeader}><span>ONE GROWTH TEAM</span><b>BLUSH N CURLS</b></div>
                  <div className={styles.operatorGrid}><i>PERFORMANCE</i><i>CREATIVE</i><i>CRO</i><i>SEO</i><i>RETENTION</i><i>ANALYTICS</i></div>
                  <div className={styles.operatorLine}><span>ONE WEEKLY PRIORITY</span><strong>→ measurable growth</strong></div>
                </div>
                <div className={styles.peopleInset}><span>WEEKLY GROWTH REVIEW</span><strong>Decide → Execute → Learn</strong><small>One priority list. One owner per action. One view of the numbers.</small></div>
                <div className={styles.peopleTag}>ACCOUNTABILITY × SPEED</div>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className={`${styles.insights} ${tune.insights}`}>
          <div className={styles.sectionShell}>
            <div className={styles.insightsHeading}><div><p className={styles.eyebrow}>90-day execution plan</p><h2>A clear path<br />from audit to scale.</h2></div><span>DAY 7 → 30 → 60 → 90</span></div>
            <div className={`${styles.insightsLayout} ${tune.insightsLayout}`}>
              <article className={`${styles.featuredInsight} ${tune.featuredInsight}`}><span>THE FIRST 90 DAYS</span><h3>AUDIT FIRST.<br />FIX WHAT LEAKS.<br />SCALE WHAT WORKS.</h3><p>We diagnose the biggest leaks first, get paid acquisition into a reliable rhythm, improve conversion and then scale only the combinations that show a real commercial signal.</p><div className={styles.featuredInsightTags}><i>Audit</i><i>Meta</i><i>Google</i><i>CRO</i><i>Retention</i></div></article>
              <div className={`${styles.insightList} ${tune.timeline}`}>{ROADMAP.map(([num,when,title,copy]) => <article className={tune.timelineItem} key={num}><span className={tune.timelineNumber}>{num}</span><div className={tune.timelineContent}><small>{when}</small><h3>{title}</h3><p>{copy}</p></div><b>↗</b></article>)}</div>
            </div>
          </div>
        </section>

        <section id="packages" className={`${styles.packageBand} ${tune.packageBand}`}>
          <div className={styles.sectionShell}>
            <div className={`${styles.packageLayout} ${tune.packageLayout}`}>
              <div className={`${styles.packageIntro} ${tune.packageIntro}`}><p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>Partnership options</p><h2>Choose your<br />growth plan.</h2><p>Start with focused acquisition management, or choose the Growth Partnership to improve acquisition, conversion and retention together.</p><div className={styles.packageChecks}><span><Check size={15} /> 7-day audit first</span><span><Check size={15} /> Clear monthly scope</span><span><Check size={15} /> Media spend kept separate</span></div></div>
              <div className={`${styles.packagePanel} ${tune.packagePanel}`}>
                <div className={tune.packageCards}>
                  <article className={`${styles.packageOption} ${tune.packageOption}`}>
                    <div className={tune.packageCardHead}><span>PERFORMANCE</span><h3>AED 2,500 <small>/ month</small></h3><p>Focused acquisition management for Meta, Google and the creative needed to support them.</p></div>
                    <ul>{PERFORMANCE.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul>
                    <a href="#top" className={`${styles.packageButton} ${tune.packageCardButton}`}>Start with Performance <ArrowUpRight size={16} /></a>
                  </article>
                  <article className={`${styles.packageOption} ${styles.packageRecommended} ${tune.packageOption} ${tune.packageRecommended}`}>
                    <div className={styles.recommendedLabel}>RECOMMENDED FOR BLUSH N CURLS</div>
                    <div className={tune.packageCardHead}><span>GROWTH PARTNERSHIP</span><h3>AED 4,000 <small>/ month</small></h3><p>Acquisition, conversion, retention and growth intelligence managed as one partnership.</p></div>
                    <ul>{GROWTH.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul>
                    <a href="#top" className={`${styles.packageButton} ${tune.packageCardButton}`}>Start with Growth Partnership <ArrowUpRight size={16} /></a>
                  </article>
                </div>
                <p className={styles.packageFine}>Media spend, professional shoots, WhatsApp/API fees, software subscriptions and major custom development are separate.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}><div className={styles.sectionShell}><div className={styles.footerRow}><div><b>Growth Escalators</b><small>Growth across acquisition, conversion and retention</small></div><div className={styles.footerLinks}><a href="#system">System</a><a href="#proof">Plan</a><a href="#roadmap">Roadmap</a><a href="#packages">Packages</a></div><p>Prepared for Blush N Curls · 2026</p></div></div></footer>
    </div>
  );
}