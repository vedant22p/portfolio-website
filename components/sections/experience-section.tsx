"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Briefcase, MapPin } from "lucide-react"

export default function ExperienceSection() {
  const { ref, controls } = useScrollAnimation({ once: false, amount: 0.1 })

  const experience = [
    {
      position: "Data Science Intern",
      company: "ThinkSage",
      period: "January 2024 - March 2024",
      location: "Remote",
      description:
        "Worked as a Data Science Intern, focusing on implementing machine learning solutions and data analysis for business intelligence applications.",
      status: "Completed",
      dotColor: "bg-emerald-500",
      companyColor: "text-emerald-500",
    },
    {
      position: "SDE Intern",
      company: "ITJOBSXS",
      period: "October 2023 - April 2024",
      location: "Remote",
      description:
        "Worked as a Software Development Engineer Intern, developing and maintaining web applications using modern frameworks.",
      status: "Completed",
      dotColor: "bg-sky-500",
      companyColor: "text-sky-500",
    },
    {
      position: "Text Content Creator",
      company: "PhysicsWallah",
      period: "May 2022 - November 2022",
      location: "Remote",
      description:
        "Created and curated educational content for physics courses, ensuring high-quality learning materials for students.",
      status: "Completed",
      dotColor: "bg-violet-500",
      companyColor: "text-violet-500",
    },
    {
      position: "Machine Learning Intern",
      company: "Eduversity",
      period: "June 2022 - September 2022",
      location: "Remote",
      description:
        "Worked on implementing machine learning algorithms and developing AI solutions for educational platforms and student analytics.",
      status: "Completed",
      dotColor: "bg-rose-500",
      companyColor: "text-rose-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="text-3xl font-bold mb-8 flex items-center"
      >
        <Briefcase className="mr-3 text-amber-500" />
        <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">Experience</span>
        <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mt-3 ml-auto"></div>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative pl-8 border-l-2 border-amber-500/30 ml-6 space-y-8"
      >
        {experience.map((item, index) => (
          <motion.div key={index} custom={index} variants={itemVariants} className="relative">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={controls}
              variants={{
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { delay: index * 0.1 + 0.2, duration: 0.5, type: "spring" },
                },
              }}
              className={`absolute -left-[41px] top-6 w-6 h-6 rounded-full ${item.dotColor} border-4 border-zinc-900 z-10`}
            />

            <div className="absolute -left-8 top-8 w-6 h-0.5 bg-amber-500/50" />

            <div className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700/80 transition-all duration-300 shadow-lg hover:shadow-amber-500/10 hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.position}</h3>
                  <h4 className={`text-lg mb-3 ${item.companyColor}`}>{item.company}</h4>
                </div>
                <div className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-xs font-medium">
                  {item.period}
                </div>
              </div>

              <p className="text-zinc-300 mb-4 text-sm leading-relaxed">{item.description}</p>

              <div className="flex items-center text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{item.location}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
