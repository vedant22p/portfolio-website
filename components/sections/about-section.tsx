"use client"

import { Code, BookOpen, Brain, Dumbbell, Github, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
  const hobbies = [
    {
      icon: <Code className="h-6 w-6 text-emerald-500" />,
      title: "Competitive Programming",
      description:
        "Solving algorithmic challenges and participating in coding competitions to sharpen problem-solving skills.",
      gradient: "from-emerald-500/10 to-emerald-600/10",
      titleColor: "group-hover:text-emerald-400",
    },
    {
      icon: <Github className="h-6 w-6 text-sky-500" />,
      title: "Open-Source Contributions",
      description:
        "Contributing to open-source projects and collaborating with developers worldwide to build better software.",
      gradient: "from-sky-500/10 to-sky-600/10",
      titleColor: "group-hover:text-sky-400",
    },
    {
      icon: <Brain className="h-6 w-6 text-violet-500" />,
      title: "AI Research Publications",
      description:
        "Researching and publishing papers on artificial intelligence, machine learning, and deep learning applications.",
      gradient: "from-violet-500/10 to-violet-600/10",
      titleColor: "group-hover:text-violet-400",
    },
    {
      icon: <Dumbbell className="h-6 w-6 text-rose-500" />,
      title: "Physical Fitness",
      description:
        "Maintaining a balanced lifestyle through regular exercise, strength training, and outdoor activities.",
      gradient: "from-rose-500/10 to-rose-600/10",
      titleColor: "group-hover:text-rose-400",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-amber-500" />,
      title: "Reading",
      description:
        "Exploring technical books, research papers, and literature to continuously expand knowledge and perspectives.",
      gradient: "from-amber-500/10 to-amber-600/10",
      titleColor: "group-hover:text-amber-400",
    },
    {
      icon: <FileText className="h-6 w-6 text-indigo-500" />,
      title: "Technical Writing",
      description:
        "Creating articles, tutorials, and documentation to share knowledge and insights with the tech community.",
      gradient: "from-indigo-500/10 to-indigo-600/10",
      titleColor: "group-hover:text-indigo-400",
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
    <div>
      <h2 className="text-3xl font-bold mb-8">
        <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">About Me</span>
        <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mt-3"></div>
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-white mb-8 text-sm leading-relaxed text-justify"
      >
        I'm a AI Developer from New Delhi, India, passionate about leveraging data to build intelligent systems that
        solve real-world problems. With hands-on experience in Machine Learning, Deep Learning, and Generative AI, I've built and
        deployed scalable AI applications and published impactful research in reputed Scopus-indexed conferences and
        journals.
        <br />
        <br />
        My work blends statistical rigor with modern tools like FastAPI, Power BI, TensorFlow, and Streamlit to craft
        data-driven solutions from NLP-powered chatbots to behavior analytics tools. Whether it's reducing query latency
        with LLMs or visualizing complex datasets interactively, I focus on making technology useful, efficient, and
        meaningful. With over 1400+ solved DSA problems, 10+ research papers, and top global rankings in competitions
        like Google Code Jam and Kickstart, I aim to bridge the gap between academic research and real-world AI
        innovation.
      </motion.p>

      <motion.a
        href="https://drive.google.com/file/d/1QeneI2-Jraf2HGGcQXMdeFTvCvpJHz1C/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="inline-block mb-12 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold hover:from-amber-600 hover:to-amber-700 transition duration-300 shadow-lg text-sm"
      >
        Resume
      </motion.a>

      <h3 className="text-2xl font-bold mb-6">
        <span className="text-zinc-200">My</span> <span className="text-amber-400">Hobbies</span>
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {hobbies.map((hobby, index) => (
          <motion.div key={index} custom={index} variants={itemVariants}>
            <div
              className={`relative bg-zinc-800 rounded-xl p-6 group hover:bg-zinc-700/80 transition-all duration-300 shadow-lg hover:shadow-lg hover:scale-[1.01] overflow-hidden`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
              <div className="relative z-10 flex items-start">
                <div className="mr-4 mt-1 transition-transform duration-300 group-hover:scale-110">{hobby.icon}</div>
                <div>
                  <h4
                    className={`text-xl font-semibold mb-3 text-white transition-colors duration-300 ${hobby.titleColor}`}
                  >
                    {hobby.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{hobby.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
