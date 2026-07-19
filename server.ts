import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'Server is running' });
});

// Health Tools Routes
app.post('/api/tools/bmi', (req: Request, res: Response) => {
  const { weight, height } = req.body;
  if (!weight || !height) {
    return res.status(400).json({ error: 'Weight and height are required' });
  }
  const bmi = weight / (height * height);
  res.json({ bmi: parseFloat(bmi.toFixed(2)) });
});

app.post('/api/tools/fatty-liver', (req: Request, res: Response) => {
  const { alcohol_consumption, weight, height, age } = req.body;
  // Simple risk calculation
  let risk = 'Low';
  if (alcohol_consumption > 10) risk = 'High';
  else if (alcohol_consumption > 5) risk = 'Medium';
  res.json({ risk, recommendation: 'Consult a doctor for detailed assessment' });
});

app.post('/api/tools/water-intake', (req: Request, res: Response) => {
  const { weight, activity_level } = req.body;
  let liters = (weight * 0.033);
  if (activity_level === 'high') liters += 1;
  res.json({ recommended_liters: parseFloat(liters.toFixed(2)) });
});

// AI Chat Route
app.post('/api/chat/message', (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  // Placeholder response
  res.json({ response: 'Thank you for your message. This is a demo response.' });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
