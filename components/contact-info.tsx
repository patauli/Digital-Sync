import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function ContactInfo() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">Multiple ways to reach us. Choose what works best for you.</p>
          </div>

          <div className="grid gap-6">
            {/* Phone Contact */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">Speak directly with our team</p>
                    <Link href="tel:+919315426370" className="text-primary font-medium hover:underline">
                      +919315426370
                    </Link>
                  </div>
                  <Button asChild size="sm">
                    <Link href="tel:+919315426370">Call Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground text-sm mb-2">Send us your project details</p>
                    <Link href="mailto:vishwa@bicrisales.com" className="text-primary font-medium hover:underline">
                      vishwa@bicrisales.com
                    </Link>
                  </div>
                  <Button asChild size="sm" variant="outline">
                    <Link href="mailto:vishwa@bicrisales.com">Email</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Contact */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-2">Quick quotes and instant support</p>
                    <span className="text-primary font-medium">Chat with us instantly</span>
                  </div>
                  <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                    <Link href="https://wa.link/6xlsy9" target="_blank">
                      Chat
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meeting Booking */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Book a Meeting</h3>
                    <p className="text-muted-foreground text-sm mb-2">Schedule a consultation call</p>
                    <span className="text-primary font-medium">Free 30-minute consultation</span>
                  </div>
                  <Button asChild size="sm">
                    <Link href="https://call.whatsapp.com/voice/hhyNug1QRgHPAzGW2e5OT5">Book Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Serving clients across India with remote and on-site support
                  </p>
                  <p className="text-sm">
                    <strong>Headquarters:</strong> India
                    <br />
                    <strong>Service Areas:</strong> Pan India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp QR Code */}
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-4">Quick Quote via WhatsApp</h3>
              <div className="inline-block p-4 bg-muted rounded-lg mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wa.link_6xlsy9-ObVhawVp88iogz12rcpI4vHDSreeIz.png"
                  alt="WhatsApp QR Code for Quick Quotes"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Scan this QR code with your phone to start a WhatsApp conversation for instant quotes
              </p>
              <Button asChild variant="outline">
                <Link href="https://wa.link/6xlsy9" target="_blank">
                  Open WhatsApp
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
