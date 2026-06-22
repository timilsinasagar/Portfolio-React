/**
 * Services.jsx
 * --------------------------------------------------
 * "My Services" section of the portfolio website.
 *
 * Features:
 * - 8-card grid of service offerings
 * - Numbered ghost index, icon badge, and tag list per card
 * --------------------------------------------------
 */

import {
  Globe,
  Database,
  Plug,
  ShoppingCart,
  ShieldHalf,
  Smartphone,
  Wrench,
} from "lucide-react";
import { FaLaravel } from "react-icons/fa6";

/**
 * Service offerings — num is the decorative ghost index,
 * delay maps to the reveal animation stagger class.
 */
const services = [
  {
    num: "01",
    icon: Globe,
    title: "Full Stack Web Development",
    desc: "Development of scalable and high-performance web applications using Laravel, PHP, MERN stack, and modern frontend technologies. Focused on clean architecture, usability, and real-world business solutions.",
    tags: ["Laravel", "MERN", "PHP", "HTML", "CSS", "JavaScript"],
    delay: "d1",
  },
  {
    num: "02",
    icon: FaLaravel,
    title: "Laravel Application Development",
    desc: "Building robust Laravel-based applications including LMS, CRM, and enterprise systems with role-based access control, authentication, and modular architecture.",
    tags: ["Laravel", "Eloquent", "Blade", "Livewire"],
    delay: "d2",
  },
  {
    num: "03",
    icon: Database,
    title: "Database Design & Optimization",
    desc: "Designing efficient MySQL and NoSQL database structures with optimized queries, relationships, indexing, and secure data handling for scalable applications.",
    tags: ["MySQL", "MongoDB", "Schema Design", "Optimization"],
    delay: "d3",
  },
  {
    num: "04",
    icon: Plug,
    title: "REST API Development & Integration",
    desc: "Development and integration of secure RESTful APIs for web applications, mobile apps, and third-party services including authentication and payment systems.",
    tags: ["REST API", "JSON", "Auth"],
    delay: "d4",
  },
  {
    num: "05",
    icon: ShoppingCart,
    title: "Enterprise Business Systems (LMS, ERP, AMS)",
    desc: "Design and development of enterprise-level systems such as Learning Management Systems (LMS), Attendance Management Systems (AMS), inventory systems, and business workflow applications with automation and role-based control.",
    tags: ["LMS", "ERP", "AMS", "Inventory", "Business Systems"],
    delay: "d1",
  },
  {
    num: "06",
    icon: ShieldHalf,
    title: "Web Security & Authentication",
    desc: "Implementation of secure authentication systems, role-based access control, and protection against common web vulnerabilities following industry best practices.",
    tags: ["Security", "Auth", "OWASP"],
    delay: "d2",
  },
  {
    num: "07",
    icon: Smartphone,
    title: "Responsive UI Development",
    desc: "Creation of mobile-first, responsive user interfaces using modern CSS frameworks to ensure smooth experience across all devices.",
    tags: ["Bootstrap", "Tailwind", "Responsive Design", "UI/UX"],
    delay: "d3",
  },
  {
    num: "08",
    icon: Wrench,
    title: "Server Management & Deployment",
    desc: "Server setup, deployment, hosting configuration, and maintenance to ensure secure, stable, and high-performing web applications in production environments.",
    tags: ["Linux", "Deployment", "Hosting", "Maintenance"],
    delay: "d4",
  },
];
export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container mx-auto max-w-7xl px-4">
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center mb-12 reveal">
          <div className="eyebrow-center">
            <span className="eyebrow-line" />
            What I Offer
            <span className="eyebrow-line" />
          </div>

          <h2 className="display-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            My <em className="text-[var(--gold)]">Services</em>
          </h2>

          <div className="gold-rule center" />
        </div>

        {/* =========================================================
            SERVICE CARDS
            ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div className={`reveal ${s.delay}`} key={s.title}>
                <div className="svc-card">
                  <div className="svc-num">{s.num}</div>
                  <div className="svc-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <div className="svc-title">{s.title}</div>
                  <div className="svc-desc">{s.desc}</div>
                  <div className="svc-tags">
                    {s.tags.map((tag) => (
                      <span className="svc-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}