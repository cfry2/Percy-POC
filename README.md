# Percy POC

A proof-of-concept fullstack contact form app, deployable to Vercel.

## Features

- Contact form: name, contact number, email, message
- Material-UI (MUI) for all UI and styling
- Client-side validation with error messages
- Handles unhealthy server/API responses
- Success message: "Thank you for your message!"
- Next.js API route for backend (no DB/email integration by default)

## Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run locally

```
npm run dev
```

### 3. Build for production

```
npm run build
```

### 4. Deploy

- Push to Vercel (auto-detects Next.js)

## Project Structure

- `/pages/index.tsx` — Main page with contact form
- `/pages/api/contact.ts` — API route for form submission
- `/components/ContactForm.tsx` — (if present) Form UI/logic

## Notes

- All UI uses Material-UI components
- No database/email integration (POC only)
- Extend API route for real integrations as needed

---

See `.github/copilot-instructions.md` for AI agent guidelines.
