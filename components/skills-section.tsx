'use client'

import { motion } from 'framer-motion'
import { AnimatedGridBackground } from './animations/animated-grid-background'
import { AnimatedSkillBar } from './animations/animated-skill-bar'

export function SkillsSection() {
  const skillCategories = [
    {
      category: 'AI / ML',
      skills: ['RAG', 'n8n Automation', 'Prompt Engineering', 'Agentic AI', 'LangChain', 'LlamaIndex', 'OpenAI API', 'Gemini API'],
      color: 'from-accent to-blue-400',
      proficiency: 95,
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Python', 'FastAPI'],
      color: 'from-primary to-cyan-300',
      proficiency: 90,
    },
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      color: 'from-indigo-400 to-primary',
      proficiency: 92,
    },
    {
      category: 'DevOps',
      skills: ['AWS', 'Docker', 'Firebase', 'Render', 'GitHub Actions', 'CI/CD'],
      color: 'from-purple-400 to-accent',
      proficiency: 85,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGridBackground className="opacity-30" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />

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
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIdx * 0.15 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                  {category.category}
                </h3>
              </div>

              {/* Skills Badges */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.15, translateY: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="skill-badge group cursor-pointer animate-parallax"
                  >
                    <span className="relative z-10">{skill}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity -z-10`} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Proficiency Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.2 }}
              >
                <AnimatedSkillBar
                  label={`${category.category} Proficiency`}
                  percentage={category.proficiency}
                  delay={catIdx * 0.15}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* AI Automation & Agents Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-8 border border-white/5 hover:border-white/20 transition-all duration-300">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">
              AI Automation & Agents
            </h3>
            <p className="text-gray-300 mb-6">
              I design AI automation systems that connect multiple tools and APIs using <span className="font-semibold text-accent">n8n</span>.
            </p>
            
            <div className="space-y-3">
              {[
                'Automate business workflows',
                'Integrate AI models into applications',
                'Create intelligent agents that perform tasks automatically',
                'Reduce manual work using AI',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-accent to-primary mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">•</span>
                  </span>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/10"
        >
          {[
            { label: '3+', value: 'AI Systems' },
            { label: '20+', value: 'Projects Shipped' },
            { label: '100%', value: 'Dedication & Fast Delivery' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, rotateZ: 2 }}
              className="text-center glass-card-hover rounded-lg p-6 group hover-lift enhanced-hover-lift animate-card-glow relative overflow-hidden"
            >
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold gradient-text neon-glow mb-2 group-hover:animate-pulse-glow transition-all shimmer-text">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
