# Chrystal Clear Insurance

Built by Inner Animal Media.

## Current project status

This is a low-budget WordPress-hosted website refinement for Chrystal Clear Insurance. The site should stay simple, practical, and focused on getting live without adding unpaid backend or feature scope.

The priority is:

1. Get the existing design/content into WordPress.
2. Keep the site professional, trustworthy, and mobile-friendly.
3. Avoid overbuilding features the client is not paying for.
4. Avoid custom backend work.
5. Leave enough documentation that Sam, Cursor, or Agent Sam can finish without guessing.

This project started as a lightweight Vite/static site, but the production target is now WordPress.com hosting.

## Production platform

Final host: WordPress.com.

Treat this as a WordPress-hosted brochure site, not a Cloudflare Pages or Workers deploy, unless the client later approves a platform migration.

Do not turn this into a custom backend, custom plugin, or full WordPress theme unless the client explicitly approves a larger paid scope.

## Recommended WordPress strategy

Safest path:

1. Use normal WordPress pages.
2. Use Custom HTML blocks for polished static sections where needed.
3. Use Additional CSS for shared styling.
4. Use the WordPress native Form block or available contact form tool.
5. Upload logo, headshot, and other media through the WordPress Media Library.
6. Avoid Vite bundles, npm build output, PHP plugins, custom server logic, and Cloudflare-only runtime assumptions.

Simple rule: convert the existing site into WordPress-safe page sections, then paste/manage inside WordPress.

## What not to build right now

Do not add these during the current low-budget phase unless the client approves and pays for it:

- Custom quote backend
- CRM integration
- Payment flow
- Login or account system
- Insurance calculators
- Custom WordPress plugin
- Custom WordPress theme
- Blog expansion
- Advanced animations
- Multi-step application workflow
- Cloudflare Worker backend
- Extra pages beyond the core site

The business goal is a clean, trustworthy, working website.

## Current repo shape

- index.html mounts the site.
- src/main.jsx renders the content/routes.
- src/styles.css contains the styling.
- public/ contains static assets.
- package.json uses Vite for local development/build.

Even though React-related dependencies exist, the current site is closer to a static brochure site than a full app.

## Core pages to ship

### Home

Purpose: trust, clarity, and quote-request conversion.

Recommended sections:

- Hero
- Trust/brand intro
- Services preview
- Chrystal/headshot section if assets are approved
- Closing CTA

### Services

Purpose: explain core insurance services in plain language.

Current focus appears to be commercial insurance categories:

- General Liability
- Professional Liability
- Commercial Auto Insurance
- Commercial Property
- Commercial Bonds

Do not expand service categories unless the client confirms she wants them listed.

### Contact / Request a Quote

Purpose: make it easy to contact Chrystal.

Use WordPress form tooling if available. Do not rely on a custom backend for this budget.

Recommended form fields:

- Name
- Email
- Phone
- Business name
- Coverage needed
- Preferred contact method
- Message

## WordPress export plan

If the repo needs an easy WordPress paste-in export, create:

```text
wp-export/
  global.css
  home.html
  services.html
  contact.html
  wordpress-install-notes.md
```

### global.css

Paste into WordPress:

```text
Appearance -> Customize -> Additional CSS
```

Rules:

- Scope styles under .cci-site where possible.
- Avoid global resets that may break the WordPress theme/editor.
- Keep mobile responsiveness intact.

### HTML files

Paste each file into a WordPress Custom HTML block on the matching page.

Rules:

- No doctype.
- No html/head/body wrapper.
- Wrap each page in div.cci-site.
- Use WordPress page URLs like /, /services/, and /contact/.
- Replace local asset paths with WordPress Media Library URLs.

### wordpress-install-notes.md

Document exactly what to paste, where to paste it, and what to test.

## Asset handling

For WordPress, do not depend on local Vite paths like /assets/example.png.

Instead:

1. Upload images to WordPress Media Library.
2. Copy the WordPress-hosted media URL.
3. Replace placeholders or local paths in the HTML.

Suggested placeholders:

```text
{{CCI_LOGO_URL}}
{{CCI_HEADSHOT_URL}}
```

## Low-stress launch checklist

Before publishing:

1. Confirm the WordPress pages exist: Home, Services, Contact.
2. Paste shared CSS once.
3. Paste page HTML into Custom HTML blocks.
4. Replace media placeholders with WordPress Media Library URLs.
5. Replace any placeholder form with the WordPress form block.
6. Test desktop and mobile.
7. Test navigation links.
8. Test the email/contact form.
9. Confirm the homepage is assigned correctly in WordPress settings.
10. Publish only after the above passes.

## Scope reminder

This is not an Inner Animal Media full-stack build. It is a quick, practical WordPress-hosted client site.

Win condition: Chrystal gets a cleaner, more professional site live without unpaid hours fighting WordPress or building backend features she does not need.

## Future scope only if paid

Future paid phases could include SEO structure, more service pages, blog setup, analytics, CRM automation, Cloudflare migration, or an advanced quote intake flow.

Do not start these during the current low-budget phase.
