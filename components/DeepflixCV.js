// Deepflix-style CV - Final Corrected React Component

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";

// Profile Data
const profile = {
  name: "Deepak Dakshina Moorthy",
  title: "HR & Payroll Assistant | CIPD L3 | Ex-Team Lead | Trainer | CQC & Compliance Champion",
  summary: `A highly organised and results-driven HR professional with Chartered Manager status from CMI. Skilled in HR admin, payroll, recruitment, employee relations, onboarding, policy compliance, and managing full-cycle HR processes across multi-site care settings. Pursuing Level 3 CIPD certification to strengthen professional expertise.`,
  contact: {
    phone: "07741837087",
    email: "deepak2012.dy@gmail.com",
    linkedin: "https://www.linkedin.com/in/deepak-dakshinamoorthy"
  }
};

// Career Highlights Data
const highlights = [
  { label: "Employees Managed", value: 200 },
  { label: "HR Queries Monthly", value: 100 },
  { label: "Coders Led", value: 35 },
  { label: "Paper Usage Reduced (%)", value: 70 },
  { label: "% Overtime Cost Cut", value: 15 }
];

// Timeline Data
const timelineData = [
  {
    year: "2024 - Present",
    role: "HR & Payroll Assistant",
    company: "Apex Care Homes Ltd",
    description: `Handled over 100 HR queries per month as the first point of contact, ensuring timely resolution or escalation.
• Supported end-to-end recruitment for 50+ roles annually, including posting adverts, coordinating interviews, and processing pre-employment checks.
• Maintained accurate records for a workforce of 200+ employees, updating HR systems, contracts, and correspondence.
• Managed onboarding for 20+ new hires per quarter, including overseas employees and those requiring skilled worker visa sponsorship.
• Organised induction and familiarisation tours for 100% of new starters, ensuring smooth integration and compliance with onboarding processes.
• Monitored absences across multiple sites, applying Bradford Factor scoring and supporting 10+ absence review meetings per month.
• Supported 5+ grievance and disciplinary cases monthly, ensuring compliance with internal procedures and employment law.
• Assisted with CQC and local authority inspections for 4+ care settings, contributing to consistently positive outcomes.
• Processed payroll for 200+ staff monthly using Select Pay, performing manual calculations and resolving an average of 15 pay-related queries per cycle.
• Ensured accurate processing of payroll deductions for tax, NI, pension, and bonuses, maintaining 100% compliance with regulatory deadlines.
• Reviewed and adjusted rotas for 10+ departments, optimising staffing levels to reduce overtime costs by 15%.
• Played a key role in digitising staff records, improving HR efficiency and reducing paper usage by 70%.
• Covered for HR Managers during absences, handling escalated queries and supporting delivery of HR strategy and policy rollouts.
• Coordinated 20+ training sessions annually, tracking completion rates and supporting compliance with mandatory training requirements.
• Supported continuous improvement of HR functions, contributing to the team being recognised as outstanding during internal audits and CQC reviews.`
  },
  {
    year: "2023",
    role: "Crew Trainer",
    company: "McDonald's",
    description: `Trained new hires, ensuring high team readiness and service standards.
• Boosted customer satisfaction scores from 35% to top in country within 2-3 months.
• Awarded Employee of the Quarter and Employee of the Year for outstanding leadership.`
  },
  {
    year: "2021 - 2023",
    role: "Team Lead / Trainer",
    company: "Omega / Annova / CoroHealth",
    description: `Led a team of 35 coders, ensuring efficient and accurate risk adjustment coding.
• Created SOPs and audit workflows, reducing coding errors by 30%.
• Managed client communications and delivered projects with 96% quality ahead of schedule.
• Conducted weekly stand-ups, mentorship, and performance reviews.`
  },
  {
    year: "2019 - 2020",
    role: "Senior Medical Coder",
    company: "Cognizant",
    description: `Performed ICD-10 CM and HCC coding for insurance claims.
• Maintained production targets and high-quality standards under audit.
• Collaborated with QA teams to optimize coding accuracy.`
  },
  {
    year: "2018 - 2019",
    role: "Medical Coder",
    company: "Episource",
    description: `Reviewed patient charts and assigned ICD-10 CM codes.
• Conducted risk adjustment analysis using multiple EMR systems.
• Trained freshers on project guidelines and compliance.`
  },
  {
    year: "2017 - 2018",
    role: "Sales Engineer",
    company: "Ababil Healthcare",
    description: `Sold £10k+ per month of medical equipment, including ventilators and monitors.
• Performed installations, demos, and client training.
• Represented the company at healthcare trade shows.`
  }
];

