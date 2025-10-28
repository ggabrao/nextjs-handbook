import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppMenu } from "@/components/app-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js Handbook',
    default: 'Next.js Handbook',
  },
  description: 'Summarized notes and practical examples about Next.js'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen p-6 sm:p-8 sm:max-w-screen-md sm:mx-auto 2xl:max-w-screen-lg">
            <header className="flex justify-between shrink-0">
              <h1 className="text-2xl font-semibold lg:text-4xl">Next.js Handbook</h1>
              <ThemeToggle />
            </header>
            <div className="mt-2 -translate-x-2">
              <AppMenu />
            </div>
            <span className="text-destructive text-sm lg:text-base italic font-semibold">Note: Built with Next.js 15 - I&apos;ll be exploring the new Next.js 16 changes soon.</span>
            <div className="flex-grow">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
