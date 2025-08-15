import { TrendingUp, Users, Globe, Award } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries",
  },
  {
    icon: Users,
    number: "200+",
    label: "Happy Clients",
    description: "Satisfied customers who trust our expertise",
  },
  {
    icon: Globe,
    number: "50+",
    label: "Cities Served",
    description: "Expanding digital presence across India",
  },
  {
    icon: Award,
    number: "5+",
    label: "Years Experience",
    description: "Proven track record in digital marketing",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Best Web Design and <span className="text-primary">Digital Marketing Agency</span> in India
            <br />- Maximize Your ROI!
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Welcome to BicriSales, where we turn ideas into digital experiences that captivate and convert. Recognized
            as the best web design agency in India, we believe that a website is more than just an online presence—it's
            your brand's most powerful storyteller.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
