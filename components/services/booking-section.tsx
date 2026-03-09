'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar, Send } from 'lucide-react'
import Link from 'next/link'

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: ''
    })
  }

  return (
    <div id="booking" className="relative z-10 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Start Your Project</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get in touch with me to discuss your project and find the perfect solution
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="glass-card-hover rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:your-email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  your-email@example.com
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card-hover rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card-hover rounded-xl p-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">
                  Available for remote projects worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card-hover rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Schedule a Call</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Let's discuss your project and find the best approach
                </p>
                <a
                  href="https://calendly.com/your-calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  Book on Calendly
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="glass-card-hover rounded-xl p-8">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="startup">AI Startup Development</option>
                    <option value="chatbot">AI Chatbots</option>
                    <option value="saas">SaaS Platforms</option>
                    <option value="automation">Automation Systems</option>
                    <option value="webapp">Custom Web Apps</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                  >
                    <option value="">Select budget</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-plus">$30,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (within 2 weeks)</option>
                  <option value="month">Within 1 month</option>
                  <option value="quarter">Within 3 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
                  placeholder="Tell me about your project idea and what you're looking to build..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient-neon flex items-center justify-center gap-2 w-full py-4"
              >
                {submitted ? 'Message Sent! 🎉' : (
                  <>
                    Send Project Inquiry
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
