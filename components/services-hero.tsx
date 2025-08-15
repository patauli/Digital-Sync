import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <Image src="/digital-services-tech.png" alt="" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left max-w-4xl">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm">
                <span className="text-primary font-medium">Full-Service Digital Marketing Agency</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We offer a comprehensive range of digital marketing and web design services tailored to help your
                business grow and succeed online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <Image
                src="/placeholder-iwlm4.png"
                alt="BicriSales Digital Marketing Services"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
