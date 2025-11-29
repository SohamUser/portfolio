"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, Github, Linkedin, MessageCircle } from "lucide-react"

export default function Contact() {
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
    <section ref={ref} id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className={`mb-12 ${isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-400">
            Let's Build Something Impactful
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to collaborate on innovative projects that make a real difference
          </p>
        </div>

        {/* Contact methods */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          {/* Email */}
          <a
            href="mailto:sohamkulakrni@gmail.com"
            className="group p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 bg-gray-900/50 backdrop-blur-sm"
          >
            <div className="p-3 rounded-lg bg-linear-to-br from-green-400 to-cyan-400 w-fit mx-auto mb-4">
              <Mail className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">Email</h3>
            <p className="text-gray-400 text-sm">sohamkulakrni@gmail.com</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+918805405618"
            className="group p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 bg-gray-900/50 backdrop-blur-sm"
          >
            <div className="p-3 rounded-lg bg-linear-to-br from-cyan-400 to-blue-500 w-fit mx-auto mb-4">
              <Phone className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">Phone</h3>
            <p className="text-gray-400 text-sm">+91 88054 05618</p>
          </a>

          {/* Message */}
          <a
            href="https://www.linkedin.com/in/soham-kulkarni-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 bg-gray-900/50 backdrop-blur-sm"
          >
            <div className="p-3 rounded-lg bg-linear-to-br from-purple-400 to-pink-400 w-fit mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-black" />
            </div>
            <h3 className="font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">Connect</h3>
            <p className="text-gray-400 text-sm">LinkedIn</p>
          </a>
        </div>

        {/* CTA Button */}
        <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <a
            href="mailto:sohamkulakrni@gmail.com"
            className="inline-block px-8 py-4 rounded-lg bg-linear-to-r from-green-400 to-cyan-400 text-black font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 text-lg glow-neon-green"
          >
            Start a Conversation
          </a>
        </div>

        {/* Social Links */}
        <div
          className={`flex gap-6 justify-center mt-12 pt-12 border-t border-gray-700/30 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
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
        </div>

        {/* Footer text */}
        <p className="mt-12 text-gray-500 text-sm">
          © 2025 Soham Kulkarni
        </p>
      </div>
    </section>
  )
}
