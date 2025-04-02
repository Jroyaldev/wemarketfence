import { cva, type VariantProps } from "class-variance-authority"
import React, { forwardRef, ComponentPropsWithoutRef } from "react"
import { cn } from "../lib/utils"

const cardVariants = cva(
  "p-5 sm:p-6 bg-white rounded-lg shadow-sm transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
        primary: "bg-primary text-black",
        secondary: "bg-secondary text-black",
        accent: "bg-accent text-black",
        sky: "bg-sky text-black",
        grass: "bg-grass text-black",
        white: "bg-white text-black",
      },
      hover: {
        true: "hover:-translate-y-1 hover:shadow-md",
        false: "",
      },
      rotate: {
        "-5": "transform -rotate-5",
        "-4": "transform -rotate-4",
        "-3": "transform -rotate-3",
        "-2": "transform -rotate-2",
        "-1": "transform -rotate-1",
        "0": "transform rotate-0",
        "1": "transform rotate-1",
        "2": "transform rotate-2",
        "3": "transform rotate-3",
        "4": "transform rotate-4",
        "5": "transform rotate-5",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: false,
      rotate: "0",
    },
  }
)

export interface RetroCardProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof cardVariants> {}

const RetroCard = forwardRef<HTMLDivElement, RetroCardProps>(
  ({ className, variant, hover, rotate, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, hover, rotate, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
RetroCard.displayName = "RetroCard"

export { RetroCard, cardVariants }
