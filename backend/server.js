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
<div style="margin:0;padding:0;background:#0b1220;font-family:'Segoe UI',Arial,sans-serif;color:#fff;">
  <div style="max-width:700px;margin:40px auto;background:#111827;border-radius:14px;overflow:hidden;border:1px solid #1f2937;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#6366f1,#06b6d4);padding:20px;">
      <h1 style="margin:0;font-size:20px;">🚀 New Portfolio Lead</h1>
      <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">
        Someone just contacted you from your portfolio
      </p>
    </div>

    <!-- Body -->
    <div style="padding:30px;">

      <!-- Lead Info -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:20px;">
        
        <div style="background:#1f2937;padding:12px;border-radius:8px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">👤 Name</p>
          <p style="margin:5px 0 0;font-weight:bold;">${escapeHtml(name)}</p>
        </div>

        <div style="background:#1f2937;padding:12px;border-radius:8px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">📧 Email</p>
          <p style="margin:5px 0 0;">
            <a href="mailto:${escapeHtml(email)}" style="color:#38bdf8;text-decoration:none;">
              ${escapeHtml(email)}
            </a>
          </p>
        </div>

        <div style="background:#1f2937;padding:12px;border-radius:8px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">💡 Project Idea</p>
          <p style="margin:5px 0 0;">
            ${escapeHtml(projectIdea || "Not provided")}
          </p>
        </div>

        <div style="background:#1f2937;padding:12px;border-radius:8px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">⏱ Time</p>
          <p style="margin:5px 0 0;">
            ${new Date().toLocaleString()}
          </p>
        </div>

      </div>

      <!-- Message -->
      <div style="margin-top:20px;padding:18px;background:#020617;border-radius:10px;border:1px solid #374151;">
        <p style="margin:0 0 10px;font-size:13px;color:#9ca3af;">📩 Message</p>
        <p style="margin:0;font-size:14px;color:#e5e7eb;white-space:pre-wrap;">
          ${escapeHtml(message)}
        </p>
      </div>

      <!-- CTA -->
      <div style="margin-top:25px;text-align:center;">
        <a href="mailto:${escapeHtml(email)}"
          style="display:inline-block;padding:12px 20px;background:#06b6d4;color:#000;border-radius:6px;text-decoration:none;font-weight:bold;">
          Reply to Client
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#020617;padding:15px;text-align:center;border-top:1px solid #1f2937;">
      <p style="font-size:11px;color:#6b7280;">
        ⚡ Generated from your AI Portfolio System
      </p>
    </div>

  </div>
</div>
`

    // ===== BEAUTIFUL USER EMAIL =====
const userTemplate = `
<div style="margin:0;padding:0;background:#0b1220;font-family:'Segoe UI',Arial,sans-serif;color:#fff;">
  <div style="max-width:650px;margin:40px auto;background:#111827;border-radius:14px;overflow:hidden;border:1px solid #1f2937;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#06b6d4,#6366f1);padding:20px;text-align:center;">
      <h1 style="margin:0;font-size:22px;">Navin Kumar</h1>
      <p style="margin:5px 0 0;font-size:13px;opacity:0.9;">AI Engineer • Full Stack Developer</p>
    </div>

    <!-- Body -->
    <div style="padding:30px;">
      
      <h2 style="color:#22c55e;margin-bottom:10px;">✅ Message Received</h2>

      <p style="color:#d1d5db;font-size:15px;">
        Hi <strong>${escapeHtml(name)}</strong>,
      </p>

      <p style="color:#9ca3af;font-size:14px;line-height:1.6;">
        Thanks for reaching out 🚀  
        I’ve successfully received your message and will get back to you within 
        <strong>24 hours</strong>.
      </p>

      <!-- Message Box -->
      <div style="margin:25px 0;padding:18px;background:#1f2937;border-radius:10px;border:1px solid #374151;">
        <p style="margin:0 0 8px;font-size:13px;color:#9ca3af;"> Your Message</p>
        <p style="margin:0;font-size:14px;color:#e5e7eb;white-space:pre-wrap;">
          ${escapeHtml(message)}
        </p>
      </div>

      <!-- CTA -->
      <div style="margin-top:25px;">
        <p style="font-size:14px;color:#9ca3af;">
          If your request is urgent, feel free to contact me directly.
        </p>
      </div>

      <p style="margin-top:30px;font-size:14px;color:#e5e7eb;">
        — <strong>Navin Kumar</strong><br/>
        AI Engineer & Full Stack Developer
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#020617;padding:20px;text-align:center;border-top:1px solid #1f2937;">
      
      <p style="font-size:12px;color:#6b7280;margin-bottom:10px;">
        Connect with me
      </p>

      <div style="margin-bottom:10px;">
        <a href="https://github.com/NavinKumar8816" style="color:#38bdf8;text-decoration:none;margin:0 10px;">GitHub</a>
        |
        <a href="https://www.linkedin.com/in/navin-kumar123/" style="color:#38bdf8;text-decoration:none;margin:0 10px;">LinkedIn</a>
      </div>

      <p style="font-size:11px;color:#6b7280;">
        © ${new Date().getFullYear()} Navin Kumar. All rights reserved.
      </p>

    </div>
  </div>
</div>
`

    // ===== SEND ADMIN EMAIL =====
    await emailApi.sendTransacEmail({
      sender: {
        email: process.env.EMAIL,
        name: "Navin Kumar",
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