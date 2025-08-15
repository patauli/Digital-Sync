import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, TrendingUp } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const portfolioProjects = {
  "techstart-solutions": {
    title: "TechStart Solutions",
    category: "Web Design",
    client: "TechStart Inc.",
    date: "March 2024",
    description:
      "A complete website redesign for a growing technology startup, focusing on lead generation and professional presentation.",
    challenge:
      "TechStart needed a professional website that could effectively communicate their complex technology solutions while generating qualified leads.",
    solution:
      "BicriSales created a modern, responsive website with clear messaging, interactive elements, and optimized conversion funnels.",
    results: [
      {
        metric: "Lead Generation",
        value: "300% Increase",
        description: "Monthly qualified leads increased from 20 to 80",
      },
      { metric: "Page Load Speed", value: "2.1 seconds", description: "Optimized for fast loading across all devices" },
      { metric: "Conversion Rate", value: "8.5%", description: "Contact form conversion rate improved significantly" },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/modern-tech-website.png",
    gallery: ["/modern-tech-website.png", "/placeholder.svg", "/placeholder.svg"],
  },
  "fashion-forward-store": {
    title: "Fashion Forward Store",
    category: "E-commerce",
    client: "Fashion Forward Ltd.",
    date: "February 2024",
    description:
      "Complete e-commerce solution with payment integration and inventory management for a fashion retailer.",
    challenge:
      "Fashion Forward needed a sophisticated e-commerce platform that could handle their growing product catalog and international shipping.",
    solution:
      "BicriSales developed a custom e-commerce solution with advanced filtering, payment integration, and mobile-optimized shopping experience.",
    results: [
      {
        metric: "Online Sales",
        value: "$600K+ Revenue",
        description: "Generated over $600,000 in online sales within 6 months",
      },
      { metric: "Mobile Conversions", value: "65%", description: "Mobile traffic now converts at 65% rate" },
      {
        metric: "Cart Abandonment",
        value: "25% Reduction",
        description: "Optimized checkout process reduced abandonment",
      },
    ],
    technologies: ["Shopify", "React", "Node.js", "Stripe API"],
    image: "/fashion-ecommerce-website.png",
    gallery: ["/fashion-ecommerce-website.png", "/placeholder.svg", "/placeholder.svg"],
  },
  // Add more portfolio projects...
}

interface PortfolioProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PortfolioProjectPageProps) {
  const project = portfolioProjects[params.slug as keyof typeof portfolioProjects]

  if (!project) {
    return {
      title: "Project Not Found - BicriSales Portfolio",
      description: "The requested portfolio project could not be found.",
    }
  }

  return {
    title: `${project.title} - BicriSales Portfolio`,
    description: project.description,
    keywords: `${project.category}, BicriSales, portfolio, ${project.title}, case study`,
  }
}

export async function generateStaticParams() {
  return Object.keys(portfolioProjects).map((slug) => ({
    slug: slug,
  }))
}

export default function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const project = portfolioProjects[params.slug as keyof typeof portfolioProjects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">{project.category}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <User className="h-4 w-4 mr-2" />
                      Client
                    </div>
                    <div className="font-semibold">{project.client}</div>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Completed
                    </div>
                    <div className="font-semibold">{project.date}</div>
                  </div>
                </div>

                <Button asChild>
                  <Link href="/contact">Start Similar Project</Link>
                </Button>
              </div>

              <div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                  <p className="text-muted-foreground">{project.solution}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Project Results</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Measurable outcomes that demonstrate the success of our BicriSales approach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                    <div className="text-lg font-semibold mb-2">{result.metric}</div>
                    <div className="text-sm text-muted-foreground">{result.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technologies Used</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                BicriSales leverages cutting-edge technologies to deliver exceptional results.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-lg px-4 py-2">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready for Similar Results?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let BicriSales create a custom solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View More Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
