import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/navbar'
import { Oswald } from '@next/font/google'

const oswald = Oswald({
  subsets: ['cyrillic'],
  variable: '--font-oswald'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${oswald.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
