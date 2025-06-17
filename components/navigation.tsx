"use client"

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
    { id: "achievements", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "skills", label: "Skills" },
  ]

  return (
    <nav className="bg-zinc-800/50 p-2 flex justify-center overflow-x-auto">
      <ul className="flex space-x-1 min-w-max">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 text-xs font-medium transition-all duration-200 whitespace-nowrap rounded-md ${
                activeTab === tab.id
                  ? "text-zinc-900 bg-amber-500 shadow-sm"
                  : "text-zinc-300 hover:text-amber-500 hover:bg-zinc-700/50"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
