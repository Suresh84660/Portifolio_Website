import React from 'react'
import { Award } from 'lucide-react'

export default function Skills({ skills, certifications }) {
  return (
    <section id="skills" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Skill Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden border border-purple-500/30">
                    <div className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 shadow-lg shadow-purple-500/50" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-pink-400">Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                <p className="font-semibold text-cyan-400 mb-2">Backend</p>
                <p className="text-sm text-gray-300">Java, Spring Boot, Node.js, REST APIs</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                <p className="font-semibold text-purple-400 mb-2">Frontend</p>
                <p className="text-sm text-gray-300">React.js, Tailwind CSS, JavaScript</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                <p className="font-semibold text-green-400 mb-2">Data & ML</p>
                <p className="text-sm text-gray-300">Python, TensorFlow, Pandas, NumPy</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30">
                <p className="font-semibold text-orange-400 mb-2">DevOps</p>
                <p className="text-sm text-gray-300">Docker, Kubernetes, Git, CI/CD</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-pink-500/30 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30">
                <p className="font-semibold text-pink-400 mb-2">Databases</p>
                <p className="text-sm text-gray-300">MySQL, MongoDB, Oracle</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                <p className="font-semibold text-blue-400 mb-2">Tools</p>
                <p className="text-sm text-gray-300">VS Code, Jupyter, Git, Maven</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/30 text-center hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                <Award className="mx-auto mb-3 text-cyan-400" size={32} />
                <h4 className="font-bold mb-1">{cert.name}</h4>
                <p className="text-sm text-gray-400">{cert.org}</p>
                <p className="text-xs text-gray-500 mt-2">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
