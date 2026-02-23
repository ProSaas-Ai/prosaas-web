import Link from 'next/link'
import Image from 'next/image'

interface SEOPageLayoutProps {
  children: React.ReactNode
  lang?: 'he' | 'en'
}

export default function SEOPageLayout({ children, lang = 'en' }: SEOPageLayoutProps) {
  const isHebrew = lang === 'he'

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="ProSaaS" width={120} height={40} />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              {isHebrew ? 'יכולות' : 'Features'}
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              {isHebrew ? 'מחירים' : 'Pricing'}
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              {isHebrew ? 'אודות' : 'About'}
            </Link>
          </nav>
          <Link
            href="/#contact"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
          >
            {isHebrew ? 'קבל הדגמה חינם' : 'Get a Free Demo'}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <Image src="/logo.svg" alt="ProSaaS" width={120} height={40} className="mb-4" />
              <p className="text-gray-400 text-sm max-w-xs">
                AI-powered CRM, WhatsApp automation, and voice bot platform for businesses.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Products</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-call-center" className="text-gray-400 hover:text-white transition text-sm">AI Call Center</Link></li>
                  <li><Link href="/whatsapp-automation" className="text-gray-400 hover:text-white transition text-sm">WhatsApp Automation</Link></li>
                  <li><Link href="/ai-crm" className="text-gray-400 hover:text-white transition text-sm">AI CRM</Link></li>
                  <li><Link href="/ai-answering-service" className="text-gray-400 hover:text-white transition text-sm">Answering Service</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Industries</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-for-moving-companies" className="text-gray-400 hover:text-white transition text-sm">Moving Companies</Link></li>
                  <li><Link href="/ai-for-dental-clinics" className="text-gray-400 hover:text-white transition text-sm">Dental Clinics</Link></li>
                  <li><Link href="/ai-for-real-estate" className="text-gray-400 hover:text-white transition text-sm">Real Estate</Link></li>
                  <li><Link href="/ai-for-law-firms" className="text-gray-400 hover:text-white transition text-sm">Law Firms</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition text-sm">About</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white transition text-sm">Blog</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">Privacy</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white transition text-sm">Terms</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ProSaaS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
