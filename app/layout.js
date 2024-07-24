import '@/styles/globals.css'
import { inter } from '@/components/ui/fonts'

export const metadata = {
  title: 'AmChiwa - Landing Page',
  description: 'This is my landing page with Next.js 14',
  keywords: 'nextjs, landing page, tailwindcss, nextjs 14',
  author: 'AmChiwa',
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
