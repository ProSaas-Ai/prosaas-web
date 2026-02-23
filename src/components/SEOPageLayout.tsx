import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

interface SEOPageLayoutProps {
  children: React.ReactNode
  lang?: 'he' | 'en'
  /** URL of the same page in the alternate language */
  alternateUrl?: string
}

export default function SEOPageLayout({ children, lang = 'en', alternateUrl }: SEOPageLayoutProps) {
  const isHebrew = lang === 'he'
  const homeUrl = isHebrew ? '/' : '/en'
  const contactUrl = isHebrew ? '/#contact' : '/en#contact'
  const featuresUrl = isHebrew ? '/#features' : '/en#features'
  const blogUrl = isHebrew ? '/he/בלוג' : '/blog'
  const aboutUrl = '/about'

  return (
    <div className="min-h-screen bg-white" dir={isHebrew ? 'rtl' : 'ltr'} lang={isHebrew ? 'he' : 'en'}>
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href={homeUrl} className="flex items-center flex-shrink-0" aria-label="ProSaaS – דף הבית / Home">
            <Image src="/logo.svg" alt="ProSaaS" width={120} height={40} />
          </Link>
          <nav className="hidden md:flex items-center gap-6" aria-label={isHebrew ? 'ניווט ראשי' : 'Main navigation'}>
            <Link href={featuresUrl} className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              {isHebrew ? 'יכולות' : 'Features'}
            </Link>
            <Link href={blogUrl} className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              {isHebrew ? 'בלוג' : 'Blog'}
            </Link>
            <Link href={aboutUrl} className="text-gray-600 hover:text-gray-900 transition text-sm font-medium">
              {isHebrew ? 'אודות' : 'About'}
            </Link>
            <LanguageSwitcher
              lang={lang}
              heUrl={isHebrew ? undefined : (alternateUrl || '/')}
              enUrl={isHebrew ? (alternateUrl || '/en') : undefined}
            />
          </nav>
          <Link
            href={contactUrl}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {isHebrew ? 'קבל הדגמה חינם' : 'Get a Free Demo'}
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16" aria-label={isHebrew ? 'פוטר' : 'Footer'}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div>
              <Image src="/logo.svg" alt="ProSaaS" width={120} height={40} className="mb-4" />
              <p className="text-gray-400 text-sm max-w-xs">
                {isHebrew
                  ? 'פלטפורמת CRM, WhatsApp ובוט שיחות מבוססת AI לעסקים.'
                  : 'AI-powered CRM, WhatsApp automation, and voice bot platform for businesses.'}
              </p>
              <div className="mt-4">
                <LanguageSwitcher
                  lang={lang}
                  heUrl={isHebrew ? undefined : (alternateUrl || '/')}
                  enUrl={isHebrew ? (alternateUrl || '/en') : undefined}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">{isHebrew ? 'מוצרים' : 'Products'}</h3>
                <ul className="space-y-2">
                  {isHebrew ? (
                    <>
                      <li><Link href="/he/מערכת-ai-לעסקים" className="text-gray-400 hover:text-white transition text-sm">מוקד שיחות AI</Link></li>
                      <li><Link href="/he/בוט-וואטסאפ-לעסקים" className="text-gray-400 hover:text-white transition text-sm">בוט וואטסאפ</Link></li>
                      <li><Link href="/he/crm-חכם" className="text-gray-400 hover:text-white transition text-sm">CRM חכם</Link></li>
                    </>
                  ) : (
                    <>
                      <li><Link href="/ai-call-center" className="text-gray-400 hover:text-white transition text-sm">AI Call Center</Link></li>
                      <li><Link href="/whatsapp-automation" className="text-gray-400 hover:text-white transition text-sm">WhatsApp Automation</Link></li>
                      <li><Link href="/ai-crm" className="text-gray-400 hover:text-white transition text-sm">AI CRM</Link></li>
                      <li><Link href="/ai-answering-service" className="text-gray-400 hover:text-white transition text-sm">Answering Service</Link></li>
                    </>
                  )}
                </ul>
              </div>
              {!isHebrew && (
                <div>
                  <h3 className="text-white font-semibold mb-3 text-sm">Industries</h3>
                  <ul className="space-y-2">
                    <li><Link href="/ai-for-moving-companies" className="text-gray-400 hover:text-white transition text-sm">Moving Companies</Link></li>
                    <li><Link href="/ai-for-dental-clinics" className="text-gray-400 hover:text-white transition text-sm">Dental Clinics</Link></li>
                    <li><Link href="/ai-for-real-estate" className="text-gray-400 hover:text-white transition text-sm">Real Estate</Link></li>
                    <li><Link href="/ai-for-law-firms" className="text-gray-400 hover:text-white transition text-sm">Law Firms</Link></li>
                  </ul>
                </div>
              )}
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">{isHebrew ? 'חברה' : 'Company'}</h3>
                <ul className="space-y-2">
                  <li><Link href={aboutUrl} className="text-gray-400 hover:text-white transition text-sm">{isHebrew ? 'אודות' : 'About'}</Link></li>
                  <li><Link href={blogUrl} className="text-gray-400 hover:text-white transition text-sm">{isHebrew ? 'בלוג' : 'Blog'}</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white transition text-sm">{isHebrew ? 'פרטיות' : 'Privacy'}</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white transition text-sm">{isHebrew ? 'תנאי שימוש' : 'Terms'}</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ProSaaS. {isHebrew ? 'כל הזכויות שמורות.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    </div>
  )
}
