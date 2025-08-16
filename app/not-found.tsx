import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Home, Search } from "lucide-react"

export const metadata = {
  title: "Page Not Found - BicriSales",
  description: "The page you're looking for doesn't exist. Return to BicriSales homepage or explore our services.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            {/* 404 Visual */}
            <div className="space-y-4">
              <h1 className="text-8xl lg:text-9xl font-bold text-primary/20">404</h1>
              <h2 className="text-3xl lg:text-4xl font-bold">Page Not Found</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  <Search className="mr-2 h-4 w-4" />
                  View Services
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Popular Pages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">Need Help?</h3>
              <p className="text-sm text-muted-foreground">
                Contact BicriSales directly for assistance with your digital marketing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href="tel:+919315426370" className="flex items-center gap-2 text-primary hover:underline">
                  📞 +919315426370
                </a>
                <a href="mailto:vishwa@bicrisales.com" className="flex items-center gap-2 text-primary hover:underline">
                  ✉️ vishwa@bicrisales.com
                </a>
                <a
                  href="https://wa.link/6xlsy9"
                  target="_blank"
                  className="flex items-center gap-2 text-primary hover:underline"
                  rel="noreferrer"
                >
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
