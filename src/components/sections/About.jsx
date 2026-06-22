/**
 * About.jsx
 * --------------------------------------------------
 * "Who I Am" section of the portfolio website.
 *
 * Features:
 * - Bio copy + animated skill bars (fills on scroll into view)
 * - Tech stack tag list
 * - Vision / Mission / Values info panels
 * - Quick facts panel with a Download CV button
 * --------------------------------------------------
 */

import { useEffect, useRef, useState } from "react";
import { Eye, Target, Gem, Download } from "lucide-react";

/**
 * Skill bars — label + percentage shown in the left column
 */

const skills = [
  { label: "PHP / Laravel", value: 95 },
  { label: "JavaScript / React", value: 85 },
  { label: "HTML / CSS / Bootstrap", value: 90 },
  { label: "MySQL / Database Design", value: 88 },
  { label: "REST APIs / Integrations", value: 90 },
  // { label: "Linux Server Administration", value: 80 },
  { label: "Git / Version Control", value: 85 },
];

/**
 * Tech stack tags
 */
/**
 * Tech Stack
 */
const tags = [
  "Laravel",
  "PHP",
  "React",
  "Node.js",
  "Express.js",
  "MySQL",
  "MongoDB",
  "JavaScript",
  "Bootstrap 5",
  "Tailwind CSS",
  "REST API",
  "Git",
  "Linux",
  "DigitalOcean",
  "Livewire",
  "Alpine.js",
];

/**
 * Quick facts panel rows
 */
/**
 * Quick Facts
 */
const quickFacts = [
  { label: "Name", value: "Sagar Timilsina" },
  { label: "Role", value: "Senior Full Stack Developer" },
  { label: "Location", value: "Pokhara, Nepal" },
  { label: "Experience", value: "Full Stack Web Development" },
  { label: "Availability", value: "Open to Work ✓", gold: true },
  { label: "Languages", value: "Nepali, English, Hindi" },
  { label: "Freelance", value: "Available" },
];

export default function About() {
  /**
   * Skill bars only animate to their target width once the
   * section has scrolled into view (mirrors the original
   * data-skill / data-w driven reveal behaviour).
   */
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const el = skillsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-pad">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* =====================================================
              LEFT — BIO & SKILLS
              ===================================================== */}
          <div className="reveal">
            <div className="eyebrow">Who I Am</div>

            <h2
              className="display-title"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                marginBottom: "1.2rem",
              }}
            >
              Crafting the Web
              <br />
              <em className="text-[var(--gold)]">with Purpose</em>
            </h2>

            <div className="gold-rule" />

            <p className="about-text mb-6">
              I'm Sagar Timilsina, a Senior Full Stack Web Developer based in
              Pokhara, Nepal. I specialize in building scalable,
              high-performance web applications using Laravel, PHP, and modern
              JavaScript frameworks. My focus is on creating clean, efficient,
              and user-centered digital solutions that solve real-world
              problems.
            </p>

            <p className="about-text mb-6">
              I believe in writing clean and maintainable code, designing with
              purpose, and continuously improving through learning and
              experience. From idea to deployment, I handle development, APIs,
              databases, and server-side architecture with equal dedication.
            </p>

            <p className="about-text mb-8">
              <strong>"Code with Purpose Build with Passion."</strong> I turn
              ideas into meaningful digital products that are reliable,
              scalable, and impactful—whether it's a startup MVP, enterprise
              system, or freelance solution.
            </p>

            {/* Skill bars */}
            <div ref={skillsRef}>
              {skills.map((s) => (
                <div className="skill-bar-wrap" key={s.label}>
                  <div className="skill-label">
                    <span>{s.label}</span>
                    <span>{s.value}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: skillsVisible ? `${s.value}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack tags */}
            <div className="mt-3">
              {tags.map((t) => (
                <span className="about-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT — INFO PANELS
              ===================================================== */}
          <div className="reveal d2">
            {/* Vision / Mission / Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="sm:col-span-2 about-panel">
                <div className="about-panel-title-row">
                  <Eye size={16} className="text-[var(--gold)]" />
                  <span className="about-panel-title">My Vision</span>
                </div>
                <p className="about-panel-text">
                  To become a globally impactful software engineer who builds scalable,
                  innovative, and meaningful digital solutions that empower businesses,
                  improve user experiences, and contribute to technological growth in Nepal
                  and beyond.
                </p>
              </div>

              <div className="about-panel about-panel-sm">
                <Target size={16} className="text-[var(--gold)] block mb-2.5" />
                <span className="about-panel-title about-panel-title-sm">
                  Mission
                </span>
                <p className="about-panel-text-sm">
                  To design and develop clean, secure, and scalable web applications using
                  modern technologies like Laravel, PHP, and JavaScript while solving real
                  business problems through efficient engineering.
                </p>
              </div>

              <div className="about-panel about-panel-sm">
                <Gem size={16} className="text-[var(--gold)] block mb-2.5" />
                <span className="about-panel-title about-panel-title-sm">
                  Values
                </span>
                <p className="about-panel-text-sm">
                  Integrity, continuous learning, clean architecture, user-first mindset,
                  and commitment to delivering high-quality, maintainable software.
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="about-panel">
              <div className="quick-facts-title">Quick Facts</div>

              <div className="flex flex-col gap-2">
                {quickFacts.map((f) => (
                  <div className="flex quick-facts-row" key={f.label}>
                    <div className="w-5/12 quick-facts-label">{f.label}</div>
                    <div
                      className={`w-7/12 quick-facts-value ${f.gold ? "gold" : ""}`}
                    >
                      {f.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <a
                  href="/assets/cv/Sagar-Timilsina-CV.pdf"
                  download
                  className="btn-ink"
                  style={{ fontSize: "0.6rem", padding: "0.65rem 1.5rem" }}
                >
                  <span>Download CV</span>
                  <Download size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
