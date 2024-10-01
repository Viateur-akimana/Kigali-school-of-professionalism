import { Inter } from 'next/font/google'
import "../../app/globals.css"
import { Providers } from '../Providers'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'ISG',
    description: 'ISG website',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-grow mb-4 mt-1">{children}</main>
                        <Footer />
                    </div>

                </Providers>
            </body>
        </html>
    )
}