import type { Metadata } from "next"
import Portfolio from "@/components/portfolio"

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Modern personal portfolio website with a vertical sidebar",
}

export default function Home() {
  return <Portfolio />
}
