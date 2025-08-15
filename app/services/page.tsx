import { Navigation } from "@/components/navigation"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Our Services - BicriSales | Digital Marketing & Web Design",
  description:
    "Comprehensive digital marketing and web design services including SEO, social media marketing, e-commerce solutions, and more. Get your free quote today!",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ProcessSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
