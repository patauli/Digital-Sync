"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TrendingUp, Users, ShoppingCart } from "lucide-react"
import Link from "next/link"

const categories = ["All", "Web Design", "E-commerce", "SEO", "Social Media", "Branding"]

const projects = [
  {
    id: 1,
    title: "TechStart Solutions",
    category: "Web Design",
    description: "Modern corporate website with lead generation focus",
    image: "/modern-tech-website.png",
    results: {
      metric: "Lead Generation",
      value: "300% Increase",
      icon: TrendingUp,
    },
    tags: ["Responsive Design", "Lead Generation", "Corporate"],
    link: "/portfolio/techstart-solutions",
  },
  {
    id: 2,
    title: "Fashion Forward Store",
    category: "E-commerce",
    description: "Complete e-commerce solution with payment integration",
    image: "/fashion-ecommerce-website.png",
    results: {
      metric: "Online Sales",
      value: "$600K+ Revenue",
      icon: ShoppingCart,
    },
    tags: ["E-commerce", "Payment Gateway", "Mobile Commerce"],
    link: "/portfolio/fashion-forward-store",
  },
  {
    id: 3,
    title: "HealthCare Plus",
    category: "SEO",
    description: "SEO optimization for healthcare services",
    image: "/healthcare-website-design.png",
    results: {
      metric: "Organic Traffic",
      value: "400% Growth",
      icon: TrendingUp,
    },
    tags: ["SEO", "Healthcare", "Local Search"],
    link: "/portfolio/healthcare-plus",
  },
  {
    id: 4,
    title: "FoodieDelight Restaurant",
    category: "Social Media",
    description: "Social media marketing campaign for restaurant chain",
    image: "/restaurant-social-media.png",
    results: {
      metric: "Social Engagement",
      value: "500% Boost",
      icon: Users,
    },
    tags: ["Social Media", "Content Marketing", "Restaurant"],
    link: "/portfolio/foodie-delight-restaurant",
  },
  {
    id: 5,
    title: "EduTech Academy",
    category: "Web Design",
    description: "Educational platform with course management system",
    image: "/education-platform-website.png",
    results: {
      metric: "Student Enrollment",
      value: "1000+ Students",
      icon: Users,
    },
    tags: ["Education", "LMS", "User Portal"],
    link: "/portfolio/edutech-academy",
  },
  {
    id: 6,
    title: "GreenEarth Initiative",
    category: "Branding",
    description: "Complete brand identity for environmental organization",
    image: "/placeholder-1xavn.png",
    results: {
      metric: "Brand Recognition",
      value: "200% Increase",
      icon: TrendingUp,
    },
    tags: ["Branding", "Non-profit", "Environmental"],
    link: "/portfolio/greenearth-initiative",
  },
  {
    id: 7,
    title: "AutoParts Express",
    category: "E-commerce",
    description: "B2B e-commerce platform for automotive parts",
    image: "/automotive-parts-ecommerce.png",
    results: {
      metric: "B2B Sales",
      value: "$1.2M+ Revenue",
      icon: ShoppingCart,
    },
    tags: ["B2B", "Automotive", "Inventory Management"],
    link: "/portfolio/autoparts-express",
  },
  {
    id: 8,
    title: "FitLife Gym Chain",
    category: "SEO",
    description: "Local SEO campaign for fitness center chain",
    image: "/fitness-gym-website.png",
    results: {
      metric: "Local Visibility",
      value: "Top 3 Rankings",
      icon: TrendingUp,
    },
    tags: ["Local SEO", "Fitness", "Multi-location"],
    link: "/portfolio/fitlife-gym-chain",
  },
  {
    id: 9,
    title: "ArtisanCrafts Marketplace",
    category: "E-commerce",
    description: "Marketplace platform for handmade crafts and art",
    image: "/placeholder-gxr89.png",
    results: {
      metric: "Vendor Growth",
      value: "500+ Artisans",
      icon: Users,
    },
    tags: ["Marketplace", "Handmade", "Multi-vendor"],
    link: "/portfolio/artisan-crafts-marketplace",
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects across various industries and digital marketing
            disciplines.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="secondary" asChild>
                    <Link href={project.link}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Link>
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <div className="flex items-center text-sm text-primary">
                        <project.results.icon className="h-4 w-4 mr-1" />
                        {project.results.value}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">{project.results.metric}</span>
                      <span className="text-sm font-bold text-primary">{project.results.value}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Want to see your project here? Let's make it happen.</p>
          <Button asChild size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
