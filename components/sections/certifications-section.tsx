"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Award, ExternalLink, Calendar } from "lucide-react"

export default function CertificationsSection() {
  const { ref, controls } = useScrollAnimation({ once: false, amount: 0.1 })

  const certifications = [
    {
      id: 1,
      title: "Applied Machine Learning in Python",
      issuer: "University of Michigan",
      date: "2024",
      credentialID: "5eb1270999d5f9ccaa6ae839cdbd372a",
      description:
        "Comprehensive course covering machine learning concepts and practical implementation in Python with hands-on projects.",
      link: "https://coursera.org/share/5eb1270999d5f9ccaa6ae839cdbd372a",
      skills: ["Machine Learning", "Python", "Scikit-Learn", "Data Science"],
    },
    {
      id: 2,
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialID: "LKJGBNFJSSLM",
      description:
        "Fundamental course covering AWS cloud services and technical implementation with practical cloud computing experience.",
      link: "https://www.coursera.org/account/accomplishments/verify/LKJGBNFJSSLM",
      skills: ["AWS", "Cloud Computing", "DevOps", "Infrastructure"],
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
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
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
        <Award className="mr-3 text-amber-500" />
        Certifications
        <div className="w-12 h-1 bg-amber-500 mt-3 ml-auto"></div>
      </motion.h2>

      <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-6">
        {certifications.map((cert, index) => (
          <motion.div key={cert.id} custom={index} variants={itemVariants} className="group relative">
            <div className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700/80 transition-all duration-300 shadow-lg hover:shadow-amber-500/10 hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium">
                      {cert.issuer}
                    </span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full font-medium">
                      Certificate
                    </span>
                    <div className="flex items-center text-zinc-400 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-amber-500 hover:text-amber-400 transition-colors mt-3 md:mt-0"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">View Certificate</span>
                </a>
              </div>
              <p className="text-zinc-300 mb-4 text-sm leading-relaxed">{cert.description}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
