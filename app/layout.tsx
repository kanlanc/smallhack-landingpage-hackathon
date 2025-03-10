import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Small Model Hack',
  description: 'Small Model Hack',
  generator: 'Small Model Hack',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
