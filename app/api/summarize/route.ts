import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const prompt = `
You're a legal assistant AI helping users understand privacy policies.
Summarize the following privacy policy into clear bullet points categorized under:

- **Personal Data Collected**
- **How Data Is Used**
- **Who Data Is Shared With**
- **Tracking & Analytics**
- **Red Flags or Unusual Clauses**

Be concise, accurate, and avoid legal jargon. Use emojis to indicate tone:
🟢 = Safe / Standard  
🟡 = Caution / Optional Concern  
🔴 = Red Flag / Serious Concern

Return result as Markdown text only.

Policy:
\`\`\`
${text}
\`\`\`
  `.trim();

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that summarizes privacy policies for users.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.5,
    });

    const content = completion.choices[0].message.content || "";
    return NextResponse.json({ summary: content });
  } catch (error) {
    console.error("Error generating summary:", error);
    return NextResponse.json(
      { error: "Failed to generate summary" },
      { status: 500 }
    );
  }
}
