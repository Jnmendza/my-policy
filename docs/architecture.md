# 🏗 Architecture Overview

This document explains the design and architecture of **Privacy Policy Summarizer**, focusing on structure, data flow, and key decisions.

---

## ⚙️ 1. Context Diagram (Level 1)

```text
[User] → [Next.js Web App] → [OpenAI API]
                ↓                     ↑
           [pdf-parse]             └───> returns summary JSON

- User uploads or pastes legal text.

- Web App extracts text (if PDF), calls OpenAI, and renders results.

- OpenAI API performs policy analysis.

- Outcome: structured summary rendered in UI.
```

## 🧩 2. Container Diagram (Level 2)

| Container             |                            Responsibility                            |
| --------------------- | :------------------------------------------------------------------: |
| Web Frontend          | UI for upload/paste, state management (sessionStorage), summary view |
| API / Lambda Function |    Routes: /api/analyze: handles input, PDF parsing, OpenAI calls    |
| OpenAI Service        |                GPT model performing NLP summary tasks                |

## Data Flow:

1. User input → analyze-policy endpoint

2. PDF → pdf-parse; Text input → validated

3. Prompt sent to OpenAI → JSON response

4. UI displays sections: dataCollected, redFlags, summary, etc.

## 3. Component Diagram (Level 3 - Backend)

```bash
API
├─ TextValidator ── ensures input length & boilerplate check
├─ PdfParser ── extracts text from PDF
├─ PromptBuilder ── crafts structured prompt
├─ OpenAIClient ── wraps API call with error handling
└─ ResponseParser ── strips markdown, parses JSON safely
```

- **Validation**: minimum word count (e.g. 200 words)
- **Prompt**: encourages raw JSON response
- **Error Handling**: cleans markdown, tries JSON.parse, retries once if needed

**Purpose**: Ensures robustness against unpredictable AI output and lets you trace structure

## 4. Code & Deployment (Level 4)

- **Frontend**: Next.js + TypeScript + shadcn UI

- **Backend**: Next.js API routes (deployed serverless e.g., Vercel)

- **Model Calls**: via OpenAI client, abstracted with retry logic

- **DevOps**:

  - CI/CD via GitHub Actions

  - Environment variables for OPENAI_API_KEY

  - Monitoring via function logs
