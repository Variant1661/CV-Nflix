import React, { useState } from "react";

const themes = {
  navy: {
    name: "Executive Navy",
    page: "bg-slate-50 text-slate-950",
    hero: "bg-slate-950 text-white",
    accent: "text-sky-700",
    accentBg: "bg-sky-700 text-white hover:bg-sky-800",
    card: "bg-white border-slate-200",
    soft: "bg-slate-100",
    chip: "bg-sky-50 text-sky-900 border-sky-200"
  },
  emerald: {
    name: "People Green",
    page: "bg-stone-50 text-stone-950",
    hero: "bg-emerald-950 text-white",
    accent: "text-emerald-700",
    accentBg: "bg-emerald-700 text-white hover:bg-emerald-800",
    card: "bg-white border-stone-200",
    soft: "bg-emerald-50",
    chip: "bg-emerald-50 text-emerald-950 border-emerald-200"
  },
  burgundy: {
    name: "Boardroom Burgundy",
    page: "bg-neutral-50 text-neutral-950",
    hero: "bg-[#3b0d18] text-white",
    accent: "text-[#8a1538]",
    accentBg: "bg-[#8a1538] text-white hover:bg-[#6f102d]",
    card: "bg-white border-neutral-200",
    soft: "bg-rose-50",
    chip: "bg-rose-50 text-[#4a1020] border-rose-200"
  }
};

const textSizes = {
  standard: "text-base",
  large: "text-lg",
  xl: "text-xl"
};

const profile = {
  name: "Deepak Dakshina Moorthy",
  title: "HR & Employee Relations Portfolio",
  subtitle: "UK ER Casework | Manager Advisory | HR Compliance | Process Improvement",
  summary:
    "A practical HR and Employee Relations professional with UK people operations experience across fast-paced, multi-site care environments. My work covers ER case support, manager advice, absence and welfare processes, conduct and investigation documentation, recruitment compliance, right to work, DBS, staff file governance, payroll review and HR process improvement. This portfolio shows the way I structure HR problems, document evidence and turn operational issues into controlled people processes.",
  phone: "+44 7741 837087",
  email: "deepak2012.dy@gmail.com",
  linkedin: "https://www.linkedin.com/in/deepak-dakshinamoorthy",
  photography: "Vision Lumiere is my freelance photography work, covering portraits, family sessions, small events, corporate moments and Indian traditional occasions. Photography strengthens my eye for detail, emotional intelligence, storytelling, client communication and calm delivery under pressure — qualities that also support good HR judgement."
};

const navItems = ["Strengths", "Evidence", "Experience", "Photography", "Education"];

const strengths = [
  "Employee relations case support", "Manager advice and coaching", "Absence, welfare and RTW processes", "Conduct, grievance and investigation documentation",
  "Probation and performance tracking", "Right to work, DBS and staff file compliance", "CQC and local authority audit readiness", "HR process improvement and automation",
  "Payroll, rota and workforce data review", "Training, onboarding and induction controls", "Stakeholder communication", "Regulated healthcare operations"
];

const impact = [
  { metric: "200+", label: "employees supported across multi-site HR operations" },
  { metric: "100+", label: "HR queries handled monthly" },
  { metric: "70%", label: "paper usage reduction through HR digitalisation" },
  { metric: "15%", label: "overtime cost reduction through rota and staffing review" },
  { metric: "35+", label: "team members led in healthcare operations" },
  { metric: "96%", label: "quality performance achieved in client delivery" }
];

