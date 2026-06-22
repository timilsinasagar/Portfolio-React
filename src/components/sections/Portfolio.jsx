/**
 * Projects.jsx
 * --------------------------------------------------
 * "Recent Projects" section of the portfolio website.
 *
 * Features:
 * - Category filter buttons (All / Laravel / Frontend / E-Commerce)
 * - Mixed bento-style grid (1 featured + 3 thirds + 2 halves)
 * - Hover overlay with project name, stack, and quick links
 * - Clicking a card navigates to /projects/:id (ProjectDetail page)
 * --------------------------------------------------
 */

import { Eye } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { projects, filters } from "@/data/projectsData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

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
              <div
                className="proj-card"
                role="link"
                tabIndex={0}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/projects/${p.id}`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") navigate(`/projects/${p.id}`);
                }}
              >
                <div className="proj-img-wrap">
                  <img src={p.img} alt={p.name} />

                  <div className="proj-overlay">
                    <div className="proj-overlay-cat">{p.overlayCat}</div>
                    <div className="proj-overlay-name">{p.overlayName}</div>
                  </div>

                  {/* stopPropagation so these quick-link buttons don't
                      also trigger the card's navigate() click */}
                  <div className="proj-links">
                    <a
                      href={p.demo}
                      target={p.demo !== "#" ? "_blank" : undefined}
                      rel={p.demo !== "#" ? "noopener noreferrer" : undefined}
                      className="proj-link-btn"
                      aria-label={`View live demo of ${p.name}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Eye size={15} />
                    </a>
                    <a
                      href={p.github}
                      target={p.github !== "#" ? "_blank" : undefined}
                      rel={p.github !== "#" ? "noopener noreferrer" : undefined}
                      className="proj-link-btn"
                      aria-label={`View source code of ${p.name}`}
                      onClick={(e) => e.stopPropagation()}
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