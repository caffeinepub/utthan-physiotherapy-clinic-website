# Specification

## Summary
**Goal:** Replace the "Who We Are" section image for Dr. Roshani Mansuriya with the uploaded banner image while preserving the current layout and styling.

**Planned changes:**
- Update the image source used by the existing `<img>` element with alt text exactly `Dr. Roshani Mansuriya - Utthan Physiotherapy Clinic` in `frontend/src/components/home/WhoWeAreSection.tsx` to use `dr-banner.jpg`.
- Keep the current markup structure, Tailwind classes, and the `<img>` alt text unchanged.

**User-visible outcome:** The "Who We Are" section displays the new `dr-banner.jpg` image in the same position and with the same styling as before.
