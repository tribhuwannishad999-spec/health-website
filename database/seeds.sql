-- Seed data for development

-- Insert demo blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, category, published, view_count, published_at)
VALUES 
  ('Understanding Liver Health', 'understanding-liver-health', 
   'Liver health is crucial for overall wellness. This comprehensive guide explains...', 
   'Learn about liver health and how to maintain it',
   'Health',
   true,
   150,
   NOW()),
  ('Benefits of Yoga for Recovery', 'benefits-yoga-recovery',
   'Yoga has been proven to aid in alcohol recovery. Regular practice can help...',
   'Discover how yoga supports your recovery journey',
   'Yoga',
   true,
   200,
   NOW()),
  ('Nutrition Guide for Liver Health', 'nutrition-guide-liver',
   'A healthy diet plays a vital role in liver function. Here are the best foods...',
   'Essential nutrients for optimal liver health',
   'Nutrition',
   true,
   180,
   NOW());

-- Insert demo yoga routines
INSERT INTO yoga_routines (name, description, duration_minutes, difficulty, benefits, poses)
VALUES
  ('Morning Liver Detox', 'A gentle morning routine to stimulate liver function', 20, 'Beginner', 
   ARRAY['Improved digestion', 'Increased energy', 'Better circulation'],
   ARRAY['Child\'s Pose', 'Cat-Cow Stretch', 'Warrior Pose']),
  ('Evening Relaxation', 'Calming poses to prepare your body for rest', 30, 'Beginner',
   ARRAY['Better sleep', 'Stress relief', 'Muscle relaxation'],
   ARRAY['Downward Dog', 'Corpse Pose', 'Pigeon Pose']),
  ('Power Flow', 'Dynamic sequence to build strength and stamina', 45, 'Intermediate',
   ARRAY['Increased strength', 'Better balance', 'Mental clarity'],
   ARRAY['Plank', 'Warrior III', 'Handstand']);
