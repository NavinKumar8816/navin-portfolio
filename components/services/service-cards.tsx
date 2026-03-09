'use client'

import { motion } from 'framer-motion'
import { Zap, Bot, Rocket, Cog, Code } from 'lucide-react'
import { TiltCard } from '@/components/animations/tilt-card'

const services = [
  {
    icon: Zap,
    title: 'AI Startup Development',
    description: 'Build and launch AI-powered startups from concept to market. Full-stack development with modern tech stacks.',
    features: ['Product Strategy', 'MVP Development', 'Fundraising Support']
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Custom intelligent chatbots for customer support, engagement, and automation. Powered by latest LLMs.',
    features: ['Natural Language', 'Multi-channel', 'Analytics & Insights']
  },
  {
    icon: Rocket,
    title: 'SaaS Platforms',
    description: 'Scalable SaaS applications with AI integration. Payment, auth, and deployment ready.',
    features: ['Cloud Infrastructure', 'Multi-tenancy', 'API Integration']
  },
  {
    icon: Cog,
    title: 'Automation Systems',
    description: 'Intelligent automation solutions to streamline workflows and reduce operational costs.',
    features: ['Workflow Design', 'Integration', 'Monitoring']
  },
  {
    icon: Code,
    title: 'Custom Web Apps',
    description: 'Bespoke web applications tailored to your specific business needs and requirements.',
    features: ['Responsive Design', 'Real-time Features', 'Performance']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export function ServiceCards() {
  return (
    <div className="relative z-10 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Services I Offer</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive solutions to bring your ideas to life with cutting-edge AI and web technologies
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
      >
        {services.map((service, idx) => {
          const IconComponent = service.icon
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group"
            >
              <TiltCard className="rounded-xl overflow-hidden h-full animate-card-glow p-6">
                <div className="flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="mb-4 inline-flex"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                      <IconComponent className="w-6 h-6 text-background" />
                    </div>
                  </motion.div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
