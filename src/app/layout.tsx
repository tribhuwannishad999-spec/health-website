import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Health Website India - AI Health Assistant',
  description: 'AI-powered health website for liver health, diet plans, and wellness',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Health Website India',
    description: 'AI-powered health assistant',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
