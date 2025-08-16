"use client"

import * as React from "react"
import { X, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

interface InquiryPopupProps {
  isOpen: boolean
  onClose: () => void
  trigger?: "manual" | "time" | "scroll" | "exit"
}

export function InquiryPopup({ isOpen, onClose, trigger = "manual" }: InquiryPopupProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  })

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Auto close after success
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        newsletter: false,
      })
    }, 3000)
  }

  // Handle input changes
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Prevent body scroll when popup is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in-0" onClick={onClose} />

      {/* Popup Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-background rounded-2xl shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-primary-foreground hover:bg-white/20 touch-target"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blob-ikDPyPwuZcqfPOLvrxvnUrKuvCAhgs.png"
                alt="BicriSales Logo"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Get Your Free Quote</h2>
              <p className="text-primary-foreground/90">Let's discuss how BicriSales can grow your digital presence</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {isSubmitted ? (
            // Success State
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Your inquiry has been received. Our team at BicriSales will contact you within 24 hours to discuss your
                digital marketing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button asChild>
                  <a href="tel:+919315426370">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now: +919315426370
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://wa.link/6xlsy9" target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Chat
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            // Form State
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="popup-name">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="popup-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="touch-target"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="popup-email">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="popup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="touch-target"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="popup-phone">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="popup-phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="touch-target"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="popup-company">Company Name</Label>
                    <Input
                      id="popup-company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="touch-target"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Project Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="popup-service">Service Interested In</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="touch-target">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-design">Web Design & Development</SelectItem>
                        <SelectItem value="seo">SEO Services</SelectItem>
                        <SelectItem value="ppc">PPC Advertising</SelectItem>
                        <SelectItem value="social-media">Social Media Marketing</SelectItem>
                        <SelectItem value="content-marketing">Content Marketing</SelectItem>
                        <SelectItem value="email-marketing">Email Marketing</SelectItem>
                        <SelectItem value="ai-solutions">AI Marketing Solutions</SelectItem>
                        <SelectItem value="crm">CRM Implementation</SelectItem>
                        <SelectItem value="complete-package">Complete Digital Marketing</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="popup-budget">Project Budget (USD)</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="touch-target">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-500">Under $500</SelectItem>
                        <SelectItem value="500-1500">$500 - $1,500</SelectItem>
                        <SelectItem value="1500-3000">$1,500 - $3,000</SelectItem>
                        <SelectItem value="3000-6000">$3,000 - $6,000</SelectItem>
                        <SelectItem value="6000-12000">$6,000 - $12,000</SelectItem>
                        <SelectItem value="above-12000">Above $12,000</SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="popup-message">Project Details</Label>
                  <Textarea
                    id="popup-message"
                    placeholder="Tell us about your project, goals, and how BicriSales can help you grow your digital presence..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="resize-none touch-target"
                  />
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="popup-newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                />
                <Label htmlFor="popup-newsletter" className="text-sm">
                  Subscribe to BicriSales newsletter for digital marketing tips and updates
                </Label>
              </div>

              {/* Contact Information */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <h4 className="font-medium">Need immediate assistance?</h4>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <a href="tel:+919315426370" className="flex items-center gap-2 text-primary hover:underline">
                    <Phone className="h-4 w-4" />
                    +919315426370
                  </a>
                  <a
                    href="mailto:vishwa@bicrisales.com"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    vishwa@bicrisales.com
                  </a>
                  <a
                    href="https://wa.link/6xlsy9"
                    target="_blank"
                    className="flex items-center gap-2 text-primary hover:underline"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button type="submit" disabled={isSubmitting} className="flex-1 touch-target">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    "Get Free Quote"
                  )}
                </Button>
                <Button type="button" variant="outline" onClick={onClose} className="touch-target bg-transparent">
                  Maybe Later
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted by BicriSales regarding your inquiry. We respect your
                privacy and will never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
