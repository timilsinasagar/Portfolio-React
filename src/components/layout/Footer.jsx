/**
 * Footer.jsx
 * --------------------------------------------------
 * Site footer: logo + bio + socials, three link columns,
 * and a bottom bar with copyright / legal links.
 *
 * Note: .nav-logo / .logo-words / .logo-first / .logo-last
 * are assumed to already exist from the Navbar component
 * (not yet converted) — reused here as-is.
 * --------------------------------------------------
 */

import {  Globe } from "lucide-react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "#services" },
  { label: "Laravel Applications", href: "#services" },
  { label: "E-Commerce", href: "#services" },
  { label: "REST API", href: "#services" },
  { label: "Database Design", href: "#services" },
  { label: "Maintenance", href: "#services" },
];

const techTags = ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript", "Livewire", "Alpine.js", "Git"];

const socialLinks = [
  { icon: BsGithub, href: "https://github.com" },
  { icon: FaLinkedinIn, href: "https://linkedin.com" },
  { icon: Globe, href: "https://sagartimilsina.com" },
  { icon: FaFacebookF, href: "#" },
];

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
          {/* Logo + bio + socials */}
          <div className="sm:col-span-12 lg:col-span-4">
            <div className="nav-logo mb-1" style={{ textDecoration: "none" }}>
              <img
                src="/logo__2_.png"
                className="footer-logo-img"
                alt="ST"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="logo-words">
                <div className="logo-first">Sagar Timilsina</div>
                <div className="logo-last">Web Developer · Nepal</div>
              </div>
            </div>

            <p className="footer-desc">
              A passionate full-stack developer crafting purposeful web
              applications with PHP, Laravel, and modern frontend
              technologies from Kathmandu, Nepal.
            </p>

            <div className="mt-3">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    href={s.href}
                    target={s.href !== "#" ? "_blank" : undefined}
                    rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                    className="footer-social"
                    key={i}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigate */}
          <div className="sm:col-span-4 lg:col-span-2">
            <div className="footer-hd">Navigate</div>
            {navLinks.map((l) => (
              <a href={l.href} className="footer-link" key={l.label}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div className="sm:col-span-4 lg:col-span-3">
            <div className="footer-hd">Services</div>
            {serviceLinks.map((l) => (
              <a href={l.href} className="footer-link" key={l.label}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Tech stack + status */}
          <div className="sm:col-span-4 lg:col-span-3">
            <div className="footer-hd">Tech Stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.2rem" }}>
              {techTags.map((t) => (
                <span className="about-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <div
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                }}
              >
                Currently
              </div>
              <div style={{ fontSize: "0.78rem", color: "rgba(200, 184, 150, 0.45)", lineHeight: 1.8 }}>
                🟢 Open to freelance projects
                <br />
                📍 Kathmandu, Nepal
                <br />
                💼 Available for remote work
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 Sagar Timilsina. All rights reserved.</span>
          <span>Designed &amp; Built with ♥ in Nepal</span>
          <div>
            <a href="#" style={{ color: "inherit", textDecoration: "none", marginLeft: "1rem" }}>
              Privacy
            </a>
            <a href="#" style={{ color: "inherit", textDecoration: "none", marginLeft: "1rem" }}>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}