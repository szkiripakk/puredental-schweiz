# PureDental Schweiz — Design System

PureDental Schweiz is a premium dental-tourism company: Swiss patients get their consultation in Zürich and their full-mouth restoration / implantology treatment done in Budapest, at Swiss quality but a fraction of the Swiss price. The brand voice is calm, precise and confidence-building — "Swiss quality, Hungarian price."

## Sources

This system was built from:
- **`puredental-brand-guidelines/`** (attached local codebase) — a lightweight, framework-free brand-guideline site: `index.html`, `styles/tokens.css`, `styles/base.css`, `styles/components.css`, `styles/guideline.css`, `tokens/design-tokens.json`, and two approved reference mockups in `assets/reference/` (`website-mockup.jpeg`, `mobile-app-mockup.jpeg`). This is a **first-version, mockup-derived** token set — its own README flags that final values should be checked against approved Figma files when available.
- **GitHub — [szkiripakk/puredental-schweiz](https://github.com/szkiripakk/puredental-schweiz)** — the same guideline codebase, mirrored. Explore it directly for the canonical token/component source if you have access; `github.md` at this project's root records the sync details.

No Figma file, production app codebase, or vector logo file was provided — only the guideline site and the two mockup images. Treat this design system as a solid first version; re-run it against real product code or Figma once available for pixel-perfect accuracy.

## Content fundamentals

- **Tone**: calm, precise, reassuring — a Swiss medical brand, not a discount clinic. Confidence without hype.
- **Person**: direct address ("you/your") in body copy ("Whether **you** need a single implant..."); the brand refers to itself by name ("Puredental Schweiz"), not "we" in headlines.
- **Casing**: sentence case everywhere except short eyebrow labels, which are UPPERCASE with wide letter-spacing ("SWISS QUALITY STANDARDS", "OUR TREATMENTS"). Never uppercase a full headline or paragraph.
- **Headlines**: short, punchy, benefit-first, often split across 2–3 lines with the key differentiator in accent blue — e.g. "Swiss quality dental implant specialists **in Hungary**." Price/value claims are concrete and numeric: "up to 60% less," "CHF 7'900 per arch," "24–48 hours," "4.9/5 from 250+ patients."
- **Body copy**: one clear idea per sentence, 65–72 characters per line, no jargon without explanation.
- **CTAs**: action + outcome — "Book a Free Consultation," "View all treatments," "Learn more." The primary CTA is repeated often (hero, nav, every treatment card).
- **Emoji**: not used in UI copy. The Swiss flag (🇨🇭 / a small flag graphic) appears once, next to "SCHWEIZ" in the wordmark — a nationality marker, not a decorative emoji.
- **Numbers as trust signals**: patient counts, star ratings, savings percentages and turnaround times appear near almost every CTA — quantified reassurance is core to the voice.

## Visual foundations

- **Colors**: deep navy (`#07143E`) for text and trust; electric blue (`#1E4DFF`/`#2F6BFF`) for primary actions and links; cyan (`#56D7FF`) as a sparing supporting accent (never a CTA fill on its own). White is the dominant surface. See the Colors cards.
- **Type**: Manrope only, weighted 400–800. Display/hero headings 700–800; body 400–500; buttons/labels 600–700. Tight letter-spacing on headings (−0.035 to −0.05em), open tracking on uppercase eyebrows (+0.14em).
- **Spacing**: strict 4px base grid. Desktop gutters up to 72px, section spacing 120px desktop / 64px mobile, card gap 24px, card padding 24–32px.
- **Backgrounds**: mostly flat white/near-white surfaces. Gradients are used deliberately and sparingly — hero sections use a radial cyan-over-navy "hero" gradient; primary buttons and highlighted panels use a 135°-diagonal blue gradient; soft card backgrounds use a pale blue-to-white gradient. No repeating patterns, no textures, no photographic backgrounds behind long text.
- **Imagery**: clinical 3D dental renders (implants, arches, veneers) are the brand's signature visual — always a focal subject on a clean or gradient background, never decoration behind copy. See `assets/imagery/`.
- **Animation**: minimal — a quick (160–240ms) hover lift (`translateY(-2px)`) on buttons, standard easing (`cubic-bezier(0.2,0.8,0.2,1)`), no bounce/overshoot. `prefers-reduced-motion` is respected (all durations collapse to ~0).
- **Hover/press states**: buttons lift 2px and gain/keep their glow shadow on hover; secondary buttons tint their background pale blue. No color-darkening press effect defined in the source — treat press as a slight opacity/scale dip consistent with the lift.
- **Borders & shadows**: 1px hairline borders in pale neutral (`--color-border`); shadows are soft, cool-toned and directional-down (`0 8-28px / 24-80px blur`, `rgba(8,19,49,...)`), never harsh or dark. A dedicated "brand glow" shadow (soft blue, larger blur) marks primary actions only.
- **Corner radii**: 12px small controls → 16px inputs/icon tiles → 24px standard cards → 28px feature cards → full pill for buttons/badges/tabs. Never sharp corners on interactive surfaces.
- **Cards**: white/near-white, 1px hairline border, 24–28px radius, soft shadow, 24–32px padding. An "elevated" variant uses a deeper shadow for floating/emphasized surfaces.
- **Transparency & blur**: used only on glass-like panels over the gradient hero (frosted white/blue panel, `backdrop-filter: blur`) and the sticky site header (blurred white). Not used elsewhere.
- **Imagery color vibe**: cool, clinical, bright — white/silver/pale blue product renders on white or blue-gradient backgrounds. No warm tones, no grain, no black-and-white photography.
- **Layout rules**: sticky, blurred header on the marketing site; single primary CTA repeated across sections; mobile app uses a fixed 5-item bottom tab bar and a top status/notification bar.

## Iconography

- No icon font, SVG sprite or icon library file was supplied with the brand materials — only raster mockup screenshots showing simple 24px/2px-stroke outline glyphs (shield, person, diamond/gem, sparkle, clock, heart, chevron, star, home, calendar, tab icons).
- **Substitution**: this system's `Icon` component (`components/core/Icon.jsx`) ships a small hand-picked set of glyphs drawn in the same 24×24, 2px-stroke, round-cap/join style as the mockups (visually equivalent to Lucide/Heroicons outline). **Flagging this substitution** — if real icon SVGs or a Figma icon library exist, replace `Icon`'s path map with the real assets.
- Emoji are not used as icons. Unicode is used exactly once, decoratively, for the Swiss flag next to the wordmark.
- The tooth glyph (brand mark) is traced from the Hungarian PureDental mobile mockup and recolored in the brand blue gradient (`assets/logo-mark-tooth.png`) — see Logo section below.

## Logo

**No vector logo file was supplied.** `assets/logo-mark-tooth.png` is the tooth mark traced from the Hungarian PureDental mockup and recolored in the brand blue gradient. It pairs with a plain-type wordmark ("PUREDENTAL" / "SCHWEIZ 🇨🇭") in horizontal and vertical lockups, plus a dark-background variant — see the Logo card. It will look soft at very large sizes. **Ask the brand team for the original vector logo files** before using this system in production.

## Components

Grouped by concern under `components/`. No component library or Figma inventory was supplied, so this is a standard set sized to the brand's evident needs (marketing site + companion app):

- **core/**: `Button`, `Card`, `Badge`, `IconTile`, `Icon`, `PriceTag`
- **forms/**: `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **navigation/**: `TopNav`, `BottomNav`, `Tabs`, `ListRow`
- **feedback/**: `Toast`, `Tooltip`, `RatingStars`
- **overlay/**: `Dialog`

### Intentional additions
None of the above extend beyond what the guideline/mockups evidence (buttons, cards, icon tiles, tags, inputs, a tab bar, list rows, star ratings, price displays, toasts/dialogs implied by "all-inclusive care" flows) — no invented primitives beyond the brand's visible needs.

## UI kits

- **`ui_kits/website/`** — marketing homepage recreation (header, hero, trust bar, treatments grid, "Why Hungary" list, footer), built from the website mockup.
- **`ui_kits/mobile-app/`** — click-through companion app: splash → home → All-on-4® detail / Single Implant detail, built from the mobile mockup, with a working bottom tab bar.

## Index

- `styles.css` — root stylesheet (import-only; pulls in `tokens/*.css` and `base.css`)
- `tokens/` — colors, typography, spacing, effects (radius/shadow/motion), fonts, components.css (shared class styles)
- `base.css` — reset + base element styles
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups) shown in the Design System tab
- `components/` — reusable React primitives (see above)
- `ui_kits/` — full-screen product recreations (website, mobile-app)
- `assets/` — logo crops, product/treatment imagery, original reference mockups
- `SKILL.md` — Claude Code / Agent Skills-compatible entry point
- `github.md` — source-repo sync record

## Caveats

- No Figma file or production codebase was available — this system is derived entirely from a lightweight brand-guideline site plus two static mockup screenshots.
- Logo and icons are raster substitutions (see above) — please supply real vector assets when available.
- Font files: Manrope is loaded from Google Fonts per the source guideline's explicit instruction ("Do not add font files to this repository") — no substitution needed, no local font files bundled.
