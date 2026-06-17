/**
 * Navbar
 * ------
 * Sticky top navigation bar.
 * - Pinned (frosted glass) style after scrolling 60 px
 * - Active link tracking via scroll-spy
 * - Hamburger for mobile
 * - Theme toggle
 * - Framer Motion entrance animation
 *
 * Props:
 *   isDark   {boolean}  - for ThemeToggle
 *   onToggle {Function} - for ThemeToggle
 */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "@/components/ui/ThemeToggle";
import logo from "../../assets/images/logo-circle.png";

// ── Section IDs that exist on the page ───────────────────────
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

// ── Smooth-scroll helper ──────────────────────────────────────
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar({ isDark, onToggle }) {
  const [pinned, setPinned] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  // ── Pin on scroll ─────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile menu on resize to desktop ────────────────
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = useCallback((href) => {
    const id = href.slice(1);
    scrollTo(id);
    setMenuOpen(false);
  }, []);

  return (
    <motion.nav
      id="nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={[
        "fixed top-0 left-0 right-0 z-[800]",
        "transition-all duration-400",
        pinned
          ? "py-3 border-b border-[var(--border)] backdrop-blur-[18px]"
          : "py-5 border-b border-transparent",
      ].join(" ")}
      style={pinned ? { background: "rgba(14,12,10,0.94)" } : {}}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        {/* ── Logo ─────────────────────────────────────────── */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-3 no-underline"
        >
          <img
            src={logo}
            alt="Sagar Timilsina"
            className="h-[42px] w-auto object-contain rounded-full"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div className="leading-tight">
            <div className="font-display italic text-gold text-[1.05rem]">
              Sagar
            </div>
            <div className="text-[0.58rem] tracking-[0.28em] text-sand/75 uppercase">
              Timilsina
            </div>
          </div>
        </a>

        {/* ── Desktop links ─────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <NavLink
                key={id}
                label={label}
                href={href}
                active={isActive}
                onClick={() => handleNavClick(href)}
              />
            );
          })}

          {/* Hire Me CTA */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-ink ms-3 ml-3"
          >
            <span>Hire Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Theme toggle */}
          <ThemeToggle isDark={isDark} onToggle={onToggle} className="ml-2" />
        </div>

        {/* ── Mobile: theme toggle + hamburger ──────────────── */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle isDark={isDark} onToggle={onToggle} />

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className={[
              "flex flex-col justify-center items-center w-9 h-9",
              "border border-[var(--border)] transition-colors duration-300",
              menuOpen ? "border-gold" : "",
            ].join(" ")}
          >
            <Hamburger open={menuOpen} />
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown menu ───────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--border)] lg:hidden"
            style={{ background: "rgba(14,12,10,0.97)" }}
          >
            <div className="container mx-auto px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                return (
                  <NavLink
                    key={id}
                    label={label}
                    href={href}
                    active={isActive}
                    onClick={() => handleNavClick(href)}
                    mobile
                  />
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ──────────────────────────────────────────────────────────────
   Sub-components
   ────────────────────────────────────────────────────────────── */

/**
 * NavLink
 * A single navigation item with gold underline reveal on hover/active.
 */
function NavLink({ label, href, active, onClick, mobile = false }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={[
        "relative text-[0.68rem] tracking-[0.22em] uppercase no-underline",
        "transition-colors duration-300",
        mobile ? "py-2 block" : "px-3.5 py-1.5",
        active ? "text-gold" : "text-sand/65 hover:text-gold",
      ].join(" ")}
    >
      {label}

      {/* Underline bar */}
      <span
        className={[
          "absolute bottom-0 left-3.5 right-3.5 h-px bg-gold",
          "transition-transform duration-350 origin-left",
          active ? "scale-x-100" : "scale-x-0",
          mobile ? "hidden" : "",
          "group-hover:scale-x-100",
        ].join(" ")}
        style={{
          transform: active ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
    </a>
  );
}

/**
 * Hamburger
 * Three lines → X morph animation.
 */
function Hamburger({ open }) {
  const lineBase =
    "block w-[22px] h-px bg-gold transition-all duration-300 origin-center";
  return (
    <span className="flex flex-col gap-[5px]">
      <span
        className={`${lineBase} ${open ? "translate-y-[6px] rotate-45" : ""}`}
      />
      <span className={`${lineBase} ${open ? "opacity-0" : ""}`} />
      <span
        className={`${lineBase} ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
      />
    </span>
  );
}
