require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const SibApiV3Sdk = require('sib-api-v3-sdk')

const app = express()
const PORT = process.env.PORT || 5000

// ================= RATE LIMIT =================
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
})
app.use(limiter)

// ================= MIDDLEWARE =================
app.use(cors())
app.use(express.json())

// ================= BREVO SETUP =================
const client = SibApiV3Sdk.ApiClient.instance
client.authentications['api-key'].apiKey = process.env.BREVO_API_KEY

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi()

// ================= HEALTH =================
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server running' })
})

// ================= CONTACT API =================
app.post('/api/contact', async (req, res) => {
  const { name, email, projectIdea, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Please fill all required fields',
    })
  }

  try {

    // ===== BEAUTIFUL ADMIN EMAIL =====
    const adminTemplate = `
    <div style="font-family: 'Segoe UI', sans-serif; background:#0f172a; padding:20px; color:white;">
      <div style="max-width:600px;margin:auto;background:#111827;border-radius:12px;padding:25px;">
        
        <h2 style="color:#38bdf8;">🚀 New Portfolio Lead</h2>

        <p style="color:#9ca3af;">You received a new message from your portfolio.</p>

        <div style="margin-top:20px;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Project:</strong> ${escapeHtml(projectIdea || "Not provided")}</p>
        </div>

        <div style="margin-top:20px;padding:15px;background:#1f2937;border-radius:8px;">
          <p style="color:#d1d5db;">${escapeHtml(message)}</p>
        </div>

        <hr style="margin:20px 0;border-color:#374151;" />

        <p style="font-size:12px;color:#6b7280;">
          📅 ${new Date().toLocaleString()}
        </p>
      </div>
    </div>
    `

    // ===== BEAUTIFUL USER EMAIL =====
    const userTemplate = `
    <div style="font-family: 'Segoe UI', sans-serif; background:#0f172a; padding:20px; color:white;">
      <div style="max-width:600px;margin:auto;background:#111827;border-radius:12px;padding:25px;">

        <h2 style="color:#22c55e;">✅ Message Received</h2>

        <p>Hi ${escapeHtml(name)},</p>

        <p>Thanks for reaching out 🚀</p>

        <p>I’ve received your message and will get back to you within 24 hours.</p>

        <div style="margin-top:20px;padding:15px;background:#1f2937;border-radius:8px;">
          <strong>Your Message:</strong>
          <p style="color:#d1d5db;">${escapeHtml(message)}</p>
        </div>

        <p style="margin-top:20px;">— Navin Kumar</p>

      </div>
    </div>
    `

    // ===== SEND ADMIN EMAIL =====
    await emailApi.sendTransacEmail({
      sender: {
        email: process.env.EMAIL,
        name: "Navin Portfolio",
      },
      to: [{ email: process.env.EMAIL }],
      subject: `🚀 New Lead from ${name}`,
      htmlContent: adminTemplate,
      replyTo: { email },
    })

    // ===== SEND USER EMAIL =====
    await emailApi.sendTransacEmail({
      sender: {
        email: process.env.EMAIL,
        name: "Navin Kumar",
      },
      to: [{ email }],
      subject: "✅ Your message has been received",
      htmlContent: userTemplate,
    })

    return res.json({
      success: true,
      message: "Message sent successfully!",
    })

  } catch (error) {
    console.error("Brevo Error:", error)
    return res.status(500).json({
      success: false,
      error: "Failed to send message",
    })
  }
})

// ================= ERROR =================
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ success: false, error: "Server error" })
})

// ================= 404 =================
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Not found" })
})

// ================= START =================
app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`)
})

// ================= HELPER =================
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