import { useState } from 'react'
import { useToast } from './use-toast'

interface ContactFormData {
  name: string
  email: string
  projectIdea: string
  message: string
}

interface ContactFormResponse {
  success: boolean
  message?: string
  error?: string
}

export function useContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    projectIdea: '',
    message: '',
  })
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

      const data: ContactFormResponse = await response.json()

      if (data.success) {
        setSubmitted(true)
        toast({
          description: '✅ Message sent successfully! I will get back to you soon.',
        })
        resetForm()
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

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      projectIdea: '',
      message: '',
    })
    setErrors({})
  }

  return {
    formData,
    isLoading,
    submitted,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    validateForm,
  }
}
