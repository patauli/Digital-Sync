import { CheckCircle, MessageSquare, Rocket, BarChart } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery & Consultation",
    description:
      "We start by understanding your business goals, target audience, and current challenges through detailed consultation.",
  },
  {
    icon: CheckCircle,
    title: "Strategy Development",
    description: "Our team creates a customized digital strategy tailored to your specific needs and objectives.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "We execute the strategy with precision, keeping you informed throughout the entire process.",
  },
  {
    icon: BarChart,
    title: "Monitor & Optimize",
    description: "Continuous monitoring and optimization to ensure maximum ROI and long-term success.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image src="/placeholder.svg?height=600&width=1200" alt="" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We follow a proven methodology to ensure your project's success from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground group-hover:scale-110 transition-transform shadow-lg">
                  <step.icon className="h-10 w-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-md">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
