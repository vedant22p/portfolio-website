"use client"

import { useEffect, useRef } from "react"
import { useInView, useAnimation } from "framer-motion"

export function useScrollAnimation(options = { once: true, margin: "-100px", amount: 0.2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: options.once,
    margin: options.margin,
    amount: options.amount,
  })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return { ref, controls, isInView }
}
