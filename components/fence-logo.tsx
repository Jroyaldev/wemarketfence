"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface FenceLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  animated?: boolean
  withCircle?: boolean
}

export function FenceLogo({ className = "", size = "md", animated = false, withCircle = false }: FenceLogoProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  }

  const logoVariants = {
    animate: {
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
      },
    },
    static: {
      rotate: 0,
    },
  }

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      variants={logoVariants}
      animate={animated ? "animate" : "static"}
    >
      {withCircle && <div className="absolute inset-0 bg-sky rounded-full border-2 border-black -z-10"></div>}
      <div className="w-full h-full relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%282%29-vU12IAN9S8r7hak7DTvSfeGhRz3UBR.png"
          alt="We Market Fence Logo"
          fill
          className="object-contain"
        />
      </div>
    </motion.div>
  )
}
