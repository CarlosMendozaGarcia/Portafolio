import type { Metadata } from "next";
import Image from "next/image"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carlos Mendoza - Portafolio",
  description: "Portafolio para mostrar proyectos, tecnologias e información profesional",
  keywords:["nextjs",'Carlos','Andres', 'Mendoza','Garcia', 'portafolio'],
  authors:[{name:'Carlos Andres Mendoza Garcia'},],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <Image src="/Logo.png" alt="logo OrionByPixel" width={50} height={50} className={styles.logo}/>
            <ul className={styles.list}>
              <li><a href="#Aboutme">Sobre mi</a></li>
              <li><a href="#Technologies">Tecnologias</a></li>
              <li><a href="#Projects">Proyectos</a></li>
            </ul>
            <a href="./Carlos_Mendoza_C_V_.pdf" className={styles.button}>GET MY CV</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
