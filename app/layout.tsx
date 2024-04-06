import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Navbarmobile } from "@/components/Navbar-mobile";
import { ThemeProvider } from "@/components/Theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr' suppressHydrationWarning>
    <body id='body' className={inter.className}>
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <div className='fixed top-0 z-50 '>
      <Navbarmobile />
      <Navbar />
        </div>
      {children}
      </ThemeProvider>
    </body>
  </html>
  );
}
