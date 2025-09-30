# Percy POC: Copilot Instructions

## Project Overview

- This is a proof-of-concept fullstack contact form app, designed for Vercel deployment.
- Built with Next.js (React) for both frontend and backend (API routes).
- Uses Material-UI (MUI) for all UI components and styling.
- The main feature is a contact form collecting: name, contact number, email, and message.
- Form includes client-side validation and displays error messages for invalid input.
- On successful submission, shows: "Thank you for your message!"
- Handles and displays errors for unhealthy server/API responses.

## Key Files & Structure

- `/pages/index.tsx` — Main page with the contact form UI and logic.
- `/pages/api/contact.ts` — API route for handling form submissions (validates and returns success/error).
- `/components/ContactForm.tsx` — (if present) Encapsulates form logic and UI.
- `/package.json` — Project scripts and dependencies.
- `/README.md` — Project setup and usage instructions.

## Developer Workflows

- **Install dependencies:** `npm install` or `yarn install`
- **Run locally:** `npm run dev` (Next.js dev server)
- **Build for production:** `npm run build`
- **Start production server:** `npm start`
- **Deploy:** Push to Vercel (auto-detects Next.js)

## Patterns & Conventions

- All UI uses Material-UI components (no custom CSS unless necessary).
- Form validation uses React state and MUI error props.
- API route validates input and returns JSON `{ success: boolean, error?: string }`.
- Error and success messages are shown using MUI Alert or Snackbar.
- No database or email integration (POC only; extend as needed).

## Example: API Response Handling

```ts
// On submit
const res = await fetch('/api/contact', { ... });
const data = await res.json();
if (!res.ok || !data.success) {
  setError(data.error || 'Server error');
} else {
  setSuccess(true);
}
```

## External Integrations

- None by default. Add integrations (email, DB) only if required.

## Vercel Deployment

- No special config needed; Next.js is auto-detected.
- API routes are serverless functions.

## References

- See `/pages/index.tsx` and `/pages/api/contact.ts` for main logic and patterns.
- See `/README.md` for setup and usage.

---

Edit this file if project structure or conventions change.
