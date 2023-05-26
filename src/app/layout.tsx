import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nick Wydra',
  description: 'Digital business card, created by Next',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"></link>
      </head>
      <body className={inter.className} style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
