import { useScrollReveal } from "../../hooks/useScrollReveal";

// Primary filled button
export function BtnPrimary({
  children,
  href,
  onClick,
  className = "",
  type = "button",
}) {
  const base = `inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white
    text-xs tracking-widest uppercase font-medium px-7 py-3.5
    transition-all duration-300 relative overflow-hidden group ${className}`;
  if (href)
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}

// Ghost/outline button
export function BtnGhost({ children, href, onClick, className = "" }) {
  const base = `inline-flex items-center gap-2 border border-border text-muted hover:border-primary hover:text-primary
    text-xs tracking-widest uppercase font-medium px-7 py-3.5 transition-all duration-300 ${className}`;
  if (href)
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}

// Section heading block
export function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      <div
        className={`flex items-center gap-4 mb-2 ${center ? "justify-center" : ""}`}
      >
        <span className="block w-8 h-px bg-primary" />
        <span className="text-primary text-xs tracking-[0.35em] uppercase font-medium">
          {eyebrow}
        </span>
        {center && <span className="block w-8 h-px bg-primary" />}
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-normal text-light-text dark:text-dark-text leading-tight">
        {title}
      </h2>
      <span
        className={`block w-14 h-px mt-4 ${center ? "mx-auto bg-gradient-to-r from-transparent via-primary to-transparent w-20" : "bg-gradient-to-r from-primary to-transparent"}`}
      />
      {subtitle && (
        <p className="mt-4 text-sm leading-relaxed text-muted max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Scroll reveal wrapper
export function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Card wrapper
export function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-light-card dark:bg-dark-card border border-border ${hover ? "hover:border-primary/50 hover:-translate-y-1" : ""} transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
