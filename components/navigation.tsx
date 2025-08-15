"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Website Design & Development", href: "/services/web-design" },
      { name: "SEO Optimization", href: "/services/seo" },
      { name: "Social Media Marketing", href: "/services/social-media" },
      { name: "PPC Campaign Management", href: "/services/ppc" },
      { name: "E-commerce Solutions", href: "/services/ecommerce" },
      { name: "Content Creation & Marketing", href: "/services/content-marketing" },
      { name: "Email Marketing", href: "/services/email-marketing" },
      { name: "Digital Strategy Consulting", href: "/services/digital-strategy" },
    ],
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    dropdown: [
      { name: "Web Design Projects", href: "/portfolio?category=web-design" },
      { name: "E-commerce Stores", href: "/portfolio?category=ecommerce" },
      { name: "Marketing Campaigns", href: "/portfolio?category=marketing" },
      { name: "Mobile Applications", href: "/portfolio?category=mobile" },
      { name: "Branding Projects", href: "/portfolio?category=branding" },
    ],
  },
  {
    name: "Blog",
    href: "/blog",
    dropdown: [
      { name: "Website Development", href: "/blog?category=Website Development" },
      { name: "Artificial Intelligence", href: "/blog?category=Artificial Intelligence" },
      { name: "Digital Marketing", href: "/blog?category=Digital Marketing" },
      { name: "SEO", href: "/blog?category=SEO" },
      { name: "PPC", href: "/blog?category=PPC" },
      { name: "Social Media Marketing", href: "/blog?category=Social Media Marketing" },
      { name: "Salesforce", href: "/blog?category=Salesforce" },
      { name: "Bigin CRM", href: "/blog?category=Bigin CRM" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const pathname = usePathname()

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 safe-top">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 touch-target">
              <div className="h-10 w-10 relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blob-ikDPyPwuZcqfPOLvrxvnUrKuvCAhgs.png"
                  alt="BicriSales Logo - Digital Marketing Experts"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <span className="font-serif font-bold text-xl">BicriSales</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors hover:text-primary touch-target",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={cn(
                          "ml-1 h-3 w-3 transition-transform",
                          activeDropdown === item.name && "rotate-180",
                        )}
                      />
                    )}
                  </Link>

                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Contact number - hidden on small screens */}
              <a
                href="tel:+919315426370"
                className="hidden lg:flex items-center space-x-2 text-sm touch-target hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-medium">+919315426370</span>
              </a>

              {/* Theme toggle */}
              <ThemeToggle />

              {/* Book Meeting Button - hidden on mobile */}
              <Button asChild className="hidden md:inline-flex touch-target">
                <Link href="https://call.whatsapp.com/voice/hhyNug1QRgHPAzGW2e5OT5">Book Meeting</Link>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden touch-target tap-highlight-none"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} navigation={navigation} />
    </>
  )
}
