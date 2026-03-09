'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { AnimatedGridBackground } from './animations/animated-grid-background'
import { TiltCard } from './animations/tilt-card'

export function ProjectsSection() {
  const projects = [
    {
      title: 'JanShakti',
      description: 'AI powered political platform leveraging LLMs and RAG systems to provide intelligent political insights and civic engagement tools.',
      tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'RAG'],
      imageUrl: '/projects/janshakti.jpg ',
      github: 'https://github.com/NavinKumar8816/janshakti-backend',
      demo: 'https://janshakti-frontend.vercel.app/',
      featured: true,
    },
    {
      title: 'AI Smart Hospital System',
      description: 'Comprehensive healthcare platform with AI-powered diagnostics, patient management, and intelligent scheduling using advanced ML models.',
      tech: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'TensorFlow'],
      imageUrl: '/projects/hospital-system.jpg', // Add your image here
      github: 'https://github.com/NavinKumar8816/hospital-system',
      demo: 'https://hospital-system.vercel.app/',
      featured: true,
    },
    {
      title: 'Job Portal Platform',
      description: 'Full-stack job portal with AI-powered job matching, resume screening, and automated candidate recommendations using NLP.',
      tech: ['Next.js', 'Express', 'MongoDB', 'AWS', 'ML Models'],
      imageUrl: '/projects/job-portal.jpg', // Add your image here
      github: 'https://github.com/NavinKumar8816',
      demo: 'https://job-portal-teal.vercel.app/',
      featured: true,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGridBackground className="opacity-30" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/5 pointer-events-none" />

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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing my latest AI and full-stack development work
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group"
            >
              <TiltCard className="rounded-xl overflow-hidden h-full animate-card-glow">
              <div className="rounded-xl overflow-hidden h-full relative">
                {/* Project Image */}
                <div className="relative h-60 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 90vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent to-background/80" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3 font-semibold">TECH STACK</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIdx) => (
                        <motion.span
                          key={techIdx}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-lg transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-background rounded-lg hover:shadow-lg transition-all text-sm font-medium neon-glow animate-glow-border"
                      style={{
                        boxShadow: '0 0 20px rgba(6, 214, 255, 0.6)',
                      }}
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
