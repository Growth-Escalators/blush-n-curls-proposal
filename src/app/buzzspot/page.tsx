import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuzzSpot USA Search Growth Proposal | Growth Escalators",
  description:
    "A private 45-day USA growth proposal for BuzzSpot covering Google Ads, SEO, AISEO, GEO, conversion optimization and search-to-revenue measurement.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const PAGE_CSS = String.raw`
.page{--ink:#07111f;--muted:#607089;--line:#dce5ef;--blue:#537cff;--cyan:#68e0e4;--violet:#7767ff;min-height:100vh;background:#f6f8fb;color:var(--ink);font-family:var(--font-inter),Inter,sans-serif;overflow:hidden}.page *{box-sizing:border-box}.page a{text-decoration:none;color:inherit}.shell{width:min(1180px,calc(100% - 48px));margin:auto}.navWrap{position:fixed;z-index:50;left:0;right:0;top:0;padding:14px 0;pointer-events:none}.nav{pointer-events:auto;width:min(1180px,calc(100% - 48px));margin:auto;min-height:62px;padding:10px 12px 10px 19px;border:1px solid #ffffff22;border-radius:18px;background:#07111fe8;backdrop-filter:blur(18px);color:#fff;display:flex;align-items:center;justify-content:space-between;box-shadow:0 20px 50px #02071144}.brand{display:flex;flex-direction:column;gap:4px}.brand b{font-family:var(--font-barlow),sans-serif;font-size:21px;letter-spacing:.05em}.brand small{font-size:9px;color:#8fa2ba;letter-spacing:.17em}.navLinks{display:flex;gap:25px;color:#b7c4d4;font-size:12px}.navCta,.primary{display:inline-flex;align-items:center;gap:8px;border-radius:12px;font-size:12px;font-weight:800}.navCta{padding:12px 15px;background:#fff;color:#091321!important}.hero{position:relative;background:#07111f;color:#fff;padding:150px 0 0;min-height:840px}.hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(#ffffff08 1px,transparent 1px),linear-gradient(90deg,#ffffff08 1px,transparent 1px);background-size:44px 44px;mask-image:linear-gradient(to bottom,#000,transparent 90%)}.glow{position:absolute;width:560px;height:560px;border-radius:50%;right:5%;top:30px;background:#557cff;filter:blur(120px);opacity:.2}.heroGrid{position:relative;display:grid;grid-template-columns:1.02fr .98fr;gap:70px;align-items:center;padding:66px 0 72px}.eyebrow,.eyebrowLight{margin:0 0 17px;text-transform:uppercase;letter-spacing:.18em;font-size:10px;font-weight:800}.eyebrow{color:#667791}.eyebrowLight,.hero .eyebrow{color:#8da3bf}.hero h1,.sectionTitle,.darkTitle,.cta h2{font-family:var(--font-barlow),sans-serif;letter-spacing:-.045em}.hero h1{font-size:clamp(64px,7.3vw,106px);line-height:.84;margin:0}.hero h1 em{display:block;font-style:normal;background:linear-gradient(90deg,#7ba2ff,#72e4e8,#aa95ff);-webkit-background-clip:text;color:transparent}.heroLead{max-width:610px;margin:27px 0 0;color:#adbacb;line-height:1.7;font-size:16px}.actions{display:flex;align-items:center;gap:20px;margin-top:32px}.primary{padding:15px 18px;background:#fff;color:#081321!important}.textLink{font-size:12px;font-weight:750;color:#b6c6d9!important}.heroMeta{display:flex;gap:34px;margin-top:40px;padding-top:21px;border-top:1px solid #ffffff16}.heroMeta span{display:flex;flex-direction:column;gap:5px;color:#8296ad;font-size:10px;letter-spacing:.06em;text-transform:uppercase}.heroMeta b{font-size:19px;color:#fff;letter-spacing:-.02em;text-transform:none}.stage{position:relative;min-height:515px;border:1px solid #ffffff20;border-radius:30px;background:linear-gradient(145deg,#162943,#091624);box-shadow:0 45px 100px #0006;padding:20px}.stageTop{display:flex;justify-content:space-between;color:#8294aa;font-size:9px;letter-spacing:.13em}.stageTop i{font-style:normal;color:#82e2ca}.agent{position:absolute;left:42px;right:42px;top:85px;padding:18px;border-radius:20px;background:#f9fbfe;color:#0b1523;box-shadow:0 25px 70px #01081266}.agentHead{display:flex;gap:8px;align-items:center;padding-bottom:14px;border-bottom:1px solid #e6edf5;font-size:12px}.dot{width:8px;height:8px;border-radius:50%;background:#58d3a6;box-shadow:0 0 0 4px #58d3a622}.agentHead b{flex:1}.agentHead small{color:#6f8197}.chat{display:grid;gap:10px;padding:18px 0}.chat span{max-width:82%;padding:12px 14px;border-radius:14px;font-size:11px;line-height:1.5}.chat .user{justify-self:end;background:#eaf0ff}.chat .bot{background:#eef8f7;border:1px solid #d8eeee}.agentInput{display:flex;justify-content:space-between;border:1px solid #dce5ee;border-radius:12px;padding:11px 13px;color:#8392a6;font-size:11px}.agentInput b{color:var(--blue)}.stageFlow{position:absolute;left:28px;right:28px;bottom:62px;display:flex;align-items:center;justify-content:space-between;padding:14px;border:1px solid #ffffff13;border-radius:14px;background:#020b1488;color:#8ca0b7;font-size:8px;letter-spacing:.11em}.stageFlow b{color:#557cff}.badge{position:absolute;right:-20px;top:28px;width:116px;height:116px;border-radius:50%;background:linear-gradient(145deg,#5b81ff,#7460ff);display:grid;place-content:center;text-align:center;box-shadow:0 22px 50px #5367ff55;transform:rotate(6deg)}.badge strong{font-family:var(--font-barlow),sans-serif;font-size:38px;line-height:.8}.badge span{width:75px;margin-top:8px;font-size:8px;line-height:1.3;letter-spacing:.08em}.stageTag{position:absolute;left:-16px;bottom:18px;padding:9px 12px;border-radius:9px;background:var(--cyan);color:#07111f;font-size:9px;font-weight:900;letter-spacing:.11em;transform:rotate(-3deg)}.proof{position:relative;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #ffffff16}.proof div{min-height:118px;padding:27px 23px;border-right:1px solid #ffffff16;display:flex;flex-direction:column;gap:6px}.proof div:last-child{border-right:0}.proof strong{font-family:var(--font-barlow),sans-serif;font-size:35px}.proof span{font-size:10px;color:#8396ad}.marqueeSection{padding:30px 0 18px;background:#fff;border-bottom:1px solid var(--line)}.marqueeHead{display:flex;align-items:end;justify-content:space-between}.marqueeHead .eyebrow{margin:0}.marqueeHead span{font-size:12px;color:#53647a;font-weight:700}.marquee{overflow:hidden;margin-top:20px;border-top:1px solid #edf1f6;padding-top:17px}.track{width:max-content;display:flex;animation:slide 30s linear infinite}.track span{padding:0 30px;font-family:var(--font-barlow),sans-serif;font-size:23px;font-weight:750;color:#95a2b2;text-transform:uppercase}.track span:after{content:"•";margin-left:60px;color:var(--blue)}@keyframes slide{to{transform:translateX(-50%)}}.section{padding:108px 0}.intro,.twoHead{display:flex;justify-content:space-between;align-items:end;gap:50px;margin-bottom:42px}.sectionTitle{margin:0;font-size:clamp(45px,5vw,68px);line-height:.95}.intro>p,.twoHead>p{max-width:410px;margin:0;color:var(--muted);font-size:13px;line-height:1.7}.three{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.card{position:relative;min-height:290px;padding:28px;border:1px solid var(--line);border-radius:22px;background:#fff}.card .num{position:absolute;right:25px;top:24px;color:#a3b0c0;font-size:10px}.card .icon{font-size:19px;color:var(--blue)}.card h3{margin:82px 0 13px;font-size:22px}.card p{margin:0;color:var(--muted);font-size:13px;line-height:1.65}.dark{padding:108px 0;background:#07111f;color:#fff}.darkIntro{display:grid;grid-template-columns:1.2fr .8fr;gap:75px;align-items:end;margin-bottom:42px}.darkTitle{margin:0;font-size:clamp(48px,5.6vw,76px);line-height:.92}.darkIntro>p{margin:0;color:#96a8bd;line-height:1.7;font-size:13px}.engine{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.engine article{min-height:280px;padding:22px;border:1px solid #ffffff16;border-radius:18px;background:#0c192a;display:flex;flex-direction:column}.engine article span{color:#6d829a;font-size:10px}.engine article b{margin-top:auto;font-size:13px;letter-spacing:.11em}.engine article p{color:#90a4bb;font-size:11px;line-height:1.8}.engine .featured{background:linear-gradient(145deg,#345fe6,#6a55ff);border-color:transparent}.engine .featured p,.engine .featured span{color:#ffffffbb}.ads{background:#f2f6fb}.adsGrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:56px}.adLead .sectionTitle em{font-style:normal;color:var(--blue)}.adLead>p{max-width:480px;color:var(--muted);font-size:13px;line-height:1.7}.budget{width:230px;margin-top:30px;padding:20px;border-radius:18px;background:#07111f;color:#fff;display:flex;flex-direction:column}.budget span{font-size:9px;color:#7e91a9;letter-spacing:.13em}.budget strong{font-family:var(--font-barlow),sans-serif;font-size:45px}.budget small{color:#8fa1b7}.split{display:grid;grid-template-columns:1fr 1fr;gap:13px}.split article{min-height:210px;padding:24px;border:1px solid var(--line);border-radius:20px;background:#fff}.split strong{font-family:var(--font-barlow),sans-serif;font-size:42px;color:var(--blue)}.split h3{margin:18px 0 8px;font-size:18px}.split p{margin:0;color:var(--muted);font-size:11px;line-height:1.6}.funnel{display:flex;justify-content:space-between;gap:9px;align-items:center;margin-top:36px;padding:18px 20px;border:1px solid var(--line);border-radius:15px;background:#fff;color:#5b6c81;font-size:8px;font-weight:850;letter-spacing:.08em}.funnel b{color:var(--blue)}.position{min-height:335px;padding:34px;border:1px solid #dbe5f4;border-radius:26px;background:linear-gradient(135deg,#eaf1ff,#f4f1ff,#e9fbfb);position:relative;overflow:hidden}.position:after{content:"AI";position:absolute;right:18px;bottom:-75px;font-family:var(--font-barlow),sans-serif;font-weight:800;font-size:250px;color:#517cff10}.position>span{font-size:9px;font-weight:850;letter-spacing:.16em;color:#63758c}.position h3{position:relative;z-index:2;margin:76px 0 27px;font-family:var(--font-barlow),sans-serif;font-size:clamp(48px,6vw,78px);line-height:.94;letter-spacing:-.04em}.pills{position:relative;z-index:2;display:flex;gap:8px;flex-wrap:wrap}.pills i{font-style:normal;padding:10px 12px;border:1px solid #7086a233;border-radius:999px;background:#ffffffaa;color:#53647a;font-size:10px;font-weight:750}.searchCols{display:grid;grid-template-columns:1fr 1fr;gap:15px}.searchCard{min-height:420px;padding:29px;border:1px solid #ffffff16;border-radius:22px;background:#0c1a2c}.searchCard>span{font-size:9px;color:#748aa2;letter-spacing:.15em}.searchCard h3{margin:55px 0 25px;font-size:28px}.cloud{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}.cloud i{font-style:normal;padding:9px 10px;border:1px solid #ffffff17;border-radius:9px;background:#112136;color:#9db0c6;font-size:9px}.searchCard ul,.scopeCard ul{list-style:none;margin:0;padding:0;display:grid;gap:12px;color:#a2b3c6;font-size:11px}.searchCard li:before{content:"↗";margin-right:9px;color:var(--cyan)}.geo{background:linear-gradient(145deg,#16274b,#281f52)}.four{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.mini{min-height:260px;padding:26px;border:1px solid var(--line);border-radius:20px;background:#fff}.mini span{color:var(--blue);font-size:10px;font-weight:850}.mini h3{margin:78px 0 12px;font-size:20px}.mini p{margin:0;color:var(--muted);font-size:12px;line-height:1.65}.roadmap{background:#fff}.roadHead{display:flex;align-items:end;justify-content:space-between;margin-bottom:38px}.roadHead>span{color:#6b7d92;font-size:9px;letter-spacing:.12em}.roadGrid{display:grid;grid-template-columns:.9fr 1.1fr;gap:14px}.roadFeature{min-height:570px;padding:31px;border-radius:24px;background:#07111f;color:#fff;display:flex;flex-direction:column}.roadFeature>span{color:#7389a4;font-size:9px;letter-spacing:.15em}.roadFeature h3{margin:auto 0 20px;font-family:var(--font-barlow),sans-serif;font-size:66px;line-height:.85}.roadFeature p{color:#99aabe;font-size:12px;line-height:1.7}.roadList{display:grid;gap:9px}.roadList article{min-height:105px;padding:17px 19px;border:1px solid var(--line);border-radius:17px;background:#fafcff;display:grid;grid-template-columns:50px 1fr 18px;gap:14px;align-items:center}.roadList article>strong{font-family:var(--font-barlow),sans-serif;font-size:33px;color:#c1cad5}.roadList small{font-size:8px;color:var(--blue);font-weight:850;letter-spacing:.12em}.roadList h3{margin:3px 0 4px;font-size:16px}.roadList p{margin:0;color:var(--muted);font-size:10px;line-height:1.55}.roadList article>b{color:var(--blue)}.scale{margin-top:14px;padding:27px 29px;border-radius:21px;background:linear-gradient(100deg,#4d70ff,#6559ff 50%,#4ba5d9);color:#fff;display:grid;grid-template-columns:.65fr 1.25fr auto;gap:35px;align-items:center}.scale span{font-size:9px;color:#ffffffbb;letter-spacing:.14em}.scale h3{margin:4px 0 0;font-family:var(--font-barlow),sans-serif;font-size:30px}.scale p{margin:0;color:#ffffffd0;font-size:11px;line-height:1.65}.metrics{background:#eef4fa}.kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}.kpis article{min-height:145px;padding:23px;border:1px solid var(--line);border-radius:18px;background:#fff;display:flex;flex-direction:column;justify-content:end}.kpis strong{font-family:var(--font-barlow),sans-serif;font-size:34px}.kpis span{color:var(--muted);font-size:10px}.scopeIntro{max-width:760px;margin-bottom:40px}.scopeIntro p{color:#96a8bd;font-size:13px;line-height:1.7}.scopeGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}.scopeCard{min-height:380px;padding:27px;border:1px solid #ffffff16;border-radius:21px;background:#0b1829}.scopeCard>span{font-size:9px;color:#768ca5;letter-spacing:.15em}.scopeCard h3{margin:72px 0 23px;font-size:24px}.scopeCard li{display:flex;align-items:center;gap:8px}.scopeCard li:before{content:"✓";color:var(--cyan)}.scopeCard.featured{background:linear-gradient(155deg,#102347,#142958)}.media{margin-top:13px;padding:23px 27px;border:1px solid #ffffff16;border-radius:18px;display:grid;grid-template-columns:.7fr 1.3fr;gap:35px;align-items:center}.media div{display:flex;flex-direction:column}.media span{font-size:9px;color:#7e93ab;letter-spacing:.14em}.media strong{font-family:var(--font-barlow),sans-serif;font-size:35px}.media p{margin:0;color:#90a2b8;font-size:11px;line-height:1.65}.ctaWrap{padding:18px 0 105px;background:#07111f;color:#fff}.cta{min-height:520px;padding:52px;border:1px solid #ffffff16;border-radius:30px;background:radial-gradient(circle at 80% 20%,#5d6fff66,transparent 40%),linear-gradient(145deg,#102039,#0d192a);position:relative;overflow:hidden}.cta:after{content:"↗";position:absolute;right:50px;bottom:-100px;font-family:var(--font-barlow),sans-serif;font-size:340px;color:#ffffff0a}.cta h2{position:relative;z-index:2;max-width:830px;margin:80px 0 20px;font-size:clamp(50px,5.8vw,78px);line-height:.92}.cta h2 em{font-style:normal;color:#72dfe4}.cta>p:not(.eyebrowLight){position:relative;z-index:2;max-width:610px;color:#9aacbf;font-size:12px;line-height:1.7}.cta a{position:relative;z-index:2;display:inline-flex;margin-top:20px;padding:14px 17px;border-radius:12px;background:#fff;color:#091321;font-size:11px;font-weight:850}.footer{padding:26px 0 34px;background:#07111f;color:#fff}.footer .shell{padding-top:21px;border-top:1px solid #ffffff16;display:flex;justify-content:space-between;align-items:end}.footer b{font-size:12px}.footer span,.footer p{display:block;margin:3px 0 0;color:#778ca5;font-size:9px}
@media(max-width:980px){.navLinks{display:none}.heroGrid,.adsGrid,.darkIntro,.roadGrid{grid-template-columns:1fr}.proof{grid-template-columns:1fr 1fr}.three,.scopeGrid{grid-template-columns:1fr}.engine{grid-template-columns:1fr 1fr}.engine article:last-child{grid-column:1/-1}.four{grid-template-columns:1fr 1fr}.searchCols{grid-template-columns:1fr}}
@media(max-width:680px){.shell,.nav{width:calc(100% - 24px)}.brand small{display:none}.navCta{padding:10px 11px}.hero{padding-top:110px}.heroGrid{padding-top:44px;gap:44px}.hero h1{font-size:58px}.heroLead{font-size:14px}.actions,.heroMeta{align-items:flex-start;flex-direction:column;gap:14px}.stage{min-height:430px;border-radius:22px}.agent{left:18px;right:18px;top:72px}.badge{width:92px;height:92px;right:-7px}.badge strong{font-size:29px}.stageFlow{left:14px;right:14px;font-size:6px;gap:4px}.proof div{padding:21px 15px}.section,.dark{padding:76px 0}.intro,.twoHead,.roadHead{align-items:flex-start;flex-direction:column}.sectionTitle,.darkTitle,.cta h2{font-size:45px}.split,.four,.kpis,.engine{grid-template-columns:1fr}.engine article:last-child{grid-column:auto}.funnel{overflow:auto;justify-content:flex-start;white-space:nowrap}.position{padding:23px;min-height:390px}.position h3{margin-top:90px;font-size:49px}.roadFeature{min-height:460px}.roadFeature h3{font-size:55px}.scale,.media{grid-template-columns:1fr;gap:16px}.cta{padding:29px;min-height:550px}.footer .shell{align-items:flex-start;flex-direction:column;gap:14px}}
`;

const CHANNELS = ["Google Search","Commercial SEO","Competitor SEO","AI Search","GEO","CRO","Authority","Analytics"];
const AD_SPLIT = [
  ["40%","AI Website Agent","High-intent searches around AI assistants and AI agents for websites."],
  ["30%","Support + Lead Gen","Searches around AI support, qualification and conversational lead capture."],
  ["20%","Competitor Intent","Alternative and comparison searches around Chatbase, Tidio, Intercom and Botpress."],
  ["10%","Controlled Testing","New terms, messages and landing-page hypotheses without diluting the core budget."],
];
const ROADMAP = [
  ["01","DAYS 1–3","Foundation","Tracking, keyword research, landing-page review, competitor mapping and campaign build."],
  ["02","DAY 4–5","Go Live","Launch the first US Google Search campaign and begin collecting real demand data."],
  ["03","DAYS 6–15","Learn","Search terms, negatives, ad testing, CRO fixes and priority technical SEO improvements."],
  ["04","DAYS 16–30","Build","Expand winning terms, improve commercial pages, build competitor content and implement GEO foundations."],
  ["05","DAYS 31–45","Validate","Refine CAC signals, improve activation paths, strengthen authority and identify what deserves scale."],
];
const KPIS = [["CPC","Paid search efficiency"],["Cost / Trial","Acquisition quality"],["Activation","Trial → meaningful use"],["CAC","Paid customer economics"],["Organic","Commercial conversions"],["AI Visibility","Citations + mentions"]];

export default function BuzzSpotPage() {
  return (
    <div className="page">
      <style>{PAGE_CSS}</style>
      <header className="navWrap">
        <nav className="nav">
          <a className="brand" href="#top"><b>BUZZSPOT</b><small>USA GROWTH PROPOSAL</small></a>
          <div className="navLinks"><a href="#engine">Growth Engine</a><a href="#ads">Google Ads</a><a href="#search">SEO + GEO</a><a href="#roadmap">45-Day Plan</a></div>
          <a className="navCta" href="#scope">View scope ↗</a>
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <div className="glow" />
          <div className="shell">
            <div className="heroGrid">
              <div>
                <p className="eyebrow">Growth Escalators × BuzzSpot · USA</p>
                <h1>TURN SEARCH DEMAND INTO <em>SAAS CUSTOMERS.</em></h1>
                <p className="heroLead">A focused growth system combining Google Ads, SEO, AISEO and GEO to capture high-intent US demand, convert it into activated trials and build compounding search authority.</p>
                <div className="actions"><a className="primary" href="#engine">Explore the growth engine ↗</a><a className="textLink" href="#roadmap">See the 45-day plan ↗</a></div>
                <div className="heroMeta"><span><b>$600</b>monthly Google media budget</span><span><b>Day 4–5</b>first campaign live</span></div>
              </div>
              <div className="stage">
                <div className="stageTop"><span>SEARCH-TO-REVENUE SYSTEM</span><i>LIVE PLAN</i></div>
                <div className="agent">
                  <div className="agentHead"><span className="dot"/><b>BuzzSpot Website Agent</b><small>Active</small></div>
                  <div className="chat"><span className="user">Can this qualify leads from my website?</span><span className="bot">✦ Yes — capture intent, qualify visitors and route the conversation.</span></div>
                  <div className="agentInput">Ask your website… <b>↗</b></div>
                </div>
                <div className="stageFlow"><span>SEARCH</span><b>→</b><span>DEMO</span><b>→</b><span>TRIAL</span><b>→</b><span>PAID</span></div>
                <div className="badge"><strong>4–5</strong><span>DAYS TO FIRST CAMPAIGN</span></div>
                <div className="stageTag">US MARKET × SEARCH</div>
              </div>
            </div>
            <div className="proof">
              <div><strong>$600</strong><span>monthly Google Ads budget</span></div>
              <div><strong>45</strong><span>days to launch + validate</span></div>
              <div><strong>1</strong><span>connected acquisition system</span></div>
              <div><strong>46+</strong><span>optimize + scale what works</span></div>
            </div>
          </div>
        </section>

        <section className="marqueeSection">
          <div className="shell"><div className="marqueeHead"><p className="eyebrow">One commercial goal</p><span>Discover → Experience → Activate → Convert → Scale</span></div></div>
          <div className="marquee"><div className="track">{CHANNELS.concat(CHANNELS).map((x,i)=><span key={x+i}>{x}</span>)}</div></div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="intro"><div><p className="eyebrow">The opportunity</p><h2 className="sectionTitle">BuzzSpot has the product.<br/>Now we build the demand engine.</h2></div></div>
            <div className="three">
              <article className="card"><span className="icon">⌕</span><span className="num">01</span><h3>Capture High-Intent Demand</h3><p>Reach US businesses already looking for AI website agents, support automation and conversational lead generation.</p></article>
              <article className="card"><span className="icon">◎</span><span className="num">02</span><h3>Convert Visitors Into Trials</h3><p>Use the product experience and website demo as the bridge from search intent to meaningful activation.</p></article>
              <article className="card"><span className="icon">↗</span><span className="num">03</span><h3>Build Compounding Visibility</h3><p>Grow authority across traditional search and AI-driven discovery so acquisition becomes less dependent on paid media over time.</p></article>
            </div>
          </div>
        </section>

        <section id="engine" className="dark">
          <div className="shell">
            <div className="darkIntro"><div><p className="eyebrowLight">Our approach</p><h2 className="darkTitle">The search-to-revenue engine we build for BuzzSpot.</h2></div><p>Paid search gives us immediate market feedback. SEO, GEO and conversion work turn those learnings into a durable acquisition system.</p></div>
            <div className="engine">
              <article><span>01</span><b>DISCOVER</b><p>Google Ads<br/>Organic Search<br/>AI Search<br/>Competitor Searches</p></article>
              <article><span>02</span><b>EXPERIENCE</b><p>Landing Pages<br/>Website Demo<br/>Product Proof<br/>Use Cases</p></article>
              <article><span>03</span><b>ACTIVATE</b><p>Create Trial<br/>Crawl Website<br/>Configure Agent<br/>Install Widget</p></article>
              <article><span>04</span><b>CONVERT</b><p>Paid Plan<br/>Upgrade<br/>Multiple Sites<br/>Agency Usage</p></article>
              <article className="featured"><span>05</span><b>SCALE</b><p>Increase Spend<br/>Expand SEO<br/>Build Authority<br/>Grow AI Citations</p></article>
            </div>
          </div>
        </section>

        <section id="ads" className="section ads">
          <div className="shell">
            <div className="adsGrid">
              <div className="adLead"><p className="eyebrow">Google Ads · USA</p><h2 className="sectionTitle">Capture existing demand from <em>Day 4–5.</em></h2><p>With a $600 monthly media budget, we stay narrow: one tightly controlled Search program built around commercial intent rather than broad awareness.</p><div className="budget"><span>MONTHLY MEDIA</span><strong>$600</strong><small>Paid directly to Google</small></div></div>
              <div className="split">{AD_SPLIT.map(([v,t,c])=><article key={t}><strong>{v}</strong><h3>{t}</h3><p>{c}</p></article>)}</div>
            </div>
            <div className="funnel"><span>GOOGLE SEARCH</span><b>→</b><span>LANDING PAGE</span><b>→</b><span>TRY BUZZSPOT</span><b>→</b><span>TRIAL</span><b>→</b><span>ACTIVATION</span><b>→</b><span>PAID</span></div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="twoHead"><div><p className="eyebrow">Product positioning</p><h2 className="sectionTitle">Do not sell “another chatbot.”</h2></div><p>Lead with the business outcome and make the website demo the acquisition hook.</p></div>
            <div className="position"><span>PRIMARY MESSAGE</span><h3>Turn Your Website Into an AI Agent.</h3><div className="pills"><i>Answer questions</i><i>Qualify visitors</i><i>Capture leads</i><i>Book meetings</i><i>Human handoff</i></div></div>
          </div>
        </section>

        <section id="search" className="dark">
          <div className="shell">
            <div className="darkIntro"><div><p className="eyebrowLight">SEO + AISEO + GEO</p><h2 className="darkTitle">Be found on Google.<br/>Be understood by AI.</h2></div><p>We build pages that capture commercial search intent and strengthen the authority signals AI systems use when discovering and citing products.</p></div>
            <div className="searchCols">
              <article className="searchCard"><span>01 / SEARCH ENGINE GROWTH</span><h3>Commercial visibility</h3><div className="cloud"><i>AI website agent</i><i>AI chatbot for website</i><i>AI support agent</i><i>Chatbase alternative</i><i>Tidio alternative</i><i>WordPress</i><i>Shopify</i><i>Webflow</i></div><ul><li>Technical + on-page SEO</li><li>Commercial and use-case pages</li><li>Competitor comparison pages</li><li>Internal linking + authority building</li></ul></article>
              <article className="searchCard geo"><span>02 / AI SEARCH GROWTH</span><h3>Entity + citation authority</h3><div className="cloud"><i>Google AI</i><i>ChatGPT</i><i>Gemini</i><i>Copilot</i><i>Perplexity</i></div><ul><li>Citation-ready product content</li><li>Original comparisons + proof</li><li>Review and directory authority</li><li>Digital PR + third-party mentions</li></ul></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="intro"><div><p className="eyebrow">What we fix first</p><h2 className="sectionTitle">Four things that make every channel work harder.</h2></div></div>
            <div className="four">
              <article className="mini"><span>01</span><h3>Positioning</h3><p>Move beyond the crowded “AI chatbot” category and own the AI website-agent outcome.</p></article>
              <article className="mini"><span>02</span><h3>Conversion</h3><p>Make the product demo and activation journey the center of the acquisition experience.</p></article>
              <article className="mini"><span>03</span><h3>Authority</h3><p>Strengthen comparison content, commercial pages, proof and credible third-party signals.</p></article>
              <article className="mini"><span>04</span><h3>Measurement</h3><p>Connect traffic to trials, activation, paid subscriptions and retention rather than vanity metrics.</p></article>
            </div>
          </div>
        </section>

        <section id="roadmap" className="section roadmap">
          <div className="shell">
            <div className="roadHead"><div><p className="eyebrow">45-day launch + validation sprint</p><h2 className="sectionTitle">Launch early.<br/>Learn from real demand.</h2></div><span>DAY 1 → 5 → 15 → 30 → 45</span></div>
            <div className="roadGrid">
              <article className="roadFeature"><span>THE FIRST 45 DAYS</span><h3>BUILD.<br/>LAUNCH.<br/>VALIDATE.</h3><p>We do not spend weeks planning in isolation. The first campaign goes live by Day 4–5, then paid and organic work evolves around real market behaviour.</p></article>
              <div className="roadList">{ROADMAP.map(([n,w,t,c])=><article key={n}><strong>{n}</strong><div><small>{w}</small><h3>{t}</h3><p>{c}</p></div><b>↗</b></article>)}</div>
            </div>
            <div className="scale"><div><span>DAY 46+</span><h3>OPTIMIZE & SCALE</h3></div><p>Increase spend only where acquisition economics support it. Expand winning SEO clusters, strengthen authority and grow AI-search visibility.</p><b>↗</b></div>
          </div>
        </section>

        <section className="section metrics">
          <div className="shell">
            <div className="twoHead"><div><p className="eyebrow">Success metrics</p><h2 className="sectionTitle">Growth we can actually measure.</h2></div><p>Traffic is useful. Revenue signals determine what gets scaled.</p></div>
            <div className="kpis">{KPIS.map(([v,l])=><article key={v}><strong>{v}</strong><span>{l}</span></article>)}</div>
          </div>
        </section>

        <section id="scope" className="dark">
          <div className="shell">
            <div className="scopeIntro"><p className="eyebrowLight">Scope of work</p><h2 className="darkTitle">One connected growth engagement.</h2><p>Google Ads creates immediate demand intelligence. SEO and GEO turn those learnings into compounding visibility. CRO and analytics connect both to commercial outcomes.</p></div>
            <div className="scopeGrid">
              <article className="scopeCard"><span>GOOGLE ADS</span><h3>Demand Capture</h3><ul><li>Campaign + keyword setup</li><li>Ad copy + testing</li><li>Negatives + search terms</li><li>Conversion tracking</li><li>Ongoing optimization</li></ul></article>
              <article className="scopeCard featured"><span>SEO</span><h3>Organic Growth</h3><ul><li>Technical SEO</li><li>Commercial pages</li><li>Competitor content</li><li>Internal linking</li><li>Authority + backlinks</li></ul></article>
              <article className="scopeCard"><span>AISEO / GEO</span><h3>AI Discoverability</h3><ul><li>Entity optimization</li><li>Citation-ready content</li><li>Third-party mentions</li><li>AI visibility monitoring</li><li>GEO reporting</li></ul></article>
            </div>
            <div className="media"><div><span>GOOGLE MEDIA INVESTMENT</span><strong>$600 / month</strong></div><p>Paid directly to Google. Growth Escalators' strategy, management, SEO, GEO and CRO engagement fee can be finalized separately.</p></div>
          </div>
        </section>

        <section className="ctaWrap">
          <div className="shell"><div className="cta"><p className="eyebrowLight">Ready to start?</p><h2>Launch fast.<br/>Learn from real demand.<br/><em>Scale what works.</em></h2><p>First Google campaign live by Day 4–5. A complete US search acquisition system built and validated across the first 45 days.</p><a href="#top">Start the 45-day growth sprint ↗</a></div></div>
        </section>
      </main>

      <footer className="footer"><div className="shell"><div><b>Growth Escalators</b><span>IT Consulting · Data & AI · Digital Growth</span></div><p>Prepared for BuzzSpot · 2026</p></div></footer>
    </div>
  );
}
