"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { X, Phone, Mail, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavigationItem {
  name: string
  href: string
  dropdown?: Array<{ name: string; href: string }>
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navigation: NavigationItem[]
}

export function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = React.useState<string[]>([])

  const toggleExpanded = (itemName: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemName) ? prev.filter((name) => name !== itemName) : [...prev, itemName],
    )
  }

  // Close menu on route change
  React.useEffect(() => {
    if (isOpen) {
      onClose()
    }
  }, [pathname])

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  React.useEffect(() => {
    if (!isOpen) {
      setExpandedItems([])
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background border-l shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-serif font-bold text-lg">Menu</span>
            <Button variant="ghost" size="icon" onClick={onClose} className="touch-target">
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors touch-target",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5",
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedItems.includes(item.name) && "rotate-180",
                        )}
                      />
                    </button>

                    {expandedItems.includes(item.name) && (
                      <div className="ml-4 mt-2 space-y-1">
                        <Link
                          href={item.href}
                          className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors touch-target"
                          onClick={onClose}
                        >
                          <ChevronRight className="h-3 w-3 mr-2" />
                          View All {item.name}
                        </Link>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors touch-target"
                            onClick={onClose}
                          >
                            <ChevronRight className="h-3 w-3 mr-2" />
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors touch-target",
                      pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5",
                    )}
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="p-4 border-t space-y-4">
            <div className="space-y-3">
              <a href="tel:+919315426370" className="flex items-center space-x-3 text-sm touch-target">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-medium">+919315426370</span>
              </a>
              <a href="mailto:vishwa@bicrisales.com" className="flex items-center space-x-3 text-sm touch-target">
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-medium">vishwa@bicrisales.com</span>
              </a>
            </div>

            <Button asChild className="w-full touch-target">
              <Link href="https://call.whatsapp.com/voice/hhyNug1QRgHPAzGW2e5OT5">Book Meeting</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
