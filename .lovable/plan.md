
# PBI Global — Modern "2030-Ready" Website Redesign

## Overview
A complete visual redesign of pbisglobal.com as a modern React + Tailwind CSS static site. **All existing content preserved word-for-word** — only the design, layout, responsiveness, and animations are upgraded to a premium corporate "2030" aesthetic.

---

## Design Direction
- **Premium corporate, clean, minimal, high-trust** look
- Soft neutral background (#F7F8FA), white glassy cards, subtle gradients
- Large whitespace, modern Inter font typography
- Smooth scroll-reveal animations (Framer Motion), respecting `prefers-reduced-motion`
- Mobile-first responsive design with accessible focus styles

## Color Palette
- Background: `#F7F8FA` | Surface: `#FFFFFF` | Text: `#0F172A` | Muted: `#475569`
- Primary accent: `#0B5FFF` | Border: `#E2E8F0`

---

## Pages & Content (5 routes)

### 1. Home (`/`)
- **Hero section** with rotating taglines (Focus!, Assurance!, Teamwork!) and their subtexts
- **"We are experienced BPO professionals"** — 4-column service card grid (Revenue Cycle Management, Medical Coding, Claims Management, Data Entry/Conversion) with hover-lift effect and lucide-react icons replacing old images
- **"Why clients choose us?"** — Feature list with icons (Experience, Results, Performance, Transparency, Bespoke, Detail, Quality)
- **"Segmented approach"** — 6-card grid (Process, Communication, People, Support, Analytics, Cash flow) with icons
- **"Who we are?" / "What we do?" / "Security & HIPAA"** — 3-column info section with Read More links
- **CTA banner** — "We are interested in hearing from you"
- **Testimonial carousel** — 3 testimonials in a slider

### 2. About (`/about`)
- Hero banner with "About our company & experienced staff" heading
- Company description paragraphs (preserved exactly)
- **Benefits grid** — 3 cards: Manage Cost, Manage Risk, Strategy Management, each with their bullet lists
- Testimonials section

### 3. Services (`/services`)
- Hero with "Switch all your back office processes to us" heading
- Intro paragraphs about PBI's services
- **3 service cards**: Revenue Cycle Management, Medical Coding, Data Entry/Conversion with descriptions
- **Key Differentiators** — list of 13 differentiators in a styled grid/list

### 4. Security (`/security`)
- Hero with "Security & HIPAA" heading
- Security description paragraphs
- **HIPAA Administrative Safeguards** — styled bullet list
- **Retention of Records** section
- Testimonials section

### 5. Contacts (`/contacts`)
- "How to find us" heading
- **3 contact cards** (India, USA, UK) with addresses
- Phone numbers, fax, email displayed prominently

---

## Shared Layout & Components

### AppShell
- **Sticky Navbar** — Logo + nav links (Home, About Us, Services, Security, Contacts), active underline animation, blur-on-scroll effect, contact info bar (phone numbers + email)
- **Mobile drawer menu** for small screens
- **Footer** — Multi-column layout with company info, quick links, contact details, social links

### Reusable Components
- `ScrollReveal` — Framer Motion wrapper (fade-in + translateY, stagger children)
- `Section` — Consistent padding (py-16/py-20), max-w-7xl container
- `Hero` — Page hero with heading + subtitle
- `ServiceCard` — Hover lift + shadow + border glow
- `FeatureGrid` — Icon + title + description grid
- `TestimonialCarousel` — Embla-based slider for testimonials
- `ContactCard` — Address block with icon
- `Badge` — For compliance/security tags

---

## Animations
- Scroll-reveal: fade-in + translateY(10-20px), 0.4-0.6s duration
- Staggered children in grids
- Card hover: translateY(-4px), shadow increase
- Button hover: scale(1.02), subtle glow
- Navbar: blur + shadow on scroll
- All animations disabled when `prefers-reduced-motion` is set

## Technical Setup
- Inter font via Google Fonts CSS import
- Design tokens file (`src/theme/tokens.ts`)
- Framer Motion for all animations
- Lucide-react icons throughout (replacing old images with clean line icons)
- Fully responsive: mobile, tablet, desktop
