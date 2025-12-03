import React from 'react'
import { Code, Award, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              I'm a Full Stack Developer and AI/ML enthusiast currently pursuing BTech in Computer Science
              Engineering (AI & ML) at SIRCRREDDY College of Engineering, Eluru with a CGPA of 7.83.
            </p>
            <p className="text-lg">
              I specialize in building scalable applications using Java Spring Boot, React.js, and Python. My experience
              spans from developing deep learning models with TensorFlow to creating sophisticated trading indicators
              and full-stack booking systems.
            </p>
            <p className="text-lg">
              As a self-directed investor with 2 years of active engagement in equity and derivatives markets, I bring a
              unique perspective on data-driven financial analysis and quantitative decision-making.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Code className="text-blue-400" size={20} />
                <span>Full Stack Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-purple-400" size={20} />
                <span>AI/ML Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-green-400" size={20} />
                <span>Trading Systems</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-lg p-6 backdrop-blur-sm border border-purple-500/30 shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Education</h3>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">BTech in CSE (AI & ML)</p>
                <p className="text-gray-400">SIRCRREDDY College of Engineering</p>
                <p className="text-gray-400">CGPA: 7.83 | 2025-Present</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-lg p-6 backdrop-blur-sm border border-pink-500/30 shadow-xl hover:shadow-pink-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-pink-400">Leadership</h3>
              <p className="text-sm text-gray-300">
                <span className="font-semibold">External Secretary</span> - CRRCOE Reddy Chapter
              </p>
              <p className="text-sm text-gray-400 mt-2">Organized hackathon with 200+ participants, managed 100+ students, secured 5+ sponsorships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
