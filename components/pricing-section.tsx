import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PayPalButton } from "@/components/paypal-button"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "$180",
    period: "/month",
    description: "Perfect for small businesses getting started with digital marketing",
    features: [
      "Basic Website Design",
      "SEO Setup",
      "Social Media Management (2 platforms)",
      "Monthly Analytics Report",
      "Email Support",
    ],
    popular: false,
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    name: "Professional",
    price: "$420",
    period: "/month",
    description: "Ideal for growing businesses looking to expand their online presence",
    features: [
      "Custom Website Development",
      "Advanced SEO",
      "Social Media Management (4 platforms)",
      "PPC Campaign Management",
      "Content Creation",
      "Weekly Reports",
      "Phone & Email Support",
    ],
    popular: true,
    paypalButtonId: "NKH852N4Q67RC",
  },
  {
    name: "Enterprise",
    price: "$900",
    period: "/month",
    description: "Comprehensive solution for established businesses and enterprises",
    features: [
      "Full-Scale Website Development",
      "Complete SEO Strategy",
      "Multi-Platform Social Media",
      "Advanced PPC Campaigns",
      "Video Marketing",
      "Brand Development",
      "24/7 Priority Support",
      "Dedicated Account Manager",
    ],
    popular: false,
    paypalButtonId: "NKH852N4Q67RC",
  },
]

export function PricingSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing plans designed to grow with your business. All plans include our core services and
            dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative h-full ${
                plan.popular ? "border-primary shadow-lg scale-105" : "border-border hover:shadow-lg transition-shadow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <PayPalButton
                    hostedButtonId={plan.paypalButtonId}
                    title="Pay Now"
                    description={`Subscribe to ${plan.name} plan`}
                    className="w-full"
                  />

                  <div className="text-center text-xs text-muted-foreground">or</div>

                  <Button
                    asChild
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Need a custom package? Contact us for personalized pricing.</p>
          <Button variant="outline" asChild>
            <Link href="tel:+919315426370">Call +919315426370</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
