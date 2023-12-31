import { StoreProvider } from '@/store/StoreProvider'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'PhoneShop',
    description: 'Учебный сайт с магазином телефонов',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="wrapper">
                    <StoreProvider>
                        <Header />
                        <div className="main">
                            <div className="container">
                                {children}
                            </div>
                        </div>
                        <Footer />
                    </StoreProvider>
                </div>
                <div id="drop-down" />
                <div id="modal" />
            </body>
        </html>
    )
}
