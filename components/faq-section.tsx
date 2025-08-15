"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "How long does it take to complete a website project?",
    answer:
      "The timeline depends on the complexity of your project. A basic website typically takes 2-3 weeks, while more complex e-commerce or custom solutions can take 4-8 weeks. We'll provide you with a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support after the project is completed?",
    answer:
      "Yes, we offer comprehensive ongoing support including website maintenance, content updates, security monitoring, and technical support. We have various support packages to suit different needs and budgets.",
  },
  {
    question: "What's included in your SEO services?",
    answer:
      "Our SEO services include keyword research, on-page optimization, technical SEO, content optimization, link building, local SEO (if applicable), and monthly performance reports. We focus on sustainable, white-hat techniques that deliver long-term results.",
  },
  {
    question: "Can you help with social media marketing?",
    answer:
      "We offer complete social media marketing services including strategy development, content creation, community management, paid advertising, and performance analytics across all major platforms like Facebook, Instagram, LinkedIn, and Twitter.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes, we work with businesses of all sizes, from startups and small businesses to large enterprises. We have flexible packages and solutions designed specifically for small businesses with limited budgets.",
  },
  {
    question: "What makes BicriSales different from other agencies?",
    answer:
      "We focus on delivering measurable results, not just pretty designs. Our team combines creativity with data-driven strategies, and we maintain transparent communication throughout the project. Plus, we offer ongoing support and treat every client's success as our own.",
  },
  {
    question: "Do you provide free consultations?",
    answer:
      "Yes, we offer free 30-minute consultations where we discuss your business goals, current challenges, and how we can help. This helps us understand your needs and provide you with a customized proposal.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We typically work with a 50% upfront payment and 50% upon project completion for one-time projects. For ongoing services, we offer monthly billing. We accept various payment methods and can discuss flexible payment plans for larger projects.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Here are some of the most common questions we receive.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="tel:+919315426370">Call +919315426370</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://wa.link/6xlsy9" target="_blank">
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
