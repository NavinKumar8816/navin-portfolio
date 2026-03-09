# Portfolio Backend - Contact Form Server

A Node.js/Express backend server for handling portfolio contact form submissions with email delivery via Gmail.

## Features

✅ Express.js REST API  
✅ Nodemailer email integration with Gmail  
✅ CORS enabled for frontend communication  
✅ Environment variables for secure credentials  
✅ Beautiful HTML email templates  
✅ Automatic confirmation email to user  
✅ Admin notification email  
✅ Input sanitization and validation  
✅ Error handling and logging  

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gmail account with App Password enabled

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **App passwords**
4. Select "Mail" and "Windows Computer"
5. Copy the generated 16-character password

### 3. Set Environment Variables

Create a `.env` file in the `backend` folder:

```
EMAIL=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
PORT=5000
NODE_ENV=development
```

**⚠️ Important:** Never commit `.env` to version control. It's already in `.gitignore`.

### 4. Start the Server

```bash
npm start
```

You should see:
```
🚀 Server running on http://localhost:5000
📧 Contact endpoint: http://localhost:5000/api/contact
💚 Health check: http://localhost:5000/api/health
✅ Email service is ready
```

## API Endpoints

### POST /api/contact

Send a contact form submission.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "projectIdea": "Build a mobile app",
  "message": "I have an exciting project idea..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully! I will get back to you soon."
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "error": "Please provide name, email, and message"
}
```

### GET /api/health

Health check endpoint to verify server is running.

**Response:**
```json
{
  "status": "Server is running"
}
```

## Frontend Integration

### React Example

Update your contact form to send data to the backend:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
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

    const data = await response.json()

    if (data.success) {
      toast({
        description: '✅ Message sent successfully!',
      })
      setFormData({ name: '', email: '', message: '', projectIdea: '' })
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
  }
}
```

## Troubleshooting

### Email not sending?

1. **Check credentials:** Verify `EMAIL` and `EMAIL_PASS` in `.env`
2. **App Password:** Make sure you're using the 16-character app password, not your regular Gmail password
3. **2-Step Verification:** Ensure it's enabled on your Gmail account
4. **Less secure apps:** If using less secure app passwords, check Gmail settings

### CORS errors?

- Ensure `CORS` is enabled in `server.js`
- Check frontend is sending requests to `http://localhost:5000`

### Port already in use?

Change `PORT` in `.env` file to an available port (e.g., 5001, 5002)

## Deployment

When deploying to production:

1. Update `.env` with production email credentials
2. Change `NODE_ENV` to `production`
3. Update frontend API URL to production server URL
4. Use a service like Heroku, Vercel, or AWS
5. Set environment variables on the hosting platform

## Email Content

### Admin Email
- Receives detailed submission with all form fields
- Shows sender's email as reply-to
- Formatted HTML template for readability

### User Email
- Automatic confirmation email
- Shows their message for reference
- Professional thank you message

## Project Structure

```
backend/
├── server.js           # Main Express server
├── package.json        # Dependencies
├── .env               # Environment variables (not in git)
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## License

This project is open source and available under the ISC license.
