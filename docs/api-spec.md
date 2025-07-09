# 📡 API Specification – Privacy Policy Summarizer

This document outlines the backend API endpoints, request/response structures, and business logic for the Privacy Policy Summarizer app.

---

## 📁 Endpoints

### `POST /api/parse-pdf`

**Description:**  
Extracts plain text from a user-uploaded PDF file.

**Request:** `multipart/form-data`

- `file: File` — PDF file uploaded by user

**Response:** `application/json`

```json
{
  "text": "Extracted plain text from the PDF file..."
}
```

### Errors:

- `400 Bad Request` - File not provided or invalid type
- `500 Internal Server Error` - Failed to parse PDF

---

# `POST /api/summarize-policy`

### Description:

Submits raw privacy policy or terms text to OpenAI and returns a structured summary.

**Request**: `application/json`

```bash
{
  "text": "Long privacy policy or terms of service content..."
}
```

** Response**: `application/json`

```bash
{
  "summary": [
    {
      "category": "Data Collected",
      "summary": "The app collects your full name and device ID."
    },
    {
      "category": "Usage",
      "summary": "Used for analytics and ad targeting."
    },
    {
      "category": "Sharing",
      "summary": "Data shared with third-party vendors."
    },
    {
      "category": "Red Flags",
      "summary": "They may retain your data indefinitely and share it with law enforcement without notice."
    }
  ]
}
```

Errors:

- `400 Bad Request` - Missing or malformed `text`
- `500 Internal Server Error` - LLM returned bad output or failed

### 🔐 Authorization

Currently no user auth is required (MVP). Future iterations may use:

- Rate limiting (IP-based)

- Optional API key for authenticated usage

### 📌 Notes

- OpenAI API calls are made using the gpt-4o model (fallback to gpt-3.5-turbo if needed)

- We sanitize/truncate overly long text to prevent token limit issues

- Outputs are always validated as JSON before sending to client

- Prompts are standardized via /lib/prompts.ts (see docs/prompts.md)

### 🧪 Testing

Postman or curl can be used to test these endpoints. Unit tests and integration tests should validate:

- Proper handling of malformed PDF/text input

- JSON schema compliance on all responses

- Model failover (bad or malformed LLM responses)
