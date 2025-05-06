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
  // ... (include full timeline data as in your code)
];

// Skills Data
const skills = [
  // ... (include full skills data)
];

// Education Data
const education = [
  // ... (include full education data)
];

// Certifications Data
const certifications = [
  // ... (include full certifications data)
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
        <h1 className="text-5xl md:text-6xl font-bold text-red-600 drop-shadow-lg">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200">{profile.title}</p>
        <div className="mt-6 space-x-4">
          <a href={`tel:${profile.contact.phone}`} className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700">
            Call Me
          </a>
          <a href={`mailto:${profile.contact.email}`} className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700">
            Email Me
          </a>
          <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700">
            LinkedIn
          </a>
        </div>
      </div>

      {/* About Me */}
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
      {/* ... (rest of sections) */}
    </div>
  );
}