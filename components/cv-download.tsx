'use client'

import { motion } from 'framer-motion'
import { Download, FileText, Zap } from 'lucide-react'
import { useState } from 'react'

export function CVDownload() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadComplete, setDownloadComplete] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      // Simulate download delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Download your actual CV from the public folder
      const link = document.createElement('a')
      link.href = 'Resume/Navin_AI_Fullstack.pdf' // Replace with your actual CV filename
      link.download = 'Navin_AI_Fullstack.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setDownloadComplete(true)
      setTimeout(() => {
        setIsDownloading(false)
        setDownloadComplete(false)
      }, 2000)
    } catch (error) {
      console.error('Download failed:', error)
      setIsDownloading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-2xl rounded-2xl -z-10 animate-pulse" />
      
      <motion.button
        onClick={handleDownload}
        disabled={isDownloading}
        whileHover={{ scale: isDownloading ? 1 : 1.05 }}
        whileTap={{ scale: isDownloading ? 1 : 0.95 }}
        className={`w-full relative overflow-hidden rounded-xl p-6 transition-all duration-300 ${
          downloadComplete
            ? 'bg-green-500/20 border border-green-500/50'
            : isDownloading
            ? 'bg-accent/20 border border-accent/50'
            : 'bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-gradient-to-r border-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20'
        }`}
      >
        {/* Animated gradient border effect */}
        {!downloadComplete && !isDownloading && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 hover:opacity-10 transition-opacity rounded-xl" />
        )}

        {/* Animated data stream lines */}
        {isDownloading && (
          <>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-data-stream" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-data-stream" style={{ animationDelay: '0.5s' }} />
          </>
        )}

        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <motion.div
              animate={isDownloading ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: isDownloading ? 1 : 0.5, repeat: isDownloading ? Infinity : 0 }}
              className="flex-shrink-0"
            >
              {downloadComplete ? (
                <FileText className="w-6 h-6 text-green-400" />
              ) : (
                <Download className="w-6 h-6 text-primary" />
              )}
            </motion.div>
            <div className="text-left">
              <h4 className="font-bold text-lg">
                {downloadComplete ? (
                  <span className="text-green-300">Downloaded Successfully!</span>
                ) : isDownloading ? (
                  <span className="gradient-text-cyberpunk">Preparing Your Resume...</span>
                ) : (
                  <span className="gradient-text">Download Resume</span>
                )}
              </h4>
              <p className="text-sm text-gray-400">
                {downloadComplete ? (
                  'Resume ready to use'
                ) : isDownloading ? (
                  'Generating PDF...'
                ) : (
                  'Resume • PDF • 144kb'
                )}
              </p>
            </div>
          </div>

          <motion.div
            animate={isDownloading ? { x: [0, 10, 0] } : { x: 0 }}
            transition={{ duration: 1, repeat: isDownloading ? Infinity : 0 }}
          >
            <Zap className="w-5 h-5 text-accent opacity-60" />
          </motion.div>
        </div>

        {/* Progress bar effect during download */}
        {isDownloading && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-b-xl overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-full bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </div>
        )}
      </motion.button>

      {/* Success indicator */}
      {downloadComplete && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute -top-12 left-0 right-0 text-center text-green-400 text-sm font-medium"
        >
          Resume downloaded to your device
        </motion.div>
      )}
    </motion.div>
  )
}
