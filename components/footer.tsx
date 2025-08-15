import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">B</span>
              </div>
              <span className="font-serif font-bold text-xl">BicriSales</span>
            </Link>
            <p className="text-muted-foreground">
              Grow Your Digital Sales with professional web design and digital marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-design"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-muted-foreground hover:text-primary transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-marketing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/e-commerce-solutions"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content-marketing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <Link href="tel:+919315426370" className="text-muted-foreground hover:text-primary transition-colors">
                  +919315426370
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <Link
                  href="mailto:info@bicrisales.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@bicrisales.com
                </Link>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 BicriSales. All rights reserved. | Grow Your Digital Sales</p>
        </div>
      </div>
    </footer>
  )
}
