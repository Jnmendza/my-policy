# ✍️ Prompt Engineering – Privacy Policy Summarizer

## 🎯 Prompt Goal

Instruct the LLM (OpenAI GPT-4o or GPT-3.5-turbo) to extract and summarize key points from a privacy policy or terms of service document. The goal is to present a **concise, user-friendly**, and **non-technical** overview of what users are agreeing to — especially what data is collected, how it's used, who it's shared with, and any concerning clauses ("red flags").

---

## 📤 Input Structure

Input will be plain text, either:

- Extracted from an uploaded PDF (via `pdf-parse`)
- Pasted directly into a textarea

---

## ✅ Expected Output Format

The model is instructed to return a **JSON array** of objects, with each object following this schema:

```json
[
  {
    "category": "Data Collected",
    "summary": "The app collects your full name, email address, location data, and device identifiers."
  },
  {
    "category": "Usage",
    "summary": "Your data is used to improve the app’s functionality, serve personalized ads, and conduct analytics."
  },
  {
    "category": "Sharing",
    "summary": "Data may be shared with third-party marketing partners and analytics providers."
  },
  {
    "category": "Red Flags",
    "summary": "The app reserves the right to retain your data indefinitely and share it with law enforcement without user notification."
  }
]
```

## 🧠 Base Prompt Template

```bash
You are a privacy policy explainer AI.

Given the following text from a privacy policy or terms of service, extract the most important points that a user should be aware of.

Return your answer as a JSON array of objects. Each object should have:
- "category": one of "Data Collected", "Usage", "Sharing", or "Red Flags"
- "summary": a plain English explanation of what the user should know

Do NOT return markdown. Do NOT include any extra commentary or explanation.

Content:
"""
{TRUNCATED_PRIVACY_POLICY_TEXT}
"""
```

## 🔒 Special Instructions

- Always warn the user in Red Flags if the policy includes:

  - Selling data to advertisers

  - Tracking location or app activity

  - Sharing data with unspecified third parties

  - Retaining data without clear expiration

  - Any clause requiring arbitration or waiving class action rights

## 🧪 Prompt Testing Notes

We will use both real and dummy privacy policies to validate the model’s ability to:

- Extract relevant details consistently

- Output clean JSON

- Avoid hallucinating or fabricating terms
