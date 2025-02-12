import "./globals.css"
import { Poppins, Playfair_Display, Nunito, Quicksand, Lora } from "next/font/google"
import type React from "react" // Import React

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] })
const nunito = Nunito({ subsets: ["latin"], weight: ["300", "400"] })
const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "500"] })
const lora = Lora({ subsets: ["latin"], weight: ["400", "500"] })

export const metadata = {
  title: "Your Name - Software Developer Portfolio",
  description: "A showcase of my work and skills as a software developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

