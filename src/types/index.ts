export interface User {
  id: string;
  email: string;
  name: string;
  avatar_url?: string;
  created_at: string;
}

export interface HealthData {
  id: string;
  user_id: string;
  bmi?: number;
  weight: number;
  height: number;
  water_intake: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  image_url?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface DietPlan {
  id: string;
  user_id: string;
  name: string;
  duration_days: number;
  meals: Meal[];
  created_at: string;
}

export interface Meal {
  id: string;
  name: string;
  ingredients: string[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}
