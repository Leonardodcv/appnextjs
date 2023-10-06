import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mi Tienda con Nextjs',
  description: 'Descripcion',
  keywords: "tienda, online, ecommerce",
}

const roboto = Roboto({
  weight: ["300", "400","500","700"],
  styles: ["italic","normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
