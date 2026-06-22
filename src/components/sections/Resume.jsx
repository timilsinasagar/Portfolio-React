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
    desc: "Studied core computer science subjects including C and C++ programming, data structures and algorithms, operating systems, computer networks, database systems, software engineering, information security, and cryptography. Developed strong problem-solving, analytical, and programming skills through both theoretical study and practical implementation.",
  },
  {
    year: "2017 — 2020",
    title: "+2 Science",
    places: [
      "Pokhara MultiModal Secondary School · Pokhara, Nepal",
      "National Examination Board (NEB) · Nepal",
    ],
    desc: "Completed higher secondary education with a strong foundation in Physics, Chemistry, Mathematics, and Biology, developing analytical thinking and scientific reasoning.",
  },
  {
    year: "2004 — 2016",
    title: "Secondary Education (SEE)",
    places: [
      "Little Daffodils English Boarding School · Pame, Pokhara, Nepal",
      "National Examination Board (NEB) · Nepal",
    ],
    desc: "Completed secondary-level education focusing on foundational subjects such as English, Mathematics, Science, and Social Studies, building discipline, consistency, and academic fundamentals.",
  },
];

/**
 * Experience timeline entries
 */
const experience = [
  {
  year: "February 2025 — Present",
  title: "Senior Full Stack Web Developer & Project Manager",
  places: ["XAV Technology · Pokhara, Nepal"],
  desc: "Leading the development of an advanced Learning Management System (LMS) and other enterprise web applications using Laravel, PHP, MySQL, and traditional frontend technologies (HTML, CSS, Bootstrap, and JavaScript). Responsible for system architecture, backend development, database design, and performance optimization. Managing server infrastructure, deployment, and production environments to ensure stability and security. Acting as Project Manager by handling requirement analysis, task allocation, project planning, and cross-team coordination. Mentoring junior developers and ensuring clean, maintainable, and scalable code standards across all projects."
},
  {
    year: "November 2025 — Present (Part Time)",
    title: "Technology Partner (Software & Web Solutions)",
    places: ["Aurvion Group and Industries · Nepal"],
    desc: "Serving as a Technology Partner, providing end-to-end technical solutions including web application development, system architecture design, and infrastructure planning. Built and managed internal systems for product management within the organization, ensuring smooth tracking, organization, and scalability of digital products. Responsible for resolving technical challenges in collaboration with the CTO, improving system stability, and supporting continuous technical improvements. Leading the implementation of scalable digital solutions using Laravel and full-stack technologies to support business growth and digital transformation.",
  },
  {
    year: "February 2024 — February 2025",
    title: "Backend Web Developer (PHP & Laravel)",
    places: ["Tuki Soft Pvt. Ltd. · Pokhara, Nepal"],
    desc: "Developed and maintained web applications using PHP and Laravel for CRM systems, government projects, and enterprise solutions. Worked closely with design teams to implement responsive UIs and integrated APIs such as Stripe, Zoom, and Bunny CDN. Contributed to the development of a Learning Management System (LMS), improved application security, and supported QA processes including bug fixing and performance improvements. Mentored interns and followed agile development practices.",
  },
  {
    year: "July 2023 — January 2024",
    title: "Full Stack Web Developer",
    places: ["XDezo Academy · XDezo Technology · Pokhara, Nepal"],
    desc: "Worked as part of a development team to build custom web applications using HTML, CSS, JavaScript, PHP, and Laravel. Developed responsive frontend interfaces and backend functionality for multiple projects. Participated in code reviews, workshops, and coding competitions while ensuring clean, maintainable code and following best development practices.",
  },
  {
    year: "2022 — 2024",
    title: "Operations Lead & College Representative (CR)",
    places: ["Code for Change Pokhara · Nepal"],
    desc: "Served as College Representative and Operations Lead, managing student engagement, event coordination, and community programs. Led planning and execution of workshops, technical events, and outreach activities. Handled team coordination, registrations, and logistics while improving organizational workflows and fostering collaboration between students and tech communities.",
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
            {/* =========================================================
            CERTIFICATIONS
            ========================================================= */}
            {/* <div className="mt-12 reveal">
              <h3 className="timeline-heading mb-8">
                <Award size={18} />
                Certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2  gap-4">
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
            </div> */}
          </div>

          <div className="reveal d2">
            <h3 className="timeline-heading mb-8">
              <Briefcase size={18} />
              Experience
            </h3>
            <Timeline items={experience} />
          </div>
        </div>
      </div>
    </section>
  );
}
