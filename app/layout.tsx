import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from '@/components/providers';
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Urban Walks",
  description: "My Shoe Store Urban Walks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[90%] mx-auto`}
          >
            <Navbar />
            {children}
            <Footer />
            <SpeedInsights />
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
