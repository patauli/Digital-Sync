"use client"

import * as React from "react"

interface LinkCheckerProps {
  children: React.ReactNode
}

export function LinkChecker({ children }: LinkCheckerProps) {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "development") return

    const checkLinks = () => {
      const links = document.querySelectorAll("a[href]")
      const brokenLinks: string[] = []

      links.forEach((link) => {
        const href = link.getAttribute("href")
        if (!href) return

        // Check internal links
        if (href.startsWith("/") && !href.startsWith("//")) {
          // Skip checking dynamic routes and external links
          if (href.includes("[") || href.includes("mailto:") || href.includes("tel:") || href.includes("wa.link"))
            return

          // Simple check for common pages
          const commonPages = ["/", "/about", "/services", "/portfolio", "/blog", "/contact"]
          const isServicePage = href.startsWith("/services/")
          const isBlogPage = href.startsWith("/blog/")
          const isPortfolioPage = href.startsWith("/portfolio/")

          if (!commonPages.includes(href) && !isServicePage && !isBlogPage && !isPortfolioPage) {
            brokenLinks.push(href)
          }
        }
      })

      if (brokenLinks.length > 0) {
        console.group("🔗 Link Checker - Development Mode")
        console.warn(`Found ${brokenLinks.length} potential broken internal links:`)
        brokenLinks.forEach((link) => console.warn(`  - ${link}`))
        console.groupEnd()
      }
    }

    // Check links after component mounts
    const timer = setTimeout(checkLinks, 2000)
    return () => clearTimeout(timer)
  }, [])

  return <>{children}</>
}
