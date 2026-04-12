'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/#contact', label: 'Contact' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gradient-text cursor-pointer"
        >
          NK
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ color: '#06d6ff' }}
              className="text-gray-400 hover:text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* CTA Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-white/5 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 hover:border-primary transition-all text-sm"
          >
            Services
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-background rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all text-sm"
          >
            Get In Touch
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-background/80 border-t border-white/10"
      >
        <div className="px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block text-gray-400 hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-4">
            <motion.a
              href="/services"
              onClick={handleLinkClick}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-white/5 border border-primary/50 text-primary rounded-lg font-semibold text-center hover:bg-primary/10 transition-all text-sm"
            >
              Services
            </motion.a>
            <motion.a
              href="#contact"
              onClick={handleLinkClick}
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-accent text-background rounded-lg font-semibold text-center"
            >
              Get In Touch
            </motion.a>
          </div>
        </div>
      </motion.nav>
    </motion.header>
  )
}
