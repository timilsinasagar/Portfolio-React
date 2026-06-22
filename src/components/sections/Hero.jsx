/**
 * Hero.jsx
 * --------------------------------------------------
 * Main landing section of the portfolio website.
 * Ink & gold editorial theme.
 *
 * Features:
 * - Animated typing roles (useTyping hook)
 * - Atmospheric background (glow, grid, ghost initial)
 * - Framed profile photo with corner accents
 * - CTA buttons with sliding-fill hover effect
 * - Experience stats strip
 * - Animated scroll cue
 * --------------------------------------------------
 */

import { useTyping } from "../../hooks/useTyping";
import { Compass } from "lucide-react";
import heroImage from "../../assets/images/heroImage.png";

/**
 * Roles shown in the typing animation
 */
const roles = [
  "Senior Full Stack Developer",
  "Project Manager",
  "Laravel & PHP Developer",
  "MERN Stack Developer",
  "REST API Developer",
  "Electrical Technician",
];

/**
 * Developer statistics (displayed in the experience strip)
 */
const stats = [
  { num: "3", label: "Years Experience" },
  { num: "40", label: "Projects Completed" },
  { num: "30", label: "Happy Clients" },
];

export default function Hero() {
  /**
   * Custom typing animation hook — cycles through the roles array
   */
  const typed = useTyping(roles);

  /**
   * Smooth scroll handler for in-page anchor links
   */
  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* =========================================================
          BACKGROUND EFFECTS
          ========================================================= */}
      <div className="hero-glow" />
      <div className="hero-grid" />
      <div className="hero-ghost hidden lg:block">ST</div>

      {/* =========================================================
          MAIN CONTENT CONTAINER
          ========================================================= */}
      <div className="container mx-auto max-w-7xl  relative z-10 py-20">
        <div className="grid lg:grid-cols-12 items-center gap-10 min-h-screen">
          {/* =====================================================
              LEFT SIDE — TEXT CONTENT
              ===================================================== */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Eyebrow line */}
            <div className="hero-sup hero-anim ha1">
              <span className="hero-sup-line" />
              <span className="hero-sup-txt">
                Software Engineer · Full Stack Developer · Pokhara, Nepal
              </span>
            </div>

            {/* Main heading */}
            <h1 className="hero-name hero-anim ha2">
              Hello, I'm
              <br />
              <em>Sagar Timilsina</em>
            </h1>

            {/* Typing animation role */}
            <div className="hero-role hero-anim ha3 mt-3">
              <span>{typed}</span>
              <span className="hero-typed-cursor" />
            </div>

            {/* Short bio */}
            <p className="hero-bio hero-anim ha4">
              I design, develop, and deploy modern web applications that are
              fast, secure, and scalable. With expertise in Laravel, PHP, React,
              REST APIs, and Linux server administration, I help businesses
              transform ideas into impactful digital solutions while ensuring
              performance, reliability, and user satisfaction.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 hero-anim ha5">
              <a
                href="#portfolio"
                onClick={(e) => scrollTo(e, "#portfolio")}
                className="hero-btn-ink"
              >
                <span>View My Work</span>
                <Compass size={15} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                className="btn-ghost-ink"
              >
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Experience stats strip */}
            <div className="experience-pill hero-anim ha5">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="exp-num">
                    {s.num}
                    <span className="exp-plus">+</span>
                  </div>
                  <div className="exp-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE — PROFILE PHOTO
              ===================================================== */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end hero-anim ha2">
            <div className="hero-photo-wrap">
              <div className="hero-photo-frame" />
              <div className="hero-photo-corner tl" />
              <div className="hero-photo-corner br" />
              <img src={heroImage} alt="Sagar Timilsina" loading="eager" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
          ========================================================= */}
      <a
        href="#about"
        onClick={(e) => scrollTo(e, "#about")}
        className="scroll-cue"
      >
        <span>Scroll</span>
        <div className="scroll-cue-track">
          <div className="scroll-cue-fill" />
        </div>
      </a>
    </section>
  );
}
