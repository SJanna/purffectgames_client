import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Purffect Games',
  description: 'Video games store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
    </html>
  )
}
