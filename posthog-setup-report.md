# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your DevEvent Next.js project. The integration uses the modern `instrumentation-client.ts` approach for Next.js 15.3+ applications, with automatic pageview capture, exception tracking, and custom event tracking for key user interactions.

## Integration Summary

### Files Created
- `instrumentation-client.ts` - PostHog client-side initialization with exception capture and debug mode
- `.env` - Environment variables for PostHog API key and host
- `posthog-setup-report.md` - This report

### Files Modified
- `next.config.ts` - Added reverse proxy rewrites for PostHog to improve tracking reliability
- `components/ExploreBtn.tsx` - Added `explore_events_clicked` event capture
- `components/EventCard.tsx` - Added `event_card_clicked` event capture with event properties
- `components/Navbar.tsx` - Added `nav_link_clicked` event capture with link name tracking

### Dependencies Installed
- `posthog-js` - PostHog JavaScript SDK

## Events Tracked

| Event Name | Description | File |
|------------|-------------|------|
| `explore_events_clicked` | User clicked the 'Explore Events' button on the homepage | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card to view details (includes event_title, event_slug, event_location, event_date properties) | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicked a navigation link (includes link_name property) | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/305121/dashboard/1203335) - Your main analytics dashboard with all insights

### Insights
- [Explore Events Button Clicks](https://us.posthog.com/project/305121/insights/K9QSmIAO) - Daily trend of explore button engagement
- [Event Card Clicks](https://us.posthog.com/project/305121/insights/ZdVGZoiM) - Daily trend of event card interactions
- [Navigation Link Clicks by Section](https://us.posthog.com/project/305121/insights/dxbqWJy2) - Breakdown of navigation usage by link name
- [Event Discovery Funnel](https://us.posthog.com/project/305121/insights/ieQPHZj3) - Conversion funnel from explore to event click
- [Most Popular Events](https://us.posthog.com/project/305121/insights/PW8ZIVgC) - Pie chart breakdown of which events are most clicked

## Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

## Configuration Details

### Environment Variables
```
NEXT_PUBLIC_POSTHOG_KEY=phc_SGq1sDHmHMLlY2gbJI6XP7GGj4lYi7gzFExD0F9g6tf
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

### PostHog Features Enabled
- Automatic pageview tracking (`defaults: "2025-11-30"`)
- Exception capture (`capture_exceptions: true`)
- Reverse proxy via Next.js rewrites (improves tracking reliability)
- Debug mode in development environment
