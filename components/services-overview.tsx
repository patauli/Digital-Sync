import { Monitor, Search, Share2, ShoppingCart, PenTool, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "Custom websites that convert visitors into customers with modern design and seamless functionality.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic with our proven SEO strategies.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness across all major social platforms.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store setup with payment integration and inventory management.",
  },
  {
    icon: PenTool,
    title: "Content Creation & Marketing",
    description: "Compelling content that tells your story and drives engagement across all channels.",
  },
  {
    icon: BarChart3,
    title: "PPC Campaign Management",
    description: "Maximize your advertising ROI with targeted campaigns and detailed analytics.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At BicriSales, we offer a dynamic mix of web design and digital marketing services tailored to elevate your
            brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 hover:bg-card"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
