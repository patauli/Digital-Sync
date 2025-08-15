import { CheckCircle, MessageSquare, Rocket, BarChart } from "lucide-react"

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
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
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
