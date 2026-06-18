/**
 * Projects.jsx
 * --------------------------------------------------
 * "Recent Projects" section of the portfolio website.
 *
 * Features:
 * - Category filter buttons (All / Laravel / Frontend / E-Commerce)
 * - Mixed bento-style grid (1 featured + 3 thirds + 2 halves)
 * - Hover overlay with project name, stack, and quick links
 * --------------------------------------------------
 */

import { Eye } from "lucide-react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";

/**
 * Filter buttons — key must match a project's `cat`
 */
const filters = [
  { key: "all", label: "All" },
  { key: "laravel", label: "Laravel" },
  { key: "frontend", label: "Frontend" },
  { key: "ecommerce", label: "E-Commerce" },
];

/**
 * Project entries. `span` controls the grid width (mirrors the
 * original Bootstrap col-12 / col-md-4 / col-md-6 layout) and is
 * fixed per item — filtering hides non-matching cards rather
 * than reflowing the grid, matching the original behaviour.
 */
const projects = [
  {
    id: 1,
    cat: "laravel",
    featured: true,
    span: "md:col-span-12",
    delay: "",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    overlayCat: "Laravel · Full Stack · 2024",
    overlayName: "School Management System — Complete ERP Platform",
    name: "School Management System",
    stack: "Laravel · MySQL · Bootstrap · Livewire",
    demo: "https://sagartimilsina.com",
    github: "#",
  },
  {
    id: 2,
    cat: "ecommerce",
    span: "md:col-span-4",
    delay: "d1",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    overlayCat: "E-Commerce · 2024",
    overlayName: "Nepali Handicraft Online Store",
    name: "Handicraft E-Shop",
    stack: "Laravel · eSewa · MySQL",
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    cat: "laravel",
    span: "md:col-span-4",
    delay: "d2",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    overlayCat: "Laravel · 2023",
    overlayName: "Inventory Management System",
    name: "Inventory Manager",
    stack: "Laravel · PHP · MySQL · Bootstrap",
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    cat: "frontend",
    span: "md:col-span-4",
    delay: "d3",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    overlayCat: "Frontend · 2023",
    overlayName: "Corporate Portfolio Website",
    name: "Corporate Portfolio",
    stack: "HTML · CSS · Bootstrap 5 · JS",
    demo: "#",
    github: "#",
  },
  {
    id: 5,
    cat: "laravel",
    span: "md:col-span-6",
    delay: "d1",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    overlayCat: "Laravel · 2023",
    overlayName: "Hospital Appointment System",
    name: "Hospital Appointment System",
    stack: "Laravel · SMS API · MySQL",
    demo: "#",
    github: "#",
  },
  {
    id: 6,
    cat: "ecommerce",
    span: "md:col-span-6",
    delay: "d2",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    overlayCat: "E-Commerce · 2022",
    overlayName: "Restaurant Online Ordering Platform",
    name: "Restaurant Order System",
    stack: "Laravel · JS · Bootstrap · Stripe",
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects = projects.filter(
    (p) => activeFilter === "all" || p.cat === activeFilter,
  );

  return (
    <section id="portfolio" className="section-pad">
      <div className="container mx-auto max-w-7xl px-4">
        {/* =========================================================
            SECTION HEADER + FILTERS
            ========================================================= */}
        <div className="grid lg:grid-cols-2 gap-6 items-end mb-12">
          <div className="reveal">
            <div className="eyebrow">My Work</div>
            <h2
              className="display-title"
              style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}
            >
              Recent <em className="text-[var(--gold)]">Projects</em>
            </h2>
            <div className="gold-rule" />
            <p
              style={{
                fontSize: "0.82rem",
                lineHeight: 1.9,
                color: "rgba(200, 184, 150, 0.5)",
              }}
            >
              A selection of web applications and sites I've built — each
              representing a unique challenge solved with clean code and
              thoughtful design.
            </p>
          </div>

          <div className="reveal d2">
            <div className="proj-filter lg:justify-end">
              {filters.map((f) => (
                <button
                  key={f.key}
                  className={`pf-btn ${activeFilter === f.key ? "on" : ""}`}
                  onClick={() => setActiveFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            PROJECT GRID
            ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {visibleProjects.map((p) => (
            <div
              key={p.id}
              data-cat={p.cat}
              className={`${p.span} reveal ${p.featured ? "proj-featured" : p.delay}`}
            >
              <div className="proj-card">
                <div className="proj-img-wrap">
                  <img src={p.img} alt={p.name} />

                  <div className="proj-overlay">
                    <div className="proj-overlay-cat">{p.overlayCat}</div>
                    <div className="proj-overlay-name">{p.overlayName}</div>
                  </div>

                  <div className="proj-links">
                    <a
                      href={p.demo}
                      target={p.demo !== "#" ? "_blank" : undefined}
                      rel={p.demo !== "#" ? "noopener noreferrer" : undefined}
                      className="proj-link-btn"
                      aria-label={`View live demo of ${p.name}`}
                    >
                      <Eye size={15} />
                    </a>
                    <a
                      href={p.github}
                      target={p.github !== "#" ? "_blank" : undefined}
                      rel={p.github !== "#" ? "noopener noreferrer" : undefined}
                      className="proj-link-btn"
                      aria-label={`View source code of ${p.name}`}
                    >
                      <BsGithub size={15} />
                    </a>
                  </div>
                </div>

                <div className="proj-meta">
                  <div className="proj-name">{p.name}</div>
                  <div className="proj-stack">{p.stack}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
