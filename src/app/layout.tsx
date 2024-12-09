import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Providers from '@/app/providers'
import { cn } from '../lib/utils'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Moodies',
  description: 'moodies',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(`${poppins.className} antialiased`, 'dark')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
