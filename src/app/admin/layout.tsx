import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Inter } from 'next/font/google';
import "../globals.css"
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./components/ThemeProvider";
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
      <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={true}
          storageKey='dashboard-theme'
        >
        <div>
          <Navbar />
          <div className="flex">
            <div className="hidden md:block h-[100vh] w-[300px]">
            <Sidebar />
            </div>
        
            <main>{children}</main>
          </div>
        </div>
        <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  )
}