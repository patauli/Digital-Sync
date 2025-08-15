import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import type { BlogPost as BlogPostType } from "@/lib/blog-data"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="py-8 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            {post.category}
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{post.excerpt}</p>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>

          {/* Share Button */}
          <Button variant="outline" className="gap-2 bg-transparent">
            <Share2 className="h-4 w-4" />
            Share Article
          </Button>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              src={post.image || `/placeholder.svg?height=600&width=1200&query=${encodeURIComponent(post.title)}`}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-primary/5 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Digital Sales?</h3>
          <p className="text-muted-foreground mb-6">
            Let BicriSales help you implement these strategies and achieve remarkable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
