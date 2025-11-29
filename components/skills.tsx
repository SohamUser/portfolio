"use client"

import { useState, useEffect, useRef } from "react"
import { Code2, Cpu, Database, Wrench, Smartphone, BookOpen } from "lucide-react"

const skillCategories = [
  {
    id: "fullstack",
    title: "Full Stack",
    icon: Code2,
    color: "from-green-400 to-cyan-400",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "tRPC", "WebRTC", "WebSockets", "REST APIs"],
  },
  {
    id: "ai",
    title: "AI & Agents",
    icon: Cpu,
    color: "from-cyan-400 to-blue-500",
    skills: ["LangChain", "LangGraph", "Python AI", "Custom Agents"],
  },
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    color: "from-green-400 to-emerald-400",
    skills: ["Java", "Python", "Go", "C++", "JavaScript", "TypeScript"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    color: "from-purple-400 to-pink-400",
    skills: ["MongoDB", "MySQL", "Prisma ORM"],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: Wrench,
    color: "from-orange-400 to-red-500",
    skills: ["Git", "GitHub", "Docker"],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: Smartphone,
    color: "from-blue-400 to-indigo-500",
    skills: ["React Native", "Appwrite", "Clerk"],
  },
  {
    id: "cs",
    title: "CS Concepts",
    icon: BookOpen,
    color: "from-pink-400 to-rose-400",
    skills: ["OOP", "DBMS", "Algorithms", "Data Structures"],
  },
]

function SkillCategory({ category, index, isVisible }: any) {
  const Icon = category.icon

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.5s ease-out ${index * 50}ms`,
      }}
      className="group"
    >
      <div className="p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition-all duration-300 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-900/50 hover:shadow-lg hover:shadow-green-500/10 h-full">
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`p-3 rounded-lg bg-gradient-to-br ${category.color} transition-transform duration-300 group-hover:scale-110`}
          >
            <Icon className="w-6 h-6 text-black" />
          </div>
          <h3 className="font-semibold text-lg text-white group-hover:text-green-400 transition-colors">
            {category.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill: string, skillIndex: number) => (
            <div
              key={skill}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.8)",
                transition: `all 0.4s ease-out ${index * 50 + skillIndex * 30}ms`,
              }}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-green-400/50 text-xs font-medium text-gray-300 hover:text-green-400 transition-all duration-200 hover:shadow-md hover:shadow-green-500/20 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 text-center ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, intelligent systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.id} category={category} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </div>
    </section>
  )
}
