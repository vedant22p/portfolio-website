"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code, ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const { ref, controls } = useScrollAnimation({ once: false, amount: 0.1 })

  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "Vedant Pandey's Personal Portfolio is a modern, responsive web application designed to showcase his skills, projects, and professional journey. Built using React, Tailwind CSS, and TypeScript, the portfolio emphasizes clean design and efficient performance.",
      technologies: ["TypeScript", "JavaScript", "HTML", "React", "Tailwind CSS", "Vite", "PostCSS"],
      links: {
        code: "https://github.com/vedant22p/portfolio-website",
        demo: "https://vedant2002.vercel.app/",
      },
      gradient: "from-emerald-500/10 to-emerald-600/10",
      titleColor: "group-hover:text-emerald-400",
    },
    {
      title: "WhatsApp Chat Analyzer",
      description:
        "Achieved 25% increase in user engagement by developing a Python-based web application for personalized WhatsApp chat analysis. Enhanced communication by introducing Group and Personal Chat Analysis, monitoring 100+ activities and 10,000 messages.",
      technologies: ["Python", "NLP", "Matplotlib", "Seaborn", "Hugging Face"],
      links: {
        code: "https://github.com/vedant22p/Whatsapp-Chat-Analyzer-WebApp-",
        demo: "https://huggingface.co/spaces/vedant22p/whatsapp-chat-analyzer",
      },
      gradient: "from-sky-500/10 to-sky-600/10",
      titleColor: "group-hover:text-sky-400",
    },
    {
      title: "AutoTabML",
      description:
        "Automated ML code generation for tabular data, reducing manual coding by 95%. Developed specialized agents for ML pipeline stages, improving development speed by 75%. Enhanced user productivity by 50% through integrated code execution and debugging capabilities.",
      technologies: ["Llamba-70B", "Machine Learning", "LLM", "Hugging Face", "Streamlit", "NLP", "Deep Learning"],
      links: {
        code: "https://github.com/vedant22p/AutoTabML",
        demo: "https://huggingface.co/spaces/singhtech/AutoTabML",
      },
      gradient: "from-violet-500/10 to-violet-600/10",
      titleColor: "group-hover:text-violet-400",
    },
    {
      title: "Elite CPU Scheduler",
      description:
        "Developed a C++ program implementing seven CPU scheduling algorithms: FCFS, RR, SPN, SRT, HRRN, Feedback, and Aging. Engineered an integrated system to compare waiting times, optimizing scheduling performance and demonstrating proficiency in advanced algorithmic concepts.",
      technologies: ["C++", "OOP", "Operating Systems", "Algorithms"],
      links: {
        code: "https://github.com/vedant22p/CPU-Scheduling-Algorithms",
        demo: null,
      },
      gradient: "from-rose-500/10 to-rose-600/10",
      titleColor: "group-hover:text-rose-400",
    },
    {
      title: "Chest Cancer Classification",
      description:
        "Developed an end-to-end deep learning pipeline for chest cancer classification using medical imaging. Implemented CNN with transfer learning, achieving high accuracy through comprehensive data preprocessing, augmentation, and model evaluation using metrics like ROC-AUC.",
      technologies: ["Python", "TensorFlow", "CNN", "OpenCV", "Deep Learning", "Medical Imaging"],
      links: {
        code: "https://github.com/vedant22p/End-to-End-Chest-Cancer-Classification",
        demo: null,
      },
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
        <Code className="mr-3 text-amber-500" />
        <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">
          Featured Projects
        </span>
        <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mt-3 ml-auto"></div>
      </motion.h2>

      <motion.div variants={containerVariants} initial="hidden" animate={controls} className="space-y-6">
        {projects.map((project, index) => (
          <motion.div key={index} custom={index} variants={itemVariants} className="group relative">
            <div
              className={`relative bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700/80 transition-all duration-300 shadow-lg hover:shadow-amber-500/10 hover:scale-[1.01] overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-white mb-3 transition-colors ${project.titleColor}`}>
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-amber-500 hover:text-amber-400 transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-amber-500 hover:text-amber-400 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
