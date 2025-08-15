import { Button } from "@/components/ui/button"
import { ArrowRight, Award } from "lucide-react"
import Link from "next/link"

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm">
              <Award className="h-4 w-4 text-primary mr-2" />
              <span className="text-primary font-medium">500+ Successful Projects</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped businesses across various industries achieve their digital marketing goals and
              grow their online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://wa.link/6xlsy9" target="_blank">
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
