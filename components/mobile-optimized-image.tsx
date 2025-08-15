"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface MobileOptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
}

export function MobileOptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
}: MobileOptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Image failed to load</span>
        </div>
      ) : (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={quality}
          sizes={sizes}
          className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100")}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "auto",
          }}
        />
      )}
    </div>
  )
}
