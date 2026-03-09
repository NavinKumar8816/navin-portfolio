/**
 * Contact Form Hook - Working Examples
 * 
 * These are simplified, working examples of how to use the useContactForm hook.
 * Copy and use directly in your components.
 */

import { Spinner } from '@/components/ui/spinner'
import { useContactForm } from '@/hooks/use-contact-form'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

// ============================================================
// SIMPLE WORKING FORM - USE THIS AS YOUR REFERENCE
// ============================================================

export function SimpleWorkingContactForm() {
  const { formData, isLoading, submitted, errors, handleChange, handleSubmit } = useContactForm()

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-2 h-5">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        <div className="h-5 mt-1">
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2 h-5">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        <div className="h-5 mt-1">
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
      </div>

      {/* Project Idea (optional) */}
      <div>
        <label className="block text-sm font-medium mb-2">Project Idea</label>
        <input
          type="text"
          name="projectIdea"
          value={formData.projectIdea}
          onChange={handleChange}
          placeholder="Brief description (optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2 h-5">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project..."
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none resize-none ${
            errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
          }`}
        />
        <div className="h-5 mt-1">
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || submitted}
        className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all h-12 ${
          submitted
            ? 'bg-green-500 text-white'
            : isLoading
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {submitted ? (
          <>
            <Check className="w-5 h-5" />
            Message sent!
          </>
        ) : isLoading ? (
          <>
            <Spinner className="w-4 h-4 text-white" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  )
}

// ============================================================
// ANIMATED VERSION - WITH FRAMER MOTION
// ============================================================

export function AnimatedWorkingContactForm() {
  const { formData, isLoading, submitted, errors, handleChange, handleSubmit } = useContactForm()

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-2 h-5">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={`w-full px-4 py-2 border rounded-lg ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <div className="h-5 mt-1">
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2 h-5">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className={`w-full px-4 py-2 border rounded-lg ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <div className="h-5 mt-1">
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2 h-5">Message *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project..."
          className={`w-full px-4 py-2 border rounded-lg resize-none ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <div className="h-5 mt-1">
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || submitted}
        className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 h-12 transition-all ${
          submitted
            ? 'bg-green-500 text-white'
            : isLoading
            ? 'bg-gray-400 text-white'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {submitted ? (
          <>
            <Check className="w-5 h-5" />
            Message sent!
          </>
        ) : isLoading ? (
          <>
            <Spinner className="w-4 h-4 text-white" />
            Sending...
          </>
        ) : (
          <>Send Message</>
        )}
      </button>
    </motion.form>
  )
}

// ============================================================
// HOW TO USE IN YOUR COMPONENTS
// ============================================================

/*
STEP 1: Import the hook in your component
import { useContactForm } from '@/hooks/use-contact-form'

STEP 2: Use the hook
const { formData, isLoading, submitted, errors, handleChange, handleSubmit } = useContactForm()

STEP 3: Return JSX with form fields
<form onSubmit={handleSubmit}>
  <input name="name" value={formData.name} onChange={handleChange} />
  {errors.name && <p>{errors.name}</p>}
  
  <input name="email" value={formData.email} onChange={handleChange} />
  {errors.email && <p>{errors.email}</p>}
  
  <textarea name="message" value={formData.message} onChange={handleChange} />
  {errors.message && <p>{errors.message}</p>}
  
  <button type="submit" disabled={isLoading}>
    {isLoading ? 'Sending...' : 'Send'}
  </button>
</form>

STEP 4: Make sure backend is running
cd backend
npm start

That's it! Your form will now:
✅ Validate inputs
✅ Show error messages
✅ Send to backend at http://localhost:5000/api/contact
✅ Show loading spinner
✅ Show success message
✅ Send email to your Gmail inbox
*/

