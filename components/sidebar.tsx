import { Mail, MapPin, Linkedin, Github, Code, Instagram, BookOpen } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="bg-zinc-900 text-white w-full h-full flex flex-col justify-between border-r border-zinc-800">
      <div className="py-6 px-4 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full mb-4 border-4 border-amber-500 overflow-hidden shadow-lg shadow-amber-500/20 flex items-center justify-center bg-zinc-800">
          <img
            src="/images/new-profile-photo.png"
            alt="Vedant Pandey"
            className="w-full h-full object-cover object-center"
            style={{ objectPosition: "center top" }}
          />
        </div>
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text">
          Vedant Pandey
        </h1>
        <p className="text-sm text-center mt-1">
          <span className="text-emerald-400">AI Developer</span> <span className="text-sky-400"></span>
        </p>
      </div>

      <div className="py-6 px-4 flex-1 overflow-y-auto">
        <div className="space-y-4">
          {/* Email */}
          <ContactItem
            icon={<Mail className="h-4 w-4 text-amber-500" />}
            label="EMAIL"
            content="vedant.pandey2202@gmail.com"
            link="mailto:vedant.pandey2202@gmail.com"
          />

          {/* Birthday */}
          <ContactItem
            icon={<span className="text-amber-500 text-lg">🎂</span>}
            label="BIRTHDAY"
            content="February 22, 2002"
          />

          {/* Location */}
          <ContactItem
            icon={<MapPin className="h-4 w-4 text-amber-500" />}
            label="LOCATION"
            content="New Delhi, Delhi, India"
          />

          {/* LinkedIn */}
          <ContactItem
            icon={<Linkedin className="h-4 w-4 text-amber-500" />}
            label="LINKEDIN"
            content="linkedin.com/in/vedant22"
            link="https://www.linkedin.com/in/vedant22"
          />

          {/* GitHub */}
          <ContactItem
            icon={<Github className="h-4 w-4 text-amber-500" />}
            label="GITHUB"
            content="github.com/vedant22p"
            link="https://www.github.com/vedant22p"
          />

          {/* LeetCode */}
          <ContactItem
            icon={<Code className="h-4 w-4 text-amber-500" />}
            label="LEETCODE"
            content="leetcode.com/u/user0352V"
            link="https://leetcode.com/u/user0352V/"
          />

          {/* Google Scholar */}
          <ContactItem
            icon={<BookOpen className="h-4 w-4 text-amber-500" />}
            label="GOOGLE SCHOLAR"
            content="scholar.google.com/citations"
            link="https://scholar.google.com/citations?user=J4afVVUAAAAJ&hl=en"
          />

          {/* Instagram */}
          <ContactItem
            icon={<Instagram className="h-4 w-4 text-amber-500" />}
            label="INSTAGRAM"
            content="instagram.com/vedant22.p"
            link="https://www.instagram.com/vedant22.p"
          />
        </div>
      </div>
    </aside>
  )
}

// Reusable Contact Item component
function ContactItem({ icon, label, content, link }) {
  return (
    <div className="flex items-center text-sm group">
      <div className="w-8 h-8 flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div>
        <div className="text-xs text-zinc-500 uppercase">{label}</div>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-amber-500 transition-colors"
          >
            {content}
          </a>
        ) : (
          <div className="text-zinc-400">{content}</div>
        )}
      </div>
    </div>
  )
}
