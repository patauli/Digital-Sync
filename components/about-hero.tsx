import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm">
                <Users className="h-4 w-4 text-primary mr-2" />
                <span className="text-primary font-medium">Digital Marketing Experts Since 2019</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                About <span className="text-primary">BicriSales</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We are a passionate team of digital marketing professionals dedicated to helping businesses grow their
                online presence and achieve remarkable success in the digital landscape.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
              <img
                src="/team-collaboration-office.png"
                alt="BicriSales Team"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
