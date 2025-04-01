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
  // Base styles for all buttons
  const baseStyle = "border-4 border-neutral-dark font-bold tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";
  
  // Variant specific styles with more refined hover states
  const variantClasses = {
    primary: "bg-accent-red text-neutral-dark hover:bg-accent-red/90 active:shadow-none active:translate-y-1 active:translate-x-1",
    secondary: "bg-neutral-dark text-neutral-light hover:bg-neutral-dark/90 active:shadow-none active:translate-y-1 active:translate-x-1",
    accent: "bg-[#58CCDC] text-neutral-dark hover:bg-[#58CCDC]/90 active:shadow-none active:translate-y-1 active:translate-x-1",
  }

  // Refined size classes for better consistency
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        baseStyle,
        variantClasses[variant],
        sizeClasses[size],
        "min-h-[44px]",
        "transition-all duration-150 ease-in-out transform",
        className,
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  )
}
