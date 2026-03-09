import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Navin Kumar - AI Engineer & Full Stack Developer',
  description: 'AI Engineer & Full Stack Developer. I build AI-powered products that turn ideas into real-world intelligent systems. Expertise in RAG, LLMs, and full-stack development.',
  keywords: ['AI Engineer', 'Full Stack Developer', 'LLM', 'RAG', 'AI Products', 'Web Development'],
  authors: [{ name: 'Navin Kumar' }],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png?v=2',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png?v=2',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.ico?v=2',
      },
    ],
    apple: '/apple-touch-icon.png?v=2',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://navin-kumar.dev',
    siteName: 'Navin Kumar',
    title: 'Navin Kumar - AI Engineer & Full Stack Developer',
    description: 'I build AI-powered products that turn ideas into real-world intelligent systems.',
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#ff006e',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
