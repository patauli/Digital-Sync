import {
  Monitor,
  Search,
  Share2,
  ShoppingCart,
  PenTool,
  BarChart3,
  Smartphone,
  Globe,
  Mail,
  Video,
  Megaphone,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PayPalButton } from "@/components/paypal-button"
import Link from "next/link"

const services = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    description:
      "Custom, responsive websites that convert visitors into customers with modern design and seamless functionality.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile-First Approach", "CMS Integration"],
    price: "Starting from $300",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic with our proven SEO strategies and techniques.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Monthly Reports"],
    price: "Starting from $180/month",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engage your audience and build brand awareness across all major social media platforms.",
    features: [
      "Content Creation",
      "Community Management",
      "Paid Advertising",
      "Analytics & Reporting",
      "Strategy Development",
    ],
    price: "Starting from $145/month",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Complete online store setup with payment integration, inventory management, and conversion optimization.",
    features: ["Store Setup", "Payment Gateway", "Inventory Management", "Order Processing", "Mobile Commerce"],
    price: "Starting from $420",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: PenTool,
    title: "Content Creation & Marketing",
    description: "Compelling content that tells your story and drives engagement across all digital channels.",
    features: ["Blog Writing", "Copywriting", "Video Content", "Graphic Design", "Content Strategy"],
    price: "Starting from $95/month",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: BarChart3,
    title: "PPC Campaign Management",
    description: "Maximize your advertising ROI with targeted campaigns and detailed performance analytics.",
    features: ["Google Ads", "Facebook Ads", "Campaign Setup", "Optimization", "Performance Tracking"],
    price: "Starting from $120/month",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide exceptional user experiences.",
    features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization", "Maintenance"],
    price: "Starting from $600",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: Globe,
    title: "Digital Strategy Consulting",
    description: "Comprehensive digital transformation strategies to help your business thrive in the digital age.",
    features: [
      "Market Analysis",
      "Competitor Research",
      "Strategy Planning",
      "Implementation Roadmap",
      "Performance Metrics",
    ],
    price: "Starting from $240",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Targeted email campaigns that nurture leads and drive conversions with personalized messaging.",
    features: ["Campaign Design", "List Management", "Automation", "A/B Testing", "Analytics"],
    price: "Starting from $72/month",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: Video,
    title: "Video Marketing",
    description: "Engaging video content that captures attention and drives action across all digital platforms.",
    features: ["Video Production", "Animation", "Editing", "YouTube Optimization", "Social Video"],
    price: "Starting from $180/video",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: Megaphone,
    title: "Brand Development",
    description: "Complete brand identity creation including logo design, brand guidelines, and marketing materials.",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy", "Visual Identity"],
    price: "Starting from $215",
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description:
      "Comprehensive tracking and reporting to measure performance and optimize your digital marketing efforts.",
    features: ["Google Analytics", "Custom Dashboards", "Monthly Reports", "Performance Insights", "ROI Tracking"],
    price: "Starting from $60/month",
    paypalButtonId: "NKH852N4Q67RC",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From web design to digital marketing, we provide end-to-end solutions to help your business succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 hover:bg-card h-full"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>

                  <PayPalButton
                    hostedButtonId={service.paypalButtonId}
                    title="Pay Now"
                    description={`Purchase ${service.title}`}
                    className="w-full"
                  />

                  <div className="text-center text-xs text-muted-foreground">or</div>

                  <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/contact">Get Custom Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need a custom solution? We've got you covered.</p>
          <Button asChild size="lg">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
