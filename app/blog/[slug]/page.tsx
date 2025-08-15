import { Navigation } from "@/components/navigation"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/components/blog-post"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found - BicriSales",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - BicriSales Blog`,
    description: post.excerpt,
    keywords: `${post.category}, BicriSales, digital marketing, ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogPost post={post} />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