// Skills Data
const skills = [
  { label: "HR & Payroll (SelectPay, rota reviews)", target: "HR & Payroll Assistant" },
  { label: "CQC Audit & Compliance", target: "HR & Payroll Assistant" },
  { label: "Recruitment & Visa Process", target: "HR & Payroll Assistant" },
  { label: "Digital HR Transformation", target: "HR & Payroll Assistant" },
  { label: "Medical Coding & CRC Training", target: "HR & Payroll Assistant" },
  { label: "Team Leadership & Quality Assurance", target: "Team Lead / Trainer" },
  { label: "Client Communication & Project Management", target: "Team Lead / Trainer" },
  { label: "People Development & Induction Management", target: "HR & Payroll Assistant" }
];

// Education Data
const education = [
  { degree: "MBA - Business", institution: "University of Northampton", result: "Merit" },
  { degree: "BSc - Biomedical Engineering", institution: "SRM Institute of Science and Technology", result: "Merit" },
  { degree: "A-Levels - Science & Maths", institution: "Tamil Nadu Higher Secondary Education", result: "89%" },
  { degree: "GCSEs - Science", institution: "Tamil Nadu Secondary School", result: "92%" }
];

// Certifications Data
const certifications = [
  "CIPD Level 3 Certificate in People Practice (In Progress)",
  "Level 7 Diploma in Strategic Management (CMI, 2025)",
  "Foundation Chartered Manager (CMI, 2025)",
  "Lean Six Sigma Green Belt (2021)",
  "Certified Risk Adjustment Coder (AAPC, 2021)"
];

// Animated Counter Component
function AnimatedCounter({ end, active }) {
  const [count, setCount] = useState(end);
  useEffect(() => {
    if (active) {
      let start = 0;
      const duration = 1000;
      const step = end / (duration / 16);
      setCount(0);
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    } else {
      setCount(end);
    }
  }, [active, end]);
  return <p className="text-4xl font-bold text-white">{count}+</p>;
}

export default function DeepflixCV() {
  const [modalJob, setModalJob] = useState(null);
  const [activeHighlight, setActiveHighlight] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative pt-16 pb-6 flex flex-col items-center justify-center bg-gradient-to-r from-black to-gray-800 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-red-600 drop-shadow-lg">{profile.name}</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200">{profile.title}</p>
        <div className="mt-6 space-x-4">
          <a href={`tel:${profile.contact.phone}`} className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700">Call Me</a>
          <a href={`mailto:${profile.contact.email}`} className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700">Email Me</a>
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700">LinkedIn</a>
        </div>
      </div>      {/* About Me */}
      <section className="pt-2 pb-6 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b border-red-600 inline-block">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">{profile.summary}</p>
      </section>

      {/* Career Highlights */}
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b border-red-600 inline-block">Career Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <Card
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow text-center hover:bg-red-800 transition-colors duration-300"
              onMouseEnter={() => setActiveHighlight(idx)}
              onMouseLeave={() => setActiveHighlight(null)}
            >
              <AnimatedCounter end={item.value} active={activeHighlight === idx} />
              <p className="mt-2 text-gray-300">{item.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Skills */}
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b border-red-600 inline-block">Key Skills</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <li
              key={i}
              className="bg-gray-800 p-4 rounded-xl text-white hover:bg-red-600 cursor-pointer"
              onClick={() => setModalJob(timelineData.find(job => job.role === skill.target))}
            >
              {skill.label}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b border-red-600 inline-block">Education</h2>
        <ul className="space-y-4">
          {education.map((edu, i) => (
            <li key={i} className="bg-gray-800 p-4 rounded-xl group relative">
              <p className="text-white font-semibold text-lg">{edu.degree}</p>
              <p className="text-gray-400">{edu.institution}</p>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-white text-black px-2 py-1 rounded shadow">
                {edu.result}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications */}
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 border-b border-red-600 inline-block">Certifications</h2>
        <ul className="space-y-3">
          {certifications.map((cert, i) => (
            <li key={i} className="bg-gray-800 p-4 rounded-xl hover:bg-red-600 transition-colors duration-300 text-white">
              {cert}
            </li>
          ))}
        </ul>
      </section>

      {/* Career Timeline */}
      <section className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 border-b border-red-600 inline-block">Career Timeline</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {timelineData.map((item, idx) => (
            <Card
              key={idx}
              className="bg-gray-900 text-white rounded-xl shadow cursor-pointer hover:scale-105 transform transition"
              onClick={() => setModalJob(item)}
            >
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-red-500">{item.year}</h3>
                <p className="text-lg font-semibold text-white mt-1">{item.role}</p>
                <p className="text-gray-400 text-sm">{item.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Job Details Modal */}
      {modalJob && (
        <Dialog open={true} onOpenChange={() => setModalJob(null)}>
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalJob(null);
            }}
          >
            <div className="bg-gray-900 text-white p-6 rounded-xl max-w-xl w-full shadow-lg max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold text-red-500 mb-2">{modalJob.role}</h2>
              <p className="text-sm text-gray-400 mb-1">{modalJob.company} • {modalJob.year}</p>
              <p className="text-gray-200 mt-4 whitespace-pre-wrap">{modalJob.description}</p>
              <button onClick={() => setModalJob(null)} className="mt-6 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white">Close</button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
