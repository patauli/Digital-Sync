import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AIChatbot } from "@/components/ai-chatbot"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://bicrisales.com"),
  title: {
    default: "BicriSales - Grow Your Digital Sales | Expert Digital Marketing Services",
    template: "%s | BicriSales - Digital Marketing Experts",
  },
  description:
    "BicriSales offers professional digital marketing and sales solutions to grow your business. Expert services in web design, SEO, social media marketing, PPC, AI solutions, and CRM implementation. Contact +919315426370 for free consultation.",
  keywords: [
    "BicriSales",
    "digital marketing",
    "sales growth",
    "web design",
    "SEO services",
    "social media marketing",
    "PPC advertising",
    "AI marketing",
    "CRM implementation",
    "Salesforce",
    "Bigin CRM",
    "website development",
    "online marketing",
    "digital transformation",
    "lead generation",
    "conversion optimization",
    "brand development",
    "e-commerce solutions",
  ],
  authors: [{ name: "BicriSales Team", url: "https://bicrisales.com/about" }],
  creator: "BicriSales",
  publisher: "BicriSales",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bicrisales.com",
    siteName: "BicriSales",
    title: "BicriSales - Grow Your Digital Sales | Expert Digital Marketing Services",
    description:
      "Professional digital marketing and sales solutions to grow your business. Expert services in web design, SEO, social media marketing, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BicriSales - Digital Marketing Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BicriSales - Grow Your Digital Sales",
    description: "Professional digital marketing and sales solutions to grow your business.",
    images: ["/twitter-image.png"],
    creator: "@Vshwax",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  alternates: {
    canonical: "https://bicrisales.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0891b2" />
        <meta name="msapplication-TileColor" content="#0891b2" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BicriSales",
              description: "Professional digital marketing and sales solutions to grow your business",
              url: "https://bicrisales.com",
              logo: "https://bicrisales.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+919315426370",
                contactType: "customer service",
                email: "vishwa@bicrisales.com",
              },
              founder: {
                "@type": "Person",
                name: "Vishwajeet",
              },
              sameAs: ["https://x.com/Vshwax", "https://wa.link/6xlsy9"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              service: [
                "Digital Marketing",
                "Web Design",
                "SEO Services",
                "Social Media Marketing",
                "PPC Advertising",
                "CRM Implementation",
              ],
            }),
          }}
        />

        <style>{`
html {
  font-family: ${inter.style.fontFamily};
  --font-inter: ${inter.variable};
  --font-poppins: ${poppins.variable};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <AIChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
