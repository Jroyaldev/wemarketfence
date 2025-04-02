"use client"

import React from "react"
import { ScrollProgress } from "./scroll-progress"
// import { FloatingCTA } from "./floating-cta"

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
      {/* <FloatingCTA /> */}
    </>
  )
}
