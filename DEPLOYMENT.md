# Backend Deployment Guide

## Deploy to Render (Recommended - Free)

1. **Push the latest code to GitHub** (already done)

2. **Go to [Render.com](https://render.com)** and sign up/login with GitHub

3. **Create a New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `0xJape/jalelprince_portfolio`
   - Click "Connect"

4. **Configure the service**:
   - **Name**: `portfolio-backend`
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Runtime**: `Node`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Plan**: Select "Free"

5. **Add Environment Variables**:
   Click "Advanced" → "Add Environment Variable"
   
   Add these three variables:
   ```
   NODE_ENV = production
   MONGODB_URI = mongodb+srv://jalelprincegayo_db_user:gayojalelprince21@heart1.oua4fkx.mongodb.net/?retryWrites=true&w=majority&appName=Heart1
   GEMINI_API_KEY = AIzaSyCMYRW9i2buDcE-t4tog7swLkRfXCHQ7g4
   ```

6. **Click "Create Web Service"** - Wait 2-3 minutes for deployment

7. **Copy your backend URL** - Will be something like:
   `https://portfolio-backend-xxxx.onrender.com`

8. **Update Vercel Environment Variable**:
   - Go to your Vercel project settings
   - Navigate to "Settings" → "Environment Variables"
   - Add: `REACT_APP_API_URL` = `https://your-render-url.onrender.com/api`
   - Redeploy the frontend

9. **Seed the database** (one-time):
   - In Render dashboard, go to your service
   - Click "Shell" tab
   - Run: `cd server && node seed.js`

---

## Alternative: Deploy to Railway

1. Go to [Railway.app](https://railway.app) → Sign in with GitHub
2. Click "New Project" → "Deploy from GitHub repo"
3. Select `0xJape/jalelprince_portfolio`
4. Add environment variables (same as above)
5. Settings → Change start command to: `cd server && npm start`
6. Settings → Change root directory to: `server`
7. Copy the generated URL
8. Update `REACT_APP_API_URL` in Vercel

---

## After Backend Deployment

Once your backend is deployed and you have the URL:

1. Update Vercel with the backend URL
2. Redeploy your Vercel frontend
3. Your website will now show all data and the chatbot will work!

**Note**: Free tier backends may "sleep" after 15 minutes of inactivity. First request might take 30 seconds to wake up.
