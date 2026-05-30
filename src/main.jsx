import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Building2, Car, FileCheck2, Home, Menu, Phone, ShieldCheck, Sparkles, X } from 'lucide-react';
import './styles.css';

const services = [
  {
    title: 'General Liability',
    icon: ShieldCheck,
    text: 'Protection for common business risks like bodily injury, property damage, and certain advertising-related claims.'
  },
  {
    title: 'Professional Liability',
    icon: FileCheck2,
    text: 'Coverage designed for service-based businesses when a client claims an error, omission, or professional mistake caused financial harm.'
  },
  {
    title: 'Commercial Auto',
    icon: Car,
    text: 'Coverage for vehicles used in business operations, from liability protection to comprehensive and hired/non-owned auto options.'
  },
  {
    title: 'Commercial Property',
    icon: Building2,
    text: 'Insurance for business buildings, equipment, tools, inventory, and other property that keeps operations moving.'
  },
  {
    title: 'Commercial Bonds',
    icon: Home,
    text: 'Surety and business bonds that help satisfy licensing, permit, contract, or compliance requirements.'
  }
];

function App() {
  const [open, setOpen] = React.useState(false);

  const nav = [
    ['Home', '#home'],
    ['Services', '#services'],
    ['About', '#about'],
    ['Contact', '#contact']
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Chrystal Clear Insurance home">
          <span className="brand-mark">CC</span>
          <span>
            <strong>Chrystal Clear</strong>
            <small>Insurance Agency LLC</small>
          </span>
        </a>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Request a Quote</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={16} /> Commercial Insurance, Clearly Explained</p>
            <h1>Protect your business with coverage that actually makes sense.</h1>
            <p className="hero-lede">
              Chrystal Clear Insurance helps businesses understand their options, compare practical coverage paths, and move forward with confidence.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contact">Start a Quote <ArrowRight size={18} /></a>
              <a className="btn ghost" href="#services">Explore Coverage</a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Agency highlights">
            <p className="card-kicker">Built for business owners</p>
            <h2>Clear guidance. Practical protection. No confusing runaround.</h2>
            <div className="stat-grid">
              <div><strong>10+</strong><span>Years industry experience</span></div>
              <div><strong>5</strong><span>Core commercial coverage areas</span></div>
              <div><strong>1</strong><span>Simple place to start</span></div>
            </div>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Key benefits">
          <span>Tailored business coverage</span>
          <span>Transparent explanations</span>
          <span>Quote-focused support</span>
          <span>Commercial risk guidance</span>
        </section>

        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Coverage Areas</p>
            <h2>Commercial insurance organized around real business needs.</h2>
            <p>
              Keep the demo simple: short, confident coverage cards instead of a wall of policy language. Full details can be expanded once the client approves the project.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ title, text, icon: Icon }) => (
              <article className="service-card" key={title}>
                <div className="service-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section" id="about">
          <div>
            <p className="eyebrow">Why Chrystal Clear</p>
            <h2>A more transparent way to approach business insurance.</h2>
          </div>
          <div className="split-copy">
            <p>
              From home offices to multi-location commercial exposures, the goal is simple: help business owners understand what protection they may need without making the process feel overwhelming.
            </p>
            <div className="pill-list">
              <span>Plain-language support</span>
              <span>Commercial-first focus</span>
              <span>Coverage guidance</span>
              <span>Responsive communication</span>
            </div>
          </div>
        </section>

        <section className="quote-band">
          <div>
            <p className="eyebrow">Time = Money</p>
            <h2>Make the next step obvious.</h2>
            <p>A cleaner website should help visitors quickly understand the offer and contact the agency without digging through dense copy.</p>
          </div>
          <a className="btn primary light" href="#contact">Request a Quote</a>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading compact">
            <p className="eyebrow">Contact</p>
            <h2>Request a quote or ask a coverage question.</h2>
            <p>This demo form is visual only. Final form routing, compliance language, and CRM/email delivery should be confirmed before launch.</p>
          </div>

          <div className="contact-layout">
            <form className="contact-form">
              <label>Full Name<input placeholder="Your name" /></label>
              <label>Business Name<input placeholder="Company or organization" /></label>
              <label>Email<input type="email" placeholder="you@example.com" /></label>
              <label>Coverage Interest
                <select defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>General Liability</option>
                  <option>Professional Liability</option>
                  <option>Commercial Auto</option>
                  <option>Commercial Property</option>
                  <option>Commercial Bonds</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>Message<textarea placeholder="Tell us what you need help with." /></label>
              <button className="btn primary" type="button">Send Request <ArrowRight size={18} /></button>
            </form>

            <aside className="contact-card">
              <Phone size={26} />
              <h3>Prefer to start by email?</h3>
              <p>chrystal@chrystalclearinsurance.com</p>
              <small>
                Insurance coverage cannot be bound, changed, or guaranteed through this demo form. Final language should be reviewed by the agency before publishing.
              </small>
            </aside>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Chrystal Clear Insurance Agency LLC</p>
        <p>Website demo by Inner Animal Media</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
