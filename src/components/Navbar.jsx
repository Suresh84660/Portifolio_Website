import React from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar({ isMenuOpen, setIsMenuOpen, isScrolled, activeSection, onNavigate }) {
  const items = ['home', 'about', 'projects', 'skills', 'experience', 'contact']

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-2xl shadow-purple-500/20 border-b border-purple-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Suresh Nakkina
          </div>

          <div className="hidden md:flex space-x-8">
            {items.map(item => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`capitalize transition-all duration-300 ${activeSection === item ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-purple-400'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map(item => (
              <button key={item} onClick={() => onNavigate(item)} className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-500/20 rounded transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
