import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="absolute inset-0 opacity-5">
        <Image src="/placeholder-6hx0k.png" alt="" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
                <span className="text-primary font-medium">Digital Marketing Company in India</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Design Beyond <span className="text-primary">Pixels</span>,<br />
                Marketing Beyond <span className="text-accent">Limits</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                We help you create high-converting websites and implement powerful digital marketing strategies that
                drive traffic, engage users, and grow your brand.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">FREE</div>
                <div className="text-sm text-muted-foreground">Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">FAST</div>
                <div className="text-sm text-muted-foreground">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/contact">
                  View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base bg-transparent" asChild>
                <Link href="https://wa.link/6xlsy9" target="_blank">
                  <Play className="mr-2 h-4 w-4" />
                  Get Free Quote
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-xs font-medium">★</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by 100+ businesses</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced with Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
              <Image
                src="/digital-marketing-team.png"
                alt="BicriSales Digital Marketing Team"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg shadow-2xl"
              />

              {/* Overlay mockup for depth */}
              <div className="absolute inset-4 bg-background/90 rounded-lg shadow-2xl overflow-hidden opacity-80">
                <div className="bg-muted p-4 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-background rounded px-3 py-1 text-sm text-muted-foreground">
                    bicrisales.com
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-accent/20 rounded"></div>
                    <div className="h-20 bg-primary/20 rounded"></div>
                  </div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg">
              <Play className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
