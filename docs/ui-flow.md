# 🧠 Privacy Policy Summarizer – UI Flow

This document outlines the end-to-end UI/UX experience of the Privacy Policy Summarizer app, covering user journeys, key components, and interaction behavior.

---

## 🧭 Primary User Flow

### 1. Landing Page (`/`)

**Purpose:** Introduce the app and its value proposition.

- Hero section: Explains the problem and benefit.
- CTA button: "Upload a Policy PDF" or "Paste Policy Text"
- Navigation: Links to About, GitHub, Docs

---

### 2. Upload Page (`/upload`)

**Purpose:** Let users submit a PDF or paste text.

- File Upload Dropzone (PDFs only)
  - Drag/drop or click to upload
  - Show filename once uploaded
- OR Textarea with character count
  - Paste privacy policy text
  - Button to "Summarize"
- Submit button disabled until valid input exists
- Progress bar appears after submission begins

---

### 3. Summary Results Page (`/summary`)

**Purpose:** Display summarized points from the AI.

- Header: "Here’s what this policy says"
- Category sections:
  - e.g., **Data Collected**, **Usage**, **Sharing**, **Red Flags**
- Each section includes:
  - Short bullet or paragraph summary
  - Optional emoji indicator (🟢 Safe, 🟡 Caution, 🔴 Red Flag)
- Button: "Start Over"

---

### 4. About Page (`/about`)

**Purpose:** Explain the goal of the app and its usefulness.

- Two-paragraph description of use case
- Why this matters (dark patterns, legal confusion, etc.)

---

### 5. Error Pages

**Graceful fallback UI** for:

- File too large or wrong type
- Invalid JSON returned from LLM
- Network errors

---

## 🧩 Components Breakdown

- `<UploadForm />` – Handles PDF/text input and submit
- `<SummaryCard />` – Displays each category of extracted insight
- `<ProgressBar />` – Visual upload or generation status
- `<ThemeSwitch />` – Toggle between light/dark mode
- `<Navbar />` – Persistent across routes, highlights active tab

---

## ✅ Interaction Behavior

- Submit button only enabled when input is valid
- Auto-scroll to summary on generation complete
- Summary is saved to `sessionStorage` for reload resilience
- Mobile-friendly design with Tailwind responsive classes
