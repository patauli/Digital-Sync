import { Award, TrendingUp, Users, Globe } from "lucide-react"

const achievements = [
  {
    icon: Award,
    number: "5+",
    label: "Years of Excellence",
    description: "Consistently delivering outstanding results since 2019",
  },
  {
    icon: TrendingUp,
    number: "500+",
    label: "Successful Projects",
    description: "Completed projects across various industries and business sizes",
  },
  {
    icon: Users,
    number: "200+",
    label: "Happy Clients",
    description: "Satisfied customers who trust us with their digital marketing needs",
  },
  {
    icon: Globe,
    number: "50+",
    label: "Cities Served",
    description: "Expanding digital presence across India and beyond",
  },
]

export function AchievementsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-4">
                <achievement.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold mb-2">{achievement.number}</div>
              <div className="text-xl font-semibold mb-2">{achievement.label}</div>
              <div className="text-sm text-primary-foreground/80">{achievement.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
