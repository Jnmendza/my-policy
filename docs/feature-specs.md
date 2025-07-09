# 🌟 Features – Privacy Policy Summarizer

A user-first AI app that helps people quickly understand privacy policies and terms of service before they sign up.

---

## ✅ Core Features

### 1. 📄 PDF Upload + Text Paste

- Users can **upload a privacy policy PDF** or **paste in raw text**.
- Real-time validation ensures input is readable and acceptable before continuing.
- PDF files are parsed using `pdf-parse` and sent to the summarization engine.

---

### 2. 🧠 AI-Powered Summarization

- The app sends input text to OpenAI (GPT-4o) to extract key insights.
- Returns a **structured breakdown** of:
  - **Data Collected**
  - **How It’s Used**
  - **Who It’s Shared With**
  - **Red Flags** or high-risk clauses
- Highlights sensitive or concerning items with emojis:
  - 🟢 Safe
  - 🟡 Caution
  - 🔴 Red Flag

---

### 3. 💡 User-Friendly Output

- Summary is grouped into clear sections with plain language and bullet points.
- Easy to skim and mobile-friendly.
- Persistent via `sessionStorage` in case user refreshes page.

---

### 4. 🚀 Fast & Lightweight

- Fully client-driven experience with zero login required.
- Serverless functions power PDF parsing and LLM summarization.
- No backend database or account creation (MVP).

---

### 5. 🌗 Dark Mode + Responsive UI

- Light and dark mode toggling via `<ThemeSwitch />`.
- Layout adapts to mobile, tablet, and desktop views using Tailwind.

---

## 🔒 Privacy & Safety

- All processing happens server-side via secure API endpoints.
- No user data is saved or persisted after the request completes.
- Output is sanitized and validated to ensure it's clean JSON.

---

## 🛠 In Development / Future Scope

- [ ] 🔍 Keyword highlighting inside full policy preview
- [ ] 🧠 Memory of past uploads (if auth is added)
- [ ] 🗃️ Upload history + export to PDF
- [ ] 📬 Email summary feature
- [ ] 🤝 Chrome extension to auto-summarize signup pages

---