const evidence = [
  { title: "ER Casework & Documentation", description: "Anonymised case studies showing how I structure allegations, prepare chronologies, organise evidence, support fair investigation wording and help managers reach proportionate next steps.", examples: ["Investigation chronology", "Meeting invite wording", "Evidence summary", "Outcome structure"] },
  { title: "Absence, Welfare & Probation", description: "Examples of how I support managers with welfare meetings, return-to-work records, absence patterns, probation reviews, early performance concerns and escalation routes.", examples: ["Welfare checklist", "Probation review structure", "RTW record control", "Bradford Factor monitoring"] },
  { title: "Compliance & Audit Readiness", description: "Evidence of staff file controls, right to work checks, DBS tracking, training records, onboarding evidence and CQC/local authority inspection readiness.", examples: ["Staff file checklist", "DBS tracker", "RTW evidence control", "Training matrix"] },
  { title: "Process Improvement", description: "Practical examples of digitising HR records, creating trackers, improving follow-up controls and turning manual chasing into visible workflows.", examples: ["Power Automate reminders", "SharePoint records", "Annual declaration tracker", "Manager action logs"] }
];

const experience = [
  { role: "HR & Payroll Assistant", company: "Apex Care Homes Ltd", location: "Bedford / Luton, UK", period: "2024 - Present", summary: "Multi-site HR, employee relations, recruitment, compliance and payroll support role across regulated care homes. I work closely with managers, senior leaders, payroll, finance and operations to keep people processes controlled, documented and inspection-ready.", bullets: ["Support managers with employee relations matters including absence, welfare meetings, conduct concerns, probation reviews, informal resolution, investigations and formal HR correspondence.", "Draft and prepare HR documents including meeting invites, investigation summaries, outcome letters, policy communications, staff letters, reports and management updates.", "Maintain staff files, right to work evidence, DBS checks, training records, annual declarations and compliance trackers to support CQC, local authority and internal audit expectations.", "Review rota, clock-in/out and payroll data across multiple homes, identifying discrepancies and supporting managers before payroll submission.", "Support recruitment and onboarding, including adverts, screening, interviews, offer paperwork, contracts, DBS, right to work, overseas worker documentation and induction tracking.", "Improve HR processes through SharePoint, Google Forms, Power Automate reminders, trackers and structured follow-up controls for induction, supervision, appraisal and compliance actions.", "Support Skilled Worker and Certificate of Sponsorship administration, helping the organisation maintain immigration-related employee records and compliance evidence.", "Provide practical manager guidance in a fast-paced care environment where operational pressure, staffing risk and compliance expectations must be balanced carefully."] },
  { role: "Customer Experience Leader / Crew Trainer / Customer Care Assistant", company: "McDonald's UK", location: "United Kingdom", period: "2023 - 2024", summary: "Frontline leadership and training role in a high-volume customer service environment. Built confidence in coaching, operational standards, complaint handling and real-time team support under pressure.", bullets: ["Progressed quickly from Customer Care Assistant to Crew Trainer and Customer Experience Leader by consistently taking ownership of service standards and team support.", "Improved customer satisfaction from approximately 35% to one of the strongest levels in the store by identifying service gaps, coaching crew members and reinforcing customer-first behaviours.", "Trained and supported new starters, helping them understand station standards, customer interaction expectations, hygiene requirements and fast-paced shift routines.", "Handled customer concerns calmly, escalated issues where needed and supported managers during peak trading periods.", "Recognised through Employee of the Quarter and Employee of the Year awards for reliability, leadership and service contribution."] },
  { role: "Assistant Manager / Team Lead - HCC Risk Adjustment Coding", company: "Omega Healthcare", location: "India", period: "Previous role", summary: "Led a large team in a regulated healthcare delivery environment, managing productivity, quality, training, client expectations and performance improvement.", bullets: ["Led a team of 35+ HCC/Risk Adjustment coders, setting daily direction, monitoring productivity and maintaining client SLA expectations.", "Achieved approximately 96% quality performance by using audits, feedback loops, quality reviews and targeted coaching for underperforming team members.", "Handled client communication, weekly stand-ups and project updates, ensuring work was delivered ahead of expected timelines and to agreed standards.", "Supported performance management through feedback, mentoring, error analysis and action planning.", "Built strong transferable people management skills in coaching, conflict handling, evidence review, quality documentation and stakeholder reporting."] },
  { role: "Team Leader", company: "Annova Solutions", location: "India", period: "Previous role", summary: "Start-up healthcare operations leadership role focused on building project controls, quality processes, SOPs and team capability from the ground up.", bullets: ["Helped establish a new project by creating SOPs, audit workflows, quality controls and training processes.", "Worked with clients to understand project requirements and convert them into practical team instructions and measurable standards.", "Led meetings, allocated work, monitored quality and resolved operational issues to keep delivery on track.", "Trained coders on project requirements and supported complex HCC/Risk Adjustment coding work.", "Developed strong process-building experience that now supports my HR work around templates, trackers, compliance evidence and manager guidance."] },
  { role: "Senior Process Trainer / Executive Trainer - Coding Services", company: "CorroHealth", location: "India", period: "2020 - 2021", summary: "Training, quality and people development role focused on building coder capability, certification readiness and compliance with ICD-10 CM and risk adjustment requirements.", bullets: ["Designed and delivered structured training for freshers and employees on ICD-10 CM guidelines, HCC/Risk Adjustment concepts and project-specific requirements.", "Delivered CRC/Risk Adjustment certification training covering compliance, risk adjustment models and the US healthcare business of medicine.", "Achieved a 100% certification pass rate among trainees through hands-on training, practice sessions, assessment and feedback.", "Introduced quality audit strategies that contributed to a 30% reduction in coding errors and improved compliance awareness.", "Created training materials, SOP-style resources and learning support documents to improve trainee confidence and retention."] },
  { role: "Senior QA Specialist", company: "CorroHealth", location: "India", period: "2020", summary: "Quality assurance role reviewing coding accuracy, identifying error trends and supporting process improvement in a regulated healthcare documentation environment.", bullets: ["Reviewed coder outputs for accuracy, guideline compliance and project-specific standards.", "Identified recurring errors and provided feedback to improve coder performance and reduce repeat mistakes.", "Supported reporting and quality improvement actions by maintaining clear audit evidence and error summaries.", "Strengthened analytical, documentation and compliance skills that are now directly useful in HR casework and audit preparation."] },
  { role: "Senior Medical Coder", company: "Cognizant Technology Solutions / Primus Global", location: "India", period: "Previous role", summary: "Medical coding role focused on ICD-10 CM and HCC coding, insurance reimbursement requirements, documentation accuracy and quality targets.", bullets: ["Applied ICD-10 CM coding guidelines to healthcare documentation for insurance reimbursement and HCC mapping requirements.", "Maintained production and quality standards while working with detailed patient chart documentation and multiple coding rules.", "Worked with QA teams to correct errors, understand audit feedback and maintain compliance with client requirements.", "Built strong attention to detail and evidence-based decision-making skills that transfer well into HR documentation and ER case review."] },
  { role: "Medical Coder", company: "Episource", location: "India", period: "2018 - 2019", summary: "Early healthcare operations role reviewing medical records, assigning ICD-10 CM/HCC codes and supporting project quality and training.", bullets: ["Reviewed patient charts and coded diagnoses in line with ICD-10 CM and HCC category requirements.", "Used 10+ EMR applications and handled documentation in line with client SLA and quality expectations.", "Reported HCCs accurately and supported freshers with project-specific guidance and updates.", "Developed discipline in reading complex records, extracting key evidence and documenting decisions accurately."] },
  { role: "Sales Engineer", company: "Ababil Healthcare", location: "India", period: "Previous role", summary: "Biomedical sales and client-facing role involving healthcare equipment, product demonstrations, customer education and stakeholder management.", bullets: ["Sold and demonstrated medical equipment including diathermy units, patient monitors, defibrillators, ventilators, surgical equipment and infusion pumps.", "Worked with healthcare professionals to understand product needs, explain technical features and support purchasing discussions.", "Provided product demonstrations and basic training, building confidence in communication, client handling and technical explanation.", "Gained early commercial experience that supports my current ability to balance people advice with operational and business needs."] }
];

