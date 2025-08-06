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
    template: '%s | My Notes',
    default: 'My Notes',
  },
  description: 'My personal knowledge base for Next.js'
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
          <div className="flex flex-col min-h-screen p-6 sm:p-8 sm:max-w-screen-md sm:mx-auto 2xl:max-w-screen-xl">
            <header className="flex justify-between shrink-0">
              <h1 className="text-3xl font-semibold lg:text-4xl">Notes</h1>
              <ThemeToggle />
            </header>
            <div className="mt-2 -translate-x-2">
              <AppMenu />
            </div>
            <div className="flex-grow">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
