"use client"

import { useEffect, useRef, useState } from "react"
import { BookOpen, GraduationCap } from "lucide-react"

const education = [
  {
    degree: "BE Computer Engineering",
    school: "PES Modern College of Engineering",
    location: "Pune, India",
    cgpa: "8.48",
    icon: GraduationCap,
  },
  {
    degree: "Bifocal Computer Science",
    school: "BRG College",
    location: "Pune, India",
    cgpa: "Distinction",
    icon: BookOpen,
  },
]

export default function Education() {
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
            Education
          </h2>
          <p className="text-gray-400 text-lg">Foundations in computer science & engineering</p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <div
                key={index}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease-out ${index * 150}ms`,
                }}
                className="group"
              >
                <div className="p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 bg-gray-900/50 backdrop-blur-sm h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-400 text-sm">{edu.school}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">{edu.location}</p>

                  <div className="inline-block px-4 py-2 rounded-lg bg-green-400/10 border border-green-400/30">
                    <p className="text-sm font-semibold text-green-400">CGPA: {edu.cgpa}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>
    </section>
  )
}
