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
    title: "Web Development",
    desc: "Custom, fully responsive websites built with clean semantic code, optimised performance, and great user experience from the ground up.",
    tags: ["HTML5", "CSS3", "Bootstrap"],
    delay: "d1",
  },
  {
    num: "02",
    icon: FaLaravel,
    title: "Laravel Applications",
    desc: "Robust, scalable web applications and APIs built with Laravel. From simple CRUD systems to complex multi-role business platforms.",
    tags: ["Laravel", "PHP", "Livewire"],
    delay: "d2",
  },
  {
    num: "03",
    icon: Database,
    title: "Database Design",
    desc: "Thoughtful relational database architecture with MySQL. Efficient schemas, optimised queries, and solid data integrity strategies.",
    tags: ["MySQL", "Eloquent ORM"],
    delay: "d3",
  },
  {
    num: "04",
    icon: Plug,
    title: "REST API Development",
    desc: "Well-documented, secure RESTful APIs for mobile apps, third-party integrations, and headless frontend architectures.",
    tags: ["REST API", "JSON", "Auth"],
    delay: "d4",
  },
  {
    num: "05",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Custom e-commerce platforms with payment gateway integration, inventory management, and smooth checkout flows.",
    tags: ["Laravel", "Stripe", "eSewa"],
    delay: "d1",
  },
  {
    num: "06",
    icon: ShieldHalf,
    title: "Web Security",
    desc: "Implementation of authentication best practices, CSRF protection, SQL injection prevention, and secure session handling.",
    tags: ["Sanctum", "Passport", "OWASP"],
    delay: "d2",
  },
  {
    num: "07",
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Mobile-first interfaces that look and function beautifully across all screen sizes — phones, tablets, and desktops.",
    tags: ["Bootstrap 5", "Tailwind", "CSS Grid"],
    delay: "d3",
  },
  {
    num: "08",
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing technical support, bug fixing, performance optimisation, and feature additions for existing web applications.",
    tags: ["Support", "Optimisation"],
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