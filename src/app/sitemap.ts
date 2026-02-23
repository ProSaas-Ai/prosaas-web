import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://prosaas.co.il'
  const now = new Date()

  const staticPages = [
    { url: siteUrl, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${siteUrl}/about`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-call-center`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/whatsapp-automation`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-crm`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-answering-service`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-for-small-business`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-lead-management`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-for-moving-companies`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-for-dental-clinics`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-for-real-estate`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-for-law-firms`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-for-cleaning-companies`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/ai-for-property-management`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${siteUrl}/blog/ai-call-center-benefits`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/how-to-stop-losing-leads`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/ai-vs-human-receptionist`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/whatsapp-automation-increases-sales`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/what-is-ai-crm`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/improve-response-time`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/automate-customer-support`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/ai-for-small-business-guide`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/missed-calls-cost-businesses`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/blog/crm-vs-spreadsheets`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/he`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${siteUrl}/he/מערכת-ai-לעסקים`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/he/crm-חכם`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/he/בוט-וואטסאפ-לעסקים`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${siteUrl}/privacy`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${siteUrl}/terms`, priority: 0.4, changeFrequency: 'yearly' as const },
    { url: `${siteUrl}/accessibility`, priority: 0.4, changeFrequency: 'yearly' as const },
  ]

  return staticPages.map(page => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
