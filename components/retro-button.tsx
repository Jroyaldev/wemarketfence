"use client"

import React from "react"
import { cn } from "../lib/utils"

interface RetroButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> {
  variant?: "primary" | "secondary" | "accent"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

export function RetroButton({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  ...props
}: RetroButtonProps) {
  // Base styles for all buttons - modernized with lighter borders & shadows
  const baseStyle = "rounded-md font-medium shadow-sm";
  
  // Variant specific styles with softer transitions
  const variantClasses = {
    primary: "bg-accent-red text-white hover:bg-accent-red/90 active:translate-y-0.5",
    secondary: "bg-neutral-dark text-neutral-light hover:bg-neutral-dark/90 active:translate-y-0.5",
    accent: "bg-[#58CCDC] text-neutral-dark hover:bg-[#58CCDC]/90 active:translate-y-0.5",
  }

  // Refined size classes for better consistency
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-6 py-3",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        baseStyle,
        variantClasses[variant],
        sizeClasses[size],
        "min-h-[44px]",
        "transition-all duration-200 ease-in-out transform",
        className,
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  )
}
