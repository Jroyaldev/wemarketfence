import React from "react"

interface FenceIconProps {
  className?: string
}

export function FenceIcon({ className }: FenceIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 12v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8" />
      <path d="M4 4v8" />
      <path d="M10 4v8" />
      <path d="M14 12v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8" />
      <path d="M14 4v8" />
      <path d="M20 4v8" />
      <path d="M3 4h18" />
      <path d="M3 12h18" />
    </svg>
  )
}
