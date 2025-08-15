import { Navigation } from "@/components/navigation"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Our Portfolio - BicriSales | Digital Marketing Success Stories",
  description:
    "Explore our portfolio of successful digital marketing campaigns, website designs, and e-commerce solutions. See how we've helped businesses grow their online presence.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PortfolioHero />
        <PortfolioGrid />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
