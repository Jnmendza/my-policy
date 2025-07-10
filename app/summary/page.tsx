"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ParsedSection = {
  title: string;
  bullets: string[];
};

const parseMarkdownSummary = (markdown: string): ParsedSection[] => {
  const cleaned = markdown.replace(/^```(?:markdown)?/, "").replace(/```$/, "");

  const sections = cleaned.split(/###\s+/).filter(Boolean);

  return sections
    .map((section) => {
      const [titleLine, ...bulletLines] = section.trim().split("\n");
      const bullets = bulletLines
        .map((line) => line.trim())
        .filter((line) => line.startsWith("-"))
        .map((line) => line.replace(/^-\s*/, ""));
      return { title: titleLine?.trim(), bullets };
    })
    .filter((section) => section.title && section.bullets.length > 0);
};

const SummaryPage = () => {
  const [summary, setSummary] = useState<ParsedSection[]>([]);

  useEffect(() => {
    const raw = sessionStorage.getItem("summary");
    if (!raw) return;

    try {
      const parsed = parseMarkdownSummary(raw);
      setSummary(parsed);
    } catch (err) {
      console.error("Error parsing summary:", err);
    }
  }, []);

  return (
    <div className='max-w-3xl mx-auto mt-10 mb-10 space-y-6'>
      <h1 className='text-2xl font-bold'>Here’s what this policy says:</h1>
      {summary.map((section, idx) => (
        <Card key={idx} className='p-4'>
          <h2 className='text-lg font-semibold mb-2'>{section.title}</h2>
          <ul className='list-disc pl-5 space-y-1'>
            {section.bullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </Card>
      ))}
      <Link href={"/"}>
        <Button className='cursor-pointer'>Generate Another Policy</Button>
      </Link>
    </div>
  );
};

export default SummaryPage;
