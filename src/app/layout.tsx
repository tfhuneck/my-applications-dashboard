import "./styles/globals.css";
import { cn } from "@/lib/utils"
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next";
import { Header } from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Applicationd Dashboard",
  description: "Timothy Huneck Job Application management dashboard",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
