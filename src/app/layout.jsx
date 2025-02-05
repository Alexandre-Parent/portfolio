import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import CustomCursor from '../components/common/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Alexandre Parent | Développeur Full-Stack',
    template: '%s | Alexandre Parent'
  },
  description: 'Portfolio créatif d\'un développeur web passionné par les solutions innovantes',
  keywords: 'Développement web, Freelance, Front-End, React, Next.js, TypeScript, Full-Stack',
  themeColor: '#3b82f6',
  openGraph: {
    images: '/og-image.png',
  },
  icons: {
    icon: [
      { url: '/img/icons/favicon.ico' },
      { url: '/img/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/img/icons/apple-touch-icon.png' }
    ]
  }
}
import '@fontsource/dancing-script';

export default function RootLayout({ children }) {
  return (
    <html 
      lang="fr" 
      className={`${inter.variable} ${firaCode.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/img/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/img/icons/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/img/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/img/icons/site.webmanifest" />
      </head>
      <body className="font-sans bg-white text-dark antialiased transition-colors duration-300">
      <CustomCursor />
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 overflow-x-hidden">
            <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}