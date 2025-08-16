import { Navigation } from "@/components/navigation"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { FAQSection } from "@/components/faq-section"
import { PopupTrigger } from "@/components/popup-trigger"

export const metadata = {
  title: "Contact Us - BicriSales | Get Your Free Digital Marketing Quote",
  description:
    "Contact BicriSales for your digital marketing needs. Call +919315426370 or email vishwa@bicrisales.com for a free consultation and quote.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppChat />
      <PopupTrigger trigger="scroll" scrollPercentage={30} />
    </div>
  )
}
