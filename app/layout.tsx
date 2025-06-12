'use client'

import { useEffect } from 'react'
import type { Metadata } from 'next'
import './globals.css'
import posthog from '@/lib/posthog'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    // Optional: capture a test event
    posthog.capture('layout_loaded')
  }, [])

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
