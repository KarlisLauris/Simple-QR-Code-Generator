import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple QR Code Generator',
  description: 'Created using Next.js and react-qr-code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../app/icon.ico"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
