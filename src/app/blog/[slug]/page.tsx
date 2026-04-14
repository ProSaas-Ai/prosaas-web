import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import SEOPageLayout from '../../../components/SEOPageLayout'
import StructuredData from '../../../components/StructuredData'
import { blogPosts, getBlogPost, getAllBlogSlugs } from '../../../lib/blog-posts'
import { siteUrl } from '@/lib/site-url'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteUrl}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `${siteUrl}/blog/${slug}`,
      images: [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: post.title }],
    },
  }
}

function parseInlineLinks(text: string): React.ReactNode {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <Link key={match.index} href={match[2]} className="text-blue-600 hover:underline font-medium">
        {match[1]}
      </Link>
    )
    lastIndex = linkPattern.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length === 0 ? text : parts.length === 1 ? parts[0] : <>{parts}</>
}

function renderMarkdown(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let key = 0
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">{line.slice(3)}</h2>)
      i++
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.slice(4)}</h3>)
      i++
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      elements.push(<p key={key++} className="font-semibold text-gray-900 mt-4 mb-2">{parseInlineLinks(line.slice(2, -2))}</p>)
      i++
    } else if (line.startsWith('- ')) {
      const listItems: React.ReactNode[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(<li key={key++} className="text-lg text-gray-700 leading-relaxed mb-1">{parseInlineLinks(lines[i].slice(2))}</li>)
        i++
      }
      elements.push(<ul key={key++} className="ml-6 list-disc mb-4">{listItems}</ul>)
    } else if (line.startsWith('| ') && line.includes('|')) {
      i++ // skip table rows (simplified)
    } else if (line.trim() === '') {
      i++ // skip empty lines
    } else {
      elements.push(<p key={key++} className="text-lg text-gray-700 leading-relaxed mb-4">{parseInlineLinks(line)}</p>)
      i++
    }
  }
  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <SEOPageLayout alternateUrl="/he/blog">
      <StructuredData
        type="article"
        headline={post.title}
        description={post.description}
        datePublished={post.date}
        url={`${siteUrl}/blog/${slug}`}
      />
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        {/* Article header */}
        <header className="mb-10">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 leading-tight">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400 pb-6 border-b border-gray-200">
            <span>By ProSaaS Team</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* Article content */}
        <article className="prose-custom">
          {renderMarkdown(post.content)}
        </article>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to automate your business?</h2>
          <p className="text-blue-100 mb-6">See how ProSaaS can help your business respond faster, capture more leads, and grow.</p>
          <Link href="/#contact" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition inline-block">
            Get a Free Demo
          </Link>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="bg-white rounded-xl border border-gray-100 p-5 hover:border-blue-200 hover:shadow-sm transition">
                  <span className="text-xs font-semibold text-blue-600 uppercase">{related.category}</span>
                  <h4 className="font-bold text-gray-900 mt-1 mb-2 leading-tight hover:text-blue-700">{related.title}</h4>
                  <span className="text-xs text-gray-400">{related.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </SEOPageLayout>
  )
}
