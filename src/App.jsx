/**
 * App.jsx
 * --------------------------------------------
 * Main application component.
 *
 * Responsibilities:
 * 1. Manage light/dark theme.
 * 2. Show intro loader on first page load.
 * 3. Render global UI components:
 *    - Custom Cursor
 *    - Navbar
 *    - Loader
 * 4. Route between the single-page Home view and
 *    the ProjectDetail page (/projects/:id).
 *
 * Notes:
 * - Each section should have a unique id
 *   so Navbar links can scroll to them.
 * - Replace or customize section components
 *   as your portfolio grows.
 * --------------------------------------------
 */

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Theme hook
import { useTheme } from "@/hooks/useTheme";

// Global UI Components
import Cursor from "@/components/ui/Cursor";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Website Sections
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

// Pages
import ProjectDetail from "@/pages/ProjectDetail";

/**
 * HomePage
 * ----------------------------------------
 * Bundles all the single-page sections together.
 * Rendered at the "/" route.
 */
function HomePage() {
  return (
    <main>
      {/* Hero / Landing Section */}
      <Hero />

      {/* About Me Section */}
      <About />

      {/* Resume / Education / Experience */}
      <Resume />

      {/* Services Offered */}
      <Services />

      {/* Projects / Portfolio Showcase */}
      <Portfolio />

      {/* Client Reviews / Testimonials */}
      <Testimonials />

      {/* Contact Form & Information */}
      <Contact />
    </main>
  );
}

export default function App() {
  /**
   * Theme State
   * ----------------------------------------
   * isDark      -> current theme status
   * toggleTheme -> switch between light/dark
   */
  const { isDark, toggleTheme } = useTheme();

  /**
   * Loader State
   * ----------------------------------------
   * false -> loader visible
   * true  -> website visible
   */
  const [loaded, setLoaded] = useState(false);

  return (
    <BrowserRouter>
      {/* =====================================
          Custom Cursor
          Visible only on desktop if configured
         ===================================== */}
      <Cursor />

      {/* =====================================
          Intro Loader
          Shows once when application starts
         ===================================== */}
      {!loaded && <Loader duration={2200} onComplete={() => setLoaded(true)} />}

      {/* =====================================
          Main Website Content
          Hidden until loader finishes
         ===================================== */}
      <div
        className="relative z-10"
        style={{
          visibility: loaded ? "visible" : "hidden",
        }}
      >
        {/* =================================
            Navigation Bar
            Receives theme information
           ================================= */}
        <Navbar isDark={isDark} onToggle={toggleTheme} />

        {/* =================================
            Routes
            "/"             -> all sections (HomePage)
            "/projects/:id" -> single project description page
           ================================= */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}