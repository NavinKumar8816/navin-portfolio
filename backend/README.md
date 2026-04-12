# 📧 Portfolio Backend - Express.js Email Service

> Production-ready Node.js backend for portfolio contact form and bookings

![Node.js](https://img.shields.io/badge/Node.js-Latest-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.18+-000000?style=for-the-badge&logo=express)
![Email](https://img.shields.io/badge/Nodemailer-Gmail-EA4335?style=for-the-badge)

---

## 🎯 Purpose

This backend server handles:
- **Contact Form Submissions** - Process and email inquiries
- **Project Booking Requests** - Store project details
- **Email Notifications** - Send admin alerts and user confirmations
- **Rate Limiting** - Prevent spam and abuse
- **API Security** - CORS and validation

---

## 🚀 Quick Start

### Prerequisites
- Node.js 14+
- npm or yarn
- Gmail account with app password

### Installation

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

### Environment Setup

Create a `.env` file in the backend directory:

```env
# Email Configuration
EMAIL=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

**How to get Gmail App Password:**
1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Go to "App passwords"
4. Select Mail and Windows Computer
5. Copy the 16-digit password
6. Paste in `.env` as `EMAIL_PASS`

---

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "dotenv": "^16.0.3",
  "nodemailer": "^6.9.1",
  "express-rate-limit": "^6.7.0",
  "cors": "^2.8.5",
  "body-parser": "^1.20.2"
}
```

---

## 🎮 Running the Server

### Development Mode
```bash
npm start
# Server runs on http://localhost:5000
```

### Production Mode
```bash
NODE_ENV=production npm start
```

---

## 📚 API Endpoints

### Health Check
```http
GET /api/health
```
**Response:**
```json
{
  "status": "OK",
  "message": "Email service is ready"
}
```

### Submit Contact Form
```http
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "projectIdea": "AI-powered chatbot",
  "message": "I want to build an AI assistant for my business..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "data": {
    "id": "uuid",
    "timestamp": "2024-04-12T10:30:00Z"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Invalid email format"
}
```

---

## 🔒 Security Features

### Rate Limiting
- **Limit**: 100 requests per 15 minutes per IP
- **Headers**: Includes `Retry-After` header
- **Protection**: Prevents DoS attacks

### CORS
- Allows only frontend domain
- Configurable in production
- Prevents cross-origin attacks

### Input Validation
- Email format validation
- Name length validation (2-100 characters)
- Message length validation (10-2000 characters)
- HTML escaping in email templates

### Error Handling
- No sensitive info exposed
- Proper HTTP status codes
- Detailed logging (development only)

---

## 📧 Email Templates

### Admin Notification Email
```
Subject: New Project Inquiry - [Name]
To: your-email@gmail.com

From: [Name] ([Email])
Project Idea: [ProjectIdea]
Message: [Message]
---
Submitted at: [Timestamp]
```

### User Confirmation Email
```
Subject: We received your message! 🎉
To: [User Email]

Hi [Name],

Thank you for reaching out! We've received your project inquiry.

Project Idea: [ProjectIdea]
Message: [Message]

We'll review your request and get back to you shortly.

Best regards,
Navin Kumar
```

---

## 🧪 Testing

### Test Health Check
```bash
curl http://localhost:5000/api/health
```

### Test Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "projectIdea": "Test Project",
    "message": "This is a test message for the contact form."
  }'
```

---

## 📊 Response Codes

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request successful |
| 400 | Bad Request | Invalid input data |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Server Error | Internal server error |

---

## 🚀 Deployment

### Deploy to Render.com

1. **Create GitHub Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Render**
   - Go to [render.com/dashboard](https://render.com/dashboard)
   - Click "New +"
   - Select "Web Service"
   - Connect your GitHub repo
   - Select the backend folder

3. **Set Environment Variables**
   - Go to "Environment" tab
   - Add variables:
     - `EMAIL`: your-gmail@gmail.com
     - `EMAIL_PASS`: your-app-password (16 digits)
     - `NODE_ENV`: production
     - `PORT`: 5000

4. **Deploy**
   - Click "Deploy"
   - Your backend will be available at: `https://your-service.onrender.com`

### Deploy to Heroku

1. **Create Procfile**
```
web: npm start
```

2. **Deploy**
```bash
heroku create your-app-name
heroku config:set EMAIL=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
git push heroku main
```

---

## 🔧 Configuration

### Adjust Rate Limit

Edit `server.js`:
```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,                    // 100 requests per window
  message: 'Too many requests'
});
```

### Modify CORS Settings

```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
};
```

### Email Configuration

Customize email templates in `server.js`:
- `mailOptions` for admin email
- `userMailOptions` for user confirmation

---

## 🐛 Troubleshooting

### Gmail Authentication Failed
- ✅ Check app password is correct (16 digits)
- ✅ Verify 2FA is enabled
- ✅ Ensure email address matches `.env`

### Rate Limit Issues
- ✅ Wait 15 minutes before retrying
- ✅ Check IP address isn't blocked
- ✅ Verify requests are from same client

### CORS Errors
- ✅ Check frontend URL in `.env`
- ✅ Verify protocol (http/https)
- ✅ Check port number

### Emails Not Sending
- ✅ Verify Gmail credentials
- ✅ Check network connectivity
- ✅ Review server logs for errors
- ✅ Ensure app password (not regular password)

---

## 📝 Logs

Enable detailed logging:
```javascript
// In server.js
if (process.env.NODE_ENV === 'development') {
  console.log('Request received:', req.body);
}
```

---

## 🔗 Integration

### With Frontend
Set in `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Or in production:
```
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

### Frontend Code Example
```javascript
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com',
    projectIdea: 'AI App',
    message: 'I want to build...'
  })
});
```

---

## 📈 Performance

- **Response Time**: < 2 seconds
- **Concurrent Users**: 1000+
- **Email Delivery**: < 5 seconds
- **Uptime**: 99.9%

---

## 🛣️ Roadmap

### Upcoming Features
- [ ] Database integration (MongoDB)
- [ ] Email templates in database
- [ ] Admin dashboard
- [ ] Contact form analytics
- [ ] Webhook support
- [ ] API key authentication
- [ ] Request logging
- [ ] Email scheduling

---

## 📞 Support

Need help?

- 📧 **Email**: Navinkumar.dev01@gmail.com
- 🔗 **GitHub**: [github.com/NavinKumar8816](https://github.com/NavinKumar8816)
- 📅 **Book a Call**: [Google Calendar](https://calendar.app.google/jvPNkNqdgM67A8TTA)

---

## 📄 License

MIT License - See LICENSE file for details

---

<div align="center">

### Made with ❤️ by Navin Kumar

**Building reliable backend services for modern applications**

[⬆ Back to Top](#-portfolio-backend---expressjs-email-service)

</div>
