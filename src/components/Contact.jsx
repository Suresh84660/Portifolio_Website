import React from 'react'
import { Mail, Phone, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-4 py-20">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <a href="mailto:sureshnakkinans@gmail.com" className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 flex items-center gap-4 hover:shadow-lg hover:shadow-cyan-500/30">
            <Mail className="text-cyan-400" size={32} />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-gray-400">sureshnakkinans@gmail.com</p>
            </div>
          </a>
          <a href="tel:+918466046771" className="bg-slate-800/50 rounded-lg p-6 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 flex items-center gap-4 hover:shadow-lg hover:shadow-purple-500/30">
            <Phone className="text-purple-400" size={32} />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-sm text-gray-400">+91 8466046771</p>
            </div>
          </a>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 shadow-xl">
          <div className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-cyan-400">Name</label>
              <input type="text" className="w-full px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-cyan-400">Email</label>
              <input type="email" className="w-full px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors" placeholder="your.email@example.com" />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-cyan-400">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your message..." />
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <MessageSquare size={20} />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
