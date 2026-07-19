'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Welcome to Health Website India
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
            AI-Powered Health Assistant for Liver Health, Diet Plans & Wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            title="AI Health Assistant"
            description="Chat with our AI-powered health assistant for personalized guidance"
            icon="🤖"
          />
          <FeatureCard
            title="Health Tools"
            description="BMI Calculator, Fatty Liver Risk Checker, Water Intake Calculator"
            icon="📊"
          />
          <FeatureCard
            title="Diet Planning"
            description="AI-powered personalized diet plans based on your health goals"
            icon="🍽️"
          />
          <FeatureCard
            title="Yoga & Exercise"
            description="Guided yoga routines specifically for liver health and wellness"
            icon="🧘"
          />
          <FeatureCard
            title="Recovery Tracker"
            description="Track your alcohol recovery journey with daily insights"
            icon="📈"
          />
          <FeatureCard
            title="Blog & Resources"
            description="Expert articles and health guides in English and Hindi"
            icon="📚"
          />
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Join thousands of users improving their health with our AI-powered platform
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Start Free Trial
          </button>
        </div>

        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>Counter: {count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            Increment
          </button>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
