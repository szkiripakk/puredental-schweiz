# PureDental implementation rules

Use this file as the default instruction set when continuing the interface in Claude Design or Claude Code.

## Source of truth

1. Use `styles/tokens.css` for all visual values.
2. Use `tokens/design-tokens.json` when a structured token source is required.
3. Do not introduce a new color, spacing value, radius or shadow unless it is first added as a named token.

## Visual direction

PureDental is a premium Swiss medical brand. The interface should feel precise, calm, modern and trustworthy.

- Favor generous white space and clear hierarchy.
- Use dark navy for text, electric blue for primary actions and cyan only as a supporting accent.
- Use gradients on hero areas, primary calls to action and selected highlights only.
- Keep cards light, softly rounded and subtly elevated.
- Use clinical 3D dental imagery as a focal point, never as decoration behind long text.
- Avoid clutter, noisy shadows, excessive glassmorphism and overly playful shapes.

## Typography

- Primary family: Manrope.
- Hero and display headings: 700–800 weight.
- Standard headings: 700 weight.
- Body copy: 400–500 weight.
- Buttons and labels: 600–700 weight.
- Do not use uppercase for long headings. Uppercase is reserved for short eyebrow labels.
- Keep body text to approximately 65–72 characters per line.

## Layout and spacing

- Use the 4 px base spacing scale defined in the tokens.
- Standard desktop content width: 1440 px maximum.
- Standard readable text width: 680 px maximum.
- Default page gutters: 72 px desktop, 32 px tablet, 20 px mobile.
- Standard section spacing: 120 px desktop, 88 px tablet, 64 px mobile.
- Standard card gap: 24 px.

## Components

- Primary button: blue gradient, white text, 56 px height, pill shape.
- Secondary button: white or transparent, blue border, blue text.
- Cards: white or very light blue surface, 24–28 px radius, subtle border and shadow.
- Icons: 24 px, 2 px stroke, blue on a pale blue container.
- Inputs: minimum 52 px height, 16 px radius, visible focus ring.

## Responsive behavior

- Collapse multi-column layouts below 960 px.
- Use a single-column reading order below 720 px.
- Preserve the main CTA above the fold where possible.
- Reduce decorative imagery before reducing text legibility.

## Accessibility

- Maintain WCAG AA contrast for functional text.
- Use visible keyboard focus states.
- Minimum interactive target: 44 × 44 px.
- Do not communicate status by color alone.
- Respect `prefers-reduced-motion`.

## Code style

- Prefer semantic HTML.
- Prefer CSS custom properties and modern layout primitives.
- Avoid inline styles.
- Keep components framework-agnostic unless a framework is explicitly requested.
