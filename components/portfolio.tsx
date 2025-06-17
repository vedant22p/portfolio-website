"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Sidebar from "@/components/sidebar"
import AboutSection from "@/components/sections/about-section"
import EducationSection from "@/components/sections/education-section"
import ExperienceSection from "@/components/sections/experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import PublicationsSection from "@/components/sections/publications-section"
import AchievementsSection from "@/components/sections/achievements-section"
import CertificationsSection from "@/components/sections/certifications-section"
import SkillsSection from "@/components/sections/skills-section"
import Navigation from "@/components/navigation"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")

  const renderSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />
      case "education":
        return <EducationSection />
      case "experience":
        return <ExperienceSection />
      case "projects":
        return <ProjectsSection />
      case "publications":
        return <PublicationsSection />
      case "achievements":
        return <AchievementsSection />
      case "certifications":
        return <CertificationsSection />
      case "skills":
        return <SkillsSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-4 md:gap-6">
        {/* Sidebar Card */}
        <div className="w-full md:w-[320px] bg-zinc-900 rounded-3xl overflow-hidden">
          <Sidebar />
        </div>

        {/* Main Content Card */}
        <div className="flex-1 bg-zinc-900 rounded-3xl overflow-hidden">
          <div className="h-full flex flex-col">
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderSection()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
