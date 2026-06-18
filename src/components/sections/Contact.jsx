/**
 * Contact.jsx
 * --------------------------------------------------
 * "Let's Build Together" section of the portfolio website.
 *
 * Features:
 * - Contact info list + social links + embedded map
 * - Controlled contact form with a mock success state
 * --------------------------------------------------
 */

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, Globe } from "lucide-react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Kathmandu, Nepal" },
  { icon: Mail, label: "Email", value: "hello@sagartimilsina.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+977 98XX-XXXXXX" },
  { icon: Clock, label: "Availability", value: "Sun – Fri: 9 AM – 6 PM NPT" },
];

const socialLinks = [
  { icon: BsGithub, href: "https://github.com" },
  { icon: FaLinkedinIn, href: "https://linkedin.com" },
  { icon: FaFacebookF, href: "https://facebook.com" },
  { icon: Globe, href: "https://sagartimilsina.com" },
];

const serviceOptions = [
  "Web Development",
  "Laravel Application",
  "E-Commerce Platform",
  "REST API Development",
  "Database Design",
  "Maintenance & Support",
  "Other",
];

const budgetOptions = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+"];

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: wire this up to your real backend, e.g.
    // await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container mx-auto max-w-7xl px-4">
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-center mb-12 reveal">
          <div className="eyebrow-center">
            <span className="eyebrow-line" />
            Get In Touch
            <span className="eyebrow-line" />
          </div>

          <h2 className="display-title" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            Let's <em className="text-[var(--gold)]">Build Together</em>
          </h2>

          <div className="gold-rule center" />

          <p
            style={{
              fontSize: "0.84rem",
              color: "rgba(200, 184, 150, 0.5)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.9,
            }}
          >
            Have a project in mind or want to discuss a collaboration? I'd
            love to hear from you. Drop me a message and I'll get back
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* =====================================================
              LEFT — CONTACT INFO
              ===================================================== */}
          <div className="lg:col-span-5 reveal">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <div className="contact-info-item" key={c.label}>
                  <div className="ci-icon">
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="ci-lbl">{c.label}</div>
                    <div className="ci-val">{c.value}</div>
                  </div>
                </div>
              );
            })}

            {/* Social links */}
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "1.5rem",
                marginTop: "0.5rem",
              }}
            >
              <div className="ci-lbl" style={{ marginBottom: "0.8rem" }}>
                Find Me Online
              </div>
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social"
                    key={i}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>

            <iframe
              className="map-frame mt-4"
              title="Kathmandu, Nepal location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112897.28203882213!2d85.22900958203124!3d27.70895652780437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1614600000001"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* =====================================================
              RIGHT — FORM
              ===================================================== */}
          <div className="lg:col-span-7 reveal d2">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-lbl">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-field"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-lbl">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-field"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-lbl">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-field"
                      placeholder="+977 98XX-XXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="form-lbl">Service Needed</label>
                    <select
                      name="service"
                      className="form-field"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="form-lbl">Budget Range</label>
                    <select
                      name="budget"
                      className="form-field"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>
                      {budgetOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="form-lbl">Your Message *</label>
                    <textarea
                      name="message"
                      className="form-field"
                      rows={5}
                      placeholder="Tell me about your project, requirements, or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="btn-ink"
                      style={{ border: "none", cursor: "pointer", width: "100%", justifyContent: "center" }}
                    >
                      <span>Send Message</span>
                      <Send size={14} />
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div style={{ marginTop: "1.5rem" }}>
                <div style={{ border: "1px solid var(--gold)", padding: "2.5rem", textAlign: "center" }}>
                  <CheckCircle
                    size={32}
                    style={{ color: "var(--gold)", display: "block", margin: "0 auto 1rem" }}
                  />
                  <div
                    style={{
                      fontFamily: '"Playfair Display", serif',
                      fontSize: "1.4rem",
                      color: "var(--cream)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message Sent!
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "rgba(200, 184, 150, 0.5)" }}>
                    Thank you for reaching out. I'll reply within 24 hours.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}