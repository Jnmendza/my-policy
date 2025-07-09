import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className='max-w-3xl mx-auto px-6 py-12'>
      <Card>
        <CardContent className='space-y-4 p-6'>
          <h1 className='text-3xl font-bold'>About My-Policy</h1>

          <p>
            Every day, we&apos;re asked to agree to lengthy privacy policies and
            terms of service— often filled with dense legal language designed to
            confuse. As a result, most of us click &quot;Accept&quot; without
            truly understanding what data we&apos;re giving up or how it might
            be used. That&apos;s a problem, especially in a world where our
            personal information is increasingly valuable and vulnerable.
          </p>

          <p>
            My-policy helps bridge that gap. By uploading or pasting in a
            privacy policy, users receive a simple, AI-generated summary that
            highlights the key points—like what data is collected, who it&apos;s
            shared with, and any red flags to be aware of. Use it before signing
            up for a new app, joining a service, or handing over your personal
            info. Know what you&apos;re agreeing to—on your terms.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
