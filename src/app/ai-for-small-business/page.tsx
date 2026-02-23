import type { Metadata } from 'next'
import Link from 'next/link'
import SEOPageLayout from '../../components/SEOPageLayout'
import StructuredData from '../../components/StructuredData'

export const metadata: Metadata = {
  title: 'AI for Small Business | ProSaaS – Automate Communications Without Enterprise Costs',
  description: 'ProSaaS brings enterprise-level AI automation to small businesses. Automate calls, WhatsApp, and lead management starting from ₪600/month – no tech team required.',
  keywords: 'ai for small business, small business automation, affordable ai crm, ai tools small business',
  alternates: { canonical: '/ai-for-small-business' },
  openGraph: {
    title: 'AI for Small Business | ProSaaS',
    description: 'Enterprise AI automation for small businesses starting from ₪600/month.',
    type: 'website',
  },
}

const faqItems = [
  {
    question: 'Is AI automation affordable for small businesses?',
    answer: 'Yes. ProSaaS plans start from ₪600/month — less than the cost of a part-time receptionist. You get AI call handling, WhatsApp automation, and a full CRM system in one affordable package.',
  },
  {
    question: 'Do I need to be tech-savvy to use ProSaaS?',
    answer: 'Not at all. ProSaaS is built for business owners, not developers. The interface is simple, onboarding is guided, and our support team is available to help you get set up quickly.',
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most businesses see immediate results — more captured leads, faster response times, and reduced missed calls from day one. Significant ROI is typically achieved within the first month.',
  },
  {
    question: 'Can ProSaaS work for any type of small business?',
    answer: 'ProSaaS works for any business that receives customer inquiries by phone or WhatsApp. We serve moving companies, clinics, law firms, real estate agents, cleaning services, and many more.',
  },
  {
    question: 'What happens if I want to cancel?',
    answer: 'ProSaaS has no long-term contracts. You can cancel month-to-month. Your data is exportable at any time.',
  },
]

export default function AISmallBusinessPage() {
  return (
    <SEOPageLayout>
      <StructuredData type="faq" items={faqItems} />
      <div className="bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-orange-600 font-semibold mb-3 text-sm uppercase tracking-wide">AI for Small Business</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              AI Tools for Small Business — Enterprise Power, Startup Price
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              You don&apos;t need a big team or a big budget to use AI. ProSaaS gives small businesses the same automation tools used by large enterprises — starting from ₪600/month.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg">
                Get a Free Demo
              </Link>
              <Link href="/#pricing" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg">
                See Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-4">The Small Business Problem AI Solves</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Small businesses face a dilemma: you need to be available 24/7 to capture every lead, but hiring staff to handle calls and messages around the clock is cost-prohibitive. The result? Missed calls, slow response times, and lost revenue.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            ProSaaS solves this with AI automation that works for you even when you&apos;re busy, sleeping, or off for the weekend. Every call is answered, every WhatsApp message is responded to, and every lead is captured and organized automatically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">What ProSaaS Does for Small Businesses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📞', title: 'Answer Every Call', desc: 'Never miss an inquiry. AI handles calls 24/7, collects caller information, and sends you instant summaries.' },
              { icon: '💬', title: 'Respond to WhatsApp', desc: 'Auto-reply to WhatsApp inquiries instantly, qualify leads, and route important conversations to you.' },
              { icon: '📊', title: 'Organize Your Leads', desc: 'All leads are automatically captured into a simple CRM. See your entire pipeline at a glance without spreadsheets.' },
              { icon: '🔄', title: 'Follow Up Automatically', desc: 'Set automated follow-up sequences for leads who haven\'t responded. Stay top-of-mind without manual effort.' },
              { icon: '💰', title: 'Affordable Pricing', desc: 'Plans starting from ₪600/month — far cheaper than hiring even a part-time receptionist.' },
              { icon: '⚡', title: 'Fast Setup', desc: 'Be up and running in 3-5 days. No IT team needed. Our team handles the entire setup process.' },
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">Industries That Benefit Most</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Moving Companies', href: '/ai-for-moving-companies' },
              { label: 'Dental Clinics', href: '/ai-for-dental-clinics' },
              { label: 'Real Estate', href: '/ai-for-real-estate' },
              { label: 'Law Firms', href: '/ai-for-law-firms' },
              { label: 'Cleaning Services', href: '/ai-for-cleaning-companies' },
              { label: 'Property Management', href: '/ai-for-property-management' },
            ].map((ind, i) => (
              <Link key={i} href={ind.href} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-400 hover:shadow-sm transition text-center font-medium text-gray-800">
                {ind.label}
              </Link>
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
          <h2 className="text-3xl font-bold mb-4">Grow Your Small Business with AI</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of small businesses using ProSaaS to compete with larger competitors — without the overhead costs.
          </p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition text-lg inline-block">
            Start Your Free Demo
          </Link>
        </section>
      </div>
    </SEOPageLayout>
  )
}
