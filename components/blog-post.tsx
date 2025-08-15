"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowLeft, Share2, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import type { BlogPost as BlogPostType } from "@/lib/blog-data"
import { blogPosts } from "@/lib/blog-data"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  // Get related posts from the same category
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  // Get previous and next posts
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id)
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        // Fallback to copying URL
        navigator.clipboard.writeText(window.location.href)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <article className="py-8 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="gap-2 hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            {post.category}
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">{post.excerpt}</p>

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8 flex-wrap">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              {post.readTime}
            </div>
          </div>

          {/* Share Button */}
          <Button variant="outline" className="gap-2 bg-transparent hover:bg-primary/5" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
            Share Article
          </Button>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
            <Image
              src={post.image || `/placeholder.svg?height=600&width=1200&query=${encodeURIComponent(post.title)}`}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-ul:text-muted-foreground prose-li:text-muted-foreground">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>

        {/* Navigation Between Posts */}
        {(previousPost || nextPost) && (
          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {previousPost && (
                <Link href={`/blog/${previousPost.slug}`} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <ArrowLeft className="h-4 w-4" />
                        Previous Article
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {previousPost.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-right">
                      <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                        Next Article
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {nextPost.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <BookOpen className="h-4 w-4" />
                Related Articles
              </div>
              <h2 className="text-2xl font-bold">More from {post.category}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <Image
                        src={
                          relatedPost.image ||
                          `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(relatedPost.title) || "/placeholder.svg"}`
                        }
                        alt={relatedPost.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="text-xs mb-2">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl text-center border">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let BicriSales help you implement these strategies and achieve remarkable results for your business. Our
            expert team is ready to take your digital marketing to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gap-2">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
          <div className="mt-6 pt-6 border-t border-primary/10">
            <p className="text-sm text-muted-foreground">
              Questions about this article?{" "}
              <Link href="/contact" className="text-primary hover:underline font-medium">
                Contact our experts
              </Link>{" "}
              or call{" "}
              <a href="tel:+919315426370" className="text-primary hover:underline font-medium">
                +919315426370
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
