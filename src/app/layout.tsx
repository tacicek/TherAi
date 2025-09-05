import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ther-AI - Revolutionary Healthcare AI Solutions',
  description: 'Leading the future of healthcare with advanced AI solutions for medical professionals. Improve diagnostics, enhance patient care, and transform healthcare delivery.',
  keywords: 'AI, healthcare, medical AI, diagnostics, machine learning, healthcare technology',
  authors: [{ name: 'Ther-AI Team' }],
  openGraph: {
    title: 'Ther-AI - Revolutionary Healthcare AI Solutions',
    description: 'Leading the future of healthcare with advanced AI solutions for medical professionals.',
    url: 'https://ther-ai.com',
    siteName: 'Ther-AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ther-AI - Revolutionary Healthcare AI Solutions',
    description: 'Leading the future of healthcare with advanced AI solutions for medical professionals.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased transition-colors duration-300`} data-theme="dark">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}