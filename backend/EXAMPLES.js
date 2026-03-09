// Frontend Integration Example - React Component
// This shows how the contact form integrates with the backend

import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'

export function ContactFormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectIdea: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Send data to backend
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
        // Show success message
        toast({
          description: '✅ Message sent successfully! I will get back to you soon.',
        })

        // Clear form
        setFormData({ name: '', email: '', message: '', projectIdea: '' })
      } else {
        // Show error message
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Project Idea</label>
        <input
          type="text"
          name="projectIdea"
          value={formData.projectIdea}
          onChange={handleChange}
          placeholder="Brief description"
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me more..."
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 rounded-lg font-semibold ${
          isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
        } text-white transition-all`}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

// ============================================================
// API USAGE EXAMPLES
// ============================================================

/**
 * Example 1: Using Fetch API (Browser/Node.js)
 */
async function sendContactForm() {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        projectIdea: 'Build a mobile app',
        message: 'I have an exciting project...',
      }),
    })

    const data = await response.json()
    console.log(data)
    // Output: { success: true, message: "Your message has been sent successfully!..." }
  } catch (error) {
    console.error('Error:', error)
  }
}

/**
 * Example 2: Using Axios (Popular HTTP Library)
 */
/*
import axios from 'axios'

async function sendContactFormAxios() {
  try {
    const response = await axios.post('http://localhost:5000/api/contact', {
      name: 'John Doe',
      email: 'john@example.com',
      projectIdea: 'Build a mobile app',
      message: 'I have an exciting project...',
    })

    console.log(response.data)
  } catch (error) {
    console.error('Error:', error.response.data)
  }
}
*/

/**
 * Example 3: cURL Command (Terminal)
 */
/*
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "projectIdea": "Build a mobile app",
    "message": "I have an exciting project..."
  }'
*/

/**
 * Example 4: Using Next.js API Route Handler
 */
/*
export async function POST(request: Request) {
  const body = await request.json()

  const response = await fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await response.json()
  return Response.json(data)
}
*/

// ============================================================
// SUCCESS/ERROR RESPONSES
// ============================================================

/**
 * Success Response (200)
 */
const successResponse = {
  success: true,
  message: 'Your message has been sent successfully! I will get back to you soon.',
}

/**
 * Error Response - Missing Fields (400)
 */
const errorMissingFields = {
  success: false,
  error: 'Please provide name, email, and message',
}

/**
 * Error Response - Server Error (500)
 */
const errorServerError = {
  success: false,
  error: 'Failed to send message. Please try again later.',
  details: 'Email authentication failed' // Only in development
}

// ============================================================
// TESTING CHECKLIST
// ============================================================

/*
1. Backend Server Running?
   - npm start in /backend folder
   - Check console: "🚀 Server running on http://localhost:5000"

2. Test Health Check:
   - curl http://localhost:5000/api/health
   - Should return: { "status": "Server is running" }

3. Test with Curl:
   curl -X POST http://localhost:5000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","projectIdea":"Test","message":"Test"}'

4. Check Your Gmail:
   - Admin email (to your Gmail)
   - Confirmation email (to user email)

5. Frontend Integration:
   - Fill out contact form
   - Click "Send Message"
   - Check toast notification
   - Check emails received

6. Error Testing:
   - Submit with missing fields
   - Submit with invalid email
   - Stop backend and try submitting
*/
