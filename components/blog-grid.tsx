"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

const categories = [
  "All",
  "Website Development",
  "Artificial Intelligence",
  "Digital Marketing",
  "SEO",
  "PPC",
  "Social Media Marketing",
  "Salesforce",
  "Bigin CRM",
]

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visiblePosts, setVisiblePosts] = useState(12)

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const displayedPosts = filteredPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < filteredPosts.length

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 12)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category)
                setVisiblePosts(12)
              }}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Posts */}
        {selectedCategory === "All" && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts
                .filter((post) => post.featured)
                .slice(0, 2)
                .map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={
                            post.image ||
                            `/placeholder.svg?height=300&width=600&query=${encodeURIComponent(post.title) || "/placeholder.svg"}`
                          }
                          alt={post.title}
                          width={600}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground gap-4">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary">
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image || `/placeholder.svg?height=200&width=400&query=${encodeURIComponent(post.title)}`}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {hasMorePosts && (
          <div className="text-center mt-12">
            <Button onClick={loadMorePosts} variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        )}

        {/* No Posts Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              No articles found in the "{selectedCategory}" category. Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
