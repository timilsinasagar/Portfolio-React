/**
 * Resume.jsx
 * --------------------------------------------------
 * "Education & Experience" section of the portfolio website.
 *
 * Features:
 * - Vertical timeline for Education and Experience columns
 * - Certification badge grid
 * --------------------------------------------------
 */

import { GraduationCap, Briefcase, Award, Database } from "lucide-react";
import { FaLaravel, FaHtml5, FaGitAlt } from "react-icons/fa"; 
const education = [
  {
    year: "2021 — 2025",
    title:
      "Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)",
    places: [
      "Prithvi Narayan Campus · Pokhara",
      "Tribhuvan University · Nepal",
    ],
    desc: "Studied core computer science fundamentals, database systems, software engineering, and web technologies. Graduated with First Division.",
  },
  {
    year: "2017 — 2020",
    title: "+2 Science (NEB)",
    places: [
      "Pokhara MultiModal secondary school · Nepal",
      "Nepal Examinaton Board · Nepal",
    ],
    desc: "Completed higher secondary education with a focus on mathematics, physics, chemistry, and biology.",
  },
  {
    year: "2004 — 2016",
    title: "Secondary Education Examination (SEE)",
    places: [
      "Little Daffodils English Boarding School · Pame ,Pokhara , Nepal",
    ],
    desc: "Continuous self-learning through structured online courses in Laravel, REST APIs, Livewire, and Alpine.js.",
  },
];

/**
 * Experience timeline entries
 */
const experience = [
  {
    year: "2023 — Present",
    title: "Junior Web Developer",
    places: ["IT Company · Kathmandu"],
    desc: "Building and maintaining Laravel-based web applications for clients across Nepal and internationally. Collaborating in agile team environments.",
  },
  {
    year: "2022 — 2023",
    title: "Freelance Web Developer",
    places: ["Self-Employed"],
    desc: "Delivered 20+ custom PHP/Laravel websites and business management systems for small and medium businesses across Nepal.",
  },
  {
    year: "2021 — 2022",
    title: "Web Development Intern",
    places: ["Tech Startup · Kathmandu"],
    desc: "Assisted in frontend development using HTML, CSS, Bootstrap, and JavaScript. Gained hands-on experience with real-world projects.",
  },
];

/**
 * Certification badges
 */
const certifications = [
  { icon: FaLaravel, name: "Laravel Mastery", org: "Laracasts · 2023" },
  { icon: FaHtml5, name: "Responsive Web Design", org: "freeCodeCamp · 2022" },
  { icon: Database, name: "MySQL Fundamentals", org: "Oracle Academy · 2022" },
  { icon: FaGitAlt, name: "Git & GitHub", org: "GitHub Learning Lab · 2021" },
];

/**
 * Renders a single timeline column (used for both Education and Experience)
 */
function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="tl-item" key={item.title}>
          <div className="tl-year">{item.year}</div>
          <div className="tl-title">{item.title}</div>
          {item.places.map((place) => (
            <div className="tl-place" key={place}>
              {place}
            </div>
          ))}
          <div className="tl-desc">{item.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="section-pad">
      <div className="container mx-auto max-w-7xl px-4">
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center mb-12 reveal">
          <div className="eyebrow-center">
            <span className="eyebrow-line" />
            My Journey
            <span className="eyebrow-line" />
          </div>

          <h2
            className="display-title"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
          >
            Education & <em className="text-[var(--gold)]">Experience</em>
          </h2>

          <div className="gold-rule center" />
        </div>

        {/* =========================================================
            EDUCATION + EXPERIENCE TIMELINES
            ========================================================= */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="reveal d1">
            <h3 className="timeline-heading mb-8">
              <GraduationCap size={18} />
              Education
            </h3>
            <Timeline items={education} />
          </div>

          <div className="reveal d2">
            <h3 className="timeline-heading mb-8">
              <Briefcase size={18} />
              Experience
            </h3>
            <Timeline items={experience} />
          </div>
        </div>

        {/* =========================================================
            CERTIFICATIONS
            ========================================================= */}
        <div className="mt-12 reveal">
          <h3 className="timeline-heading mb-8">
            <Award size={18} />
            Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((c) => {
              const Icon = c.icon;
              return (
                <div className="cert-badge" key={c.name}>
                  <div className="cert-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-org">{c.org}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
