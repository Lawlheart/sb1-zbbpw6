import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import { Hexagon } from 'lucide-react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-honey-50 text-beehive-900 relative">
      <div className="honeycomb-bg absolute inset-0 z-0 opacity-10"></div>
      <Toaster position="top-right" />
      <header className="bg-honey-600 shadow relative z-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center text-beehive-100 hover:text-white">
            <Hexagon className="h-8 w-8 mr-2" />
            <h1 className="text-3xl font-bold font-honey">A11y Hive</h1>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className={`text-beehive-100 hover:text-white ${router.pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
              </li>
              <li>
                <Link href="/journeys" className={`text-beehive-100 hover:text-white ${router.pathname === '/journeys' ? 'font-bold' : ''}`}>Journeys</Link>
              </li>
              <li>
                <Link href="/audits" className={`text-beehive-100 hover:text-white ${router.pathname === '/audits' ? 'font-bold' : ''}`}>Audits</Link>
              </li>
              <li>
                <Link href="/sites" className={`text-beehive-100 hover:text-white ${router.pathname === '/sites' ? 'font-bold' : ''}`}>Sites</Link>
              </li>
              <li>
                <Link href="/data" className={`text-beehive-100 hover:text-white ${router.pathname === '/data' ? 'font-bold' : ''}`}>Data</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 relative z-10">
        <Component {...pageProps} />
      </main>
    </div>
  )
}