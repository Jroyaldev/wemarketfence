"use client"

import React, { forwardRef, ComponentPropsWithoutRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"
import { motion } from "framer-motion"

// Modernized section variants with cleaner styling options
const sectionVariants = cva("relative w-full overflow-hidden", {
  variants: {
    background: {
      default: "bg-white",
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
      light: "bg-neutral-light",
      dark: "bg-neutral-dark text-white",
      white: "bg-white",
      rays: "bg-rays",
      sky: "bg-sky",
      grass: "bg-grass",
    },
    spacing: {
      default: "py-16 sm:py-20 md:py-24",
      compact: "py-10 sm:py-12 md:py-16",
      large: "py-20 sm:py-24 md:py-32",
    },
    border: {
      none: "",
      top: "border-t border-neutral-200",
      bottom: "border-b border-neutral-200",
      both: "border-y border-neutral-200",
      full: "border border-neutral-200 rounded-lg",
    }
  },
  defaultVariants: {
    background: "default",
    spacing: "default",
    border: "none",
  },
})

export interface RetroSectionProps
  extends ComponentPropsWithoutRef<"section">,
    VariantProps<typeof sectionVariants> {
    withContainer?: boolean;
    withClouds?: boolean;
}

const RetroSection = forwardRef<HTMLElement, RetroSectionProps>(
  ({ 
    className, 
    background, 
    spacing,
    border,
    withContainer = true,
    withClouds = false,
    children, 
    ...props 
  }, ref) => {
    return (
      <section
        className={cn(sectionVariants({ background, spacing, border, className }))}
        ref={ref}
        {...props}
      >
        {background === "rays" && (
          <div className="absolute inset-0 bg-rays opacity-40 z-0"></div>
        )}

        {withClouds && (
          <>
            <motion.div
              className="absolute top-10 left-[10%] w-48 h-20 bg-white rounded-full opacity-50"
              animate={{
                x: [0, 10, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute top-20 right-[20%] w-32 h-16 bg-white rounded-full opacity-50"
              animate={{
                x: [0, -15, 0],
                y: [0, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </>
        )}

        {withContainer ? (
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    )
  }
)
RetroSection.displayName = "RetroSection"

export { RetroSection, sectionVariants }
