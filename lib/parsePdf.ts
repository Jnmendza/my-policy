import pdfParse from "pdf-parse";

export async function extractTextFromPDF(fileBuffer: Buffer): Promise<string> {
  if (typeof fileBuffer === "string") {
    throw new Error("Expected buffer, received string");
  }
  const data = await pdfParse(fileBuffer);
  return data.text;
}
