<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into YTalyze's Astro static landing page. Here is a summary of what was added:

- **`src/components/posthog.astro`** — new PostHog snippet component using `is:inline define:vars` to safely inject environment-variable-sourced token and host without TypeScript errors.
- **`src/layouts/Layout.astro`** — imported and mounted `<PostHog />` in the `<head>` so every page (EN and PT-BR) is covered.
- **`src/env.d.ts`** — added `window.posthog` type declaration using the `PostHog` type from `posthog-js`, giving full type safety in regular `<script>` blocks.
- **`src/components/WaitlistModal.astro`** — added four events covering the complete waitlist conversion funnel: button opened, form submitted, successfully joined, and submission failed. The `open()` function now accepts a `source` parameter so each CTA is attributed.
- **`src/components/WaitlistButton.astro`** — added a `source` prop that writes `data-waitlist-source` on the button, consumed by the modal's trigger wiring.
- **`src/components/Hero.astro`** — passes `source="hero"` to `WaitlistButton`.
- **`src/components/FinalCta.astro`** — passes `source="final_cta"` to `WaitlistButton`.
- **`src/components/Header.astro`** — passes `source="header_nav"` and `source="mobile_menu"` to each `WaitlistButton`; added `theme_toggled` and `nav_link_clicked` capture calls.
- **`src/components/ShareableGallery.astro`** — added `gallery_browsed` event fired once per drag gesture on first movement past the threshold.
- **`.env`** — `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` written (`.gitignore`-covered).

## Events

| Event | Description | File |
|---|---|---|
| `waitlist_button_clicked` | User clicks any "Join the waitlist" CTA; `source` property identifies which one (`hero`, `header_nav`, `mobile_menu`, `final_cta`) | `src/components/WaitlistModal.astro` |
| `waitlist_form_submitted` | User submits the waitlist form with a valid email | `src/components/WaitlistModal.astro` |
| `waitlist_joined` | Waitlist signup completed successfully — the primary conversion event | `src/components/WaitlistModal.astro` |
| `waitlist_submission_failed` | Waitlist form submission failed due to a network error | `src/components/WaitlistModal.astro` |
| `theme_toggled` | User toggles light/dark theme; `theme` property is the new value | `src/components/Header.astro` |
| `nav_link_clicked` | User clicks a nav anchor link; `href` property is the target | `src/components/Header.astro` |
| `gallery_browsed` | User drags/swipes the shareable stories gallery | `src/components/ShareableGallery.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/456533/dashboard/1676475)
- [Waitlist conversion funnel](https://us.posthog.com/project/456533/insights/W9bZij4k)
- [Waitlist signups over time](https://us.posthog.com/project/456533/insights/dtKzHRxl)
- [Waitlist CTA clicks by source](https://us.posthog.com/project/456533/insights/CP3UBgX5)
- [Waitlist submission failures](https://us.posthog.com/project/456533/insights/VViAWMOl)
- [Landing page engagement events](https://us.posthog.com/project/456533/insights/dYEY42Ms)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
