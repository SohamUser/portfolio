"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, Code2, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "MediFlow",
    description: "Full-stack healthcare platform solving clinic queue delays",
    problem: "Clinics face inefficient appointment management and patient frustration due to long wait times.",
    tags: ["Full Stack", "Real-time", "Healthcare"],
    techs: ["Node.js", "Express", "React.js", "React Native", "MongoDB", "WebSockets", "WebRTC"],
    features: [
      "Secure authentication + role-based access",
      "Real-time appointment booking with live queues via WebSockets",
      "Patient history & prescriptions management",
      "Nearby medical store detection",
      "WebRTC video consultations",
    ],
    image: "/healthcare-clinic-dashboard.jpg",
  },
  {
    id: 2,
    title: "Price Tracker",
    description: "Platform to track prices of online games",
    problem: "Gamers need a centralized way to monitor game prices across multiple platforms.",
    tags: ["AI", "Data Processing", "Backend"],
    techs: ["FastAPI", "Python", "SQL", "Next.js", "Web Scraping"],
    features: [
      "FastAPI backend for scraping & data extraction",
      "SQL database storing comprehensive price history",
      "Next.js frontend for intuitive user dashboard",
      "Price trend analysis and notifications",
      "Multi-platform price comparison",
    ],
    image: "/price-tracking-dashboard.jpg",
  },
  {
    id: 3,
    title: "ACM Fest Website",
    description: "Official college event website built under time constraints",
    problem: "Create a professional event website showcasing college activities in a limited timeframe.",
    tags: ["Full Stack", "Events", "Web"],
    techs: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Responsive event showcase",
      "Real-time event registration",
      "Dynamic event scheduling",
      "Image gallery & media integration",
      "Mobile-optimized design",
    ],
    image: "/event-website-professional.png",
  },
]

function ProjectModal({ project, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900/95 rounded-xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="p-6 md:p-8 space-y-6">
          {/* Header with close button */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>

          {/* Problem statement */}
          <div>
            <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wide mb-2">Problem Statement</h4>
            <p className="text-gray-300">{project.problem}</p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">Key Features</h4>
            <ul className="space-y-2">
              {project.features.map((feature: string, i: number) => (
                <li key={i} className="flex gap-2 text-gray-300">
                  <span className="text-green-400 font-bold">→</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm text-gray-300 hover:border-green-400 hover:text-green-400 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action button */}
          <button className="w-full py-3 rounded-lg bg-linear-to-r from-green-400 to-cyan-400 text-black font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center justify-center gap-2">
            <Code2 className="w-5 h-5" />
            View on GitHub
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
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
    <section ref={ref} id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Showcasing real-world systems built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease-out ${index * 150}ms`,
              }}
            >
              <div
                onClick={() => setSelectedProject(project.id)}
                className="group cursor-pointer rounded-xl overflow-hidden border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 bg-gray-900/50 backdrop-blur-sm"
              >
                <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                  {/* Image */}
                  <div className="relative h-96 md:h-80 rounded-lg overflow-hidden bg-gray-800/50 border border-gray-700">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-sm text-gray-200">Click to see details</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-lg">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-linear-to-r from-green-400/20 to-cyan-400/20 border border-green-400/30 text-green-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Quick tech preview */}
                      <div className="flex flex-wrap gap-2">
                        {project.techs.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-xs text-gray-500">
                            {tech}
                            {project.techs.indexOf(tech) < project.techs.length - 1 ? "," : ""}
                          </span>
                        ))}
                        {project.techs.length > 4 && (
                          <span className="text-xs text-gray-500">+{project.techs.length - 4} more</span>
                        )}
                      </div>
                    </div>

                    <button className="mt-6 px-6 py-3 rounded-lg bg-linear-to-r from-green-400 to-cyan-400 text-black font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center gap-2 w-fit group/btn">
                      View Details
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={projects.find((p) => p.id === selectedProject)}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
