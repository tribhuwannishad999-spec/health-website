# Deployment Guide - Health Website India

## Prerequisites

- Node.js 18+
- npm or yarn
- Git
- GitHub account
- Vercel account (for frontend)
- Render account (for backend)
- Supabase account
- OpenAI API key
- Google Gemini API key
- Cloudinary account

## Frontend Deployment (Vercel)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select your GitHub repository
4. Configure environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_API_URL` (backend URL)
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
5. Click "Deploy"

## Backend Deployment (Render)

### Step 1: Create Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: health-website-backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free (for testing) or Starter (for production)

### Step 2: Set Environment Variables

Add these to Render:
```
PORT=5000
NODE_ENV=production
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_api_key
GEMINI_API_KEY=your_api_key
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=your_name
FRONTEND_URL=your_vercel_url
```

### Step 3: Deploy

Click "Deploy Web Service"

## Database Setup (Supabase)

### Step 1: Create Project

1. Go to [Supabase](https://supabase.com)
2. Click "New Project"
3. Select your organization
4. Configure project settings
5. Wait for project to initialize

### Step 2: Run SQL Schema

1. Go to SQL Editor
2. Create a new query
3. Copy and paste content from `database/schema.sql`
4. Run the query

### Step 3: Seed Data (Optional)

1. Create another query
2. Copy and paste content from `database/seeds.sql`
3. Run the query

## Domain Configuration

### Vercel Domain

1. Go to Project Settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Render Domain

1. Go to Web Service Settings
2. Click "Custom Domain"
3. Add your domain
4. Update DNS records

## CI/CD Pipeline

Both Vercel and Render support automatic deployments from GitHub:

- Commits to `main` branch → Auto deploy
- Pull requests → Preview deployments
- Rollback → One-click rollback to previous version

## Monitoring and Logs

### Vercel
- Logs available in Deployments tab
- Analytics in Analytics tab
- Performance monitoring included

### Render
- Real-time logs in Service Dashboard
- Error tracking and alerts
- Performance metrics

## Production Checklist

- [ ] Environment variables configured
- [ ] Database backups enabled
- [ ] SSL/HTTPS enabled
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Error monitoring setup
- [ ] Analytics configured
- [ ] Email notifications enabled
- [ ] Database indices created
- [ ] API documentation published
- [ ] Team access configured

## Troubleshooting

### Backend not connecting
- Check DATABASE_URL in environment variables
- Verify Supabase firewall allows connections
- Check Render logs for errors

### Frontend deployment fails
- Check build logs in Vercel
- Verify all environment variables set
- Check for TypeScript errors: `npm run type-check`

### Database connection issues
- Verify connection string format
- Check Supabase project status
- Verify network access rules

## Support

For deployment help:
- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)
- [Supabase Docs](https://supabase.com/docs)
