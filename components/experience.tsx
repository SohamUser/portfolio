"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Winner",
    event: "Geek Vishwa Hackathon",
    organization: "GeeksforGeeks & VIT",
    description: "Built multiple full-stack applications in competitive 24-hour hackathon environment.",
    highlights: ["Full-Stack Development", "Real-time Collaboration", "Rapid Prototyping"],
    year: "2024",
  },
  {
    title: "Hackathon Participant",
    event: "Multiple Hackathon Victories",
    organization: "Various Platforms",
    description:
      "Developed innovative solutions and won recognition for technical excellence and creative problem-solving.",
    highlights: ["System Design", "Team Leadership", "Innovation"],
    year: "2023-2024",
  },
  {
    title: "Web Developer",
    event: "ACM College Fest Website",
    organization: "ACM Chapter - PES Modern",
    description: "Architected and built the official college event website under tight deadlines.",
    highlights: ["Event Management", "Responsive Design", "Performance"],
    year: "2024",
  },
]

export default function Experience() {
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
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
            Achievements & Experience
          </h2>
          <p className="text-gray-400 text-lg">Recognition for excellence and innovation</p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease-out ${index * 150}ms`,
              }}
              className="group"
            >
              <div className="relative p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 bg-gray-900/50 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-400 to-cyan-400">
                    <Trophy className="w-6 h-6 text-black" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-green-400 font-semibold">{exp.event}</p>
                      </div>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.year}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-3 text-sm">{exp.organization}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full text-xs bg-cyan-400/10 border border-cyan-400/30 text-cyan-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
      </div>
    </section>
  )
}
