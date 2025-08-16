import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm">
              <span className="text-primary font-medium">Free Consultation Available</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to grow your digital sales? Contact us today for a free consultation and discover how we can help
              your business succeed online.
            </p>

            {/* Quick Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="tel:+919315426370">
                  <Phone className="mr-2 h-4 w-4" />
                  Call +919315426370
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="mailto:vishwa@bicrisales.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://wa.link/6xlsy9" target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
