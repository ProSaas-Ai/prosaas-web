import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI Answering Service | ProSaaS – 24/7 Automated Phone Answering',
  description: 'Replace expensive answering services with ProSaaS AI. Our intelligent voice bot answers every call, collects information, and notifies you instantly — available 24/7 without staff costs.',
  keywords: 'ai answering service, automated answering service, 24/7 phone answering, ai receptionist, virtual answering service',
  alternates: { canonical: '/ai-answering-service' },
  openGraph: {
    title: 'AI Answering Service | ProSaaS',
    description: '24/7 automated phone answering with AI. Every call answered, every lead captured.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'What is an AI answering service?',
    answer: 'An AI answering service uses a voice bot to answer incoming calls on behalf of your business. The AI greets callers, collects their information, answers common questions, and either resolves their request or notifies you for follow-up.',
  },
  {
    question: 'How is this different from voicemail?',
    answer: 'Unlike voicemail, an AI answering service has a real-time conversation with callers. It asks follow-up questions, provides information, schedules callbacks, and logs everything automatically. Callers get a helpful experience instead of a recording.',
  },
  {
    question: 'Can the AI answering service schedule appointments?',
    answer: 'Yes. ProSaaS can integrate with your calendar to book appointments directly during the call. Callers get a confirmation and your calendar is updated automatically.',
  },
  {
    question: 'Will customers know they are talking to an AI?',
    answer: 'Our AI sounds natural and conversational. You can configure it to disclose it is an AI assistant if required, but many businesses prefer a transparent approach. Disclosure settings are fully configurable.',
  },
  {
    question: 'How quickly can I set up the AI answering service?',
    answer: 'Most businesses are up and running within 3-5 business days. Our onboarding team configures the AI with your business information, FAQs, and call flows.',
  },
]

export default function AIAnsweringServicePage() {
  return (
    <SEOPageLayout>
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-blue-600 font-semibold mb-3 text-sm uppercase tracking-wide">AI Answering Service</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI Answering Service — 24/7, No Staff Required
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Every call answered, every lead captured, every message delivered to you instantly. ProSaaS AI answering service costs a fraction of traditional services with zero compromise on quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                Get a Free Demo
              </Link>
              <Link href="/ai-call-center" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
                See AI Call Center
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Why Businesses Need an AI Answering Service</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Every missed call is a missed opportunity. Research shows that 85% of callers who cannot reach a business on the first try will not call back. For small and medium businesses, that translates directly to lost revenue.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Traditional answering services are expensive, inconsistent, and limited to business hours. ProSaaS AI answering service changes the equation: every call is answered, 24/7, with consistent quality and at a fraction of the cost.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">How ProSaaS AI Answering Service Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Call Received', desc: 'A customer calls your business number. The ProSaaS AI answers immediately — no waiting, no voicemail.' },
              { step: '2', title: 'AI Conversation', desc: 'The AI greets the caller, identifies their need, asks the right questions, and provides helpful responses.' },
              { step: '3', title: 'Action Taken', desc: 'The AI books an appointment, logs the lead, transfers to a human, or sends you an instant notification — based on your configuration.' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{s.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">Benefits Over Traditional Answering Services</h2>
          <ul className="space-y-3">
            {[
              'Available 24/7/365 — evenings, weekends, and holidays included',
              'Instant response — no hold times, no waiting music',
              'Flat monthly pricing — no per-minute charges that add up',
              'Automatic CRM logging — no manual message transcription needed',
              'Consistent quality — every caller gets the same professional experience',
              'Multi-language support — Hebrew and English out of the box',
              'Instant notifications — you\'re alerted immediately for urgent calls',
              'Scale with zero additional cost — handle 100 calls a day or 1,000',
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-lg text-gray-700">
                <span className="text-blue-600 mt-1 flex-shrink-0">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
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
          <h2 className="text-3xl font-bold mb-4">Never Miss Another Call</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Set up your AI answering service in days, not months. Get a free demo and see how ProSaaS handles your calls.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Get Your Free Demo
          </Link>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'AI Call Center', href: '/ai-call-center' },
              { label: 'AI Lead Management', href: '/ai-lead-management' },
              { label: 'WhatsApp Automation', href: '/whatsapp-automation' },
              { label: 'AI for Small Business', href: '/ai-for-small-business' },
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
