import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Inter } from 'next/font/google';
import "../globals.css"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ISG admin',
  description: 'ISG admin dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="admin-layout">
          <Navbar />
          <div className="admin-content">
            <Sidebar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}