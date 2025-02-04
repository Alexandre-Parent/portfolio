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
}
import '@fontsource/dancing-script';

export default function RootLayout({ children }) {
  return (
    <html 
      lang="fr" 
      className={`${inter.variable} ${firaCode.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-white text-dark antialiased transition-colors duration-300">
      <CustomCursor />
        {/* Structure principale */}
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