"use client"

import { Button } from "@/components/ui/button"

interface PayPalButtonProps {
  title?: string
  description?: string
  className?: string
}

export function PayPalButton({ title = "Pay with PayPal", description, className = "" }: PayPalButtonProps) {
  const paypalCheckoutUrl = "https://www.paypal.com/ncp/payment/NKH852N4Q67RC"

  const handlePayPalCheckout = () => {
    window.open(paypalCheckoutUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className={`paypal-button-wrapper ${className}`}>
      {title && (
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          {description && <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>}
        </div>
      )}

      <Button
        onClick={handlePayPalCheckout}
        className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.03-.026.06-.04.09-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81.515.588.848 1.26.974 2.107z" />
        </svg>
        <span>Pay with PayPal</span>
      </Button>
    </div>
  )
}
