# Specification

## Summary
**Goal:** Update the site header to use the uploaded `logo.svg` and ensure it renders in the primary brand color (#2E0527) consistently across desktop and mobile.

**Planned changes:**
- Switch the header logo implementation to use the canonical `logo.svg` asset path across the codebase and ensure it resolves without 404s.
- Ensure the SVG logo renders as a visible graphic (not alt-text-only) and links to `/` on all breakpoints.
- Implement themeable logo coloring so the logo renders in #2E0527 via `currentColor` / `text-primary` (or equivalent), avoiding inline `style={{ color: ... }}` on an `<img>`.

**User-visible outcome:** The header shows the site logo (clickable to `/`) in the correct primary brand color on both desktop and mobile, with consistent loading and theming.
