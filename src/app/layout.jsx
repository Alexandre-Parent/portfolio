import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'

// Configuration des polices Google optimisées
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
  keywords: 'Développement web, React, Next.js, TypeScript, Full-Stack',
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
        {/* Structure principale */}
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>

        {/* Scripts analytiques (exemple) */}
        <script
          async
          src="https://analytics.example.com/script.js"
          data-website-id="XXXXXXXX"
        />
      </body>
    </html>
  )
}