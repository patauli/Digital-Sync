"use client"

import * as React from "react"
import { InquiryPopup } from "@/components/inquiry-popup"

interface PopupTriggerProps {
  children?: React.ReactNode
  trigger?: "manual" | "time" | "scroll" | "exit"
  delay?: number
  scrollPercentage?: number
}

export function PopupTrigger({
  children,
  trigger = "time",
  delay = 30000, // 30 seconds
  scrollPercentage = 50,
}: PopupTriggerProps) {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false)
  const [hasTriggered, setHasTriggered] = React.useState(false)

  // Time-based trigger
  React.useEffect(() => {
    if (trigger === "time" && !hasTriggered) {
      const timer = setTimeout(() => {
        setIsPopupOpen(true)
        setHasTriggered(true)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [trigger, delay, hasTriggered])

  // Scroll-based trigger
  React.useEffect(() => {
    if (trigger === "scroll" && !hasTriggered) {
      const handleScroll = () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

        if (scrolled >= scrollPercentage) {
          setIsPopupOpen(true)
          setHasTriggered(true)
          window.removeEventListener("scroll", handleScroll)
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [trigger, scrollPercentage, hasTriggered])

  // Exit intent trigger
  React.useEffect(() => {
    if (trigger === "exit" && !hasTriggered) {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          setIsPopupOpen(true)
          setHasTriggered(true)
          document.removeEventListener("mouseleave", handleMouseLeave)
        }
      }

      document.addEventListener("mouseleave", handleMouseLeave)
      return () => document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [trigger, hasTriggered])

  const handleManualTrigger = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }

  return (
    <>
      {children && trigger === "manual" && (
        <div onClick={handleManualTrigger} className="cursor-pointer">
          {children}
        </div>
      )}

      <InquiryPopup isOpen={isPopupOpen} onClose={handleClosePopup} trigger={trigger} />
    </>
  )
}
