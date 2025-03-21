import type { SVGProps } from "react"

interface GlideXpressLogoProps extends SVGProps<SVGSVGElement> {
  className?: string
}

export default function GlideXpressLogo({ className, ...props }: GlideXpressLogoProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className={className} fill="none" {...props}>
      <circle cx="32" cy="32" r="30" fill="#2563EB" />
      <circle cx="32" cy="32" r="24" fill="#1E40AF" />
      <path
        d="M18 32C18 24.268 24.268 18 32 18C39.732 18 46 24.268 46 32C46 39.732 39.732 46 32 46C24.268 46 18 39.732 18 32Z"
        fill="#1E3A8A"
      />
      <path d="M32 14L36 22H28L32 14Z" fill="#F97316" />
      <path d="M32 50L28 42H36L32 50Z" fill="#F97316" />
      <path d="M14 32L22 28V36L14 32Z" fill="#F97316" />
      <path d="M50 32L42 36V28L50 32Z" fill="#F97316" />
      <path d="M20 20L28 24L24 28L20 20Z" fill="#F97316" />
      <path d="M44 44L36 40L40 36L44 44Z" fill="#F97316" />
      <path d="M44 20L40 28L36 24L44 20Z" fill="#F97316" />
      <path d="M20 44L24 36L28 40L20 44Z" fill="#F97316" />
      <path d="M32 26L38 32L32 38L26 32L32 26Z" fill="#F97316" />
    </svg>
  )
}

