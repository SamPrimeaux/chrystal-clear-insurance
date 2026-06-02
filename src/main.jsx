import './styles.css';

document.title = 'Chrystal Clear Insurance Agency LLC | Commercial Insurance Clearly Explained';

const email = 'chrystal@chrystalclearinsurance.com';
const logoSrc = '/assets/chrystal-clear-logo.webp';
const headshotSrc = '/assets/chrystal-clear-headshot.png';

const services = [
  {
    title: 'General Liability',
    summary: 'General liability insurance can help protect your business from certain claims involving bodily injury, property damage, and personal or advertising injury.',
    points: [
      ['Bodily Injury', 'If someone is injured on your business premises or as a result of your business activities, this policy may help cover medical expenses and legal costs if you are sued.'],
      ['Property Damage', 'If your business causes damage to someone else’s property, coverage may help with repair or replacement costs.'],
      ['Personal and Advertising Injury', 'This may include certain claims related to defamation, libel, slander, or copyright infringement in advertising.'],
    ],
    note: 'General liability insurance usually does not cover employee injuries, professional mistakes, or intentional acts of harm.',
  },
  {
    title: 'Professional Liability',
    summary: 'Professional liability insurance helps protect against certain claims involving professional errors, omissions, or negligence.',
    points: [
      ['Coverage for Professional Errors', 'This coverage may help with legal fees, settlements, or judgments if a client claims that a mistake or omission caused financial harm.'],
      ['Negligence Protection', 'Even if the alleged issue was not intentional, professional liability insurance may help protect against claims of negligence in the services provided.'],
      ['Industry-Specific', 'This type of insurance is often tailored to specific professions, including healthcare providers, lawyers, accountants, consultants, architects, and other professional service providers.'],
    ],
    note: 'Professional liability generally does not cover physical injuries, property damage, intentional wrongdoing, or fraudulent actions.',
  },
  {
    title: 'Commercial Auto Insurance',
    summary: 'Commercial auto insurance helps protect vehicles used for business purposes.',
    points: [
      ['Liability Coverage', 'If a business vehicle causes damage to another person’s property or injuries to others, liability coverage may help pay for legal costs, medical expenses, and repair bills.'],
      ['Collision Coverage', 'This may help pay for repairs to a business vehicle if it is damaged in an accident.'],
      ['Comprehensive Coverage', 'This helps protect against certain non-collision incidents, such as theft, vandalism, natural disasters, or falling objects.'],
      ['Hired / Non-Owned Auto Coverage', 'If employees use personal vehicles for business purposes or vehicles are rented for work, optional coverage may provide additional protection.'],
    ],
  },
  {
    title: 'Commercial Property',
    summary: 'Commercial property insurance helps protect business property from covered causes of loss.',
    points: [
      ['Buildings', 'Coverage for your business premises, whether owned or rented.'],
      ['Contents', 'Protection for furniture, equipment, inventory, and other business assets.'],
      ['Equipment and Tools', 'Coverage for machinery, computers, specialized tools, and important business equipment.'],
      ['Business Interruption', 'If covered property damage temporarily shuts down operations, this coverage may help offset lost income and operating expenses during recovery.'],
    ],
    note: 'Floods, earthquakes, wear and tear, and maintenance issues usually require separate policies, endorsements, or are excluded.',
  },
  {
    title: 'Commercial Bonds',
    summary: 'Commercial bonds, also known as business or commercial surety bonds, help ensure businesses comply with laws, regulations, or contractual obligations.',
    points: [
      ['License and Permit Bonds', 'Required for certain businesses to obtain licenses or permits and comply with local, state, or federal regulations.'],
      ['Fidelity Bonds', 'Help protect businesses from losses caused by employee dishonesty, such as theft or embezzlement.'],
      ['Contract Bonds', 'Often used in construction and service industries to guarantee contractual obligations, including bid, performance, and payment bonds.'],
      ['Court and Miscellaneous Bonds', 'May be required in legal proceedings or for specific industries such as auto dealer bonds, lottery bonds, or warehouse bonds.'],
    ],
  },
];

const routes = ['/', '/services', '/contact'];
const normalize = (path) => {
  const clean = path.replace(/\/$/, '') || '/';
  return routes.includes(clean) ? clean : '/';
};
const app = document.getElementById('root');

const logo = (className = 'brand-logo') => `<img src="${logoSrc}" alt="Chrystal Clear Insurance Agency LLC" class="${className}" loading="eager" decoding="async" />`;

const serviceCards = () => services.slice(0, 3).map((service) => `<article class="quote-card"><div class="icon">✦</div><h3>${service.title}</h3><p>${service.summary}</p><ul class="coverage-list">${service.points.slice(0, 3).map(([label]) => `<li>${label}</li>`).join('')}</ul><div class="microcopy">Coverage availability, terms, conditions, and exclusions may vary.</div><div class="card-actions"><a class="btn btn-dark" href="/contact" data-route>Ask About ${service.title}</a></div></article>`).join('');

