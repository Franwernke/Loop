import { Inter } from 'next/font/google'
import '../styles/main.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Loop',
  description: 'Vias Impecáveis, Ads Imbatíveis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
