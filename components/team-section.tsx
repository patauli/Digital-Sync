import { Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const teamMembers = [
  {
    name: "Vishwajeet",
    role: "Founder & CEO",
    bio: "Visionary leader with extensive experience in digital transformation and business growth strategies.",
    image: "/team-ceo-vishwajeet.png",
    social: {
      linkedin: "https://linkedin.com/in/vishwajeet-bicrisales",
      twitter: "https://x.com/Vshwax",
      email: "vishwa@bicrisales.com",
    },
  },
  {
    name: "Vipin Yadav",
    role: "Head of SEO",
    bio: "SEO expert specializing in organic growth strategies and technical optimization with proven results.",
    image: "/team-seo-vipin.png",
    social: {
      linkedin: "https://linkedin.com/in/vipin-yadav-seo",
      twitter: "https://twitter.com/vipin_seo_expert",
      email: "vipin@bicrisales.com",
    },
  },
  {
    name: "Robert Brown",
    role: "Business Development Manager",
    bio: "Strategic business development professional focused on building lasting client relationships and growth.",
    image: "/team-business-robert.png",
    social: {
      linkedin: "https://linkedin.com/in/robert-brown-bizdev",
      twitter: "https://twitter.com/robert_bizdev",
      email: "robert@bicrisales.com",
    },
  },
  {
    name: "Arjun Kumar",
    role: "Creative Director",
    bio: "Award-winning designer with expertise in web design and brand development.",
    image: "/team-designer-arjun.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "arjun@bicrisales.com",
    },
  },
  {
    name: "Sneha Gupta",
    role: "Social Media Manager",
    bio: "Social media strategist who creates engaging content that drives real results.",
    image: "/team-social-sneha.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sneha@bicrisales.com",
    },
  },
  {
    name: "Neha Joshi",
    role: "Content Strategist",
    bio: "Content marketing specialist who crafts compelling stories that convert.",
    image: "/team-content-neha.png",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "neha@bicrisales.com",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of digital marketing experts brings together years of experience and a passion for helping
            businesses succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>

                <div className="flex justify-center space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <Link href={member.social.linkedin}>
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={member.social.twitter}>
                      <Twitter className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`mailto:${member.social.email}`}>
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
