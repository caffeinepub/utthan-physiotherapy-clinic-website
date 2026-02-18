# Specification

## Summary
**Goal:** Use the 5 uploaded photos as the Pride Moments carousel images on the Utthan Clinic Site.

**Planned changes:**
- Add the uploaded images (im1-3.jpg, im2-3.jpg, im1-4.jpg, im2-4.jpg, im1-5.jpg) to the frontend static assets so they are available at predictable /assets/* URLs.
- Update `frontend/src/content/prideMoments.ts` to reference exactly these 5 images (`/assets/im1-3.jpg`, `/assets/im2-3.jpg`, `/assets/im1-4.jpg`, `/assets/im2-4.jpg`, `/assets/im1-5.jpg`) with meaningful English alt text for each slide.
- Ensure the Pride Moments carousel remains manual-only (no auto-advance) with working previous/next controls and indicator dots that allow navigating all 5 images with wrap-around.

**User-visible outcome:** The Pride Moments section shows a 5-slide, manually navigable carousel using the newly uploaded event photos, and each image loads correctly via its static asset URL.
