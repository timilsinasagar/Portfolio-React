/**
 * ProjectDetail.jsx
 * --------------------------------------------------
 * Full project description page, rendered at /projects/:id.
 * Reads the project id from the URL, looks it up in projectsData,
 * and shows the complete write-up: gallery, description, features,
 * challenge, and links — with a "Back to Projects" navigation.
 *
 * Projects that carry an optional `details` object (currently the
 * LMS project) get extra deep-dive sections rendered automatically:
 * Tech Stack Breakdown, System Architecture, Performance Engineering,
 * Security, Business Impact, and a richer Challenge write-up.
 * Projects without `details` render the original, simpler layout.
 * --------------------------------------------------
 */

import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Users,
  Clock,
  Briefcase,
  BarChart3,
  Layers,
  Cpu,
  Gauge,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Building2,
} from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { projects } from "../data/projectsData";

/* ── Small helpers for rendering nested "details" data ───────── */

// Turns a stack sub-section (string | array | object) into a flat
// list of display strings, regardless of its shape.
function flattenStackValue(value) {
  if (!value) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  if (typeof value === "object") {
    return Object.values(value).flatMap(flattenStackValue);
  }
  return [];
}

function titleCase(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => String(p.id) === id);
  const [activeImg, setActiveImg] = useState(0);

  // Scroll to top whenever a different project id is opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setActiveImg(0);
  }, [id]);

  // If someone hits a bad/old id directly, send them back gracefully
  if (!project) {
    return (
      <section className="section-pad min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="display-title text-2xl mb-4">Project not found</h2>
          <button onClick={() => navigate("/")} className="btn-ink">
            <span>Back to Home</span>
          </button>
        </div>
      </section>
    );
  }

  const details = project.details;

  return (
    <section
      className="section-pad"
      style={{ background: "var(--bg-parchment)" }}
    >
      <div className="container mx-auto max-w-7xl px-4 py-20">
        {/* ── Back link ──────────────────────────────────── */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-10 text-[0.72rem] tracking-[0.2em] uppercase no-underline"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft size={15} />
          Back to Projects
        </Link>

        {/* ── Header ─────────────────────────────────────── */}
        <div className="mb-10">
          <div className="eyebrow">{project.overlayCat}</div>
          <h1
            className="display-title"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
          >
            {project.name}
          </h1>
          <div className="gold-rule" />
        </div>

        {/* ── Main gallery image — capped size, centered ──── */}
        <div
          className="mb-4 overflow-hidden mx-auto"
          style={{
            border: "1px solid var(--border)",
            maxWidth: "800px",
          }}
        >
          <img
            src={project.gallery[activeImg]}
            alt={project.name}
            className="w-full"
            style={{
              aspectRatio: "16 / 10",
              maxHeight: "360px",
              // objectFit: "cover",
              filter: "var(--img-filter)",
            }}
          />
        </div>

        {/* ── Thumbnail strip (only if more than 1 image) ───
        {project.gallery.length > 1 && (
          <div className="flex gap-3 mb-12 flex-wrap justify-center">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  width: 150,
                  height: 100,
                  border:
                    i === activeImg
                      ? "2px solid var(--gold)"
                      : "1px solid var(--border)",
                  opacity: i === activeImg ? 1 : 0.6,
                  overflow: "hidden",
                  padding: 20,
                  cursor: "pointer",
                  background: "none",
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    // objectFit: "cover",
                  }}
                />
              </button>
            ))}
          </div>
        )} */}

        {/* ── Quick info strip ───────────────────────────── */}
        <div
          className="flex flex-wrap gap-6 mb-10 pb-6"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <Clock size={15} style={{ color: "var(--gold)" }} />
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Duration:
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--text-heading)" }}>
              {project.duration}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={15} style={{ color: "var(--gold)" }} />
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Team Size:
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--text-heading)" }}>
              {project.teamSize}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Briefcase size={15} style={{ color: "var(--gold)" }} />
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Type:
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--text-heading)" }}>
              {project.projectType}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <BarChart3 size={15} style={{ color: "var(--gold)" }} />
            <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
              Level:
            </span>
            <span style={{ fontSize: "0.78rem", color: "var(--text-heading)" }}>
              {project.level}
            </span>
          </div>

          {details?.meta?.status && (
            <div className="flex items-center gap-2">
              <Gauge size={15} style={{ color: "var(--gold)" }} />
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                Status:
              </span>
              <span
                style={{ fontSize: "0.78rem", color: "var(--text-heading)" }}
              >
                {details.meta.status}
              </span>
            </div>
          )}
        </div>

        {/* ── Content grid: description + meta sidebar ───── */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Main column */}
          <div className="lg:col-span-2">
            <h3
              className="font-display text-xl mb-4"
              style={{ color: "var(--text-heading)" }}
            >
              Overview
            </h3>
            <p
              className="mb-8"
              style={{
                fontSize: "0.9rem",
                lineHeight: 2,
                color: "var(--text-body)",
              }}
            >
              {project.description}
            </p>

            {details?.meta && (
              <div
                className="grid sm:grid-cols-2 gap-4 mb-10 p-5"
                style={{ border: "1px solid var(--border)" }}
              >
                {details.meta.type && (
                  <div>
                    <div
                      className="text-[0.6rem] tracking-[0.18em] uppercase mb-1"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Platform Type
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-heading)",
                      }}
                    >
                      {details.meta.type}
                    </div>
                  </div>
                )}
                {details.meta.ownership && (
                  <div>
                    <div
                      className="text-[0.6rem] tracking-[0.18em] uppercase mb-1"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Ownership
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-heading)",
                      }}
                    >
                      {details.meta.ownership}
                    </div>
                  </div>
                )}
                {details.meta.scale && (
                  <div className="sm:col-span-2">
                    <div
                      className="text-[0.6rem] tracking-[0.18em] uppercase mb-1"
                      style={{ color: "var(--text-faint)" }}
                    >
                      Scale
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-heading)",
                      }}
                    >
                      {details.meta.scale}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── Deployments (rich projects only) ──────── */}
            {details?.deployments && details.deployments.length > 0 && (
              <>
                <h3
                  className="font-display text-xl mb-2 flex items-center gap-2"
                  style={{ color: "var(--text-heading)" }}
                >
                  <Building2 size={18} style={{ color: "var(--gold)" }} />
                  Deployed Across Multiple Institutions
                </h3>
                <p
                  className="mb-5"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.8,
                    color: "var(--text-muted)",
                  }}
                >
                  One core platform, independently deployed and maintained for
                  each academy below — same product, separate codebases.
                </p>
                <div className="grid sm:grid-cols-6  gap-4 mb-10">
                  {details.deployments.map((d, i) => {
                    const hasLink =
                      d.url && d.url !== "#" && d.url !== "REPLACE_WITH_URL";
                    const Card = (
                      <div
                        style={{ border: "1px solid var(--border)" }}
                        className="overflow-hidden h-auto  flex flex-col p-3"
                      >
                        <div
                          style={{ textAlign:"center"}}
                        >
                          <img
                            src={d.img}
                            alt={d.name}
                            style={{
                              width: "100%",
                              objectFit: "cover",
                              filter: "var(--img-filter)",
                            }}
                          />
                        </div>
                        <div className="p-3 flex items-center justify-between gap-2">
                          <span
                            style={{
                              fontSize: "0.8rem",
                              color: "var(--text-heading)",
                            }}
                          >
                            {d.name}
                          </span>
                          {hasLink && (
                            <ExternalLink
                              size={13}
                              style={{ color: "var(--gold)", flexShrink: 0 }}
                            />
                          )}
                        </div>
                      </div>
                    );

                    return hasLink ? (
                      <a
                        key={i}
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline"
                      >
                        {Card}
                      </a>
                    ) : (
                      <div key={i} style={{ opacity: 0.7, cursor: "default" }}>
                        {Card}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* ── Tech Stack Breakdown (rich projects only) ── */}
            {details?.stack && (
              <>
                <h3
                  className="font-display text-xl mb-4 flex items-center gap-2"
                  style={{ color: "var(--text-heading)" }}
                >
                  <Layers size={18} style={{ color: "var(--gold)" }} />
                  Tech Stack Breakdown
                </h3>
                <div className="grid sm:grid-cols-2 gap-5 mb-10">
                  {Object.entries(details.stack).map(([section, value]) => (
                    <div
                      key={section}
                      style={{ border: "1px solid var(--border)" }}
                      className="p-4"
                    >
                      <div
                        className="text-[0.65rem] tracking-[0.16em] uppercase mb-2"
                        style={{ color: "var(--gold)" }}
                      >
                        {titleCase(section)}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {flattenStackValue(value).map((item, i) => (
                          <span key={i} className="about-tag">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ── System Architecture (rich projects only) ── */}
            {details?.systemArchitecture && (
              <>
                <h3
                  className="font-display text-xl mb-4 flex items-center gap-2"
                  style={{ color: "var(--text-heading)" }}
                >
                  <Cpu size={18} style={{ color: "var(--gold)" }} />
                  System Architecture
                </h3>
                <p
                  className="mb-3"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.9,
                    color: "var(--text-body)",
                  }}
                >
                  {details.systemArchitecture.designStyle}
                </p>
                {details.systemArchitecture.corePrinciples && (
                  <ul className="mb-6 space-y-2">
                    {details.systemArchitecture.corePrinciples.map((p, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={15}
                          style={{
                            color: "var(--gold)",
                            marginTop: 2,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.85rem",
                            lineHeight: 1.8,
                            color: "var(--text-body)",
                          }}
                        >
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {details.systemArchitecture.eventFlow && (
                  <div className="space-y-3 mb-10">
                    {details.systemArchitecture.eventFlow.map((ev, i) => (
                      <div
                        key={i}
                        style={{ border: "1px solid var(--border)" }}
                        className="p-4"
                      >
                        <div
                          className="text-[0.65rem] tracking-[0.16em] uppercase mb-2"
                          style={{ color: "var(--gold)" }}
                        >
                          {ev.label}
                        </div>
                        <div
                          className="flex flex-wrap items-center gap-1.5"
                          style={{
                            fontSize: "0.78rem",
                            color: "var(--text-body)",
                          }}
                        >
                          {ev.flow.split("→").map((step, j, arr) => (
                            <span key={j} className="flex items-center gap-1.5">
                              <span>{step.trim()}</span>
                              {j < arr.length - 1 && (
                                <ArrowRight
                                  size={11}
                                  style={{ color: "var(--text-faint)" }}
                                />
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* ── Key Features ───────────────────────────── */}
            <h3
              className="font-display text-xl mb-4"
              style={{ color: "var(--text-heading)" }}
            >
              Key Features
            </h3>

            {details?.featuresBreakdown ? (
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {Object.entries(details.featuresBreakdown).map(
                  ([group, items]) => (
                    <div key={group}>
                      <div
                        className="text-[0.65rem] tracking-[0.16em] uppercase mb-2"
                        style={{ color: "var(--gold)" }}
                      >
                        {titleCase(group)}
                      </div>
                      <ul className="space-y-2">
                        {items.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2
                              size={15}
                              style={{
                                color: "var(--gold)",
                                marginTop: 2,
                                flexShrink: 0,
                              }}
                            />
                            <span
                              style={{
                                fontSize: "0.85rem",
                                lineHeight: 1.8,
                                color: "var(--text-body)",
                              }}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                )}
              </div>
            ) : (
              <ul className="mb-10 space-y-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      style={{
                        color: "var(--gold)",
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.85rem",
                        lineHeight: 1.8,
                        color: "var(--text-body)",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* ── Performance Engineering (rich projects only) ── */}
            {details?.performanceEngineering && (
              <>
                <h3
                  className="font-display text-xl mb-4 flex items-center gap-2"
                  style={{ color: "var(--text-heading)" }}
                >
                  <TrendingUp size={18} style={{ color: "var(--gold)" }} />
                  Performance & Scalability
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {Object.entries(details.performanceEngineering).map(
                    ([group, items]) => (
                      <div key={group}>
                        <div
                          className="text-[0.65rem] tracking-[0.16em] uppercase mb-2"
                          style={{ color: "var(--gold)" }}
                        >
                          {titleCase(group)}
                        </div>
                        <ul className="space-y-2">
                          {items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2
                                size={15}
                                style={{
                                  color: "var(--gold)",
                                  marginTop: 2,
                                  flexShrink: 0,
                                }}
                              />
                              <span
                                style={{
                                  fontSize: "0.85rem",
                                  lineHeight: 1.8,
                                  color: "var(--text-body)",
                                }}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  )}
                </div>
              </>
            )}

            {/* ── Security (rich projects only) ─────────── */}
            {details?.security && (
              <>
                <h3
                  className="font-display text-xl mb-4 flex items-center gap-2"
                  style={{ color: "var(--text-heading)" }}
                >
                  <ShieldCheck size={18} style={{ color: "var(--gold)" }} />
                  Security
                </h3>
                <p
                  className="mb-3"
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.9,
                    color: "var(--text-body)",
                  }}
                >
                  {details.security.authentication}
                </p>
                {details.security.dataProtection && (
                  <ul className="mb-10 space-y-2">
                    {details.security.dataProtection.map((d, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={15}
                          style={{
                            color: "var(--gold)",
                            marginTop: 2,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.85rem",
                            lineHeight: 1.8,
                            color: "var(--text-body)",
                          }}
                        >
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {/* ── Business Impact (rich projects only) ──── */}
            {details?.impact && (
              <>
                <h3
                  className="font-display text-xl mb-4"
                  style={{ color: "var(--text-heading)" }}
                >
                  Business Impact
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {details.impact.map((item, i) => (
                    <div
                      key={i}
                      style={{ border: "1px solid var(--border)" }}
                      className="p-4"
                    >
                      <div
                        className="text-[0.65rem] tracking-[0.16em] uppercase mb-1.5"
                        style={{ color: "var(--gold)" }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          lineHeight: 1.7,
                          color: "var(--text-body)",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ── The Challenge ──────────────────────────── */}
            {(project.challenge || details?.challengeBreakdown) && (
              <>
                <h3
                  className="font-display text-xl mb-4 flex items-center gap-2"
                  style={{ color: "var(--text-heading)" }}
                >
                  {details?.challengeBreakdown && (
                    <AlertTriangle size={18} style={{ color: "var(--gold)" }} />
                  )}
                  The Challenge
                </h3>

                {details?.challengeBreakdown ? (
                  <>
                    <p
                      className="mb-4"
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 2,
                        color: "var(--text-body)",
                      }}
                    >
                      {details.challengeBreakdown.summary}
                    </p>
                    {details.challengeBreakdown.technicalDifficulties && (
                      <ul className="space-y-2">
                        {details.challengeBreakdown.technicalDifficulties.map(
                          (d, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2
                                size={15}
                                style={{
                                  color: "var(--gold)",
                                  marginTop: 2,
                                  flexShrink: 0,
                                }}
                              />
                              <span
                                style={{
                                  fontSize: "0.85rem",
                                  lineHeight: 1.8,
                                  color: "var(--text-body)",
                                }}
                              >
                                {d}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    )}
                  </>
                ) : (
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 2,
                      color: "var(--text-body)",
                    }}
                  >
                    {project.challenge}
                  </p>
                )}
              </>
            )}
          </div>

          {/* Sidebar
          <div>
            <div className="about-panel">
              <div className="space-y-5">
                <div>
                  <div
                    className="text-[0.6rem] tracking-[0.18em] uppercase mb-1"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Role
                  </div>
                  <div
                    style={{
                      color: "var(--text-heading)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {project.role}
                  </div>
                </div>

                <div>
                  <div
                    className="text-[0.6rem] tracking-[0.18em] uppercase mb-1"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Project Type
                  </div>
                  <div
                    style={{
                      color: "var(--text-heading)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {project.projectType}
                  </div>
                </div>

                <div>
                  <div
                    className="text-[0.6rem] tracking-[0.18em] uppercase mb-1"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Skill Level
                  </div>
                  <div
                    style={{
                      color: "var(--text-heading)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {project.level}
                  </div>
                </div>

                <div>
                  <div
                    className="text-[0.6rem] tracking-[0.18em] uppercase mb-1"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Duration
                  </div>
                  <div
                    style={{
                      color: "var(--text-heading)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {project.duration}
                  </div>
                </div>

                <div>
                  <div
                    className="text-[0.6rem] tracking-[0.18em] uppercase mb-1"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Team Size
                  </div>
                  <div
                    style={{
                      color: "var(--text-heading)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {project.teamSize}
                  </div>
                </div>

                <div>
                  <div
                    className="text-[0.6rem] tracking-[0.18em] uppercase mb-1"
                    style={{ color: "var(--text-faint)" }}
                  >
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.stack.split("·").map((tech, i) => (
                      <span key={i} className="about-tag">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="flex flex-col gap-2 pt-3"
                  style={{ borderTop: "1px solid var(--border)" }}
                >
                  {project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ink justify-center"
                    >
                      <span>Live Preview</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span
                      className="btn-ink justify-center"
                      style={{ opacity: 0.4, cursor: "not-allowed" }}
                    >
                      <span>Live Preview Unavailable</span>
                    </span>
                  )}

                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ink justify-center"
                    >
                      <span>View Code</span>
                      <BsGithub size={13} />
                    </a>
                  ) : (
                    <span
                      className="btn-ink justify-center"
                      style={{ opacity: 0.4, cursor: "not-allowed" }}
                    >
                      <span>Source Private</span>
                      <BsGithub size={13} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
