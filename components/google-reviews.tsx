"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Review {
  id: number
  name: string
  rating: number
  comment: string
  date: string
  service: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "BicriSales transformed our online presence completely. Their web design and SEO services helped us increase our leads by 300%. Highly professional team!",
    date: "2 weeks ago",
    service: "Web Design & SEO",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    comment:
      "Outstanding digital marketing services! The team at BicriSales helped us launch our e-commerce store and we saw immediate results. Revenue increased by 250% in just 3 months.",
    date: "1 month ago",
    service: "E-commerce Solutions",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    comment:
      "Professional, reliable, and results-driven. BicriSales handled our complete digital transformation including website redesign and social media marketing. Couldn't be happier!",
    date: "3 weeks ago",
    service: "Digital Marketing",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    comment:
      "The best investment we made for our business. BicriSales' PPC campaigns and content marketing strategies brought us qualified leads consistently. ROI exceeded expectations!",
    date: "1 week ago",
    service: "PPC & Content Marketing",
  },
  {
    id: 5,
    name: "Lisa Wang",
    rating: 5,
    comment:
      "Exceptional service from start to finish. The team understood our vision and delivered a stunning website with powerful SEO. Our organic traffic doubled in 2 months!",
    date: "2 months ago",
    service: "Web Design & SEO",
  },
  {
    id: 6,
    name: "Robert Martinez",
    rating: 5,
    comment:
      "BicriSales helped us integrate Salesforce and streamline our sales process. The automation they set up saved us hours daily and improved our conversion rates significantly.",
    date: "3 weeks ago",
    service: "Salesforce Integration",
  },
]

export function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    setIsAutoPlaying(false)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    setIsAutoPlaying(false)
  }

  const goToReview = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with
            BicriSales.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Display */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-8 text-center">
                      {/* Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Comment */}
                      <blockquote className="text-lg text-muted-foreground mb-6 italic">"{review.comment}"</blockquote>

                      {/* Author Info */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">{review.name}</h4>
                        <p className="text-sm text-primary font-medium">{review.service}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm"
            onClick={prevReview}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous review</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm"
            onClick={nextReview}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next review</span>
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => goToReview(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <a
              href="https://www.google.com/search?q=BicriSales+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <span>View All Reviews on Google</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
