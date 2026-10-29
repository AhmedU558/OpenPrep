import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { appName } from '@/lib/env';
import './globals.css';

export const metadata: Metadata = {
  title: { default: appName(), template: `%s · ${appName()}` },
  description: 'Free, open-source exam practice: question bank, timed blocks, explanations, flashcards, analytics and a study planner.',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

// Applies the saved theme and text size before first paint (no flash). Values are validated, never injected raw.
const prefsScript = `try{var t=localStorage.getItem('op-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;var f=+localStorage.getItem('op-font');if(f>=12&&f<=24)document.documentElement.style.setProperty('--font-size',f+'px')}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prefsScript }} />
      </head>
      <body className="min-h-screen font-sans">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
