"use client"

import React, { forwardRef, ComponentPropsWithoutRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const sectionVariants = cva("relative w-full overflow-hidden", {
  variants: {
    background: {
      default: "bg-white",
      primary: "bg-primary",
      secondary: "bg-secondary",
      accent: "bg-accent",
      sky: "bg-sky",
      grass: "bg-grass",
      white: "bg-white",
      rays: "bg-rays",
    },
    withClouds: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    background: "default",
    withClouds: false,
  },
})

export interface RetroSectionProps
  extends ComponentPropsWithoutRef<"section">,
    VariantProps<typeof sectionVariants> {}

const RetroSection = forwardRef<HTMLElement, RetroSectionProps>(
  ({ className, background, withClouds, children, ...props }, ref) => {
    return (
      <section
        className={cn(sectionVariants({ background, withClouds, className }))}
        ref={ref}
        {...props}
      >
        {background === "rays" && (
          <div className="absolute inset-0 bg-rays opacity-70 z-0"></div>
        )}

        {withClouds && (
          <>
            <motion.div
              className="absolute top-10 left-[10%] w-48 h-20 bg-white rounded-full opacity-70"
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
              className="absolute top-20 right-[20%] w-32 h-16 bg-white rounded-full opacity-70"
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

        <div className="container mx-auto px-4 relative z-10">{children}</div>
      </section>
    )
  }
)
RetroSection.displayName = "RetroSection"

export { RetroSection, sectionVariants }
