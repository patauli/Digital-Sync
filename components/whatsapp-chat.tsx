"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppChat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg whatsapp-float bg-green-500 hover:bg-green-600 text-white"
      >
        <a href="https://wa.link/6xlsy9" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  )
}
