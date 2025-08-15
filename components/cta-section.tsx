import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              We're here to make your brand unforgettable, with a{" "}
              <span className="text-primary-foreground/90">digital presence</span> that's both beautiful and powerful.
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Ready to transform your digital presence? Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="tel:+919315426370">Call +919315426370</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Quick Quote via WhatsApp</h3>
                <p className="text-primary-foreground/80">Scan the QR code for instant quotes</p>
                <div className="inline-block p-4 bg-background rounded-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wa.link_6xlsy9-ObVhawVp88iogz12rcpI4vHDSreeIz.png"
                    alt="WhatsApp QR Code for Quick Quotes"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <Button variant="secondary" asChild>
                  <Link href="https://wa.link/6xlsy9" target="_blank">
                    Chat on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
