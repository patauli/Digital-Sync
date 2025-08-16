"use client"

import * as React from "react"
import { Bot, X, Send, Phone, Mail, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
}

interface UserInfo {
  name: string
  email: string
  phone?: string
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMinimized, setIsMinimized] = React.useState(false)
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null)
  const [messages, setMessages] = React.useState<Message[]>([])
  const [currentMessage, setCurrentMessage] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const [showUserForm, setShowUserForm] = React.useState(true)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  })

  const scrollAreaRef = React.useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  // Initialize chatbot with welcome message
  React.useEffect(() => {
    if (userInfo && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        type: "bot",
        content: `Hi ${userInfo.name}! 👋 I'm BicriBot, your AI assistant from BicriSales. I'm here to help you with information about our digital marketing services, pricing, and how we can grow your business. What would you like to know?`,
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, [userInfo, messages.length])

  // Handle user info submission
  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setUserInfo({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      })
      setShowUserForm(false)
    }
  }

  // Generate AI response based on user message
  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()

    // Service-related responses
    if (message.includes("service") || message.includes("what do you do")) {
      return "BicriSales offers comprehensive digital marketing services including:\n\n🌐 Web Design & Development\n🔍 SEO Services\n📱 Social Media Marketing\n💰 PPC Advertising\n🤖 AI Marketing Solutions\n📧 Email Marketing\n⚙️ CRM Implementation\n\nWhich service interests you most? I can provide detailed information and pricing!"
    }

    if (message.includes("price") || message.includes("cost") || message.includes("pricing")) {
      return "Our pricing is designed to fit businesses of all sizes:\n\n💼 Starter Package: $180/month\n🚀 Growth Package: $420/month\n🏆 Enterprise Package: $900/month\n\nWe also offer custom solutions. Would you like me to connect you with our team for a personalized quote? You can call +919315426370 or I can arrange a callback!"
    }

    if (message.includes("seo")) {
      return "Our SEO services help you rank higher on Google and drive organic traffic:\n\n✅ Keyword Research & Strategy\n✅ On-Page Optimization\n✅ Technical SEO Audits\n✅ Link Building\n✅ Local SEO\n✅ Monthly Reporting\n\nSEO typically shows results in 3-6 months. Would you like to know more about our SEO packages or get a free SEO audit?"
    }

    if (message.includes("web") || message.includes("website")) {
      return "We create stunning, high-converting websites that grow your business:\n\n🎨 Custom Design\n📱 Mobile-First Responsive\n⚡ Fast Loading (under 3 seconds)\n🔍 SEO Optimized\n🛡️ Secure & Reliable\n📊 Analytics Integration\n\nOur websites typically take 2-4 weeks to complete. Would you like to see our portfolio or discuss your website needs?"
    }

    if (message.includes("social media")) {
      return "Our social media marketing drives engagement and grows your brand:\n\n📈 Strategy Development\n📝 Content Creation\n📊 Community Management\n💰 Paid Social Advertising\n📱 Platform Optimization\n📈 Performance Analytics\n\nWe manage Facebook, Instagram, LinkedIn, Twitter, and TikTok. Which platforms are you most interested in?"
    }

    if (message.includes("ppc") || message.includes("ads") || message.includes("google ads")) {
      return "Our PPC advertising delivers immediate results and high ROI:\n\n🎯 Google Ads Management\n📱 Facebook & Instagram Ads\n🔍 Keyword Research\n📊 Landing Page Optimization\n📈 Conversion Tracking\n💰 Budget Optimization\n\nWe typically see 3-5x ROI on ad spend. What's your monthly advertising budget?"
    }

    if (message.includes("ai") || message.includes("artificial intelligence")) {
      return "BicriSales leverages AI to supercharge your marketing:\n\n🤖 AI-Powered Chatbots\n📊 Predictive Analytics\n🎯 Personalized Marketing\n📝 AI Content Creation\n🔍 Smart SEO Optimization\n📧 Automated Email Campaigns\n\nAI can increase your marketing efficiency by 40-60%. Would you like to learn about specific AI solutions for your business?"
    }

    if (message.includes("contact") || message.includes("call") || message.includes("phone")) {
      return `You can reach BicriSales directly:\n\n📞 Phone: +919315426370\n📧 Email: info@bicrisales.com\n💬 WhatsApp: https://wa.link/6xlsy9\n\nOur team is available Monday-Friday, 9 AM - 6 PM IST. Would you like me to arrange a callback or connect you with our WhatsApp support?`
    }

    if (message.includes("team") || message.includes("about")) {
      return "BicriSales is led by experienced digital marketing professionals:\n\n👨‍💼 Vishwajeet - Founder & CEO\n🔍 Vipin Yadav - Head of SEO\n💼 Robert Brown - Business Development Manager\n\nOur team has helped 100+ businesses grow their digital presence. We're passionate about delivering results that matter to your bottom line!"
    }

    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return `Hello ${userInfo?.name}! Great to chat with you. I'm here to help you learn about BicriSales' digital marketing services. What specific area would you like to explore?\n\n• Web Design & Development\n• SEO Services\n• Social Media Marketing\n• PPC Advertising\n• AI Solutions\n• Pricing Information`
    }

    if (message.includes("thank") || message.includes("thanks")) {
      return "You're very welcome! I'm always here to help. If you have any other questions about BicriSales services or need to speak with our team, just let me know. We're committed to helping your business grow! 🚀"
    }

    // Default response
    return `I'd be happy to help you with that! BicriSales specializes in digital marketing solutions that drive real results. \n\nI can provide information about:\n• Our services and pricing\n• How we can help your specific business\n• Case studies and success stories\n• Getting started with a free consultation\n\nWhat would you like to know more about? Or would you prefer to speak directly with our team at +919315426370?`
  }

  // Handle sending message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentMessage.trim() || !userInfo) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: currentMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setCurrentMessage("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: generateAIResponse(currentMessage),
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 2000,
    )
  }

  // Handle quick actions
  const handleQuickAction = (action: string) => {
    setCurrentMessage(action)
    handleSendMessage({ preventDefault: () => {} } as React.FormEvent)
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-20 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full h-14 w-14 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse"
          >
            <Bot className="h-6 w-6" />
          </Button>
          {/* Tooltip */}
          <div className="absolute bottom-16 right-0 bg-background border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap animate-bounce">
            <div className="text-sm font-medium">Hi! Need help with digital marketing?</div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
          </div>
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-6 right-6 z-50 bg-background border rounded-2xl shadow-2xl transition-all duration-300",
            isMinimized ? "w-80 h-16" : "w-96 h-[600px]",
            "max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]",
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blob-ikDPyPwuZcqfPOLvrxvnUrKuvCAhgs.png" />
                <AvatarFallback>
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-sm">BicriBot</div>
                <div className="text-xs opacity-90">AI Assistant • Online</div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* User Info Collection Form */}
              {showUserForm && (
                <div className="p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <Bot className="h-12 w-12 mx-auto text-primary" />
                    <h3 className="font-semibold">Welcome to BicriSales!</h3>
                    <p className="text-sm text-muted-foreground">
                      I'm your AI assistant. Let me know your details so I can provide personalized help.
                    </p>
                  </div>

                  <form onSubmit={handleUserInfoSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="chat-name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="chat-name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="chat-email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="chat-email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="chat-phone">Phone (Optional)</Label>
                      <Input
                        id="chat-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Start Chatting
                    </Button>
                  </form>

                  <div className="text-center space-y-2 pt-4 border-t">
                    <p className="text-xs text-muted-foreground">Need immediate assistance?</p>
                    <div className="flex justify-center space-x-4 text-xs">
                      <a href="tel:+919315426370" className="flex items-center space-x-1 text-primary hover:underline">
                        <Phone className="h-3 w-3" />
                        <span>Call Now</span>
                      </a>
                      <a
                        href="mailto:info@bicrisales.com"
                        className="flex items-center space-x-1 text-primary hover:underline"
                      >
                        <Mail className="h-3 w-3" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Chat Interface */}
              {!showUserForm && userInfo && (
                <>
                  {/* Messages */}
                  <ScrollArea className="flex-1 p-4 h-[400px]" ref={scrollAreaRef}>
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={cn("flex", message.type === "user" ? "justify-end" : "justify-start")}
                        >
                          <div
                            className={cn(
                              "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                              message.type === "user"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground",
                            )}
                          >
                            <div className="whitespace-pre-wrap">{message.content}</div>
                            <div
                              className={cn(
                                "text-xs mt-1 opacity-70",
                                message.type === "user" ? "text-right" : "text-left",
                              )}
                            >
                              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </div>
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-muted rounded-2xl px-4 py-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>

                  {/* Quick Actions */}
                  {messages.length <= 1 && (
                    <div className="px-4 pb-2">
                      <div className="text-xs text-muted-foreground mb-2">Quick questions:</div>
                      <div className="flex flex-wrap gap-2">
                        {["What services do you offer?", "Pricing information", "SEO services", "Contact details"].map(
                          (action) => (
                            <Button
                              key={action}
                              variant="outline"
                              size="sm"
                              className="text-xs h-7 bg-transparent"
                              onClick={() => handleQuickAction(action)}
                            >
                              {action}
                            </Button>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {/* Message Input */}
                  <div className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="flex space-x-2">
                      <Input
                        type="text"
                        placeholder="Type your message..."
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        className="flex-1"
                        disabled={isTyping}
                      />
                      <Button type="submit" size="icon" disabled={!currentMessage.trim() || isTyping}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  )
}
