import { extractTextFromPDF } from "@/lib/parsePdf";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const text = await extractTextFromPDF(buffer);
    return NextResponse.json({ text });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to parse PDF", details: (error as Error).message },
      { status: 500 }
    );
  }
}
