/**
 * Testimonials.jsx
 * --------------------------------------------------
 * "What People Say" section of the portfolio website.
 *
 * Features:
 * - Horizontal scroll-snap carousel of client testimonials
 * - Prev / Next arrow navigation
 * - Fourth testimonial hidden below the md breakpoint
 * --------------------------------------------------
 */

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Sharma",
    role: "Principal · Himalayan Academy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    text: "Sagar delivered our school management system flawlessly. His attention to detail and communication throughout the project were exceptional. Highly recommended!",
    delay: "d1",
  },
  {
    name: "Priya Karmacharya",
    role: "Owner · Nepali Handicrafts",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    text: "Our e-commerce platform built by Sagar has transformed our business. Sales have increased significantly since launch. Professional, timely, and excellent quality.",
    delay: "d2",
  },
  {
    name: "Bikash Thapa",
    role: "Director · TechMart Nepal",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    text: "Clean code, great communication, and delivered before deadline. Sagar built our inventory system and it runs perfectly. Will definitely work with him again.",
    delay: "d3",
  },
  {
    name: "Dr. Anita Poudel",
    role: "Administrator · City Clinic",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    text: "Worked with Sagar on our hospital appointment system. He understood our complex requirements perfectly and delivered a reliable, user-friendly solution.",
    delay: "d4",
    hideOnMobile: true,
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);

  const scrollTrack = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const firstSlide = track.querySelector(".testi-slide");
    const gap = 16; // matches gap-4
    const step = firstSlide ? firstSlide.offsetWidth + gap : 320;

    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="section-pad">
      <div className="container mx-auto max-w-7xl px-4">
        {/* =========================================================
            SECTION HEADER + NAV ARROWS
            ========================================================= */}
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-7 reveal">
            <div className="eyebrow">Client Words</div>
            <h2 className="display-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
              What People <em className="text-[var(--gold)]">Say</em>
            </h2>
            <div className="gold-rule" />
          </div>

          <div className="lg:col-span-5 flex lg:justify-end reveal d2">
            <div className="testi-nav">
              <button
                className="testi-btn"
                aria-label="Previous testimonial"
                onClick={() => scrollTrack(-1)}
              >
                <ArrowLeft size={15} />
              </button>
              <button
                className="testi-btn"
                aria-label="Next testimonial"
                onClick={() => scrollTrack(1)}
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            TESTIMONIAL TRACK
            ========================================================= */}
        <div ref={trackRef} className="testi-track flex gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`testi-slide reveal ${t.delay} shrink-0 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] ${
                t.hideOnMobile ? "hidden md:block" : ""
              }`}
            >
              <div className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <img src={t.avatar} alt="" className="testi-avatar" />
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}