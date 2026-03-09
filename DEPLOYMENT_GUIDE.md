# Portfolio Contact Form - Deployment Guide

## ✅ What Has Been Improved

### Backend (Express.js)
✅ Dynamic port configuration: `const PORT = process.env.PORT || 5000`
✅ Rate limiting installed: `express-rate-limit`
✅ Rate limiter configured: 100 requests per 15 minutes
✅ Middleware applied globally to protect all endpoints
✅ Includes admin and user confirmation emails via Nodemailer

### Frontend (Next.js)
✅ Dynamic API URL: Uses `process.env.NEXT_PUBLIC_API_URL` with fallback to `http://localhost:5000`
✅ Environment variables properly configured
✅ Works in both local development and production

## 🚀 Local Development Setup

### Backend (.env file)
```
EMAIL=your-gmail@gmail.com
EMAIL_PASS=your-16-digit-app-password
PORT=5000
NODE_ENV=development
```

### Frontend (.env.local file - ALREADY CREATED)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Start Backend:**
```bash
cd backend
npm start
```

**Start Frontend:**
```bash
cd .. (back to portfolio root)
npm run dev
```

## 🌐 Production Deployment (Vercel + Render)

### Backend (Deploy to Render.com)
1. Upload your backend folder to GitHub
2. Go to render.com and create a new Web Service
3. Connect your GitHub repository
4. Set environment variables in Render:
   - `EMAIL`: your-gmail@gmail.com
   - `EMAIL_PASS`: your-16-digit-app-password
   - `PORT`: 5000 (or leave empty for auto)
   - `NODE_ENV`: production
5. Deploy! You'll get a URL like: `https://navin-portfolio.onrender.com`

### Frontend (Deploy to Vercel)
1. Upload your frontend to GitHub
2. Go to vercel.com and create new project from GitHub
3. Set environment variables in Vercel Project Settings:
   - `NEXT_PUBLIC_API_URL`: https://navin-portfolio.onrender.com
4. Deploy!

## 📊 Features Summary

| Feature | Local | Production |
|---------|-------|-----------|
| Dynamic API URL | ✅ http://localhost:5000 | ✅ https://your-backend.com |
| Rate Limiting | ✅ 100 req/15min | ✅ 100 req/15min |
| Email Service | ✅ Nodemailer/Gmail | ✅ Nodemailer/Gmail |
| Security | ✅ CORS enabled | ✅ CORS enabled |
| Admin Notification | ✅ Yes | ✅ Yes |
| User Confirmation | ✅ Yes | ✅ Yes |

## 🔒 Security Features

✅ **Rate Limiting**: Prevents spam - max 100 requests per 15 minutes per IP
✅ **CORS**: Restricts API access to your domain only
✅ **Input Validation**: Both frontend and backend validation
✅ **Escape HTML**: Prevents XSS attacks in email templates
✅ **Error Handling**: Proper error messages without exposing sensitive info

## 📝 Testing

### Local Test Commands

**Health Check:**
```bash
curl http://localhost:5000/api/health
```

**Contact Form Test:**
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

## ✨ Next Steps

1. ✅ Backend running with rate limiting
2. ✅ Frontend configured with .env.local
3. Test the contact form at http://localhost:3000
4. Update your backend URL when deploying to production
5. Update frontend .env variables for production

All set! Your contact form is now production-ready! 🚀
