# AI-Powered Health Website for India 🏥

A complete production-ready AI-powered health website focused on Liver Detox, Alcohol Recovery, Fatty Liver, Diet Plans, Yoga, and Health Tools with AI Chat Assistant.

## Features ✨

- **AI Liver Health Assistant** - Chat with AI for health guidance
- **BMI Calculator** - Calculate and track BMI
- **Fatty Liver Risk Checker** - Assess fatty liver risk
- **Water Intake Calculator** - Daily water intake recommendations
- **Diet Planner** - AI-powered personalized diet plans
- **Yoga Section** - Guided yoga routines for liver health
- **Alcohol Recovery Tracker** - Track recovery progress
- **Progress Dashboard** - Monitor health metrics
- **Blog System** - Health articles and guides
- **Admin Panel** - Content management
- **User Authentication** - Secure login/signup
- **Dark/Light Mode** - Theme switching
- **Responsive Design** - Mobile-first approach
- **Hindi Support** - Multi-language support
- **SEO Optimized** - Better search visibility

## Tech Stack 🛠️

### Frontend
- **Next.js 15** - React framework
- **React** - UI library
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **next-i18n-router** - Internationalization

### Backend
- **Node.js + Express** - Server framework
- **Supabase** - Database and Auth
- **Cloudinary** - Image management
- **OpenAI API** - AI Chat
- **Google Gemini API** - Alternative AI
- **JWT** - Authentication

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **GitHub** - Version control

## Project Structure 📁

```
health-website/
├── frontend/
│   ├── app/
│   │   ├── [lang]/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── admin/
│   │   │   ├── dashboard/
│   │   │   ├── blog/
│   │   │   ├── tools/
│   │   │   ├── yoga/
│   │   │   └── auth/
│   │   ├── api/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── forms/
│   │   └── shared/
│   ├── lib/
│   ├── styles/
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── next.config.js
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   ├── utils/
│   │   ├── config/
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
├── database/
│   ├── schema.sql
│   ├── migrations/
│   └── seeds/
├── README.md
├── .gitignore
└── deployment/
    ├── vercel.json
    ├── render.yaml
    └── deployment-guide.md
```

## Installation 🚀

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- GitHub account
- Supabase account
- Vercel account
- Render account
- OpenAI API key
- Google Gemini API key
- Cloudinary account

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Database Setup

1. Create Supabase project
2. Run SQL schema from `database/schema.sql`
3. Update connection string in `.env`

## Environment Variables 🔐

See `.env.example` files in frontend and backend directories.

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
```

### Backend (.env)
```
DATABASE_URL=postgresql://...
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
GEMINI_API_KEY=your_gemini_key
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

## Deployment 🌐

### Deploy Frontend to Vercel

1. Push to GitHub
2. Connect GitHub repo to Vercel
3. Set environment variables
4. Deploy automatically

### Deploy Backend to Render

1. Push backend to GitHub
2. Create Web Service on Render
3. Connect GitHub repo
4. Set environment variables
5. Deploy

See `deployment/deployment-guide.md` for detailed instructions.

## API Endpoints 📡

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/profile` - Get user profile

### Health Tools
- `POST /api/tools/bmi` - Calculate BMI
- `POST /api/tools/fatty-liver` - Check fatty liver risk
- `POST /api/tools/water-intake` - Calculate water intake
- `GET /api/tools/diet-plans` - Get diet plans
- `POST /api/tools/diet-plans` - Create diet plan

### AI Chat
- `POST /api/chat/message` - Send message to AI
- `GET /api/chat/history` - Get chat history

### Blog
- `GET /api/blog/posts` - Get all posts
- `GET /api/blog/posts/:id` - Get single post
- `POST /api/blog/posts` - Create post (Admin)
- `PUT /api/blog/posts/:id` - Update post (Admin)
- `DELETE /api/blog/posts/:id` - Delete post (Admin)

### Admin
- `GET /api/admin/users` - Get all users
- `GET /api/admin/stats` - Get statistics
- `POST /api/admin/content` - Manage content

## Features in Detail 🎯

### AI Chat Assistant
- Liver health specific knowledge base
- Personalized recommendations
- Multi-language support
- Chat history saved

### Health Calculators
- BMI with health category
- Fatty liver risk assessment
- Water intake recommendations
- Calorie tracker
- Macronutrient calculator

### Diet Planning
- AI-generated personalized diet plans
- Nutritional data
- Recipe suggestions
- Meal tracking
- Dietary preference support

### Yoga Section
- Guided yoga routines
- Video demonstrations
- Duration and difficulty levels
- Benefits explanation
- Progress tracking

### Recovery Tracker
- Alcohol recovery milestones
- Health improvement tracking
- Daily insights
- Recovery statistics
- Community support

## Admin Features 👨‍💼

- User management
- Blog post creation/editing
- Content moderation
- Analytics dashboard
- Health data management
- Report generation

## Security 🔒

- JWT authentication
- Password hashing
- HTTPS only
- CORS protection
- Rate limiting
- SQL injection prevention
- XSS protection
- CSRF protection

## Performance ⚡

- Next.js SSR/SSG
- Image optimization
- Code splitting
- Caching strategies
- CDN integration
- Database indexing
- API response optimization

## SEO 📈

- Meta tags
- Sitemap generation
- robots.txt
- Structured data
- Open Graph
- Twitter cards
- Canonical URLs

## Languages 🌍

- **English** (Default)
- **Hindi** (हिंदी)

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing 🤝

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## License 📄

MIT License - See LICENSE file

## Support 💬

For support, contact: support@healthwebsite.com

## Roadmap 🗺️

- [ ] Mobile app (React Native)
- [ ] Wearable integration
- [ ] Advanced health analytics
- [ ] Telehealth integration
- [ ] Community features
- [ ] More languages
- [ ] Machine learning models

## Authors ✍️

Created for health-conscious individuals in India.

---

**Last Updated**: 2026
**Version**: 1.0.0
