# Specification

## Summary
**Goal:** Remove the duplicate logo from the mobile navigation menu and ensure the header logo renders in color `#70316c` using the existing `logo.svg` asset.

**Planned changes:**
- Update the mobile navigation panel/menu to not render any logo when the hamburger menu is opened (logo remains only in the main header).
- Adjust header logo rendering so its displayed color is exactly `#70316c` across both desktop header and mobile header top bar, without recoloring other UI elements.

**User-visible outcome:** On mobile, opening the hamburger menu shows no logo inside the menu panel, while the top header still shows a clickable logo that matches color `#70316c` on both mobile and desktop.
