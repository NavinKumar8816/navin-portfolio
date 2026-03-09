'use client'

import { useToast } from '@/hooks/use-toast'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Github, Linkedin, Mail, X } from 'lucide-react'
import { useState } from 'react'
import { CVDownload } from './cv-download'
import { SchedulingBooking } from './scheduling-booking'
import { Spinner } from './ui/spinner'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectIdea: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate before submitting
    if (!validateForm()) {
      toast({
        description: '❌ Please fix the errors in the form',
        variant: 'destructive',
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectIdea: formData.projectIdea,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        toast({
          description: '✅ Message sent successfully! I will get back to you soon.',
        })
        setFormData({ name: '', email: '', message: '', projectIdea: '' })
        setErrors({})
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      } else {
        toast({
          description: `❌ ${data.error}`,
          variant: 'destructive',
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      toast({
        description: '❌ Failed to send message. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Navinkumar.dev01@gmail.com',
      href: 'mailto:Navinkumar.dev01@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/navin',
      href: 'https://www.linkedin.com/in/navin-kumar123/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/navin',
      href: 'https://github.com/NavinKumar8816',
    },
  ]

  return (
    <section id="contact" className="relative py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Let's discuss your project or exciting ideas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-300">Name</label>
                  {errors.name && (
                    <span className="text-xs text-red-400 flex items-center gap-1">
                      <X className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:border-primary outline-none transition-colors text-foreground placeholder-gray-500 ${
                    errors.name
                      ? 'border-red-500/50 focus:border-red-500 bg-red-500/5'
                      : 'border-white/10'
                  }`}
                  placeholder="Your name"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-300">Email</label>
                  {errors.email && (
                    <span className="text-xs text-red-400 flex items-center gap-1">
                      <X className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:border-primary outline-none transition-colors text-foreground placeholder-gray-500 ${
                    errors.email
                      ? 'border-red-500/50 focus:border-red-500 bg-red-500/5'
                      : 'border-white/10'
                  }`}
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Project Idea */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium mb-2 text-gray-300">Project Idea</label>
                <input
                  type="text"
                  name="projectIdea"
                  value={formData.projectIdea}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary outline-none transition-colors text-foreground placeholder-gray-500"
                  placeholder="Brief description of your project"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-300">Message</label>
                  {errors.message && (
                    <span className="text-xs text-red-400 flex items-center gap-1">
                      <X className="w-3 h-3" />
                      {errors.message}
                    </span>
                  )}
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:border-primary outline-none transition-colors text-foreground placeholder-gray-500 resize-none ${
                    errors.message
                      ? 'border-red-500/50 focus:border-red-500 bg-red-500/5'
                      : 'border-white/10'
                  }`}
                  placeholder="Tell me more about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading || submitted}
                whileHover={!isLoading && !submitted ? { scale: 1.02 } : {}}
                whileTap={!isLoading && !submitted ? { scale: 0.98 } : {}}
                className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                    : isLoading
                    ? 'bg-primary/50 cursor-not-allowed border border-primary/50'
                    : 'btn-primary hover:shadow-lg hover:shadow-primary/50'
                }`}
              >
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                ) : isLoading ? (
                  <motion.div className="flex items-center gap-2">
                    <Spinner />
                    <span>Sending message...</span>
                  </motion.div>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div>
              <h3 className="text-2xl font-bold mb-8 gradient-text">Direct Contact</h3>
              <div className="space-y-8">
                {/* Contact Links */}
                <div className="space-y-6">
                  {contactLinks.map((link, idx) => {
                    const Icon = link.icon
                    return (
                      <motion.a
                        key={idx}
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow">
                          <Icon className="w-6 h-6 text-background" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 font-medium">{link.label}</p>
                          <p className="text-foreground font-semibold group-hover:text-primary transition-colors">
                            {link.value}
                          </p>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>

                {/* Schedule Meeting Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <SchedulingBooking />
                </motion.div>
              </div>
            </div>

            {/* CV Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CVDownload />
            </motion.div>

            {/* Additional Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-xl"
            >
              <h4 className="font-semibold text-foreground mb-3">Response Time</h4>
              <p className="text-gray-400 text-sm">
                I typically respond to inquiries within 24 hours. Let me know your timeline and I'll do my best to accommodate.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
