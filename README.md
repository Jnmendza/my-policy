# 🔐 Privacy Policy Summarizer

A web app that helps users understand long privacy policies, terms of service, and contracts by highlighting key points like what data is collected, how it's used, who it's shared with, and any red flags.

---

## 🎯 Mission Statement

Empower users to make informed decisions when signing up for apps or services by transforming dense legal text into clear, concise bullet points and summaries using AI.

---

## ✨ Core Features

- 🗂️ **Upload or paste** privacy policies, terms of service, or contracts (PDF or text).
- 🤖 **AI-powered summarization** using OpenAI (GPT-3.5 or GPT-4 variants).
- 📋 **Structured output**: data collected, usage, third-party sharing, user rights, summary, and red flags.
- ⚠️ **User input validation**: warns on too-short or incomplete input.
- 🚨 **Error handling**: deals gracefully with invalid AI responses.

---

## 💼 Use Cases

- Evaluate what an app will collect and share before signing up.
- Review freelance contracts, service agreements, or app terms.
- Parents vetting kids’ apps.
- Job-seekers reviewing offer letters.

---

## 🧰 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **OpenAI API** (GPT)
- **pdf-parse** (for PDF uploads)
- **React Hooks** (`useState`, `useEffect`)

---

## 🛠️ Setup & Installation

```bash
git clone https://github.com/your-username/my-policy.git
cd my-policy
npm install
```
## Create `.env.local`
```bash
npm run dev
```
Visit http://localhost:3000

## 🧩 High-Level Architecture
```bash
[ User ]  --upload or paste-->  [ Next.js Frontend ]
      --> fetch /api/analyze-policy --> [ pdf-parse / string parsing ]
                                       --> [ OpenAI summarization ]
      <-- returns structured JSON summary ---results page UI-->
```
