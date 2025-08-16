import { Navigation } from "@/components/navigation"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { VideoBanner } from "@/components/video-banner"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesOverview } from "@/components/services-overview"
import { InteractiveGlobe } from "@/components/interactive-globe"
import { TwitterFeed } from "@/components/twitter-feed"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <VideoBanner />
        <HeroSection />
        <StatsSection />
        <ServicesOverview />
        <InteractiveGlobe />
        <TwitterFeed />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
