import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Palette, Code, Smartphone, Zap, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Web Design Services - BicriSales",
  description:
    "Custom web design services by BicriSales. Create stunning, responsive websites that convert visitors into customers. Get a free consultation today.",
  keywords: "web design, website design, responsive design, BicriSales, custom websites, professional web design",
}

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique designs tailored to your brand identity and business goals",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Perfect display across all devices and screen sizes",
  },
  {
    icon: Zap,
    title: "Fast Loading",
    description: "Optimized for speed and performance to reduce bounce rates",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "SEO-friendly, maintainable code following best practices",
  },
  {
    icon: Users,
    title: "User-Focused",
    description: "Designed with user experience and conversion optimization in mind",
  },
  {
    icon: CheckCircle,
    title: "Quality Assured",
    description: "Thorough testing across browsers and devices before launch",
  },
]

const packages = [
  {
    name: "Starter Website",
    price: "$299",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "Social media links",
      "1 month support",
    ],
  },
  {
    name: "Professional Website",
    price: "$599",
    description: "Ideal for growing businesses",
    features: [
      "Up to 10 pages",
      "Custom design & branding",
      "Advanced SEO optimization",
      "Blog integration",
      "Analytics setup",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise Website",
    price: "$1,199",
    description: "For large businesses and corporations",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce integration",
      "Advanced security",
      "Performance optimization",
      "6 months support",
    ],
  },
]

export default function WebDesignPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4">Web Design Services</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Professional Web Design That <span className="text-primary">Converts</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                BicriSales creates stunning, responsive websites that not only look amazing but drive real business
                results. Transform your online presence with our expert web design services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose BicriSales Web Design?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine creativity with strategy to deliver websites that achieve your business objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Web Design Packages</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect package for your business needs. All packages include BicriSales quality guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? "ring-2 ring-primary" : ""}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                      <p className="text-muted-foreground">{pkg.description}</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Online Presence?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let BicriSales create a website that represents your brand perfectly and drives real business results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
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
