"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { BookOpen, ExternalLink, Calendar } from "lucide-react"

export default function PublicationsSection() {
  const { ref, controls } = useScrollAnimation({ once: false, amount: 0.1 })

  const publications = [
    {
      id: 1,
      title: "Spatially Attentive Scale Invariant Feature Modelling for Alzheimer's Disease Detection",
      journal: "IEEE Xplore",
      date: "2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10543826",
      type: "Conference Paper",
    },
    {
      id: 2,
      title: "Scale Invariant Feature Modelling with Integrated Transfer Learning for Parkinson's Disease Diagnosis",
      journal: "IEEE Xplore",
      date: "2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10723906",
      type: "Conference Paper",
    },
    {
      id: 3,
      title: "Vision Transformer Based Approach for Parkinson's Disease Diagnosis",
      journal: "IEEE Xplore",
      date: "2024",
      link: "https://ieeexplore.ieee.org/document/10752200",
      type: "Conference Paper",
    },
    {
      id: 4,
      title: "A Comparative Study of Different Feature Extractors for Parkinson's Disease Detection",
      journal: "IEEE Xplore",
      date: "2024",
      link: "https://ieeexplore.ieee.org/document/10752301",
      type: "Conference Paper",
    },
    {
      id: 5,
      title: "A Comparative study and analysis of Transfer Learning Models for Parkinson's Disease Diagnosis",
      journal: "Springer LAIS",
      date: "2024",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-65392-6_21",
      type: "Book Chapter",
    },
    {
      id: 6,
      title: "A Fine-Tuned Transfer Learning Approach for Parkinson's Disease Detection on New Hand PD Dataset",
      journal: "Springer CCIS",
      date: "2024",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-58953-9_7",
      type: "Book Chapter",
    },
    {
      id: 7,
      title: "A Comparative study and analysis of Transfer Learning Models for Early Detection of Parkinson's Disease",
      journal: "Springer CCIS",
      date: "2024",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-71484-9_9",
      type: "Book Chapter",
    },
    {
      id: 8,
      title: "Early Diagnosis of Parkinson's Disease using Optimized Hybrid Transfer Learning Model",
      journal: "Springer CCIS",
      date: "2024",
      link: "https://link.springer.com/chapter/10.1007/978-981-97-8865-1_34",
      type: "Book Chapter",
    },
    {
      id: 9,
      title: "Leveraging Invariant and MultiScale Features for Parkinson's Disease Detection",
      journal: "IEEE Xplore",
      date: "2024",
      link: "https://ieeexplore.ieee.org/document/10990993",
      type: "Conference Paper",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  }

  const getJournalColor = (journal: string) => {
    if (journal.includes("IEEE")) return "from-blue-500/20 to-cyan-500/20"
    if (journal.includes("Springer")) return "from-green-500/20 to-emerald-500/20"
    return "from-purple-500/20 to-pink-500/20"
  }

  const getJournalBadgeColor = (journal: string) => {
    if (journal.includes("IEEE")) return "bg-blue-500/20 text-blue-400"
    if (journal.includes("Springer")) return "bg-green-500/20 text-green-400"
    return "bg-purple-500/20 text-purple-400"
  }

  return (
    <div ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        className="text-3xl font-bold mb-8 flex items-center"
      >
        <BookOpen className="mr-3 text-amber-500" />
        Publications
        <div className="w-12 h-1 bg-amber-500 mt-3 ml-auto"></div>
      </motion.h2>

      <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-6">
        {publications.map((publication, index) => (
          <motion.div key={publication.id} custom={index} variants={itemVariants} className="group relative">
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${getJournalColor(publication.journal)} rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm`}
            ></div>

            <div className="relative bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700/80 transition-all duration-300 shadow-lg hover:shadow-amber-500/10 hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {publication.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${getJournalBadgeColor(publication.journal)}`}
                    >
                      {publication.journal}
                    </span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full font-medium">
                      {publication.type}
                    </span>
                    <div className="flex items-center text-zinc-400 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {publication.date}
                    </div>
                  </div>
                </div>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-amber-500 hover:text-amber-400 transition-colors group/link mt-3 md:mt-0"
                >
                  <ExternalLink className="h-4 w-4 mr-1 group-hover/link:scale-110 transition-transform" />
                  <span className="text-sm font-medium">View Publication</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
