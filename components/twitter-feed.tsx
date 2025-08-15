"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Twitter, ExternalLink, Heart, MessageCircle, Repeat2 } from "lucide-react"
import Link from "next/link"

// Mock Twitter data - In a real implementation, you'd fetch from Twitter API
const mockTweets = [
  {
    id: "1",
    text: "Just launched a new digital marketing campaign for a client and seeing amazing results! 📈 The power of targeted content and strategic SEO never fails to impress. #DigitalMarketing #SEO #BicriSales",
    author: "Vishwajeet",
    handle: "@Vshwax",
    timestamp: "2h",
    likes: 24,
    retweets: 8,
    replies: 5,
    verified: true,
  },
  {
    id: "2",
    text: "Pro tip: Your website's loading speed directly impacts your conversion rates. Even a 1-second delay can reduce conversions by 7%. Optimize for speed, optimize for success! ⚡ #WebDevelopment #UX",
    author: "Vishwajeet",
    handle: "@Vshwax",
    timestamp: "6h",
    likes: 42,
    retweets: 15,
    replies: 8,
    verified: true,
  },
  {
    id: "3",
    text: "The future of business is digital. Companies that embrace digital transformation today will lead tomorrow's market. Are you ready to grow your digital sales? 🚀 #DigitalTransformation #BusinessGrowth",
    author: "Vishwajeet",
    handle: "@Vshwax",
    timestamp: "1d",
    likes: 67,
    retweets: 23,
    replies: 12,
    verified: true,
  },
  {
    id: "4",
    text: "Social media isn't just about posting content - it's about building relationships, creating value, and fostering genuine connections with your audience. Quality over quantity, always! 💡 #SocialMediaMarketing",
    author: "Vishwajeet",
    handle: "@Vshwax",
    timestamp: "2d",
    likes: 35,
    retweets: 11,
    replies: 7,
    verified: true,
  },
  {
    id: "5",
    text: "Excited to share that BicriSales has helped another client achieve 300% ROI on their digital marketing investment! Success stories like these fuel our passion for excellence. 🎯 #ClientSuccess #ROI",
    author: "Vishwajeet",
    handle: "@Vshwax",
    timestamp: "3d",
    likes: 89,
    retweets: 34,
    replies: 18,
    verified: true,
  },
]

export function TwitterFeed() {
  const [currentTweet, setCurrentTweet] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentTweet((prev) => (prev + 1) % mockTweets.length)
    }, 5000) // Change tweet every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTweet = () => {
    setCurrentTweet((prev) => (prev + 1) % mockTweets.length)
    setIsAutoPlaying(false)
  }

  const prevTweet = () => {
    setCurrentTweet((prev) => (prev - 1 + mockTweets.length) % mockTweets.length)
    setIsAutoPlaying(false)
  }

  const goToTweet = (index: number) => {
    setCurrentTweet(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background/50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Twitter className="h-6 w-6 text-[#1DA1F2]" />
            <h2 className="text-3xl lg:text-4xl font-bold">Latest from Twitter</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our journey and get the latest insights on digital marketing, web development, and business growth.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Tweet Slider */}
          <div className="relative">
            <Card className="bg-background/60 backdrop-blur-sm border-border/50 hover:bg-background/80 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">V</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-foreground">{mockTweets[currentTweet].author}</h3>
                      {mockTweets[currentTweet].verified && (
                        <div className="w-4 h-4 bg-[#1DA1F2] rounded-full flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                      <span className="text-muted-foreground text-sm">{mockTweets[currentTweet].handle}</span>
                      <span className="text-muted-foreground text-sm">·</span>
                      <span className="text-muted-foreground text-sm">{mockTweets[currentTweet].timestamp}</span>
                    </div>
                    <p className="text-foreground mb-4 leading-relaxed">{mockTweets[currentTweet].text}</p>

                    {/* Tweet Actions */}
                    <div className="flex items-center space-x-6 text-muted-foreground">
                      <div className="flex items-center space-x-1 hover:text-[#1DA1F2] transition-colors cursor-pointer">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{mockTweets[currentTweet].replies}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-green-500 transition-colors cursor-pointer">
                        <Repeat2 className="h-4 w-4" />
                        <span className="text-sm">{mockTweets[currentTweet].retweets}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-red-500 transition-colors cursor-pointer">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{mockTweets[currentTweet].likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 hover:text-[#1DA1F2] transition-colors cursor-pointer">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevTweet}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Previous tweet"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTweet}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-background transition-colors"
              aria-label="Next tweet"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {mockTweets.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTweet(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTweet ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to tweet ${index + 1}`}
              />
            ))}
          </div>

          {/* Follow Button */}
          <div className="text-center mt-8">
            <Button asChild className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white">
              <Link href="https://x.com/Vshwax" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" />
                Follow @Vshwax
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
