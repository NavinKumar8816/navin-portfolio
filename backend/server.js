require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const rateLimit = require('express-rate-limit')

const app = express()
const PORT = process.env.PORT || 5000

// Rate limiting middleware (100 requests per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(limiter) // Apply rate limiting globally

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000, // 10 seconds
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Email configuration error:', error)
  } else {
    console.log('✅ Email service is ready')
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, projectIdea, message } = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please provide name, email, and message',
    })
  }

  try {
    // Email content for you (admin)
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #555;">Name:</strong>
          <p style="margin: 5px 0; color: #666;">${escapeHtml(name)}</p>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #555;">Email:</strong>
          <p style="margin: 5px 0; color: #666;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        </div>
        
        ${projectIdea ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Project Idea:</strong>
            <p style="margin: 5px 0; color: #666;">${escapeHtml(projectIdea)}</p>
          </div>
        ` : ''}
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #555;">Message:</strong>
          <p style="margin: 5px 0; color: #666; background-color: #f5f5f5; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;">Received at: ${new Date().toLocaleString()}</p>
      </div>
    `

    // Email content for the user (confirmation)
    const userEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank You for Reaching Out! 🎉</h2>
        <p style="color: #666; line-height: 1.6;">Hi ${escapeHtml(name)},</p>
        
        <p style="color: #666; line-height: 1.6;">Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible.</p>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
          <p style="margin: 0; color: #666;"><strong>Your Message:</strong></p>
          <p style="margin: 10px 0 0 0; color: #666; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        
        <p style="color: #666; line-height: 1.6;">I typically respond to inquiries within 24 hours. Feel free to reach out directly if you need an urgent response.</p>
        
        <p style="color: #666; line-height: 1.6;">Best regards,<br><strong>Navin Kumar</strong></p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #999; font-size: 12px; text-align: center;">This is an automated confirmation email. Please do not reply to this email.</p>
      </div>
    `

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: adminEmailContent,
      replyTo: email,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Message Received - Thank You!',
      html: userEmailContent,
    })

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! I will get back to you soon.',
    })
  } catch (error) {
    console.error('❌ Error sending email:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
})



// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err)
  res.status(500).json({
    success: false,
    error: 'Internal server error',
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`)
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`)
  console.log(`💚 Health check: http://localhost:${PORT}/api/health\n`)
})

// Helper function to escape HTML
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
