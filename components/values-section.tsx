import { Shield, Zap, Users, Trophy, Clock, Handshake } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We believe in transparent communication and honest business practices in everything we do.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of digital trends and continuously evolve our strategies for maximum impact.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners, not just service providers.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering results that exceed expectations.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We deliver on our promises, on time, every time, with consistent quality and support.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description: "We build long-term relationships based on trust, mutual respect, and shared success.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core values guide everything we do and shape how we work with our clients and each other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-6">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
