"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { toast } from "sonner";

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    setProgress(20);

    try {
      let extractedText = text;

      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/parse-pdf", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) throw new Error("Failed to parse PDF");

        const { text: parsed } = await res.json();
        extractedText = parsed;
      }

      setProgress(60);

      const summaryRes = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: extractedText }),
      });

      if (!summaryRes.ok) throw new Error("Failed to generate summary");

      const { summary } = await summaryRes.json();
      sessionStorage.setItem("summary", JSON.stringify(summary));
      setProgress(100);

      router.push("/summary");
    } catch (err) {
      console.error(err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      toast.error(errorMessage);
      setProgress(0);
    } finally {
      setLoading(false);
    }
  };

  const isValidInput = file || text.trim().length > 30;

  return (
    <div className='space-y-6 max-w-xl mx-auto mt-10'>
      <div className='border border-dashed rounded-md p-6 text-center'>
        <Input
          type='file'
          accept='application/pdf'
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        {file && <p className='mt-2 text-sm'>Selected: {file.name}</p>}
      </div>

      <div>
        <Textarea
          placeholder='Or paste policy text here...'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='min-h-[160px]'
        />
        <p className='text-sm text-right mt-1'>{text.length} characters</p>
      </div>

      {loading && <Progress value={progress} className='h-2' />}

      <Button
        disabled={!isValidInput || loading}
        onClick={handleSubmit}
        className='w-full'
      >
        {loading ? "Summarizing..." : "Summarize Policy"}
      </Button>
    </div>
  );
};

export default UploadForm;
