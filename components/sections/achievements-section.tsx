"use client"

import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Trophy, Award, Star, Crown, Medal, ExternalLink, Calendar } from "lucide-react"

export default function AchievementsSection() {
  const { ref, controls } = useScrollAnimation({ once: false, amount: 0.1 })

  const achievements = [
    {
      id: 1,
      title: "Google CodeJam Global Rank 972",
      organization: "Google",
      year: "March 2022",
      description: "Participated in Google's individual competition Google KickStart and achieved global rank of 972.",
      icon: <Trophy className="h-6 w-6" />,
      category: "Competition",
    },
    {
      id: 2,
      title: "Google KickStart Global Rank 1472",
      organization: "Google",
      year: "November 2022",
      description:
        "Participated in Google's individual competition Google KickStart and achieved global rank of 1472 in Round H.",
      icon: <Crown className="h-6 w-6" />,
      category: "Competition",
    },
    {
      id: 3,
      title: "Flipkart Grid 5.0 Round 1 Qualifier",
      organization: "Flipkart",
      year: "July 2023",
      description:
        "Qualified the first part of round 1 quiz in the Software Development Track. Among the top 0.04% qualifying for next round.",
      icon: <Star className="h-6 w-6" />,
      category: "Competition",
    },
    {
      id: 4,
      title: "Leetcode 5-Star Rating",
      organization: "Leetcode",
      year: "2025",
      description: "Demonstrated expertise by solving 1400+ DSA problems, securing a 5-star rating.",
      profileLink: "https://leetcode.com/u/user0352V/",
      icon: <Star className="h-6 w-6" />,
      category: "Coding",
    },
    {
      id: 5,
      title: "Best Paper Award - AICVMD 2025",
      organization: "AICVMD Conference",
      year: "2025",
      description: "Received Best Paper Award for research contribution in AI and Computer Vision.",
      certificateLink: "https://drive.google.com/file/d/1d4VowNhPsUGXAhPec68zjrDzI8YfJEKl/view?usp=drive_link",
      icon: <Award className="h-6 w-6" />,
      category: "Research",
    },
    {
      id: 6,
      title: "Top Student Recognition",
      organization: "VIT Bhopal University",
      year: "2025",
      description: "Ranked in top 2% of university batch with outstanding academic performance.",
      icon: <Medal className="h-6 w-6" />,
      category: "Academic",
    },
    {
      id: 7,
      title: "EF SET English Certificate",
      organization: "EF Standard English Test",
      year: "2021",
      description: "Achieved C2 Proficient level with score 73/100 demonstrating advanced English proficiency.",
      icon: <Award className="h-6 w-6" />,
      category: "Certification",
    },
  ]

  const getColorByCategory = (category: string) => {
    switch (category) {
      case "Competition":
        return "from-amber-500/20 to-amber-700/20"
      case "Coding":
        return "from-violet-500/20 to-violet-700/20"
      case "Research":
        return "from-sky-500/20 to-sky-700/20"
      case "Academic":
        return "from-emerald-500/20 to-emerald-700/20"
      case "Certification":
        return "from-indigo-500/20 to-indigo-700/20"
      default:
        return "from-zinc-500/20 to-zinc-700/20"
    }
  }

  const getBadgeColorByCategory = (category: string) => {
    switch (category) {
      case "Competition":
        return "bg-amber-500/20 text-amber-400"
      case "Coding":
        return "bg-violet-500/20 text-violet-400"
      case "Research":
        return "bg-sky-500/20 text-sky-400"
      case "Academic":
        return "bg-emerald-500/20 text-emerald-400"
      case "Certification":
        return "bg-indigo-500/20 text-indigo-400"
      default:
        return "bg-zinc-500/20 text-zinc-400"
    }
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
        <Trophy className="mr-3 text-amber-500" />
        Achievements
        <div className="w-12 h-1 bg-amber-500 mt-3 ml-auto"></div>
      </motion.h2>

      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate={controls}
        className="space-y-6"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            custom={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", damping: 12, stiffness: 100, delay: index * 0.05 },
              },
            }}
            className="group relative"
          >
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${getColorByCategory(achievement.category)} rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm`}
            ></div>

            <div className="relative bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700/80 transition-all duration-300 shadow-lg hover:shadow-amber-500/10 hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${getBadgeColorByCategory(achievement.category)}`}
                    >
                      {achievement.organization}
                    </span>
                    <span className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full font-medium">
                      {achievement.category}
                    </span>
                    <div className="flex items-center text-zinc-400 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {achievement.year}
                    </div>
                  </div>
                </div>
                {(achievement.profileLink || achievement.certificateLink) && (
                  <a
                    href={achievement.profileLink || achievement.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-amber-500 hover:text-amber-400 transition-colors group/link mt-3 md:mt-0"
                  >
                    <ExternalLink className="h-4 w-4 mr-1 group-hover/link:scale-110 transition-transform" />
                    <span className="text-sm font-medium">
                      {achievement.profileLink ? "View Profile" : "View Certificate"}
                    </span>
                  </a>
                )}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
