"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { PopupTrigger } from "@/components/popup-trigger"
import { MessageSquare } from "lucide-react"

interface PopupCTAButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
  children?: React.ReactNode
}

export function PopupCTAButton({
  variant = "default",
  size = "default",
  className,
  children = "Get Free Quote",
}: PopupCTAButtonProps) {
  return (
    <PopupTrigger trigger="manual">
      <Button variant={variant} size={size} className={className}>
        <MessageSquare className="mr-2 h-4 w-4" />
        {children}
      </Button>
    </PopupTrigger>
  )
}
