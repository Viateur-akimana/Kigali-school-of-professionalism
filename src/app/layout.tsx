import { Inter } from 'next/font/google'
import "./globals.css"
import { Providers } from './Providers'

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
                    {children}
                </Providers>
            </body>
        </html>
    )
}