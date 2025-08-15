import { Navigation } from "@/components/navigation"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogGrid } from "@/components/blog-grid"

export const metadata = {
  title: "Blog - BicriSales | Digital Marketing Insights & Tips",
  description:
    "Stay updated with the latest digital marketing trends, SEO tips, web development insights, and business growth strategies from BicriSales experts.",
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
