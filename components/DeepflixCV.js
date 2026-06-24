import React from "react";

const profile = {
  name: "Deepak Dakshina Moorthy",
  title: "HR & Employee Relations Portfolio",
  subtitle: "UK ER Casework | Manager Advisory | HR Compliance | Process Improvement",
  summary:
    "A practical HR and Employee Relations professional with hands-on UK people experience across a fast-paced, multi-site care environment. I support managers with absence, conduct, probation, welfare meetings, investigations, formal HR documentation, right to work compliance, DBS, staff records and audit readiness. This portfolio presents anonymised examples of the HR systems, templates and process improvements I have built or supported.",
  email: "deepak2012.dy@gmail.com",
  linkedin: "https://www.linkedin.com/in/deepak-dakshinamoorthy"
};

const strengths = [
  "Employee relations casework",
  "Manager advice and coaching",
  "Absence and welfare support",
  "Conduct and disciplinary documentation",
  "Probation and performance tracking",
  "Right to work and DBS compliance",
  "CQC and local authority audit readiness",
  "HR process improvement and automation"
];

const evidence = [
  {
    title: "ER Casework & Documentation",
    description:
      "Anonymised examples of case chronologies, investigation notes, meeting invite letters, outcome letters and follow-up actions used to support fair and consistent employee relations processes.",
    examples: ["Investigation chronology", "Disciplinary invite template", "Outcome letter structure", "Manager briefing notes"]
  },
  {
    title: "Absence, Welfare & Probation",
    description:
      "Tools and templates to help managers handle sickness absence, welfare meetings, return-to-work discussions, probation reviews and early-stage performance concerns with better structure.",
    examples: ["Absence review tracker", "Welfare meeting checklist", "Probation review template", "Bradford Factor monitoring"]
  },
  {
    title: "Compliance & Audit Readiness",
    description:
      "Examples of how employee records, DBS checks, right to work evidence, training records and staff file audits are organised to reduce compliance risk in a regulated environment.",
    examples: ["Staff file audit checklist", "DBS tracker", "Right to work checklist", "Training compliance dashboard"]
  },
  {
    title: "Process Improvement",
    description:
      "Practical HR improvements including digital trackers, reminder workflows, staff record controls and manager-facing guidance that improved visibility and reduced manual follow-up.",
    examples: ["Power Automate reminders", "SharePoint staff records", "Annual declaration tracker", "Manager guidance documents"]
  }
];

const impact = [
  { metric: "200+", label: "employees supported across multi-site HR operations" },
  { metric: "100+", label: "HR queries handled monthly" },
  { metric: "70%", label: "paper usage reduction through HR digitalisation" },
  { metric: "15%", label: "overtime cost reduction through rota and staffing review" },
  { metric: "35+", label: "team members led in previous healthcare leadership role" },
  { metric: "96%", label: "quality performance achieved in client delivery environment" }
];

const experience = [
  {
    role: "HR & Payroll Assistant",
    company: "Apex Care Homes Ltd",
    period: "2024 - Present",
    points: [
      "Support managers across multiple care homes with practical employee relations matters including absence, conduct, probation, welfare meetings, investigations and formal documentation.",
      "Draft clear HR correspondence including meeting invites, outcome letters, investigation summaries, reports, policy updates and manager communications.",
      "Maintain employee records, right to work evidence, DBS checks, training records and audit documentation to support CQC, local authority and internal compliance expectations.",
      "Improve HR processes through digital trackers, SharePoint records, Google Forms and Power Automate reminders for induction, appraisal, supervision and compliance follow-up."
    ]
  },
  {
    role: "Customer Experience Leader / Crew Trainer",
    company: "McDonald's UK",
    period: "2023 - 2024",
    points: [
      "Built frontline leadership and coaching experience in a high-pressure, customer-facing environment.",
      "Improved customer satisfaction from approximately 35% to one of the strongest levels in the store through coaching, service standards and real-time feedback."
    ]
  },
  {
    role: "Team Lead / Trainer / QA Specialist",
    company: "Healthcare Operations, India",
    period: "2018 - 2023",
    points: [
      "Led, trained and quality-checked teams in regulated healthcare processes, building strong foundations in documentation, compliance, coaching and performance improvement.",
      "Created SOPs, audit workflows and training materials, reducing errors and improving team consistency."
    ]
  }
];

const portfolioNote = [
  "All case examples should be anonymised before uploading.",
  "No service user, staff, resident, relative, payroll or immigration personal data should be displayed.",
  "Use screenshots only after removing names, dates of birth, addresses, employee numbers and case identifiers.",
  "This portfolio should evidence judgement, structure and process quality rather than confidential case details."
];

export default function DeepflixCV() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="px-6 py-16 md:py-24 border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400 mb-4">Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">{profile.name}</h1>
          <h2 className="text-2xl md:text-3xl text-cyan-300 font-semibold mb-3">{profile.title}</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-3xl">{profile.subtitle}</p>
          <p className="text-base md:text-lg leading-8 text-slate-300 max-w-4xl">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300" href={`mailto:${profile.email}`}>Email Deepak</a>
            <a className="px-5 py-3 rounded-xl border border-slate-600 text-slate-100 hover:border-cyan-300" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="px-5 py-3 rounded-xl border border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-slate-950" href="/evidence/index.html" target="_blank" rel="noopener noreferrer">Open Evidence Pack</a>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Core HR & ER Strengths</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {strengths.map((item) => (
              <div key={item} className="rounded-2xl bg-slate-900 border border-slate-800 p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Impact Snapshot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {impact.map((item) => (
              <div key={item.label} className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
                <p className="text-4xl font-bold text-cyan-300 mb-2">{item.metric}</p>
                <p className="text-slate-300 leading-7">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Portfolio Evidence</h2>
          <p className="text-slate-400 mb-5 max-w-3xl">An anonymised evidence pack has been built to demonstrate HR judgement, documentation quality and process improvement capability. It can be opened online or printed/saved as a PDF.</p>
          <a className="inline-block mb-8 px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300" href="/evidence/index.html" target="_blank" rel="noopener noreferrer">View full evidence pack</a>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {evidence.map((section) => (
              <article key={section.title} className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
                <h3 className="text-xl font-bold text-cyan-300 mb-3">{section.title}</h3>
                <p className="text-slate-300 leading-7 mb-5">{section.description}</p>
                <ul className="space-y-2 text-slate-300">
                  {section.examples.map((example) => (
                    <li key={example} className="flex gap-2"><span className="text-cyan-300">•</span><span>{example}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience Summary</h2>
          <div className="space-y-5">
            {experience.map((job) => (
              <article key={`${job.role}-${job.company}`} className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                    <p className="text-cyan-300">{job.company}</p>
                  </div>
                  <p className="text-slate-400">{job.period}</p>
                </div>
                <ul className="space-y-3 text-slate-300 leading-7">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2"><span className="text-cyan-300">•</span><span>{point}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto rounded-2xl bg-cyan-400 text-slate-950 p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Confidentiality Standard</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-medium">
            {portfolioNote.map((note) => (
              <li key={note} className="flex gap-2"><span>•</span><span>{note}</span></li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
