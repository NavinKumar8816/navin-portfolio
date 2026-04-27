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
      description:
        'AI powered political platform leveraging LLMs and RAG systems to provide intelligent political insights and civic engagement tools.',
      tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'RAG'],
      imageUrl: '/projects/janshakti.JPG',
      github: 'https://github.com/NavinKumar8816/janshakti-backend',
      demo: 'https://janshakti-frontend.vercel.app/',
    },
    {
      title: 'Parity Platform',
      description:
        'Parity is a full-stack SaaS platform where users track golf scores, participate in gamified rewards, and contribute to charities.',
      tech: [
        'React 19',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'Supabase',
        'PostgreSQL',
      ],
      imageUrl: '/projects/parity.jpg',
      github: 'https://github.com/NavinKumar8816/parity-golf-platform',
      demo: 'https://parityplatform.vercel.app/',
    },
    {
      title: 'AI Smart Hospital System',
      description:
        'Healthcare platform with AI-powered diagnostics and scheduling.',
      tech: ['Next.js', 'Python', 'FastAPI'],
      imageUrl: '/projects/hospital-system.jpg',
      github: 'https://github.com/NavinKumar8816/hospital-system',
      demo: 'https://hospital-system.vercel.app/',
    },
    {
      title: 'Job Portal Platform',
      description:
        'AI-based job portal with resume screening and smart matching.',
      tech: ['Next.js', 'Express', 'MongoDB'],
      imageUrl: '/projects/job-portal.JPG',
      github: 'https://github.com/NavinKumar8816',
      demo: 'https://job-portal-teal.vercel.app/',
    },
  ]

  return (
    <section className="relative py-20 px-6 overflow-hidden z-10">

      {/* Background FIX */}
      <AnimatedGridBackground className="absolute inset-0 -z-10 opacity-30 pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/5 pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            My latest AI & full-stack work
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-10">

          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group"
            >

              <TiltCard className="rounded-2xl overflow-hidden">

                {/* IMAGE FIX */}
                <div className="relative w-full aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                    sizes="100vw"
                  />
                </div>

                {/* Content */}
                <div className="p-8">

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/*  BUTTON FIX */}
                  <div className="flex gap-4 relative z-50">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="pointer-events-auto flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg hover:border-primary/50 transition"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="pointer-events-auto flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-black rounded-lg hover:shadow-lg transition"
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>

                  </div>

                </div>

              </TiltCard>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}