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
  const baseStyle = "bg-neutral-dark text-neutral-light border-2 border-neutral-dark uppercase font-bold tracking-wide";
  const hoverStyle = "hover:bg-neutral-light hover:text-neutral-dark";
  const variantClasses = {
    primary: "bg-accent-red text-neutral-dark hover:bg-neutral-dark hover:text-accent-red",
    secondary: "bg-neutral-dark text-neutral-light hover:bg-neutral-light hover:text-neutral-dark",
    accent: "bg-accent-green text-neutral-dark hover:bg-neutral-dark hover:text-accent-green",
  }

  const sizeClasses = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        baseStyle,
        hoverStyle,
        variantClasses[variant],
        sizeClasses[size],
        "min-h-[44px]",
        "transition-colors duration-150 ease-in-out",
        className,
      )}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  )
}
