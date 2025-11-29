"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    projectsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main headline */}
        <div
          className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}
          style={{ animationDelay: "0s" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-green-400 to-cyan-400">
              Hello I'm Soham Kulkarni
            </span>
          </h1>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-balance">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-green-400 to-cyan-400">
              Professionalism in turning ideas to solution through Software Developemnt!
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 text-balance max-w-2xl mx-auto leading-relaxed">
             Turning complex problems into elegant solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mt-12 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <button
            onClick={scrollToProjects}
            className="group px-8 py-3 rounded-lg bg-linear-to-r from-green-400 to-cyan-400 text-black font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2 glow-neon-green"
          >
            View My Work
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg border-2 border-gray-500 text-white hover:border-cyan-400 hover:text-cyan-400 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Links */}
        <div
          className={`flex gap-6 justify-center mt-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="https://github.com/SohamUser"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-gray-600 hover:border-green-400 hover:text-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="https://www.linkedin.com/in/soham-kulkarni-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="mailto:sohamkulakrni@gmail.com"
            className="p-3 rounded-lg border border-gray-600 hover:border-green-400 hover:text-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Scroll indicator */}
      </div>
    </section>
  )
}
