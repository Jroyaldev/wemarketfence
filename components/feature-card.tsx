"use client"

import React from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  index?: number
}

export function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 rounded-lg transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -5 }}
    >
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-md bg-zinc-700/50">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </motion.div>
  )
}
