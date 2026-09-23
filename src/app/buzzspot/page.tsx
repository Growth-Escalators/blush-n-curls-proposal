import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BuzzSpot USA Growth Proposal | Growth Escalators",
  description:
    "A private 45-day USA growth proposal for BuzzSpot covering Google Ads, SEO, AISEO, GEO, conversion optimization and search-to-revenue measurement.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const PAGE_CSS = String.raw`
.page{--ink:#07111f;--muted:#607089;--line:#dce5ef;--blue:#537cff;--cyan:#68e0e4;--violet:#7767ff;min-height:100vh;background:#f6f8fb;color:var(--ink);font-family:var(--font-inter),Inter,sans-serif;overflow:hidden}.page *{box-sizing:border-box}.page a{text-decoration:none;color:inherit}.shell{width:min(1180px,calc(100% - 48px));margin:auto}.navWrap{position:fixed;z-index:50;left:0;right:0;top:0;padding:14px 0;pointer-events:none}.nav{pointer-events:auto;width:min(1180px,calc(100% - 48px));margin:auto;min-height:62px;padding:10px 12px 10px 19px;border:1px solid #ffffff22;border-radius:18px;background:#07111fe8;backdrop-filter:blur(18px);color:#fff;display:flex;align-items:center;justify-content:space-between;box-shadow:0 20px 50px #02071144}.brand{display:flex;flex-direction:column;gap:4px}.brand b{font-family:var(--font-barlow),sans-serif;font-size:21px;letter-spacing:.05em}.brand small{font-size:9px;color:#8fa2ba;letter-spacing:.17em}.navLinks{display:flex;gap:25px;color:#b7c4d4;font-size:12px}.navCta,.primary{display:inline-flex;align-items:center;gap:8px;border-radius:12px;font-size:12px;font-weight:800}.navCta{padding:12px 15px;background:#fff;color:#091321!important}.hero{position:relative;background:#07111f;color:#fff;padding:150px 0 0;min-height:840px}.hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(#ffffff08 1px,transparent 1px),linear-gradient(90deg,#ffffff08 1px,transparent 1px);background-size:44px 44px;mask-image:linear-gradient(to bottom,#000,transparent 90%)}.glow{position:absolute;width:560px;height:560px;border-radius:50%;right:5%;top:30px;background:#557cff;filter:blur(120px);opacity:.2}.heroGrid{position:relative;display:grid;grid-template-columns:1.02fr .98fr;gap:70px;align-items:center;padding:66px 0 72px}.eyebrow,.eyebrowLight{margin:0 0 17px;text-transform:uppercase;letter-spacing:.18em;font-size:10px;font-weight:800}.eyebrow{color:#667791}.eyebrowLight,.hero .eyebrow{color:#8da3bf}.hero h1,.sectionTitle,.darkTitle,.cta h2{font-family:var(--font-barlow),sans-serif;letter-spacing:-.045em}.hero h1{font-size:clamp(64px,7.3vw,106px);line-height:.84;margin:0}.hero h1 em{display:block;font-style:normal;background:linear-gradient(90deg,#7ba2ff,#72e4e8,#aa95ff);-webkit-background-clip:text;color:transparent}.heroLead{max-width:610px;margin:27px 0 0;color:#adbacb;line-height:1.7;font-size:16px}.actions{display:flex;align-items:center;gap:20px;margin-top:32px}.primary{padding:15px 18px;background:#fff;color:#081321!important}.textLink{font-size:12px;font-weight:750;color:#b6c6d9!important}.heroMeta{display:flex;gap:34px;margin-top:40px;padding-top:21px;border-top:1px solid #ffffff16}.heroMeta span{display:flex;flex-direction:column;gap:5px;color:#8296ad;font-size:10px;letter-spacing:.06em;text-transform:uppercase}.heroMeta b{font-size:19px;color:#fff;letter-spacing:-.02em;text-transform:none}.stage{position:relative;min-height:515px;border:1px solid #ffffff20;border-radius:30px;background:linear-gradient(145deg,#162943,#091624);box-shadow:0 45px 100px #0006;padding:20px}.stageTop{display:flex;justify-content:space-between;color:#8294aa;font-size:9px;letter-spacing:.13em}.stageTop i{font-style:normal;color:#82e2ca}.agent{position:absolute;left:42px;right:42px;top:85px;padding:18px;border-radius:20px;background:#f9fbfe;color:#0b1523;box-shadow:0 25px 70px #01081266}.agentHead{display:flex;gap:8px;align-items:center;padding-bottom:14px;border-bottom:1px solid #e6edf5;font-size:12px}.dot{width:8px;height:8px;border-radius:50%;background:#58d3a6;box-shadow:0 0 0 4px #58d3a622}.agentHead b{flex:1}.agentHead small{color:#6f8197}.chat{display:grid;gap:10px;padding:18px 0}.chat span{max-width:82%;padding:12px 14px;border-radius:14px;font-size:11px;line-height:1.5}.chat .user{justify-self:end;background:#eaf0ff}.chat .bot{background:#eef8f7;border:1px solid #d8eeee}.agentInput{display:flex;justify-content:space-between;border:1px solid #dce5ee;border-radius:12px;padding:11px 13px;color:#8392a6;font-size:11px}.agentInput b{color:var(--blue)}.stageFlow{position:absolute;left:28px;right:28px;bottom:62px;display:flex;align-items:center;justify-content:space-between;padding:14px;border:1px solid #ffffff13;border-radius:14px;background:#020b1488;color:#8ca0b7;font-size:8px;letter-spacing:.11em}.stageFlow b{color:#557cff}.badge{position:absolute;right:-20px;top:28px;width:116px;height:116px;border-radius:50%;background:linear-gradient(145deg,#5b81ff,#7460ff);display:grid;place-content:center;text-align:center;box-shadow:0 22px 50px #5367ff55;transform:rotate(6deg)}.badge strong{font-family:var(--font-barlow),sans-serif;font-size:38px;line-height:.8}.badge span{width:75px;margin-top:8px;font-size:8px;line-height:1.3;letter-spacing:.08em}.stageTag{position:absolute;left:-16px;bottom:18px;padding:9px 12px;border-radius:9px;background:var(--cyan);color:#07111f;font-size:9px;font-weight:900;letter-spacing:.11em;transform:rotate(-3deg)}.proof{position:relative;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #ffffff16}.proof div{min-height:118px;padding:27px 23px;border-right:1px solid #ffffff16;display:flex;flex-direction:column;gap:6px}.proof div:last-child{border-right:0}.proof strong{font-family:var(--font-barlow),sans-serif;font-size:35px}.proof span{font-size:10px;color:#8396ad}.marqueeSection{padding:30px 0 18px;background:#fff;border-bottom:1px solid var(--line)}.marqueeHead{display:flex;align-items:end;justify-content:space-between}.marqueeHead .eyebrow{margin:0}.marqueeHead span{font-size:12px;color:#53647a;font-weight:700}.marquee{overflow:hidden;margin-top:20px;border-top:1px solid #edf1f6;padding-top:17px}.track{width:max-content;display:flex;animation:slide 30s linear infinite}.track span{padding:0 30px;font-family:var(--font-barlow),sans-serif;font-size:23px;font-weight:750;color:#95a2b2;text-transform:uppercase}.track span:after{content:"•";margin-left:60px;color:var(--blue)}@keyframes slide{to{transform:translateX(-50%)}}.section{padding:108px 0}.intro,.twoHead{display:flex;justify-content:space-between;align-items:end;gap:50px;margin-bottom:42px}.sectionTitle{margin:0;font-size:clamp(45px,5vw,68px);line-height:.95}.intro>p,.twoHead>p{max-width:410px;margin:0;color:var(--muted);font-size:13px;line-height:1.7}.three{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.card{position:relative;min-height:290px;padding:28px;border:1px solid var(--line);border-radius:22px;background:#fff}.card .num{position:absolute;right:25px;top:24px;color:#a3b0c0;font-size:10px}.card .icon{font-size:19px;color:var(--blue)}.card h3{margin:82px 0 13px;font-size:22px}.card p{margin:0;color:var(--muted);font-size:13px;line-height:1.65}.dark{padding:108px 0;background:#07111f;color:#fff}.darkIntro{display:grid;grid-template-columns:1.2fr .8fr;gap:75px;align-items:end;margin-bottom:42px}.darkTitle{margin:0;font-size:clamp(48px,5.6vw,76px);line-height:.92}.darkIntro>p{margin:0;color:#96a8bd;line-height:1.7;font-size:13px}.engine{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.engine article{min-height:280px;padding:22px;border:1px solid #ffffff16;border-radius:18px;background:#0c192a;display:flex;flex-direction:column}.engine article span{color:#6d829a;font-size:10px}.engine article b{margin-top:auto;font-size:13px;letter-spacing:.11em}.engine article p{color:#90a4bb;font-size:11px;line-height:1.8}.engine .featured{background:linear-gradient(145deg,#345fe6,#6a55ff);border-color:transparent}.engine .featured p,.engine .featured span{color:#ffffffbb}.ads{background:#f2f6fb}.adsGrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:56px}.adLead .sectionTitle em{font-style:normal;color:var(--blue)}.adLead>p{max-width:480px;color:var(--muted);font-size:13px;line-height:1.7}.budget{width:230px;margin-top:30px;padding:20px;border-radius:18px;background:#07111f;color:#fff;display:flex;flex-direction:column}.budget span{font-size:9px;color:#7e91a9;letter-spacing:.13em}.budget strong{font-family:var(--font-barlow),sans-serif;font-size:45px}.budget small{color:#8fa1b7}.split{display:grid;grid-template-columns:1fr 1fr;gap:13px}.split article{min-height:210px;padding:24px;border:1px solid var(--line);border-radius:20px;background:#fff}.split strong{font-family:var(--font-barlow),sans-serif;font-size:42px;color:var(--blue)}.split h3{margin:18px 0 8px;font-size:18px}.split p{margin:0;color:var(--muted);font-size:11px;line-height:1.6}.funnel{display:flex;justify-content:space-between;gap:9px;align-items:center;margin-top:36px;padding:18px 20px;border:1px solid var(--line);border-radius:15px;background:#fff;color:#5b6c81;font-size:8px;font-weight:850;letter-spacing:.08em}.funnel b{color:var(--blue)}.adsDetail{margin-top:22px;padding-top:32px;border-top:1px solid var(--line)}.adsDetailHead{display:flex;align-items:end;justify-content:space-between;gap:40px;margin-bottom:18px}.adsDetailHead h3{margin:0;font-family:var(--font-barlow),sans-serif;font-size:34px;letter-spacing:-.03em}.adsDetailHead p{max-width:480px;margin:0;color:var(--muted);font-size:12px;line-height:1.7}.adsDetailGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:11px}.adsDetailCard{min-height:235px;padding:23px;border:1px solid var(--line);border-radius:18px;background:#fff}.adsDetailCard>span{display:block;color:var(--blue);font-size:9px;font-weight:850;letter-spacing:.12em}.adsDetailCard h4{margin:58px 0 10px;font-size:17px}.adsDetailCard p{margin:0;color:var(--muted);font-size:10px;line-height:1.7}.adsOps{margin-top:12px;padding:17px 19px;border-radius:14px;background:#07111f;color:#fff;display:flex;justify-content:space-between;gap:18px;align-items:center}.adsOps b{font-size:11px}.adsOps span{color:#8fa2b8;font-size:9px;line-height:1.6}.adsOps strong{color:var(--cyan);font-size:10px;letter-spacing:.08em;white-space:nowrap}.position{min-height:335px;padding:34px;border:1px solid #dbe5f4;border-radius:26px;background:linear-gradient(135deg,#eaf1ff,#f4f1ff,#e9fbfb);position:relative;overflow:hidden}.position:after{content:"AI";position:absolute;right:18px;bottom:-75px;font-family:var(--font-barlow),sans-serif;font-weight:800;font-size:250px;color:#517cff10}.position>span{font-size:9px;font-weight:850;letter-spacing:.16em;color:#63758c}.position h3{position:relative;z-index:2;margin:76px 0 27px;font-family:var(--font-barlow),sans-serif;font-size:clamp(48px,6vw,78px);line-height:.94;letter-spacing:-.04em}.pills{position:relative;z-index:2;display:flex;gap:8px;flex-wrap:wrap}.pills i{font-style:normal;padding:10px 12px;border:1px solid #7086a233;border-radius:999px;background:#ffffffaa;color:#53647a;font-size:10px;font-weight:750}.searchCols{display:grid;grid-template-columns:1fr 1fr;gap:15px}.searchCard{min-height:420px;padding:29px;border:1px solid #ffffff16;border-radius:22px;background:#0c1a2c}.searchCard>span{font-size:9px;color:#748aa2;letter-spacing:.15em}.searchCard h3{margin:55px 0 25px;font-size:28px}.cloud{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}.cloud i{font-style:normal;padding:9px 10px;border:1px solid #ffffff17;border-radius:9px;background:#112136;color:#9db0c6;font-size:9px}.searchCard ul,.scopeCard ul{list-style:none;margin:0;padding:0;display:grid;gap:12px;color:#a2b3c6;font-size:11px}.searchCard li:before{content:"↗";margin-right:9px;color:var(--cyan)}.geo{background:linear-gradient(145deg,#16274b,#281f52)}.four{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.mini{min-height:260px;padding:26px;border:1px solid var(--line);border-radius:20px;background:#fff}.mini span{color:var(--blue);font-size:10px;font-weight:850}.mini h3{margin:78px 0 12px;font-size:20px}.mini p{margin:0;color:var(--muted);font-size:12px;line-height:1.65}.roadmap{background:#fff}.roadHead{display:flex;align-items:end;justify-content:space-between;margin-bottom:38px}.roadHead>span{color:#6b7d92;font-size:9px;letter-spacing:.12em}.roadGrid{display:grid;grid-template-columns:.9fr 1.1fr;gap:14px}.roadFeature{min-height:570px;padding:31px;border-radius:24px;background:#07111f;color:#fff;display:flex;flex-direction:column}.roadFeature>span{color:#7389a4;font-size:9px;letter-spacing:.15em}.roadFeature h3{margin:auto 0 20px;font-family:var(--font-barlow),sans-serif;font-size:66px;line-height:.85}.roadFeature p{color:#99aabe;font-size:12px;line-height:1.7}.roadList{display:grid;gap:9px}.roadList article{min-height:105px;padding:17px 19px;border:1px solid var(--line);border-radius:17px;background:#fafcff;display:grid;grid-template-columns:50px 1fr 18px;gap:14px;align-items:center}.roadList article>strong{font-family:var(--font-barlow),sans-serif;font-size:33px;color:#c1cad5}.roadList small{font-size:8px;color:var(--blue);font-weight:850;letter-spacing:.12em}.roadList h3{margin:3px 0 4px;font-size:16px}.roadList p{margin:0;color:var(--muted);font-size:10px;line-height:1.55}.roadList article>b{color:var(--blue)}.scale{margin-top:14px;padding:27px 29px;border-radius:21px;background:linear-gradient(100deg,#4d70ff,#6559ff 50%,#4ba5d9);color:#fff;display:grid;grid-template-columns:.65fr 1.25fr auto;gap:35px;align-items:center}.scale span{font-size:9px;color:#ffffffbb;letter-spacing:.14em}.scale h3{margin:4px 0 0;font-family:var(--font-barlow),sans-serif;font-size:30px}.scale p{margin:0;color:#ffffffd0;font-size:11px;line-height:1.65}.metrics{background:#eef4fa}.kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}.kpis article{min-height:145px;padding:23px;border:1px solid var(--line);border-radius:18px;background:#fff;display:flex;flex-direction:column;justify-content:end}.kpis strong{font-family:var(--font-barlow),sans-serif;font-size:34px}.kpis span{color:var(--muted);font-size:10px}.scopeIntro{max-width:760px;margin-bottom:40px}.scopeIntro p{color:#96a8bd;font-size:13px;line-height:1.7}.scopeGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}.scopeCard{min-height:380px;padding:27px;border:1px solid #ffffff16;border-radius:21px;background:#0b1829}.scopeCard>span{font-size:9px;color:#768ca5;letter-spacing:.15em}.scopeCard h3{margin:72px 0 23px;font-size:24px}.scopeCard li{display:flex;align-items:center;gap:8px}.scopeCard li:before{content:"✓";color:var(--cyan)}.scopeCard.featured{background:linear-gradient(155deg,#102347,#142958)}.media{margin-top:13px;padding:23px 27px;border:1px solid #ffffff16;border-radius:18px;display:grid;grid-template-columns:.7fr 1.3fr;gap:35px;align-items:center}.media div{display:flex;flex-direction:column}.media span{font-size:9px;color:#7e93ab;letter-spacing:.14em}.media strong{font-family:var(--font-barlow),sans-serif;font-size:35px}.media p{margin:0;color:#90a2b8;font-size:11px;line-height:1.65}.ctaWrap{padding:18px 0 105px;background:#07111f;color:#fff}.cta{min-height:520px;padding:52px;border:1px solid #ffffff16;border-radius:30px;background:radial-gradient(circle at 80% 20%,#5d6fff66,transparent 40%),linear-gradient(145deg,#102039,#0d192a);position:relative;overflow:hidden}.cta:after{content:"↗";position:absolute;right:50px;bottom:-100px;font-family:var(--font-barlow),sans-serif;font-size:340px;color:#ffffff0a}.cta h2{position:relative;z-index:2;max-width:830px;margin:80px 0 20px;font-size:clamp(50px,5.8vw,78px);line-height:.92}.cta h2 em{font-style:normal;color:#72dfe4}.cta>p:not(.eyebrowLight){position:relative;z-index:2;max-width:610px;color:#9aacbf;font-size:12px;line-height:1.7}.cta a{position:relative;z-index:2;display:inline-flex;margin-top:20px;padding:14px 17px;border-radius:12px;background:#fff;color:#091321;font-size:11px;font-weight:850}.footer{padding:26px 0 34px;background:#07111f;color:#fff}.footer .shell{padding-top:21px;border-top:1px solid #ffffff16;display:flex;justify-content:space-between;align-items:end}.footer b{font-size:12px}.footer span,.footer p{display:block;margin:3px 0 0;color:#778ca5;font-size:9px}.pillars{display:grid;grid-template-columns:1fr 1fr;gap:14px}.pillarCard{min-height:390px;padding:30px;border:1px solid #ffffff16;border-radius:22px;background:#0c192a}.pillarCard>span{font-size:9px;color:#7890aa;letter-spacing:.15em}.pillarCard h3{margin:80px 0 16px;font-size:30px}.pillarCard p{color:#98abc0;font-size:12px;line-height:1.7}.pillarCard ul{list-style:none;margin:24px 0 0;padding:0;display:grid;gap:11px;color:#afbdd0;font-size:11px}.pillarCard li:before{content:"✓";margin-right:9px;color:var(--cyan)}.pillarCard.featured{background:linear-gradient(145deg,#16274b,#281f52)}.darkFunnel{border-color:#ffffff16;background:#0a1625;color:#8fa3bb}.seoOps{margin-top:14px;padding:18px 20px;border:1px solid #ffffff16;border-radius:15px;background:#0b1829;color:#fff;display:flex;align-items:center;justify-content:space-between;gap:20px}.seoOps b{font-size:11px}.seoOps span{color:#91a4bb;font-size:9px;line-height:1.6}.seoOps strong{color:var(--cyan);font-size:10px;letter-spacing:.08em;white-space:nowrap}.investment{background:#f4f7fb}.priceGrid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.priceCard{min-height:330px;padding:30px;border:1px solid var(--line);border-radius:23px;background:#fff;display:flex;flex-direction:column}.priceCard>span{font-size:9px;color:#6f8298;letter-spacing:.14em;font-weight:850}.priceCard strong{margin-top:58px;font-family:var(--font-barlow),sans-serif;font-size:56px;letter-spacing:-.03em}.priceCard strong small{font-size:19px;color:#71829a}.priceCard h3{margin:8px 0 12px;font-size:18px}.priceCard p{margin:0;color:var(--muted);font-size:12px;line-height:1.7}.primaryPrice{background:linear-gradient(145deg,#0d1a2b,#1a2450);color:#fff;border-color:#536eff66}.primaryPrice>span,.primaryPrice p,.primaryPrice strong small{color:#a5b5c9}.primaryPrice strong{background:linear-gradient(90deg,#78a3ff,#b28bff);-webkit-background-clip:text;color:transparent}.investmentStrip{margin-top:14px;padding:20px 22px;border:1px solid var(--line);border-radius:16px;background:#fff;display:flex;align-items:center;justify-content:space-between;gap:12px;color:#586b81;font-size:9px;font-weight:850;letter-spacing:.08em}.investmentStrip b{color:var(--blue)}.investmentStrip strong{color:#0b1625}
@media(max-width:980px){.navLinks{display:none}.heroGrid,.adsGrid,.darkIntro,.roadGrid{grid-template-columns:1fr}.proof{grid-template-columns:1fr 1fr}.three,.scopeGrid{grid-template-columns:1fr}.engine{grid-template-columns:1fr 1fr}.engine article:last-child{grid-column:1/-1}.four{grid-template-columns:1fr 1fr}.searchCols{grid-template-columns:1fr}.adsDetailGrid{grid-template-columns:1fr 1fr}.adsDetailHead{align-items:flex-start;flex-direction:column}.pillars,.priceGrid{grid-template-columns:1fr}.seoOps{align-items:flex-start;flex-direction:column}.investmentStrip{flex-wrap:wrap;justify-content:flex-start}}
@media(max-width:680px){.shell,.nav{width:calc(100% - 24px)}.brand small{display:none}.navCta{padding:10px 11px}.hero{padding-top:110px}.heroGrid{padding-top:44px;gap:44px}.hero h1{font-size:58px}.heroLead{font-size:14px}.actions,.heroMeta{align-items:flex-start;flex-direction:column;gap:14px}.stage{min-height:430px;border-radius:22px}.agent{left:18px;right:18px;top:72px}.badge{width:92px;height:92px;right:-7px}.badge strong{font-size:29px}.stageFlow{left:14px;right:14px;font-size:6px;gap:4px}.proof div{padding:21px 15px}.section,.dark{padding:76px 0}.intro,.twoHead,.roadHead{align-items:flex-start;flex-direction:column}.sectionTitle,.darkTitle,.cta h2{font-size:45px}.split,.four,.kpis,.engine,.adsDetailGrid{grid-template-columns:1fr}.engine article:last-child{grid-column:auto}.funnel{overflow:auto;justify-content:flex-start;white-space:nowrap}.adsOps{align-items:flex-start;flex-direction:column}.position{padding:23px;min-height:390px}.position h3{margin-top:90px;font-size:49px}.roadFeature{min-height:460px}.roadFeature h3{font-size:55px}.scale,.media{grid-template-columns:1fr;gap:16px}.pillarCard h3{margin-top:54px}.priceCard strong{font-size:46px}.investmentStrip{align-items:flex-start;flex-direction:column}.cta{padding:29px;min-height:550px}.footer .shell{align-items:flex-start;flex-direction:column;gap:14px}}
`;

const CHANNELS = ["Google Search","Commercial SEO","Competitor SEO","AI Search","GEO","CRO","Authority","Analytics"];
const AD_SPLIT = [
  ["40%","AI Website Agent","High-intent searches around AI assistants and AI agents for websites."],
  ["30%","Support + Lead Gen","Searches around AI support, qualification and conversational lead capture."],
  ["20%","Competitor Intent","Alternative and comparison searches around Chatbase, Tidio, Intercom and Botpress."],
  ["10%","Controlled Testing","New terms, messages and landing-page hypotheses without diluting the core budget."],
];
const ROADMAP = [
  ["01","DAYS 1–3","Foundation","Build Google Ads tracking + campaigns, complete the technical SEO audit, map commercial keywords and establish SEO / AI visibility baselines."],
  ["02","DAY 4–5","Go Live","Launch the first US Google Search campaign while priority technical SEO fixes and commercial-page improvements begin in parallel."],
  ["03","DAYS 6–15","Learn + Fix","Optimize search terms, negatives and ads while improving on-page SEO, indexing, internal linking and conversion paths."],
  ["04","DAYS 16–30","Build Authority","Expand winning paid themes, improve commercial + competitor pages, add vertical / integration SEO and implement AISEO / GEO authority work."],
  ["05","DAYS 31–45","Validate","Refine CAC and activation signals, measure early organic movement, strengthen third-party authority and identify what deserves scale."],
];
const KPIS = [["Cost / Trial","Paid acquisition quality"],["CAC","Paid customer economics"],["Rankings","Commercial keyword growth"],["Organic Trials","SEO conversion quality"],["AI Visibility","Citations + mentions"],["Activation","Trial → meaningful use"]];

export default function BuzzSpotPage() {
  return (
    <div className="page">
      <style>{PAGE_CSS}</style>
      <header className="navWrap">
        <nav className="nav">
          <a className="brand" href="#top"><b>BUZZSPOT</b><small>USA GROWTH PROPOSAL</small></a>
          <div className="navLinks"><a href="#opportunity">Opportunity</a><a href="#ads">Google Ads</a><a href="#search">SEO + AISEO/GEO</a><a href="#roadmap">45-Day Plan</a><a href="#investment">Investment</a></div>
          <a className="navCta" href="#investment">Let’s Grow Together ↗</a>
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          <div className="glow" />
          <div className="shell">
            <div className="heroGrid">
              <div>
                <p className="eyebrow">Growth Escalators × BuzzSpot · USA</p>
                <h1>CAPTURE DEMAND. BUILD AUTHORITY. <em>GROW BUZZSPOT.</em></h1>
                <p className="heroLead">A focused USA growth strategy combining Google Ads with SEO, AISEO and GEO to capture high-intent demand now while building long-term organic and AI-search visibility for BuzzSpot.</p>
                <div className="actions"><a className="primary" href="#engine">Explore the growth plan ↗</a><a className="textLink" href="#roadmap">View the 45-day roadmap ↗</a></div>
                <div className="heroMeta"><span><b>$600</b>monthly Google media budget</span><span><b>₹50,000</b>Growth Escalators / month</span><span><b>Day 4–5</b>first campaign live</span></div>
              </div>
              <div className="stage">
                <div className="stageTop"><span>PAID + ORGANIC GROWTH SYSTEM</span><i>LIVE PLAN</i></div>
                <div className="agent">
                  <div className="agentHead"><span className="dot"/><b>BuzzSpot Website Agent</b><small>Active</small></div>
                  <div className="chat"><span className="user">Can this qualify leads from my website?</span><span className="bot">✦ Yes — capture intent, qualify visitors and route the conversation.</span></div>
                  <div className="agentInput">Ask your website… <b>↗</b></div>
                </div>
                <div className="stageFlow"><span>GOOGLE ADS</span><b>→</b><span>SEO</span><b>→</b><span>AI SEARCH</span><b>→</b><span>CUSTOMERS</span></div>
                <div className="badge"><strong>4–5</strong><span>DAYS TO FIRST CAMPAIGN</span></div>
                <div className="stageTag">USA × PAID + ORGANIC</div>
              </div>
            </div>
            <div className="proof">
              <div><strong>$600</strong><span>monthly Google Ads media</span></div>
              <div><strong>₹50K</strong><span>monthly growth engagement</span></div>
              <div><strong>45</strong><span>days to launch + validate</span></div>
              <div><strong>46+</strong><span>optimize + scale what works</span></div>
            </div>
          </div>
        </section>

        <section className="marqueeSection">
          <div className="shell"><div className="marqueeHead"><p className="eyebrow">Two growth pillars · One commercial goal</p><span>Capture demand now → Build authority over time → Convert → Scale</span></div></div>
          <div className="marquee"><div className="track">{CHANNELS.concat(CHANNELS).map((x,i)=><span key={x+i}>{x}</span>)}</div></div>
        </section>

        <section id="opportunity" className="section">
          <div className="shell">
            <div className="intro"><div><p className="eyebrow">The opportunity</p><h2 className="sectionTitle">Build immediate demand.<br/>Build long-term visibility.</h2></div><p>BuzzSpot already solves a clear problem. Our job is to make sure the right US buyers discover it, understand the value and start using it.</p></div>
            <div className="three">
              <article className="card"><span className="icon">⌕</span><span className="num">01</span><h3>Capture Existing Demand</h3><p>Reach businesses already searching for AI website agents, AI support automation and conversational lead-generation tools.</p></article>
              <article className="card"><span className="icon">↗</span><span className="num">02</span><h3>Build Organic Authority</h3><p>Rank BuzzSpot for commercial, competitor, vertical and integration searches that can generate trials without paying for every click.</p></article>
              <article className="card"><span className="icon">✦</span><span className="num">03</span><h3>Win AI Discovery</h3><p>Strengthen BuzzSpot’s entity and content authority across Google AI experiences, ChatGPT, Gemini, Copilot and other generative search environments.</p></article>
            </div>
          </div>
        </section>

        <section id="engine" className="dark">
          <div className="shell">
            <div className="darkIntro"><div><p className="eyebrowLight">Our approach</p><h2 className="darkTitle">One growth engine.<br/>Two acquisition pillars.</h2></div><p>Google Ads gives BuzzSpot immediate demand capture and real market data. SEO + AISEO/GEO builds the compounding visibility and authority that reduces dependence on paid media over time.</p></div>
            <div className="pillars">
              <article className="pillarCard"><span>01 / GOOGLE ADS</span><h3>Immediate Demand Capture</h3><p>Reach US buyers already searching for products like BuzzSpot and move them from high-intent query → landing page → product demo → trial → paid customer.</p><ul><li>High-intent Search campaigns</li><li>Competitor + alternative searches</li><li>Ad copy + landing-page testing</li><li>Trial, activation + CAC tracking</li></ul></article>
              <article className="pillarCard featured"><span>02 / SEO + AISEO / GEO</span><h3>Compounding Search Authority</h3><p>Build visibility across traditional search and AI discovery so BuzzSpot can earn qualified traffic, citations and customers without paying for every visit.</p><ul><li>Commercial + competitor SEO</li><li>Vertical + integration pages</li><li>Technical + on-page SEO</li><li>AI entity + citation authority</li></ul></article>
            </div>
            <div className="funnel darkFunnel"><span>DISCOVER</span><b>→</b><span>EXPERIENCE</span><b>→</b><span>ACTIVATE</span><b>→</b><span>CONVERT</span><b>→</b><span>SCALE</span></div>
          </div>
        </section>

        <section id="ads" className="section ads">
          <div className="shell">
            <div className="adsGrid">
              <div className="adLead"><p className="eyebrow">Google Ads · USA</p><h2 className="sectionTitle">Capture existing demand from <em>Day 4–5.</em></h2><p>With a $600 monthly media budget, we stay narrow: one tightly controlled Search program built around commercial intent rather than broad awareness.</p><div className="budget"><span>MONTHLY MEDIA</span><strong>$600</strong><small>Paid directly to Google</small></div></div>
              <div className="split">{AD_SPLIT.map(([v,t,c])=><article key={t}><strong>{v}</strong><h3>{t}</h3><p>{c}</p></article>)}</div>
            </div>
            <div className="funnel"><span>GOOGLE SEARCH</span><b>→</b><span>LANDING PAGE</span><b>→</b><span>TRY BUZZSPOT</span><b>→</b><span>TRIAL</span><b>→</b><span>ACTIVATION</span><b>→</b><span>PAID</span></div>
            <div className="adsDetail">
              <div className="adsDetailHead">
                <h3>How we run Google Ads with a $600 budget.</h3>
                <p>Every dollar has to earn its place. We launch with tightly controlled high-intent Search campaigns, learn from real query and conversion data, then move budget only toward themes that produce qualified trials and paid-customer signals.</p>
              </div>
              <div className="adsDetailGrid">
                <article className="adsDetailCard"><span>01 / SEARCH-FIRST</span><h4>High-intent campaigns</h4><p>Start with US Google Search only — AI website agent, AI support, lead-generation and competitor-alternative intent. No budget dilution into broad awareness campaigns at launch.</p></article>
                <article className="adsDetailCard"><span>02 / KEYWORD CONTROL</span><h4>Exact + Phrase led</h4><p>Use tightly themed keyword groups, Exact/Phrase-led testing, negative keywords and frequent search-term reviews to cut irrelevant clicks and protect the daily budget.</p></article>
                <article className="adsDetailCard"><span>03 / MESSAGE + CRO</span><h4>Ads matched to intent</h4><p>Test demo-first, outcome-led and value-led messaging, then align each ad group with landing-page copy designed to move users from click → website demo → trial.</p></article>
                <article className="adsDetailCard"><span>04 / REVENUE TRACKING</span><h4>Optimize beyond clicks</h4><p>Track trial creation, website crawl, agent activation and paid conversion so decisions move from CPC/CTR toward Cost per Trial, activation quality and customer CAC.</p></article>
              </div>
              <div className="adsOps"><div><b>DAY 4–5: FIRST CAMPAIGN LIVE</b><br/><span>Day 6 onward: review queries, add negatives, test ads, improve landing pages and reallocate budget toward stronger commercial signals.</span></div><strong>LAUNCH → LEARN → OPTIMIZE → SCALE</strong></div>
            </div>
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
            <div className="darkIntro"><div><p className="eyebrowLight">SEO + AISEO + GEO</p><h2 className="darkTitle">Build visibility that compounds every month.</h2></div><p>Google Ads captures demand immediately. SEO makes BuzzSpot discoverable before a prospect ever clicks an ad, while AISEO/GEO strengthens the authority signals used across generative search.</p></div>
            <div className="searchCols">
              <article className="searchCard"><span>01 / CORE COMMERCIAL SEO</span><h3>Own high-intent product searches</h3><div className="cloud"><i>AI website agent</i><i>AI chatbot for website</i><i>AI support agent</i><i>AI lead generation chatbot</i></div><ul><li>Technical + on-page SEO</li><li>Commercial landing pages</li><li>Site architecture + internal linking</li><li>Indexation, metadata + structured data</li></ul></article>
              <article className="searchCard"><span>02 / COMPETITOR SEO</span><h3>Enter the buying conversation</h3><div className="cloud"><i>Chatbase alternative</i><i>Tidio alternative</i><i>Intercom alternative</i><i>Botpress alternative</i></div><ul><li>Feature + pricing comparisons</li><li>Use cases + screenshots</li><li>Pros, limitations + best-fit guidance</li><li>Conversion-first comparison pages</li></ul></article>
              <article className="searchCard"><span>03 / VERTICAL + INTEGRATION SEO</span><h3>Capture implementation intent</h3><div className="cloud"><i>SaaS</i><i>E-commerce</i><i>Agencies</i><i>WordPress</i><i>Shopify</i><i>Wix</i><i>Webflow</i></div><ul><li>Vertical-specific landing pages</li><li>Integration search demand</li><li>Industry use cases</li><li>Commercial content clusters</li></ul></article>
              <article className="searchCard geo"><span>04 / AISEO + GEO</span><h3>Build entity + citation authority</h3><div className="cloud"><i>Google AI</i><i>ChatGPT</i><i>Gemini</i><i>Copilot</i><i>Perplexity</i></div><ul><li>Citation-ready product content</li><li>Original comparisons + benchmarks</li><li>Review + directory authority</li><li>Digital PR + third-party mentions</li></ul></article>
            </div>
            <div className="seoOps"><div><b>SEO + GEO START FROM DAY 1</b><br/><span>Technical fixes, commercial-page optimization and AI visibility foundations run in parallel with the Google Ads launch — not after it.</span></div><strong>RANK → EARN AUTHORITY → GET CITED → CONVERT</strong></div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <div className="intro"><div><p className="eyebrow">What we fix first</p><h2 className="sectionTitle">Four things that make every channel work harder.</h2></div></div>
            <div className="four">
              <article className="mini"><span>01</span><h3>Positioning</h3><p>Move beyond the crowded “AI chatbot” category and own the AI website-agent outcome.</p></article>
              <article className="mini"><span>02</span><h3>Search Visibility</h3><p>Strengthen commercial, competitor, vertical and integration pages so BuzzSpot can capture more organic buying intent.</p></article>
              <article className="mini"><span>03</span><h3>Conversion</h3><p>Make the live product demo and activation journey the center of the acquisition experience.</p></article>
              <article className="mini"><span>04</span><h3>Authority</h3><p>Build stronger third-party references, backlinks, proof and AI citation signals across the web.</p></article>
            </div>
          </div>
        </section>

        <section id="roadmap" className="section roadmap">
          <div className="shell">
            <div className="roadHead"><div><p className="eyebrow">45-day launch + validation sprint</p><h2 className="sectionTitle">Launch early.<br/>Learn from real demand.</h2></div><span>DAY 1 → 5 → 15 → 30 → 45</span></div>
            <div className="roadGrid">
              <article className="roadFeature"><span>THE FIRST 45 DAYS</span><h3>BUILD.<br/>LAUNCH.<br/>VALIDATE.</h3><p>We do not spend weeks planning in isolation. The first Google Ads campaign goes live by Day 4–5, while SEO, AISEO and GEO work starts from Day 1 and compounds throughout the sprint.</p></article>
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
            <div className="scopeIntro"><p className="eyebrowLight">Scope of work</p><h2 className="darkTitle">Both growth pillars. One monthly engagement.</h2><p>Google Ads captures demand today. SEO + AISEO/GEO builds compounding discovery and authority. CRO and analytics connect both channels to trials, activation and paid customers.</p></div>
            <div className="scopeGrid">
              <article className="scopeCard"><span>GOOGLE ADS</span><h3>Demand Capture</h3><ul><li>US Search strategy + setup</li><li>Keyword + match-type management</li><li>Ad copy + asset testing</li><li>Negatives + search-term control</li><li>Trial, activation + CAC tracking</li><li>Budget reallocation + optimization</li></ul></article>
              <article className="scopeCard featured"><span>SEO + AISEO / GEO</span><h3>Organic + AI Growth</h3><ul><li>Technical + on-page SEO</li><li>Commercial + competitor pages</li><li>Vertical + integration SEO</li><li>Authority + backlink strategy</li><li>Entity + citation optimization</li><li>AI visibility monitoring</li></ul></article>
              <article className="scopeCard"><span>CRO + ANALYTICS</span><h3>Conversion Intelligence</h3><ul><li>Landing-page optimization</li><li>Trial + activation tracking</li><li>Paid + organic conversion reporting</li><li>CAC monitoring</li><li>Monthly performance analysis</li><li>Ongoing optimization</li></ul></article>
            </div>
            <div className="media"><div><span>GOOGLE MEDIA INVESTMENT</span><strong>$600 / month</strong></div><p>Paid directly to Google and used entirely for the US Google Ads campaigns. This media budget is separate from Growth Escalators’ monthly engagement fee.</p></div>
          </div>
        </section>

        <section id="investment" className="section investment">
          <div className="shell">
            <div className="twoHead"><div><p className="eyebrow">Investment</p><h2 className="sectionTitle">Simple. Transparent.<br/>Built for growth.</h2></div><p>One monthly engagement covering both acquisition pillars — Google Ads management plus SEO, AISEO / GEO, CRO and analytics.</p></div>
            <div className="priceGrid">
              <article className="priceCard"><span>GOOGLE MEDIA INVESTMENT</span><strong>$600 <small>/ month</small></strong><h3>Paid directly to Google</h3><p>This is the ad spend used entirely to run BuzzSpot’s Google Search campaigns in the USA.</p></article>
              <article className="priceCard primaryPrice"><span>GROWTH ESCALATORS FEE</span><strong>₹50,000 <small>/ month</small></strong><h3>Covers both growth pillars</h3><p>Google Ads strategy + management, SEO, AISEO / GEO, CRO, analytics, authority strategy, performance reporting and ongoing optimization.</p></article>
            </div>
            <div className="investmentStrip"><span>GOOGLE ADS</span><b>+</b><span>SEO + AISEO / GEO</span><b>+</b><span>CRO + ANALYTICS</span><strong>= ONE CONNECTED GROWTH SYSTEM</strong></div>
          </div>
        </section>

        <section className="ctaWrap">
          <div className="shell"><div className="cta"><p className="eyebrowLight">Ready to start?</p><h2>Capture demand today.<br/>Build authority for tomorrow.<br/><em>Scale what works.</em></h2><p>First Google Ads campaign live by Day 4–5. SEO, AISEO and GEO begin from Day 1. ₹50,000/month covers the complete Growth Escalators engagement; the $600 Google media budget remains separate.</p><a href="#top">Start the 45-day growth sprint ↗</a></div></div>
        </section>
      </main>

      <footer className="footer"><div className="shell"><div><b>Growth Escalators</b><span>IT Consulting · Data & AI · Digital Growth</span></div><p>Prepared for BuzzSpot · 2026</p></div></footer>
    </div>
  );
}
