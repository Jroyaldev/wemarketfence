"use client"

import React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "../lib/utils"

interface RetroButtonProps extends Omit<HTMLMotionProps<"button">, "children" | "className"> {
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
  const variantClasses = {
    primary: "bg-yellow-500 text-black hover:bg-yellow-400",
    secondary: "bg-secondary text-black hover:bg-secondary/90",
    accent: "bg-accent text-black hover:bg-accent/90",
  }

  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  }

  return (
    <motion.button
      className={cn(
        "font-bold rounded-none border-4 border-black retro-button relative",
        variantClasses[variant],
        sizeClasses[size],
        "min-h-[44px]",
        className,
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {icon && <span>{icon}</span>}
        {children}
      </div>
    </motion.button>
  )
}
