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
  { label: "PHP / Laravel", value: 90 },
  { label: "HTML / CSS / Bootstrap", value: 82 },
  { label: "JavaScript / jQuery / Alpine.js", value: 75 },
  { label: "MySQL / Database Design", value: 80 },
  { label: "Git / REST APIs / Livewire", value: 70 },
];

/**
 * Tech stack tags
 */
const tags = [
  "Laravel",
  "PHP",
  "MySQL",
  "Bootstrap 5",
  "JavaScript",
  "Livewire",
  "Alpine.js",
  "REST API",
  "Git",
  "Figma",
];

/**
 * Quick facts panel rows
 */
const quickFacts = [
  { label: "Name", value: "Sagar Timilsina" },
  { label: "Location", value: "Pokhara, Nepal" },
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
              I'm Sagar Timilsina, a full-stack web developer based in Pokhara,
              Nepal. With a strong foundation in PHP and the Laravel framework,
              I specialise in building robust, scalable web applications that
              are both performant and delightful to use.
            </p>
            <p className="about-text mb-8">
              My philosophy is simple: write clean code, design for people, and
              never stop learning. Whether it's a startup MVP or an enterprise
              system, I bring the same level of craft and dedication to every
              project.
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
                  To become a globally recognised developer who builds
                  meaningful digital products that empower businesses and enrich
                  user lives across South Asia and beyond.
                </p>
              </div>

              <div className="about-panel about-panel-sm">
                <Target size={16} className="text-[var(--gold)] block mb-2.5" />
                <span className="about-panel-title about-panel-title-sm">
                  Mission
                </span>
                <p className="about-panel-text-sm">
                  Deliver clean, efficient, and maintainable code that solves
                  real business challenges.
                </p>
              </div>

              <div className="about-panel about-panel-sm">
                <Gem size={16} className="text-[var(--gold)] block mb-2.5" />
                <span className="about-panel-title about-panel-title-sm">
                  Values
                </span>
                <p className="about-panel-text-sm">
                  Integrity, continuous learning, clean architecture, user-first
                  thinking.
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
