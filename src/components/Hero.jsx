import React from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Hero({ onContact }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fadeIn">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center text-5xl font-bold shadow-2xl shadow-purple-500/50 animate-pulse">
            SN
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
          Suresh Nakkina
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">Full Stack Developer | AI/ML Engineer | Quantitative Analyst & Trader</p>
        <p className="text-lg text-gray-400 mb-8">BTech in CSE (AI & ML) | Java Spring Boot | Python | React.js</p>

        <div className="flex justify-center gap-4 mb-8">
          <a href="https://github.com/Suresh84660" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/suresh-nakkina-3b80bb347" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50">
            <Linkedin size={24} />
          </a>
          <a href="mailto:sureshnakkinans@gmail.com" className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50">
            <Mail size={24} />
          </a>
          <a href="tel:+918466046771" className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50">
            <Phone size={24} />
          </a>
        </div>

        <button onClick={() => onContact?.()} className="px-8 py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
          Get In Touch
        </button>
      </div>
    </section>
  )
}
