import './globals.css'
import { Inter } from 'next/font/google'
import SearchBar from '@/components/SearchBar/SearchBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recipe Revive',
  description: 'Find all your favorite recipes',
}

export default function RootLayout({ children, isHomePage = false }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {isHomePage ? (
          <div> {/* Render component for home page */}
            {children}
          </div>
        ) : (
          <div> {/* Render component for other pages */}
            <div className='mx-auto max-w-[1000px] relative mb-16'> {/* Adjust the nav size here, I pasted the same from home */}
              <SearchBar /> 
            </div>
            {children}
          </div>
        )}
      </body>
    </html>
  )
}