const serviceDetails = () => services.map((service, index) => `<details ${index === 0 ? 'open' : ''}><summary>${service.title}</summary><div class="details-body"><p>${service.summary}</p><ul>${service.points.map(([label, text]) => `<li><strong>${label}:</strong> ${text}</li>`).join('')}</ul>${service.note ? `<p><strong>What it usually does not cover:</strong> ${service.note}</p>` : ''}</div></details>`).join('');

const cta = (title, text) => `<section><div class="wrap"><div class="contact-band"><div><h2>${title}</h2><p>${text}</p></div><a class="btn btn-light" href="/contact" data-route>Contact Us</a></div></div></section>`;

const header = (path) => `<div class="topbar">Commercial insurance clearly explained. Send your information and start the right coverage conversation.</div><nav class="nav" aria-label="Primary navigation"><div class="nav-inner"><a class="brand-lockup" href="/" data-route>${logo()}<span class="brand-word"><strong>Chrystal Clear</strong><span>Insurance Agency LLC</span></span></a><div class="nav-actions"><a class="nav-link ${path === '/' ? 'active' : ''}" href="/" data-route>Home</a><a class="nav-link ${path === '/services' ? 'active' : ''}" href="/services" data-route>Services</a><a class="nav-link ${path === '/contact' ? 'active' : ''}" href="/contact" data-route>Contact</a><a class="btn btn-light" href="/contact" data-route>Start Quote</a></div></div></nav>`;

const footer = () => `<footer><div class="footer-grid"><div>${logo('footer-logo-img')}<p><strong>Chrystal Clear Insurance Agency LLC</strong></p><p>Independent Insurance Commercial Insurance Agent</p><p><a href="mailto:${email}">${email}</a></p></div><div><strong>Explore</strong><a href="/" data-route>Home</a><a href="/services" data-route>Services</a><a href="/contact" data-route>Contact</a></div><div><strong>Information</strong><a href="#" data-legal>Disclosure & Privacy</a><a href="/contact" data-route>Request a Quote</a></div></div><div class="footer-note">Coverage descriptions are provided for general informational purposes only and do not guarantee coverage. Policy availability, terms, conditions, and exclusions may vary.</div></footer>`;

const legalModal = () => `<dialog id="legalModal"><div class="modal-inner"><div class="modal-top"><h2>Disclosure & Privacy</h2><button class="x" type="button" data-close-legal>×</button></div><h3>Disclosure of Compensation</h3><p>Chrystal Clear Insurance Agency LLC secures and otherwise facilitates the purchase of insurance coverage for its policyholder clients from a variety of insurance carriers and group benefits providers. In most instances, the agency is compensated through commission payments based on premiums charged and paid by issuing markets. Commission percentages may vary by market and policy type.</p><h3>Privacy Statement</h3><p>Chrystal Clear Insurance Agency LLC respects client privacy and does not sell customer information. Information submitted through this website is used to respond to requests and provide requested insurance-related services.</p><h3>Coverage Disclaimer</h3><p>Coverage descriptions are provided for general informational purposes only and do not guarantee coverage. Policy availability, terms, conditions, and exclusions may vary.</p></div></dialog>`;

const home = () => `<main id="top"><header class="hero hero-remastered"><div class="hero-inner"><div class="hero-copy-stack">${logo('hero-brand-logo')}<div class="eyebrow">Commercial Coverage • Transparent Guidance</div><h1>Commercial Insurance Clearly Explained</h1><p class="hero-copy">Chrystal Clear Insurance Agency LLC helps business owners understand coverage options with calm, transparent guidance — from first quote request to the next practical step.</p><div class="hero-actions"><a class="btn btn-light" href="/contact" data-route>Request a Quote</a><a class="btn btn-outline" href="/services" data-route>View Services</a></div><ul class="hero-bullets"><li>General Liability</li><li>Professional Liability</li><li>Commercial Auto</li><li>Commercial Property</li><li>Commercial Bonds</li></ul></div><aside class="founder-card"><div class="portrait-frame"><img src="${headshotSrc}" alt="Chrystal Clear Insurance Agency representative" class="client-photo" loading="eager" decoding="async" /></div><div class="founder-card-copy"><span class="card-kicker">Meet your coverage guide</span><h2>A passion for being transparent.</h2><p>With over a decade of experience in the insurance industry, Chrystal helps clients move from confusing insurance language to clearer, more confident coverage conversations.</p><a class="btn btn-dark" href="/contact" data-route>Connect With Chrystal</a></div></aside></div></header><section class="brand-intro"><div class="wrap brand-intro-grid"><div><div class="eyebrow dark-eyebrow">Clear • Professional • Approachable</div><h2>Refining the brand around clarity and trust.</h2></div><div class="brand-copy"><p>The homepage now gives potential clients a real person to connect with, a polished logo presentation, and a stronger explanation of what makes Chrystal Clear different: transparent guidance, plain-language explanations, and practical support for business coverage decisions.</p><div class="brand-points"><span>Plain-language coverage guidance</span><span>Professional commercial focus</span><span>Warm, owner-led trust</span></div></div></div></section><section><div class="wrap"><div class="section-head"><h2>Coverage we can help explain.</h2><p>Start with the commercial coverage conversation that fits your business need.</p></div><div class="quote-grid">${serviceCards()}</div></div></section><section class="trust"><div class="wrap trust-feature"><div class="trust-copy"><div class="section-head stacked"><h2>Clear guidance for real businesses.</h2><p>From home offices to multi-location commercial exposures, the goal is a more transparent insurance conversation.</p></div><div class="trust-grid"><div class="trust-card"><strong>Clearly Explained</strong><span>Coverage options are explained in plain language.</span></div><div class="trust-card"><strong>Tailored Guidance</strong><span>Coverage conversations are based on your business needs and exposures.</span></div><div class="trust-card"><strong>Experienced Support</strong><span>Over a decade of insurance experience supports the process.</span></div></div></div><div class="trust-photo-card"><img src="${headshotSrc}" alt="Chrystal Clear Insurance Agency representative" loading="lazy" decoding="async" /><p>Insurance feels easier when clients can see the person behind the guidance.</p></div></div></section>${cta('Need help understanding what coverage fits your business?', 'Send a message and Chrystal Clear Insurance Agency LLC will help you take the next step.')}</main>`;

