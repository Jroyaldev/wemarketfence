"use client"

import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"

interface MarqueeScrollProps {
  items: string[]
}

export function MarqueeScroll({ items }: MarqueeScrollProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const duplicatedItems = [...items, ...items]

  return (
    <div className="overflow-hidden whitespace-nowrap flex items-center">
      <motion.div
        className="flex"
        animate={{ x: "-50%" }}
        transition={{
          duration: isMobile ? 15 : 20,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-4 md:mx-8">
            <span className="text-base md:text-xl font-medium text-zinc-300">{item}</span>
            {index < duplicatedItems.length - 1 && (
              <span className="mx-4 md:mx-8 h-1.5 md:h-2 w-1.5 md:w-2 rounded-full bg-zinc-700"></span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
