/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Controle de projetos',
  description: 'Desenvolvido por Marcelo Moura - Curso de férias / Java COTI Informática',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
        {children}       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}




