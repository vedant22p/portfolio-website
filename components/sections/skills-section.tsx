"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Database, Braces, Brain, Server, Languages } from "lucide-react"

export default function SkillsSection() {
  const { ref, controls } = useScrollAnimation({ once: false, amount: 0.1 })

  const skillCategories = [
    {
      title: "Languages",
      icon: <Languages className="h-6 w-6" />,
      skills: ["Python", "C++", "SQL", "MySQL", "HTML", "CSS", "TypeScript"],
      iconColor: "text-emerald-500",
      gradient: "from-emerald-500/10 to-emerald-600/10",
      titleColor: "group-hover:text-emerald-400",
    },
    {
      title: "Frameworks and Libraries",
      icon: <Braces className="h-6 w-6" />,
      skills: [
        "TensorFlow",
        "Scikit-Learn",
        "Keras",
        "OpenCV",
        "HuggingFace",
        "FastAPI",
        "Streamlit",
        "Pandas",
        "React",
        "Tailwind CSS",
      ],
      iconColor: "text-sky-500",
      gradient: "from-sky-500/10 to-sky-600/10",
      titleColor: "group-hover:text-sky-400",
    },
    {
      title: "Technologies and Tools",
      icon: <Server className="h-6 w-6" />,
      skills: ["AWS", "GitHub", "PowerBI", "MLflow", "Seaborn"],
      iconColor: "text-violet-500",
      gradient: "from-violet-500/10 to-violet-600/10",
      titleColor: "group-hover:text-violet-400",
    },
    {
      title: "Data Science",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Data Analysis", "Data Visualization", "Machine Learning", "Deep Learning", "NLP", "MLOps"],
      iconColor: "text-rose-500",
      gradient: "from-rose-500/10 to-rose-600/10",
      titleColor: "group-hover:text-rose-400",
    },
    {
      title: "Core CSE",
      icon: <Database className="h-6 w-6" />,
      skills: ["Data Structures", "Algorithms", "OOPs", "Operating System", "DBMS"],
      iconColor: "text-amber-500",
      gradient: "from-amber-500/10 to-amber-600/10",
      titleColor: "group-hover:text-amber-400",
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
        <Brain className="mr-3 text-amber-500" />
        <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">
          Technical Skills
        </span>
        <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mt-3 ml-auto"></div>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} custom={index} variants={itemVariants} className="group relative">
            <div
              className={`relative bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700/80 transition-all duration-300 shadow-lg hover:shadow-amber-500/10 hover:scale-[1.01] h-full overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10">
                <h3
                  className={`text-xl font-bold text-white mb-4 transition-colors flex items-center ${category.titleColor}`}
                >
                  <div className={`mr-3 ${category.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    {category.icon}
                  </div>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
