'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$5,000',
    description: 'Perfect for small projects and MVPs',
    features: [
      'Single feature implementation',
      '2 weeks development time',
      'Basic design & UI',
      'Email support',
      'Source code included',
      'Monthly maintenance (1 month free)'
    ],
    highlighted: false
  },
  {
    name: 'Startup',
    price: '$15,000',
    description: 'Ideal for growing startups',
    features: [
      'Multiple features & integrations',
      '6-8 weeks development time',
      'Custom design & branding',
      'Priority email & calls support',
      'Performance optimization',
      'Deployment & setup included',
      'Quarterly maintenance (3 months free)'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For complex, large-scale projects',
    features: [
      'Full-featured platform',
      'Custom timeline negotiation',
      'Enterprise-grade design',
      '24/7 dedicated support',
      'Advanced integrations',
      'Scalability & security audit',
      'Annual maintenance plan included'
    ],
    highlighted: false
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

export function PricingSection() {
  return (
    <div id="pricing" className="relative z-10 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Simple, Transparent Pricing</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your project. All plans include post-launch support.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ translateY: -10 }}
            className="group"
          >
            <div
              className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? 'glass-card-hover bg-gradient-to-b from-primary/10 to-accent/5 border-2 border-primary ring-2 ring-primary/50 shadow-xl shadow-primary/20'
                  : 'glass-card-hover'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-background px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-muted-foreground ml-2">one-time</span>}
              </div>

              <Link href="#booking" className="block mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    plan.highlighted
                      ? 'btn-gradient-neon'
                      : 'btn-neon-glow'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <ul className="space-y-4 flex-grow">
                {plan.features.map((feature, fidx) => (
                  <motion.li
                    key={fidx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: fidx * 0.05 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
