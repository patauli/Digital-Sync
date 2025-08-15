import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Search, TrendingUp, Target, BarChart, Globe } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional SEO Services - BicriSales",
  description:
    "Boost your search rankings with BicriSales SEO services. Increase organic traffic, improve visibility, and grow your business online.",
  keywords: "SEO services, search engine optimization, BicriSales, organic traffic, search rankings, digital marketing",
}

const services = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Comprehensive keyword analysis to target the right search terms for your business",
  },
  {
    icon: TrendingUp,
    title: "On-Page SEO",
    description: "Optimize your website content, meta tags, and structure for better rankings",
  },
  {
    icon: Globe,
    title: "Technical SEO",
    description: "Fix technical issues that prevent search engines from properly indexing your site",
  },
  {
    icon: Target,
    title: "Local SEO",
    description: "Dominate local search results and attract customers in your area",
  },
  {
    icon: BarChart,
    title: "SEO Analytics",
    description: "Track rankings, traffic, and conversions with detailed reporting",
  },
  {
    icon: CheckCircle,
    title: "Link Building",
    description: "Build high-quality backlinks to increase your domain authority",
  },
]

export default function SEOPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">SEO Services</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Dominate Search Results with <span className="text-primary">BicriSales SEO</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Increase your organic traffic, improve search rankings, and grow your business with our proven SEO
                strategies. BicriSales delivers measurable results that drive real growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get SEO Audit</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Results</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive SEO Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                BicriSales provides end-to-end SEO solutions to improve your search visibility and drive qualified
                traffic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proven SEO Results</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how BicriSales has helped businesses achieve remarkable SEO success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">400%</div>
                <div className="text-lg font-semibold mb-1">Average Traffic Increase</div>
                <div className="text-muted-foreground">Within 6 months</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">Top 3</div>
                <div className="text-lg font-semibold mb-1">Search Rankings</div>
                <div className="text-muted-foreground">For target keywords</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">250%</div>
                <div className="text-lg font-semibold mb-1">Lead Generation Boost</div>
                <div className="text-muted-foreground">From organic traffic</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Dominate Search Results?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let BicriSales boost your search rankings and drive qualified traffic to your website.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Free SEO Audit</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:+919315426370">Call +919315426370</Link>
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