const servicesPage = () => `<main><section class="hero"><div class="hero-inner"><div><div class="eyebrow">Commercial Insurance Services</div><h1>Coverage explained clearly.</h1><p class="hero-copy">Explore common commercial insurance categories and what they may help protect. Every business is different, so the right next step is a clear conversation.</p></div><aside class="lead-box"><h2>Not sure which coverage applies?</h2><p>Chrystal Clear Insurance Agency LLC can help explain your options and guide the next step.</p><a class="btn btn-dark" href="/contact" data-route>Ask a Coverage Question</a></aside></div></section><section class="coverage-section"><div class="wrap coverage-layout"><aside class="sticky-note"><h2>Commercial insurance clearly explained.</h2><p>From home offices to multi-location commercial exposures, Chrystal Clear Insurance Agency LLC can assist with guidance for your coverage needs.</p><a class="btn btn-light" href="/contact" data-route>Contact Us</a></aside><div class="accordion">${serviceDetails()}</div></div></section>${cta('Ready for a clearer coverage conversation?', 'Send your information and choose the coverage type you need. Chrystal Clear Insurance will follow up with the next step.')}</main>`;

const contact = () => `<main><section class="hero"><div class="hero-inner"><div><div class="eyebrow">Contact Us</div><h1>Start a clearer commercial insurance conversation.</h1><p class="hero-copy">Have a question or need help with commercial coverage? Send your information and Chrystal Clear Insurance Agency LLC will follow up with the next step.</p><p><a href="mailto:${email}">${email}</a></p></div><aside class="lead-box"><h2>Your time matters.</h2><p>Send the details once, and we will help you move toward the right coverage conversation.</p><button class="btn btn-dark" type="button" data-legal>Disclosure & Privacy</button></aside></div></section><section><div class="wrap"><div class="lead-box"><h2>Request information</h2><p>Use this form for commercial insurance questions, quote requests, or general contact.</p><form action="mailto:${email}" method="post" enctype="text/plain"><div class="form-row"><input name="Name" required placeholder="Your name"/><input name="Email" type="email" required placeholder="Email address"/></div><div class="form-row"><input name="Phone" placeholder="Phone number"/><input name="Business Name" placeholder="Business name"/></div><div class="form-row"><select name="Coverage Needed" required><option value="">Coverage needed</option>${services.map((service) => `<option>${service.title}</option>`).join('')}<option>Not Sure Yet</option><option>Other</option></select><select name="Preferred Contact"><option value="">Preferred contact</option><option>Call me</option><option>Text me</option><option>Email me</option></select></div><textarea name="Message" placeholder="Tell us what coverage question or quote need you have."></textarea><button class="btn btn-dark" type="submit">Submit Request</button><p class="permission">By submitting your information, you are giving us permission to email you. You may unsubscribe at any time. Please do not submit sensitive personal information through this basic contact form.</p></form></div></div></section></main>`;

function render(path = normalize(window.location.pathname)) {
  app.innerHTML = `${header(path)}${path === '/services' ? servicesPage() : path === '/contact' ? contact() : home()}${footer()}${legalModal()}`;
  wire();
}

function navigate(href) {
  const next = normalize(href);
  window.history.pushState({}, '', next);
  render(next);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function wire() {
  app.querySelectorAll('[data-route]').forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    navigate(link.getAttribute('href'));
  }));
  app.querySelectorAll('[data-legal]').forEach((button) => button.addEventListener('click', (event) => {
    event.preventDefault();
    app.querySelector('#legalModal')?.showModal();
  }));
  app.querySelector('[data-close-legal]')?.addEventListener('click', () => app.querySelector('#legalModal')?.close());
}

window.addEventListener('popstate', () => render());
render();
