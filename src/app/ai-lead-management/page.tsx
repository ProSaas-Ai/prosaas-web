import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI Lead Management | ProSaaS – Never Lose a Lead Again',
  description: 'ProSaaS AI Lead Management captures, qualifies, and follows up on every lead automatically. Build a pipeline that converts while you focus on closing deals.',
  keywords: 'ai lead management, automated lead management, lead tracking ai, crm lead management, lead qualification automation, ProSaaS, PROSAAS, פרוסאס, פרו סאס',
  alternates: { canonical: '/ai-lead-management' },
  openGraph: {
    title: 'AI Lead Management | ProSaaS',
    description: 'Capture, qualify, and follow up on every lead automatically with AI.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'How does AI lead management work?',
    answer: 'AI lead management automatically captures leads from all channels (calls, WhatsApp, web forms), qualifies them based on defined criteria, assigns them to your pipeline, and triggers automated follow-up sequences — all without manual intervention.',
  },
  {
    question: 'What is lead qualification automation?',
    answer: 'Lead qualification automation uses AI to assess each lead\'s fit and intent based on their responses. The AI asks qualifying questions, scores the lead, and prioritizes your pipeline so you focus on the hottest prospects first.',
  },
  {
    question: 'How does ProSaaS prevent leads from falling through the cracks?',
    answer: 'Every lead is tracked in your CRM with a status and next action. Automated reminders and follow-up sequences ensure no lead is forgotten. You\'re alerted when a lead hasn\'t been contacted within your defined time window.',
  },
  {
    question: 'Can the AI follow up with leads on my behalf?',
    answer: 'Yes. ProSaaS can send automated WhatsApp messages and schedule calls on your behalf based on lead status and timing rules you configure. Leads receive timely follow-ups even when your team is busy.',
  },
  {
    question: 'What lead sources does ProSaaS support?',
    answer: 'ProSaaS captures leads from inbound phone calls, WhatsApp messages, web forms, and can integrate with advertising platforms. All leads flow into one centralized pipeline.',
  },
]

export default function AILeadManagementPage() {
  return (
    <SEOPageLayout>
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">AI Lead Management</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI Lead Management — Never Lose a Lead Again
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              ProSaaS automatically captures every lead, qualifies them with AI, and follows up until they convert. Your pipeline runs on autopilot so you can focus on closing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                Get a Free Demo
              </Link>
              <Link href="/ai-crm" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
                See AI CRM
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">The Lead Management Problem</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Most businesses lose 50-70% of their leads not because the leads aren&apos;t interested, but because of slow response times, inconsistent follow-up, and leads falling through the cracks during busy periods.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            ProSaaS AI Lead Management eliminates these gaps. Every lead is captured the moment they reach out, qualified automatically, and followed up on schedule — regardless of how busy your team is.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">AI Lead Management Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎯', title: 'Multi-Channel Lead Capture', desc: 'Capture leads from phone calls, WhatsApp, and web forms automatically. No lead ever enters the pipeline manually.' },
              { icon: '🤖', title: 'AI Lead Qualification', desc: 'The AI asks qualifying questions, scores leads on fit and intent, and segments them by priority automatically.' },
              { icon: '⏱️', title: 'Instant Response', desc: 'Leads are engaged within seconds of their first contact. Studies show speed-to-lead is the #1 factor in conversion.' },
              { icon: '🔄', title: 'Automated Follow-Up Sequences', desc: 'Set drip sequences that send WhatsApp messages and schedule calls automatically until a lead responds or converts.' },
              { icon: '📊', title: 'Pipeline Visualization', desc: 'See every lead\'s status in a clear pipeline view. Drag-and-drop management with AI-suggested next actions.' },
              { icon: '📈', title: 'Conversion Analytics', desc: 'Track conversion rates by lead source, follow-up sequence, and agent. Optimize your process with real data.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-blue-600 text-xl">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Build a Pipeline That Converts</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop losing leads to slow follow-up and manual errors. Let ProSaaS AI manage your leads from first contact to closed deal.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Get Your Free Demo
          </Link>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'AI CRM System', href: '/ai-crm' },
              { label: 'AI Call Center', href: '/ai-call-center' },
              { label: 'WhatsApp Automation', href: '/whatsapp-automation' },
              { label: 'AI Answering Service', href: '/ai-answering-service' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-blue-600 hover:text-blue-800 underline text-sm">
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </SEOPageLayout>
  )
}
