import React from 'react'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 mb-8 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                <p className="text-lg text-gray-300">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-400 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">{exp.period}</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
