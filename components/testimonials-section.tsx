import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechStart Solutions",
    role: "CEO",
    content:
      "BicriSales transformed our online presence completely. Our lead generation increased by 300% within just 3 months. Their team is professional, responsive, and delivers exceptional results.",
    rating: 5,
    image: "/professional-indian-businessman.png",
  },
  {
    name: "Priya Sharma",
    company: "Fashion Forward Store",
    role: "Founder",
    content:
      "The e-commerce platform they built for us is amazing. We've generated over ₹50 lakhs in revenue in the first year. The design is beautiful and the functionality is seamless.",
    rating: 5,
    image: "/team-member-2.png",
  },
  {
    name: "Dr. Amit Patel",
    company: "HealthCare Plus",
    role: "Director",
    content:
      "Their SEO expertise helped us rank #1 for all our target keywords. Our organic traffic increased by 400% and we're getting more patients than ever before. Highly recommended!",
    rating: 5,
    image: "/indian-doctor-professional.png",
  },
  {
    name: "Vikram Singh",
    company: "FoodieDelight Restaurant",
    role: "Owner",
    content:
      "The social media marketing campaign was incredible. Our engagement increased by 500% and we saw a significant boost in foot traffic. BicriSales knows how to get results.",
    rating: 5,
    image: "/indian-restaurant-owner.png",
  },
  {
    name: "Neha Gupta",
    company: "EduTech Academy",
    role: "Co-founder",
    content:
      "They created an outstanding educational platform for us. We now have over 1000+ students enrolled. The user experience is excellent and the platform is very reliable.",
    rating: 5,
    image: "/indian-female-educator.png",
  },
  {
    name: "Arjun Mehta",
    company: "GreenEarth Initiative",
    role: "Director",
    content:
      "The branding work they did for our organization was phenomenal. Our brand recognition increased by 200% and we're able to reach more people with our environmental message.",
    rating: 5,
    image: "/indian-environmental-activist.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with
            BicriSales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>

                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to join our list of satisfied clients?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="tel:+919315426370">Call +919315426370</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
