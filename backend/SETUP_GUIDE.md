# Backend Setup Guide - Quick Start

## Step 1: Install Dependencies

```bash
cd backend
npm install
```

## Step 2: Gmail Configuration

### Get Your App Password:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if needed)
3. Search for **App passwords**
4. Select Mail → Windows Computer
5. Copy the **16-character password** provided

### Create .env File:

Edit `backend/.env`:

```
EMAIL=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
PORT=5000
NODE_ENV=development
```

**Example:**
```
EMAIL=navindev@gmail.com
EMAIL_PASS=abcd 1234 efgh 5678
PORT=5000
NODE_ENV=development
```

## Step 3: Start the Server

```bash
npm start
```

Expected output:
```
🚀 Server running on http://localhost:5000
📧 Contact endpoint: http://localhost:5000/api/contact
💚 Health check: http://localhost:5000/api/health
✅ Email service is ready
```

## Step 4: Test the Backend

### Option A: Using curl

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "projectIdea": "Test Project",
    "message": "This is a test message"
  }'
```

### Option B: Using Postman

1. Create new POST request
2. URL: `http://localhost:5000/api/contact`
3. Headers: `Content-Type: application/json`
4. Body:
```json
{
  "name": "Test User",
  "email": "test@example.com",
  "projectIdea": "Test Project",
  "message": "This is a test message"
}
```

## Step 5: Frontend Integration

The contact form in your portfolio has already been updated to send data to the backend.

When a user fills out the form and clicks "Send Message":
- ✅ Message sent to your Gmail inbox
- ✅ Confirmation email sent to the user
- ✅ Toast notification shows success/error

## Troubleshooting

### Issue: "Email service failed to connect"
- ❌ Check EMAIL and EMAIL_PASS in .env
- ❌ App password must be 16 characters
- ❌ 2-Step Verification must be enabled

### Issue: CORS error in browser console
- ❌ Backend server must be running on http://localhost:5000
- ❌ Check frontend is sending to correct URL

### Issue: Port 5000 already in use
- ❌ Change PORT in .env to 5001 or 5002
- ❌ Or stop the process using port 5000

## Deployment Checklist

Before deploying to production:

- [ ] Update .env with production email credentials
- [ ] Change NODE_ENV to production
- [ ] Update frontend API URL to production server
- [ ] Set environment variables on hosting platform
- [ ] Use environment variables, not hardcoded values
- [ ] Enable HTTPS for production

## What Happens When User Submits Form

1. **Frontend** sends form data to `http://localhost:5000/api/contact`
2. **Backend** validates the data
3. **Backend** sends admin email to your Gmail inbox
4. **Backend** sends confirmation email to user
5. **Frontend** shows success toast notification
6. **Frontend** clears the form

## Support

If you encounter issues:

1. Check the error message in the browser console
2. Check the backend server logs
3. Verify .env file configuration
4. Ensure backend server is running
5. Test with curl/Postman first

---

**All set!** 🎉 Your contact form is now connected to the backend.
