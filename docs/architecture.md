# 📐 Privacy Policy Summarizer — Architecture Overview

## Project Goal

To give users a simple tool to upload or paste lengthy privacy policies or terms of service and receive a clear, human-readable summary of what data is being collected, how it is used, and potential red flags.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **LLM:** OpenAI GPT-4o or 3.5-turbo
- **PDF Parser:** pdf-parse
- **State:** React Hooks (`useState`, `useEffect`, `useRouter`)
- **Deployment:** Vercel

---

## Functional Overview

1. **Input** — User uploads a PDF or pastes raw text.
2. **Parsing** — Extract plain text from PDF.
3. **Summarization** — Send prompt to OpenAI API.
4. **Output** — Render a structured summary of key points:
   - What data is collected
   - How it’s used
   - Who it’s shared with
   - Any red flags

---

## Routing

| Path       | Purpose                        |
| ---------- | ------------------------------ |
| `/`        | Upload or paste privacy policy |
| `/summary` | Show user-friendly AI summary  |
| `/about`   | Info about the app             |

---

## API Flow

- `POST /api/parse-pdf`
  - Accepts `multipart/form-data` → returns raw extracted text.
- `POST /api/summarize`
  - Accepts `{ text: string }` → returns summary array.

---

## Prompt Engineering

Prompt will instruct the LLM to:

- Output a JSON array of key takeaways.
- Classify each point under categories (e.g., `Data Collected`, `Usage`, `Sharing`, `Red Flags`)
- Use plain English suitable for non-technical users.
