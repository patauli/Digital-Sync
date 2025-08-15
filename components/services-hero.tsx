import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm">
              <span className="text-primary font-medium">Full-Service Digital Marketing Agency</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of digital marketing and web design services tailored to help your business
              grow and succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="tel:+919315426370">Call +919315426370</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