const education = ["CIPD Level 5 Associate Diploma in People Management - currently studying", "CMI Level 7 Strategic Leadership and Management", "MBA - University of Northampton", "B.Tech Biomedical Engineering - SRM University", "Certified Risk Adjustment Coder - AAPC"];

export default function DeepflixCV() {
  const [themeKey, setThemeKey] = useState("navy");
  const [panelOpen, setPanelOpen] = useState(false);
  const [textSize, setTextSize] = useState("standard");
  const theme = themes[themeKey];

  return (
    <main className={`min-h-screen ${theme.page} ${textSizes[textSize]}`}>
      <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
        <button aria-label="Open display settings" onClick={() => setPanelOpen(!panelOpen)} className="rounded-full bg-white text-slate-900 border border-slate-200 shadow-lg w-12 h-12 flex items-center justify-center font-bold hover:shadow-xl">Aa</button>
        {panelOpen && (
          <div className="w-72 rounded-2xl bg-white border border-slate-200 shadow-xl p-4 text-slate-900">
            <p className="font-bold mb-2">Display settings</p>
            <p className="text-sm text-slate-500 mb-3">Theme</p>
            <div className="grid grid-cols-1 gap-2 mb-4">
              {Object.entries(themes).map(([key, item]) => <button key={key} onClick={() => setThemeKey(key)} className={`text-left px-3 py-2 rounded-xl border ${themeKey === key ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 hover:bg-slate-50"}`}>{item.name}</button>)}
            </div>
            <p className="text-sm text-slate-500 mb-3">Text size</p>
            <div className="grid grid-cols-3 gap-2">
              {[["standard", "A"], ["large", "A+"], ["xl", "A++"]].map(([key, label]) => <button key={key} onClick={() => setTextSize(key)} className={`px-3 py-2 rounded-xl border ${textSize === key ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 hover:bg-slate-50"}`}>{label}</button>)}
            </div>
          </div>
        )}
      </div>

      <section className={`px-6 py-16 md:py-24 ${theme.hero}`}>
        <div className="max-w-6xl mx-auto">
          <nav className="hidden md:flex gap-5 mb-12 text-sm opacity-80" aria-label="Page sections">{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline">{item}</a>)}</nav>
          <p className="text-sm uppercase tracking-[0.35em] opacity-75 mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{profile.name}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">{profile.title}</h2>
          <p className="text-lg opacity-90 mb-8 max-w-3xl">{profile.subtitle}</p>
          <p className="leading-8 opacity-90 max-w-4xl">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className={`px-5 py-3 rounded-xl font-semibold ${theme.accentBg}`} href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a className={`px-5 py-3 rounded-xl font-semibold ${theme.accentBg}`} href={`mailto:${profile.email}`}>Email Deepak</a>
            <a className="px-5 py-3 rounded-xl border border-white/50 text-white hover:bg-white/10" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="px-5 py-3 rounded-xl border border-white/50 text-white hover:bg-white/10" href="/evidence/index.html" target="_blank" rel="noopener noreferrer">Evidence Pack</a>
          </div>
        </div>
      </section>

      <section id="strengths" className="px-6 py-12 border-b border-slate-200"><div className="max-w-6xl mx-auto"><h2 className="text-2xl md:text-3xl font-bold mb-6">Core HR & ER Strengths</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{strengths.map(item => <div key={item} className={`rounded-2xl border p-5 ${theme.chip}`}>{item}</div>)}</div></div></section>

      <section className={`px-6 py-12 border-b border-slate-200 ${theme.soft}`}><div className="max-w-6xl mx-auto"><h2 className="text-2xl md:text-3xl font-bold mb-6">Impact Snapshot</h2><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{impact.map(item => <div key={item.label} className={`rounded-2xl border p-6 shadow-sm ${theme.card}`}><p className={`text-4xl font-bold mb-2 ${theme.accent}`}>{item.metric}</p><p className="leading-7 text-slate-700">{item.label}</p></div>)}</div></div></section>

      <section id="evidence" className="px-6 py-12 border-b border-slate-200"><div className="max-w-6xl mx-auto"><h2 className="text-2xl md:text-3xl font-bold mb-3">Portfolio Evidence</h2><p className="text-slate-600 mb-5 max-w-3xl">An anonymised evidence pack demonstrates HR judgement, documentation quality and process improvement capability through case-study style examples.</p><a className={`inline-block mb-8 px-5 py-3 rounded-xl font-semibold ${theme.accentBg}`} href="/evidence/index.html" target="_blank" rel="noopener noreferrer">View full evidence pack</a><div className="grid grid-cols-1 md:grid-cols-2 gap-5">{evidence.map(section => <article key={section.title} className={`rounded-2xl border p-6 shadow-sm ${theme.card}`}><h3 className={`text-xl font-bold mb-3 ${theme.accent}`}>{section.title}</h3><p className="text-slate-700 leading-7 mb-5">{section.description}</p><ul className="space-y-2 text-slate-700">{section.examples.map(example => <li key={example} className="flex gap-2"><span className={theme.accent}>•</span><span>{example}</span></li>)}</ul></article>)}</div></div></section>

      <section id="experience" className={`px-6 py-12 border-b border-slate-200 ${theme.soft}`}><div className="max-w-6xl mx-auto"><h2 className="text-2xl md:text-3xl font-bold mb-3">Experience</h2><p className="text-slate-600 mb-8 max-w-3xl">Detailed career timeline showing HR, ER, compliance, leadership, training, quality and regulated healthcare experience.</p><div className="space-y-6">{experience.map(job => <article key={`${job.role}-${job.company}`} className={`rounded-2xl border p-6 md:p-7 shadow-sm ${theme.card}`}><div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4"><div><h3 className="text-xl md:text-2xl font-bold text-slate-950">{job.role}</h3><p className={`font-semibold ${theme.accent}`}>{job.company}</p><p className="text-slate-500">{job.location}</p></div><p className="text-slate-600 font-medium">{job.period}</p></div><p className="text-slate-700 leading-7 mb-4">{job.summary}</p><ul className="space-y-3 text-slate-700 leading-7">{job.bullets.map(point => <li key={point} className="flex gap-3"><span className={`font-bold ${theme.accent}`}>•</span><span>{point}</span></li>)}</ul></article>)}</div></div></section>

      <section id="photography" className="px-6 py-12 border-b border-slate-200"><div className="max-w-6xl mx-auto"><div className={`rounded-3xl border p-7 md:p-9 shadow-sm ${theme.card}`}><p className={`text-sm font-bold uppercase tracking-[0.25em] mb-3 ${theme.accent}`}>Beyond HR</p><h2 className="text-2xl md:text-3xl font-bold mb-4">Photography & Creative Work</h2><p className="text-slate-700 leading-8 max-w-4xl">{profile.photography}</p><div className="mt-5 flex flex-wrap gap-3"><span className={`rounded-full border px-4 py-2 ${theme.chip}`}>Portraits</span><span className={`rounded-full border px-4 py-2 ${theme.chip}`}>Events</span><span className={`rounded-full border px-4 py-2 ${theme.chip}`}>Client communication</span><span className={`rounded-full border px-4 py-2 ${theme.chip}`}>Attention to detail</span></div></div></div></section>

      <section id="education" className="px-6 py-12 border-b border-slate-200"><div className="max-w-6xl mx-auto"><h2 className="text-2xl md:text-3xl font-bold mb-6">Education & Professional Development</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{education.map(item => <div key={item} className={`rounded-2xl border p-5 ${theme.chip}`}>{item}</div>)}</div></div></section>

      <section className={`px-6 py-12 ${theme.hero}`}><div className="max-w-6xl mx-auto rounded-2xl bg-white/10 border border-white/20 p-8"><h2 className="text-2xl md:text-3xl font-bold mb-4">Confidentiality Standard</h2><p className="leading-8 opacity-90">All public evidence is anonymised and blended. I do not publish live employee names, manager names, service user details, home names, payroll data, immigration details, medical details, case identifiers or confidential documents. The portfolio is designed to show judgement, structure and documentation style without breaching confidentiality.</p></div></section>
    </main>
  );
}
