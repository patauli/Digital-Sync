import { Navigation } from "@/components/navigation"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { CompanyStory } from "@/components/company-story"
import { TeamSection } from "@/components/team-section"
import { ValuesSection } from "@/components/values-section"
import { AchievementsSection } from "@/components/achievements-section"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "About Us - BicriSales | Digital Marketing Experts",
  description:
    "Learn about BicriSales, a leading digital marketing agency in India. Meet our team of experts and discover our mission to help businesses grow their digital sales.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <CompanyStory />
        <TeamSection />
        <ValuesSection />
        <AchievementsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
